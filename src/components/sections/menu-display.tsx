"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Star, Clock, Plus, Minus } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/motion"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/contexts/cart-context"
import { MenuItem } from "@/types/menu"

// Sample menu data - this would normally come from Supabase
const menuData = {
  categories: [
    {
      id: "cones-ice-cream",
      name: "Cones & Ice Cream",
      description: "Our world-famous waffle cones and ice cream treats",
      items: [
        {
          id: "original-cone",
          name: "Original Waffle Cone",
          description: "Our world-famous waffle cone made fresh on the original 1905 machine. Choose from vanilla, chocolate, or strawberry ice cream.",
          price: 4.50,
          image: "/images/restaurant/cone-machine-operator.jpg",
          popular: true,
          allergens: ["dairy", "gluten"],
          customizations: [
            { name: "Ice Cream Flavor", options: ["Vanilla", "Chocolate", "Strawberry"], required: true },
            { name: "Toppings", options: ["Sprinkles (+$0.50)", "Hot Fudge (+$1.00)", "Whipped Cream (+$0.75)"] }
          ]
        },
        {
          id: "ice-cream-sundae",
          name: "Classic Ice Cream Sundae",
          description: "Premium ice cream topped with your choice of syrup, whipped cream, nuts, and a cherry on top.",
          price: 6.95,
          image: "/images/restaurant/ice-cream-sundae.jpg",
          allergens: ["dairy", "nuts"],
          customizations: [
            { name: "Ice Cream Flavor", options: ["Vanilla", "Chocolate", "Strawberry"], required: true },
            { name: "Syrup", options: ["Hot Fudge", "Caramel", "Strawberry"], required: true }
          ]
        },
        {
          id: "milkshake",
          name: "Hand-Spun Milkshake",
          description: "Thick and creamy milkshake made with premium ice cream and whole milk.",
          price: 5.95,
          image: "/images/restaurant/ice-cream-glass.jpg",
          allergens: ["dairy"],
          customizations: [
            { name: "Flavor", options: ["Vanilla", "Chocolate", "Strawberry", "Oreo"], required: true }
          ]
        }
      ]
    },
    {
      id: "bbq-sandwiches",
      name: "BBQ Sandwiches",
      description: "Slow-cooked barbecue made fresh daily",
      items: [
        {
          id: "bbq-pork",
          name: "BBQ Pork Sandwich",
          description: "Slow-cooked pork shoulder with our signature barbecue sauce, served on a fresh bun with coleslaw.",
          price: 8.95,
          image: "/images/food/bbq-sandwich.jpg",
          popular: true,
          allergens: ["gluten"],
          customizations: [
            { name: "Sauce Level", options: ["Mild", "Medium", "Hot"], required: true },
            { name: "Extras", options: ["Extra Sauce (+$0.50)", "Pickles", "Onions"] }
          ]
        },
        {
          id: "bbq-beef",
          name: "BBQ Beef Sandwich",
          description: "Tender slow-cooked beef brisket with our signature sauce on a fresh bun.",
          price: 9.95,
          image: "/images/food/bbq-sandwich.jpg",
          allergens: ["gluten"],
          customizations: [
            { name: "Sauce Level", options: ["Mild", "Medium", "Hot"], required: true },
            { name: "Extras", options: ["Extra Sauce (+$0.50)", "Pickles", "Onions"] }
          ]
        },
        {
          id: "bbq-combo",
          name: "BBQ Combo Sandwich",
          description: "Best of both worlds - our pork and beef combined in one delicious sandwich.",
          price: 10.95,
          image: "/images/food/bbq-sandwich.jpg",
          allergens: ["gluten"],
          customizations: [
            { name: "Sauce Level", options: ["Mild", "Medium", "Hot"], required: true }
          ]
        }
      ]
    },
    {
      id: "beverages",
      name: "Beverages",
      description: "Refreshing drinks including our famous limeade",
      items: [
        {
          id: "famous-limeade",
          name: "Famous Limeade",
          description: "Our signature limeade recipe, served ice cold and refreshing.",
          price: 3.50,
          image: "/images/restaurant/ice-cream-glass.jpg",
          popular: true,
          customizations: [
            { name: "Size", options: ["Regular", "Large (+$1.00)"], required: true }
          ]
        },
        {
          id: "sweet-tea",
          name: "Southern Sweet Tea",
          description: "Traditional Southern-style sweet tea, brewed fresh daily.",
          price: 2.95,
          image: "/images/restaurant/ice-cream-glass.jpg",
          customizations: [
            { name: "Size", options: ["Regular", "Large (+$1.00)"], required: true }
          ]
        },
        {
          id: "soft-drinks",
          name: "Soft Drinks",
          description: "Classic fountain sodas - Coca-Cola, Sprite, Orange, Root Beer.",
          price: 2.75,
          image: "/images/restaurant/ice-cream-glass.jpg",
          customizations: [
            { name: "Flavor", options: ["Coca-Cola", "Sprite", "Orange", "Root Beer"], required: true },
            { name: "Size", options: ["Regular", "Large (+$1.00)"], required: true }
          ]
        }
      ]
    },
    {
      id: "sides",
      name: "Sides",
      description: "Perfect accompaniments to your meal",
      items: [
        {
          id: "french-fries",
          name: "French Fries",
          description: "Crispy golden fries, served hot and fresh.",
          price: 3.95,
          image: "/images/food/bbq-sandwich.jpg",
          allergens: ["gluten"],
          customizations: [
            { name: "Size", options: ["Regular", "Large (+$1.50)"], required: true }
          ]
        },
        {
          id: "coleslaw",
          name: "Homemade Coleslaw",
          description: "Fresh, creamy coleslaw made with our family recipe.",
          price: 2.95,
          image: "/images/food/bbq-sandwich.jpg"
        },
        {
          id: "onion-rings",
          name: "Beer-Battered Onion Rings",
          description: "Thick-cut onion rings in a crispy beer batter.",
          price: 4.50,
          image: "/images/food/bbq-sandwich.jpg",
          allergens: ["gluten"]
        }
      ]
    }
  ]
}

