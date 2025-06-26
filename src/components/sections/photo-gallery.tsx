"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Calendar, Camera } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { staggerContainer, staggerItem, scaleIn } from "@/lib/motion"

const galleryImages = [
  {
    id: 1,
    src: "/images/historical/1904-worlds-fair.jpg",
    title: "1904 World's Fair",
    description: "Abe Doumar at the St. Louis World's Fair where the waffle cone was born",
    year: "1904",
    category: "Historical"
  },
  {
    id: 2,
    src: "/images/restaurant/cone-machine-operator.jpg",
    title: "Original Cone Machine",
    description: "Our 1905 waffle cone machine still in operation today",
    year: "1905-Present",
    category: "Equipment"
  },
  {
    id: 3,
    src: "/images/restaurant/doumar-sign-interior.jpg",
    title: "Classic Doumar's Interior",
    description: "The iconic Doumar's signage and classic diner atmosphere",
    year: "1950s",
    category: "Interior"
  },
  {
    id: 4,
    src: "/images/restaurant/doumar-family.jpg",
    title: "The Doumar Family",
    description: "Multiple generations of the Doumar family carrying on the tradition",
    year: "2000s",
    category: "Family"
  },
  {
    id: 5,
    src: "/images/food/bbq-sandwich.jpg",
    title: "Famous BBQ Sandwich",
    description: "Our signature slow-cooked barbecue sandwich",
    year: "Present",
    category: "Food"
  },
  {
    id: 6,
    src: "/images/restaurant/ice-cream-sundae.jpg",
    title: "Ice Cream Sundae",
    description: "Classic ice cream sundae with all the fixings",
    year: "Present",
    category: "Food"
  },
  {
    id: 7,
    src: "/images/restaurant/ice-cream-glass.jpg",
    title: "Signature Limeade",
    description: "Our famous limeade served in a classic glass",
    year: "Present",
    category: "Beverages"
  }
]

const categories = ["All", "Historical", "Family", "Food", "Equipment", "Interior", "Beverages"]

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
    let newIndex
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }
    
    setSelectedImage(filteredImages[newIndex].id)
  }

  const currentImage = selectedImage ? filteredImages.find(img => img.id === selectedImage) : null

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Memories"
          title="Through the Decades"
          description="A visual journey through 120+ years of Doumar's history, from the 1904 World's Fair to today"
          centered
          className="mb-12"
        />

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.div key={category} variants={staggerItem}>
              <Button
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          layout
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                variants={staggerItem}
                className="group cursor-pointer"
                onClick={() => openLightbox(image.id)}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{image.year}</span>
                      </div>
                      <h3 className="text-lg font-heading font-semibold mb-1">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>

                  {/* View Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image Counter */}
        <motion.div
          className="text-center mt-8"
          variants={staggerItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="text-gray-600">
            Showing {filteredImages.length} of {galleryImages.length} photos
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none">
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative"
          >
            {currentImage && (
              <>
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                  onClick={closeLightbox}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Image */}
                <div className="relative">
                  <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <div className="text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{currentImage.year}</span>
                        <span className="text-sm bg-primary px-2 py-1 rounded text-xs">
                          {currentImage.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        {currentImage.title}
                      </h3>
                      <p className="text-gray-300">
                        {currentImage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  )
}