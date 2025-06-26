export interface MenuItemCustomization {
  name: string
  options: string[]
  required?: boolean
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  popular?: boolean
  allergens?: string[]
  customizations?: MenuItemCustomization[]
  categoryId: string
  categoryName: string
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  items: MenuItem[]
}

export interface CartItem extends MenuItem {
  quantity: number
  selectedCustomizations?: Record<string, string>
  itemTotal: number
  notes?: string
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
  tax: number
  subtotal: number
  deliveryFee?: number
}

export interface OrderDetails {
  orderType: 'pickup' | 'delivery'
  customerInfo: {
    name: string
    email: string
    phone: string
  }
  deliveryAddress?: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  specialInstructions?: string
  paymentMethod: 'card' | 'cash'
}