const allergenColors = {
  dairy: "bg-semantic-info-light text-semantic-info",
  gluten: "bg-primary-yellow/20 text-primary-navy", 
  nuts: "bg-semantic-warning-light text-semantic-warning",
  soy: "bg-semantic-success-light text-semantic-success"
}

export function MenuDisplay() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const { addItem } = useCart()

  // Filter items based on category and search
  const filteredItems = useMemo(() => {
    let items = menuData.categories.flatMap(category => 
      category.items.map(item => ({ ...item, categoryId: category.id, categoryName: category.name }))
    )

    if (selectedCategory !== "all") {
      items = items.filter(item => item.categoryId === selectedCategory)
    }

    if (searchQuery) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return items
  }, [selectedCategory, searchQuery])

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }))
  }

  const handleAddToCart = (item: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    const quantity = quantities[item.id] || 0
    if (quantity > 0) {
      const menuItem: MenuItem = {
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image,
        popular: item.popular,
        allergens: item.allergens,
        customizations: item.customizations,
        categoryId: item.categoryId,
        categoryName: item.categoryName
      }
      addItem(menuItem, quantity)
      // Reset local quantity after adding to cart
      setQuantities(prev => ({ ...prev, [item.id]: 0 }))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-yellow/5 via-neutral-off-white to-primary-red/5">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-neutral-black to-neutral-gray-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <SectionHeading
              subtitle="Our Complete Menu"
              title="World Famous Flavors Since 1904"
              description="From our original waffle cones to slow-cooked barbecue, every item is made with the same care and quality we've maintained for over 120 years"
              centered
              className="text-white [&_span]:text-primary-yellow [&_h2]:text-white [&_p]:text-neutral-gray-light"
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <motion.div
          className="mb-8 space-y-6"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-white shadow-md text-base"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="transition-all duration-200"
              size="sm"
            >
              All Items
            </Button>
            {menuData.categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-200"
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
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
              <Card className="overflow-hidden h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-gray-100 rounded-lg">
                {/* Image */}
                <div className="relative aspect-video">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.popular && (
                      <Badge className="bg-primary text-white border border-white/50">
                        <Star className="w-3 h-3 mr-1.5" />
                        Popular
                      </Badge>
                    )}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white text-doumar-black font-bold text-lg shadow-md">
                      {formatPrice(item.price)}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="space-y-4 flex flex-col flex-grow">
                    {/* Item Info */}
                    <div className="flex-grow">
                      <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary">
                        {item.categoryName}
                      </Badge>
                      <h3 className="text-xl font-heading font-semibold text-doumar-black mb-2 group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Allergens */}
                      {item.allergens && item.allergens.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {item.allergens.map((allergen) => (
                            <Badge
                              key={allergen}
                              variant="secondary"
                              className={`text-xs font-medium ${allergenColors[allergen as keyof typeof allergenColors]}`}
                            >
                              {allergen}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 rounded-full"
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={!quantities[item.id]}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        
                        <span className="font-semibold text-xl min-w-[2.5rem] text-center">
                          {quantities[item.id] || 0}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 rounded-full"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      <Button
                        size="sm"
                        disabled={!quantities[item.id]}
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to Cart
                      </Button>
                    </div>

                    {/* Customizations Preview */}
                    {item.customizations && item.customizations.length > 0 && (
                      <div className="text-xs text-gray-500 pt-3 mt-3 border-t border-gray-100">
                        <Clock className="w-3 h-3 inline mr-1.5" />
                        Customization options available
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">
              No items found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your search query or selecting a different category to find what you&apos;re looking for.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}