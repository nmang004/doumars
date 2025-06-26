"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Clock, Heart, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { staggerContainer, staggerItem, scaleIn } from "@/lib/motion"

interface ScrapbookItem {
  id: number
  src: string
  title: string
  story: string
  year: string
  decade: string
  era: string
  location?: string
  category: "Early Years" | "Ocean View Era" | "Golden Age" | "Modern Times"
}

const scrapbookData: ScrapbookItem[] = [
  {
    id: 1,
    src: "/images/scrapbook/Scrap1.jpg",
    title: "The Beginning of a Legacy",
    story: "Abe Doumar at the 1904 St. Louis World's Fair, where he invented the waffle cone that would change ice cream forever. This moment marked the birth of what would become Norfolk's most beloved family restaurant.",
    year: "1904",
    decade: "1900s",
    era: "The Birth of the Cone",
    location: "St. Louis World's Fair",
    category: "Early Years"
  },
  {
    id: 2,
    src: "/images/scrapbook/Scrap2.jpg",
    title: "Coming Home to Norfolk",
    story: "After the World&apos;s Fair success, Abe brought his cone-making machine to Norfolk in 1907, setting up shop at Ocean View Amusement Park where families would flock for the weekend.",
    year: "1907",
    decade: "1900s",
    era: "Norfolk Beginnings",
    location: "Ocean View Amusement Park",
    category: "Early Years"
  },
  {
    id: 3,
    src: "/images/scrapbook/Scrap3.jpg",
    title: "The Original Cone Machine",
    story: "Our 1905 waffle cone machine, still operating today after more than a century. This mechanical marvel has been the heart of our operation, crafting cones exactly as Abe designed them.",
    year: "1905-Present",
    decade: "1900s",
    era: "Timeless Tradition",
    category: "Early Years"
  },
  {
    id: 4,
    src: "/images/scrapbook/Scrap4.jpg",
    title: "Ocean View Summers",
    story: "The golden days at Ocean View Amusement Park, where families would spend entire days enjoying rides, games, and of course, our famous ice cream cones. The salt air and carnival atmosphere made every visit magical.",
    year: "1920s",
    decade: "1920s",
    era: "Ocean View Era",
    location: "Ocean View Amusement Park",
    category: "Ocean View Era"
  },
  {
    id: 5,
    src: "/images/scrapbook/Scrap5.jpg",
    title: "Family Gathering",
    story: "Multiple generations of the Doumar family working together, passing down recipes and traditions. Every family member learned the art of cone-making and customer service from a young age.",
    year: "1930s",
    decade: "1930s",
    era: "Growing Family",
    category: "Ocean View Era"
  },
  {
    id: 6,
    src: "/images/scrapbook/Scrap6.jpg",
    title: "Surviving the Storms",
    story: "The devastating hurricanes of 1933 and 1935 damaged much of Ocean View, but the Doumar family persevered, rebuilding stronger each time. These storms tested our resolve but never broke our spirit.",
    year: "1933-1935",
    decade: "1930s",
    era: "Hurricane Years",
    location: "Ocean View",
    category: "Ocean View Era"
  },
  {
    id: 7,
    src: "/images/scrapbook/Scrap7.jpg",
    title: "The Dance Hall Addition",
    story: "In 1937, we added a dance hall and inside seating area, bringing live music and entertainment to complement our food service. Weekend dances became a community tradition.",
    year: "1937",
    decade: "1930s",
    era: "Entertainment Era",
    category: "Ocean View Era"
  },
  {
    id: 8,
    src: "/images/scrapbook/Scrap8.jpg",
    title: "Car Hop Pioneers",
    story: "We pioneered female car hop service in 1934, bringing food directly to customers' cars. Our car hops became local celebrities, known for their friendly service and efficient delivery.",
    year: "1934",
    decade: "1930s",
    era: "Car Hop Innovation",
    category: "Ocean View Era"
  },
  {
    id: 9,
    src: "/images/scrapbook/Scrap9.jpg",
    title: "Wartime Changes",
    story: "When new public cooking regulations came in 1942, we moved our cooking operations indoors. This transition marked the end of our Ocean View era but the beginning of our modern restaurant format.",
    year: "1942",
    decade: "1940s",
    era: "Wartime Adaptation",
    category: "Golden Age"
  },
  {
    id: 10,
    src: "/images/scrapbook/Scrap10.jpg",
    title: "The Monticello Move",
    story: "Transitioning to our permanent home on Monticello Avenue, where we could serve the growing Norfolk community year-round with indoor seating and expanded menu options.",
    year: "1940s",
    decade: "1940s",
    era: "New Location",
    location: "Monticello Avenue",
    category: "Golden Age"
  },
  {
    id: 11,
    src: "/images/scrapbook/Scrap11.jpg",
    title: "Post-War Prosperity",
    story: "The post-war boom brought new prosperity to Norfolk and Doumar's. Families flocked to our restaurant for celebrations, dates, and casual dining in the optimistic spirit of the 1950s.",
    year: "1950s",
    decade: "1950s",
    era: "Post-War Boom",
    category: "Golden Age"
  },
  {
    id: 12,
    src: "/images/scrapbook/Scrap12.jpg",
    title: "Competition with Schoe's",
    story: "The friendly rivalry with Schoe's restaurant brought out the best in both establishments, pushing us to innovate and improve our service while maintaining our family traditions.",
    year: "1950s-1960s",
    decade: "1960s",
    era: "Friendly Rivalry",
    category: "Golden Age"
  },
  {
    id: 13,
    src: "/images/scrapbook/Scrap13.jpg",
    title: "Rooftop DJ Entertainment",
    story: "Adding rooftop DJs in the late 1940s and 1960s brought live music and energy to our dining experience. The combination of great food and entertainment made us a destination.",
    year: "1960s",
    decade: "1960s",
    era: "Entertainment Innovation",
    category: "Golden Age"
  },
  {
    id: 14,
    src: "/images/scrapbook/Scrap14.jpg",
    title: "Family Traditions Continue",
    story: "Each new generation of the Doumar family brought fresh ideas while honoring the traditions established by Abe. The recipes and techniques passed down through the family remained unchanged.",
    year: "1960s",
    decade: "1960s",
    era: "Generational Continuity",
    category: "Golden Age"
  },
  {
    id: 15,
    src: "/images/scrapbook/Scrap15.jpg",
    title: "The Hot Rod Years",
    story: "In the 1970s and 1980s, Doumar's became the unofficial headquarters for Norfolk's hot-rod clubs. Weekend gatherings brought together car enthusiasts from across Hampton Roads.",
    year: "1970s",
    decade: "1970s",
    era: "Hot Rod Culture",
    category: "Modern Times"
  },
  {
    id: 16,
    src: "/images/scrapbook/Scrap16.jpg",
    title: "Community Gathering Place",
    story: "More than just a restaurant, Doumar's became a community institution where families celebrated milestones, couples had first dates, and friends gathered for good times.",
    year: "1970s",
    decade: "1970s",
    era: "Community Hub",
    category: "Modern Times"
  },
  {
    id: 17,
    src: "/images/scrapbook/Scrap17.jpg",
    title: "The Barbecue Tradition",
    story: "Adding barbecue to our menu expanded our appeal while maintaining the quality and family approach that made our ice cream famous. Our BBQ became as legendary as our cones.",
    year: "1980s",
    decade: "1980s",
    era: "Menu Expansion",
    category: "Modern Times"
  },
  {
    id: 18,
    src: "/images/scrapbook/Scrap18.jpg",
    title: "Preserving History",
    story: "As Norfolk changed around us, we became keepers of the city's culinary history, maintaining traditions and recipes that connected generations of families to their past.",
    year: "1980s",
    decade: "1980s",
    era: "Historical Preservation",
    category: "Modern Times"
  },
  {
    id: 19,
    src: "/images/scrapbook/Scrap19.jpg",
    title: "The Next Generation",
    story: "Children and grandchildren of original customers brought their own families, creating multi-generational connections to Doumar's that span nearly a century.",
    year: "1990s",
    decade: "1990s",
    era: "Generational Customers",
    category: "Modern Times"
  },
  {
    id: 20,
    src: "/images/scrapbook/Scrap20.jpg",
    title: "Media Recognition",
    story: "National media discovered our story, bringing visitors from around the world to experience the original waffle cone and the family restaurant that created it.",
    year: "1990s",
    decade: "1990s",
    era: "National Recognition",
    category: "Modern Times"
  },
  {
    id: 21,
    src: "/images/scrapbook/Scrap21.jpg",
    title: "Millennium Celebration",
    story: "Entering the new millennium with nearly 100 years of history behind us, still using the same cone machine and serving the same family recipes that started it all.",
    year: "2000",
    decade: "2000s",
    era: "New Millennium",
    category: "Modern Times"
  },
  {
    id: 22,
    src: "/images/scrapbook/Scrap22.jpg",
    title: "Family Legacy Lives On",
    story: "Today's Doumar family members continue the tradition with the same passion and dedication as Abe, ensuring that every customer experiences the warmth and quality of our family legacy.",
    year: "2000s",
    decade: "2000s",
    era: "Continuing Legacy",
    category: "Modern Times"
  },
  {
    id: 23,
    src: "/images/scrapbook/Scrap23.jpg",
    title: "The Original Cone Machine Today",
    story: "After more than 115 years, our original 1905 cone machine still operates daily, a testament to American craftsmanship and the enduring appeal of simple, quality food.",
    year: "Present",
    decade: "2020s",
    era: "Living History",
    category: "Modern Times"
  },
  {
    id: 24,
    src: "/images/scrapbook/Scrap24.jpg",
    title: "Community Celebration",
    story: "Local festivals, charity events, and community gatherings continue to center around Doumar's, proving that good food and family values never go out of style.",
    year: "Present",
    decade: "2020s",
    era: "Community Connection",
    category: "Modern Times"
  },
  {
    id: 25,
    src: "/images/scrapbook/Scrap25.jpg",
    title: "Teaching the Next Generation",
    story: "Young family members still learn the art of cone-making and customer service, ensuring that the traditions and values that built Doumar's will continue for generations to come.",
    year: "Present",
    decade: "2020s",
    era: "Future Traditions",
    category: "Modern Times"
  },
  {
    id: 26,
    src: "/images/scrapbook/Scrap26.jpg",
    title: "120 Years and Counting",
    story: "From a single man with a dream at the 1904 World&apos;s Fair to a Norfolk institution serving multiple generations, our story continues to unfold with every cone made and every smile shared.",
    year: "Present",
    decade: "2020s",
    era: "Continuing Story",
    category: "Modern Times"
  }
]

