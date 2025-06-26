"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus, ShoppingBag, Trash2, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, itemCount, subtotal, tax, total, updateQuantity, removeItem, clearCart } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-heading font-semibold text-doumar-black">
                  Your Order
                </h2>
                {itemCount > 0 && (
                  <Badge className="bg-primary text-white">
                    {itemCount} {itemCount === 1 ? 'item' : 'items'}
                  </Badge>
                )}
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={onClose}
                className="hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                // Empty Cart
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingCart className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-600 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    Add some delicious items from our menu to get started!
                  </p>
                  <Button 
                    asChild 
                    className="bg-primary hover:bg-primary/90"
                    onClick={onClose}
                  >
                    <Link href="/menu">Browse Menu</Link>
                  </Button>
                </div>
              ) : (
                // Cart Items
                <div className="p-6 space-y-4">
                  {items.map((item, index) => (
                    <Card key={`${item.id}-${index}`} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex space-x-4">
                          {/* Item Image */}
                          <div className="flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                          </div>

                          {/* Item Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-doumar-black truncate">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">
                                  {formatPrice(item.price)} each
                                </p>
                                
                                {/* Customizations */}
                                {item.selectedCustomizations && Object.keys(item.selectedCustomizations).length > 0 && (
                                  <div className="mt-2 space-y-1">
                                    {Object.entries(item.selectedCustomizations).map(([key, value]) => (
                                      <div key={key} className="text-xs text-gray-500">
                                        <span className="font-medium">{key}:</span> {value}
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Notes */}
                                {item.notes && (
                                  <div className="mt-2">
                                    <p className="text-xs text-gray-500">
                                      <span className="font-medium">Note:</span> {item.notes}
                                    </p>
                                  </div>
                                )}
                              </div>

                              {/* Remove Button */}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-red-50"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="font-medium text-lg min-w-[2rem] text-center">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              
                              <div className="font-semibold text-doumar-black">
                                {formatPrice(item.itemTotal)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Clear Cart Button */}
                  {items.length > 0 && (
                    <div className="pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={clearCart}
                        className="w-full text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Clear Cart
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer with totals and checkout */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4 bg-gray-50">
                {/* Order Summary */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">{formatPrice(tax)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button 
                  asChild
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                  onClick={onClose}
                >
                  <Link href="/checkout">
                    Proceed to Checkout
                  </Link>
                </Button>

                <p className="text-xs text-center text-gray-500">
                  Delivery fees will be calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}