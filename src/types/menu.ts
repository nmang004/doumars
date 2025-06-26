export interface MenuItem {
  id: string
  category: 'Sandwiches' | 'Desserts' | 'Drinks' | 'Sides' | 'Shakes & Floats' | 'Bulk Items'
  name: string
  imageUrl?: string
  description?: string
  price?: number
  variations?: {
    name: string
    price: number
  }[]
}