const categories = ["All Memories", "Early Years", "Ocean View Era", "Golden Age", "Modern Times"]
const decades = ["All Decades", "1900s", "1920s", "1930s", "1940s", "1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2020s"]

export function ScrapbookGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All Memories")
  const [selectedDecade, setSelectedDecade] = useState("All Decades")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const filteredImages = scrapbookData.filter(item => {
    const categoryMatch = selectedCategory === "All Memories" || item.category === selectedCategory
    const decadeMatch = selectedDecade === "All Decades" || item.decade === selectedDecade
    return categoryMatch && decadeMatch
  })

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

  const currentImage = selectedImage ? scrapbookData.find(img => img.id === selectedImage) : null

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 via-orange-100/60 to-red-100/80"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-primary-red mr-3" />
              <span className="text-primary-red font-medium tracking-wider uppercase text-sm">
                Our Family Story
              </span>
              <Heart className="w-8 h-8 text-primary-red ml-3" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-neutral-charcoal mb-6">
              Our Family
              <span className="block text-primary-red italic transform -rotate-1">
                Scrapbook
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-gray-dark max-w-3xl mx-auto leading-relaxed">
              Journey through 120+ years of memories, from Abe&apos;s invention of the waffle cone at the 1904 World&apos;s Fair 
              to our continued legacy as Norfolk&apos;s beloved family restaurant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-0 z-10 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category 
                      ? 'bg-primary-red hover:bg-primary-red/90 text-white shadow-lg' 
                      : 'border-amber-300 text-neutral-charcoal hover:bg-amber-100'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Decade Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {decades.map((decade) => (
                <Button
                  key={decade}
                  variant={selectedDecade === decade ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDecade(decade)}
                  className={`transition-all duration-300 ${
                    selectedDecade === decade 
                      ? 'bg-primary-yellow hover:bg-primary-yellow/90 text-neutral-charcoal shadow-lg' 
                      : 'border-amber-300 text-neutral-charcoal hover:bg-amber-100'
                  }`}
                >
                  {decade}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scrapbook Gallery */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <AnimatePresence>
              {filteredImages.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  className="break-inside-avoid cursor-pointer group"
                  onClick={() => openLightbox(item.id)}
                  style={{ 
                    transform: `rotate(${(index % 4 - 1.5) * 1.5}deg)`,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 0,
                    zIndex: 10,
                  }}
                  transition={{ duration: 0.3 }}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  {/* Polaroid-style frame */}
                  <div className="bg-white p-4 pb-16 shadow-xl hover:shadow-2xl transition-all duration-300 relative">
                    {/* Tape effect */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-200/60 shadow-sm z-20 rotate-12"></div>
                    
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay for hover effect */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    </div>

                    {/* Handwritten-style caption */}
                    <div className="mt-4 text-center">
                      <h3 className="font-handwriting text-lg text-neutral-charcoal mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Clock className="w-3 h-3 text-neutral-gray" />
                        <span className="font-handwriting text-sm text-neutral-gray">
                          {item.year}
                        </span>
                      </div>
                      {item.location && (
                        <div className="flex items-center justify-center space-x-1">
                          <MapPin className="w-3 h-3 text-neutral-gray" />
                          <span className="font-handwriting text-xs text-neutral-gray">
                            {item.location}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Memory Counter */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-neutral-gray-dark font-handwriting text-lg">
              Sharing {filteredImages.length} precious memories
              {(selectedCategory !== "All Memories" || selectedDecade !== "All Decades") && 
                ` from ${selectedCategory !== "All Memories" ? selectedCategory : ''} ${selectedDecade !== "All Decades" ? selectedDecade : ''}`
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-7xl w-[98vw] p-0 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 rounded-2xl max-h-[95vh] overflow-y-auto">
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
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 z-30 bg-white/90 hover:bg-white text-neutral-charcoal rounded-full shadow-xl border border-neutral-gray-lighter"
                  onClick={closeLightbox}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-neutral-charcoal rounded-full shadow-xl border border-neutral-gray-lighter"
                  onClick={() => navigateImage('prev')}
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-neutral-charcoal rounded-full shadow-xl border border-neutral-gray-lighter"
                  onClick={() => navigateImage('next')}
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>

                {/* Content */}
                <div className="flex flex-col xl:flex-row min-h-[70vh]">
                  {/* Image */}
                  <div className="xl:w-3/5 p-4 sm:p-6">
                    <div className="bg-white p-4 sm:p-6 shadow-xl rounded-xl h-full flex items-center justify-center">
                      <img
                        src={currentImage.src}
                        alt={currentImage.title}
                        className="w-full h-auto object-contain rounded-lg max-h-[65vh]"
                      />
                    </div>
                  </div>
                  
                  {/* Story Content */}
                  <div className="xl:w-2/5 p-4 sm:p-6 flex flex-col justify-start">
                    <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-lg h-full">
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className="bg-primary-red text-white text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
                          {currentImage.category}
                        </span>
                        <span className="bg-primary-yellow text-neutral-charcoal text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
                          {currentImage.decade}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-heading font-bold text-neutral-charcoal mb-4 leading-tight">
                        {currentImage.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm sm:text-base text-neutral-gray">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="font-medium">{currentImage.year}</span>
                        </div>
                        {currentImage.location && (
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="font-medium">{currentImage.location}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 overflow-y-auto">
                        <p className="text-neutral-gray-dark leading-relaxed text-base sm:text-lg xl:text-xl font-sans">
                          {currentImage.story}
                        </p>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-amber-200">
                        <p className="text-sm sm:text-base text-neutral-gray italic font-medium">
                          &ldquo;{currentImage.era}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  )
}