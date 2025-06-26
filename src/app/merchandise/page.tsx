"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Star, ShoppingCart, Filter, Plus, Minus, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/ui/section-heading"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion"

interface MerchandiseItem {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: string
  sizes?: string[]
  colors?: string[]
  inStock: boolean
  featured?: boolean
  rating?: number
  reviews?: number
}

const merchandiseData: MerchandiseItem[] = [
  {
    id: "doumar-logo-tee",
    name: "Doumar's Classic Logo T-Shirt",
    description: "Comfortable cotton tee featuring our iconic logo. Perfect for showing your love for Doumar's!",
    price: 24.99,
    images: ["/images/merchandise/logo-tee.jpg", "/images/merchandise/logo-tee-back.jpg"],
    category: "apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Red", "White", "Navy"],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: "vintage-baseball-cap",
    name: "Vintage Baseball Cap",
    description: "Adjustable baseball cap with embroidered Doumar's logo. Classic style meets comfort.",
    price: 19.99,
    images: ["/images/merchandise/baseball-cap.jpg"],
    category: "apparel",
    colors: ["Navy", "Red", "Khaki"],
    inStock: true,
    rating: 4.6,
    reviews: 83
  },
  {
    id: "waffle-cone-mug",
    name: "Waffle Cone Coffee Mug",
    description: "16oz ceramic mug shaped like our famous waffle cone. Microwave and dishwasher safe.",
    price: 16.99,
    images: ["/images/merchandise/waffle-mug.jpg"],
    category: "drinkware",
    inStock: true,
    featured: true,
    rating: 4.9,
    reviews: 204
  },
  {
    id: "doumar-hoodie",
    name: "Doumar's Heritage Hoodie",
    description: "Cozy pullover hoodie with vintage-inspired design. Perfect for Norfolk's chilly evenings.",
    price: 49.99,
    images: ["/images/merchandise/heritage-hoodie.jpg"],
    category: "apparel",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Navy", "Burgundy"],
    inStock: true,
    rating: 4.7,
    reviews: 91
  },
  {
    id: "ice-cream-tumbler",
    name: "Insulated Ice Cream Tumbler",
    description: "20oz stainless steel tumbler keeps your drinks cold. Features our retro ice cream design.",
    price: 22.99,
    images: ["/images/merchandise/ice-cream-tumbler.jpg"],
    category: "drinkware",
    colors: ["Stainless", "Pink", "Blue"],
    inStock: true,
    rating: 4.5,
    reviews: 67
  },
  {
    id: "canvas-tote",
    name: "Doumar's Canvas Tote Bag",
    description: "Durable canvas tote bag perfect for groceries or a day at the beach. Eco-friendly choice!",
    price: 14.99,
    images: ["/images/merchandise/canvas-tote.jpg"],
    category: "accessories",
    colors: ["Natural", "Navy"],
    inStock: true,
    rating: 4.4,
    reviews: 156
  },
  {
    id: "collectible-magnet-set",
    name: "Vintage Postcard Magnet Set",
    description: "Set of 6 refrigerator magnets featuring vintage Doumar's postcards and advertisements.",
    price: 12.99,
    images: ["/images/merchandise/magnet-set.jpg"],
    category: "collectibles",
    inStock: true,
    featured: true,
    rating: 4.3,
    reviews: 89
  },
  {
    id: "kids-tee",
    name: "Kids' Doumar's T-Shirt",
    description: "Soft cotton tee for little ones. Features our friendly cone mascot design.",
    price: 18.99,
    images: ["/images/merchandise/kids-tee.jpg"],
    category: "kids",
    sizes: ["2T", "3T", "4T", "Youth S", "Youth M", "Youth L"],
    colors: ["Red", "Blue", "Pink"],
    inStock: true,
    rating: 4.7,
    reviews: 43
  }
]

const categories = [
  { id: "all", name: "All Items" },
  { id: "apparel", name: "Apparel" },
  { id: "drinkware", name: "Drinkware" },
  { id: "accessories", name: "Accessories" },
  { id: "collectibles", name: "Collectibles" },
  { id: "kids", name: "Kids" }
]

