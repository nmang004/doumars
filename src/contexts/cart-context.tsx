"use client"

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { CartItem, CartState, MenuItem } from '@/types/menu'

interface CartContextType extends CartState {
  addItem: (item: MenuItem, quantity?: number, customizations?: Record<string, string>, notes?: string) => void
  removeItem: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getItemQuantity: (itemId: string) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartAction =
  | { type: 'ADD_ITEM'; payload: { item: MenuItem; quantity: number; customizations?: Record<string, string>; notes?: string } }
  | { type: 'REMOVE_ITEM'; payload: { itemId: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartState }

const TAX_RATE = 0.0575 // Virginia tax rate
const DELIVERY_FEE = 3.99

function calculateItemTotal(item: MenuItem, quantity: number, customizations?: Record<string, string>): number {
  let basePrice = item.price
  
  // Add customization costs
  if (customizations && item.customizations) {
    Object.entries(customizations).forEach(([customizationName, selectedOption]) => {
      const customization = item.customizations?.find(c => c.name === customizationName)
      if (customization) {
        // Extract price from option string like "Hot Fudge (+$1.00)"
        const priceMatch = selectedOption.match(/\+\$(\d+\.?\d*)/)
        if (priceMatch) {
          basePrice += parseFloat(priceMatch[1])
        }
      }
    })
  }
  
  return basePrice * quantity
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item, quantity, customizations, notes } = action.payload
      const existingItemIndex = state.items.findIndex(cartItem => 
        cartItem.id === item.id && 
        JSON.stringify(cartItem.selectedCustomizations) === JSON.stringify(customizations)
      )

      let newItems: CartItem[]
      
      if (existingItemIndex > -1) {
        // Update existing item
        newItems = [...state.items]
        const existingItem = newItems[existingItemIndex]
        const newQuantity = existingItem.quantity + quantity
        newItems[existingItemIndex] = {
          ...existingItem,
          quantity: newQuantity,
          itemTotal: calculateItemTotal(item, newQuantity, customizations),
          notes: notes || existingItem.notes
        }
      } else {
        // Add new item
        const cartItem: CartItem = {
          ...item,
          quantity,
          selectedCustomizations: customizations,
          itemTotal: calculateItemTotal(item, quantity, customizations),
          notes
        }
        newItems = [...state.items, cartItem]
      }

      const subtotal = newItems.reduce((sum, item) => sum + item.itemTotal, 0)
      const tax = subtotal * TAX_RATE
      const total = subtotal + tax
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        items: newItems,
        subtotal,
        tax,
        total,
        itemCount,
        deliveryFee: DELIVERY_FEE
      }
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload.itemId)
      const subtotal = newItems.reduce((sum, item) => sum + item.itemTotal, 0)
      const tax = subtotal * TAX_RATE
      const total = subtotal + tax
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        items: newItems,
        subtotal,
        tax,
        total,
        itemCount,
        deliveryFee: DELIVERY_FEE
      }
    }

    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload
      
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { itemId } })
      }

      const newItems = state.items.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity,
            itemTotal: calculateItemTotal(item, quantity, item.selectedCustomizations)
          }
        }
        return item
      })

      const subtotal = newItems.reduce((sum, item) => sum + item.itemTotal, 0)
      const tax = subtotal * TAX_RATE
      const total = subtotal + tax
      const itemCount = newItems.reduce((sum, item) => sum + item.quantity, 0)

      return {
        items: newItems,
        subtotal,
        tax,
        total,
        itemCount,
        deliveryFee: DELIVERY_FEE
      }
    }

    case 'CLEAR_CART':
      return {
        items: [],
        total: 0,
        itemCount: 0,
        tax: 0,
        subtotal: 0,
        deliveryFee: DELIVERY_FEE
      }

    case 'LOAD_CART':
      return action.payload

    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  tax: 0,
  subtotal: 0,
  deliveryFee: DELIVERY_FEE
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('doumar-cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: parsedCart })
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('doumar-cart', JSON.stringify(state))
  }, [state])

  const addItem = (
    item: MenuItem, 
    quantity: number = 1, 
    customizations?: Record<string, string>,
    notes?: string
  ) => {
    dispatch({ 
      type: 'ADD_ITEM', 
      payload: { item, quantity, customizations, notes } 
    })
  }

  const removeItem = (itemId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { itemId } })
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { itemId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getItemQuantity = (itemId: string): number => {
    return state.items.find(item => item.id === itemId)?.quantity || 0
  }

  const contextValue: CartContextType = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemQuantity
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}