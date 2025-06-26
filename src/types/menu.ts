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