export default function MerchandisePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedItems, setSelectedItems] = useState<Record<string, { quantity: number; size?: string; color?: string }>>({})
  const { addItem } = useCart()

  const filteredItems = useMemo(() => {
    let items = merchandiseData

    if (selectedCategory !== "all") {
      items = items.filter(item => item.category === selectedCategory)
    }

    if (searchQuery) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return items
  }, [selectedCategory, searchQuery])

  const updateSelection = (itemId: string, field: 'quantity' | 'size' | 'color', value: string | number) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [field]: value
      }
    }))
  }

  const handleAddToCart = (item: MerchandiseItem) => {
    const selection = selectedItems[item.id]
    const quantity = selection?.quantity || 0
    
    if (quantity > 0) {
      const customizations: Record<string, string> = {}
      if (selection?.size) customizations.Size = selection.size
      if (selection?.color) customizations.Color = selection.color

      const menuItem = {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.images[0],
        categoryId: 'merchandise',
        categoryName: 'Merchandise'
      }

      addItem(menuItem, quantity, customizations)
      
      // Reset selection
      setSelectedItems(prev => ({ ...prev, [item.id]: { quantity: 0 } }))
    }
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-doumar-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-doumar-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <SectionHeading
              subtitle="Doumar's Merchandise"
              title="Take Home a Piece of History"
              description="Show your love for Norfolk's favorite ice cream and BBQ spot with our collection of apparel, drinkware, and collectibles."
              centered
              className="text-white [&_span]:text-primary [&_h2]:text-white [&_p]:text-gray-300"
            />
            
            <div className="mt-8 flex justify-center">
              <Badge className="bg-primary text-white text-lg px-4 py-2">
                🚚 Free shipping on orders over $50
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <motion.div
            className="mb-12 space-y-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search merchandise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white shadow-md"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-200"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Featured Items */}
          {selectedCategory === "all" && (
            <motion.section
              className="mb-16"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <SectionHeading
                subtitle="Customer Favorites"
                title="Featured Items"
                description="Our most popular merchandise that customers love"
                centered
              />
              
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                {merchandiseData.filter(item => item.featured).map((item) => (
                  <Card key={item.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">
                          {formatPrice(item.price)}
                        </span>
                        <div className="flex items-center space-x-1">
                          {renderStars(item.rating || 0)}
                          <span className="text-sm text-gray-500">({item.reviews})</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>
          )}

          {/* All Items Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="group"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  {/* Image */}
                  <div className="relative aspect-square">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {item.featured && (
                        <Badge className="bg-primary text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                      {!item.inStock && (
                        <Badge variant="secondary" className="bg-red-100 text-red-800">
                          Out of Stock
                        </Badge>
                      )}
                    </div>

                    {/* Wishlist Heart */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 w-8 h-8 bg-white/80 hover:bg-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {/* Item Info */}
                      <div>
                        <h3 className="font-semibold text-lg text-doumar-black group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">
                          {item.description}
                        </p>
                      </div>

                      {/* Rating and Price */}
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-primary">
                          {formatPrice(item.price)}
                        </div>
                        {item.rating && (
                          <div className="flex items-center space-x-1">
                            {renderStars(item.rating)}
                            <span className="text-xs text-gray-500">({item.reviews})</span>
                          </div>
                        )}
                      </div>

                      {/* Options */}
                      {(item.sizes || item.colors) && (
                        <div className="space-y-2">
                          {item.sizes && (
                            <div>
                              <label className="text-xs font-medium text-gray-700">Size:</label>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {item.sizes.map((size) => (
                                  <Button
                                    key={size}
                                    variant={selectedItems[item.id]?.size === size ? "default" : "outline"}
                                    size="sm"
                                    className="h-7 text-xs"
                                    onClick={() => updateSelection(item.id, 'size', size)}
                                  >
                                    {size}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {item.colors && (
                            <div>
                              <label className="text-xs font-medium text-gray-700">Color:</label>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {item.colors.map((color) => (
                                  <Button
                                    key={color}
                                    variant={selectedItems[item.id]?.color === color ? "default" : "outline"}
                                    size="sm"
                                    className="h-7 text-xs"
                                    onClick={() => updateSelection(item.id, 'color', color)}
                                  >
                                    {color}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Quantity and Add to Cart */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateSelection(item.id, 'quantity', Math.max(0, (selectedItems[item.id]?.quantity || 0) - 1))}
                            disabled={!selectedItems[item.id]?.quantity}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          
                          <span className="font-semibold text-sm min-w-[1.5rem] text-center">
                            {selectedItems[item.id]?.quantity || 0}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-7 w-7"
                            onClick={() => updateSelection(item.id, 'quantity', (selectedItems[item.id]?.quantity || 0) + 1)}
                            disabled={!item.inStock}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>

                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 text-white"
                          disabled={!selectedItems[item.id]?.quantity || !item.inStock}
                          onClick={() => handleAddToCart(item)}
                        >
                          <ShoppingCart className="w-3 h-3 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-12"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No items found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or category filter
              </p>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}