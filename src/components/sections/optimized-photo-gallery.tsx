"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, X, Camera, Clock } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/images/historical/1904-worlds-fair.jpg",
    title: "1904 World's Fair",
    description: "Where it all began - Abe Doumar inventing the waffle cone",
    year: "1904",
    category: "Historical",
    featured: true
  },
  {
    id: 2,
    src: "/images/restaurant/cone-machine-operator.jpg",
    title: "Original Cone Machine",
    description: "120+ years later, still making cones the same way",
    year: "1905-Present",
    category: "Equipment",
    featured: true
  },
  {
    id: 3,
    src: "/images/food/bbq-sandwich.jpg",
    title: "Famous BBQ",
    description: "Slow-cooked perfection that keeps people coming back",
    year: "Present",
    category: "Food",
    featured: true
  },
  {
    id: 4,
    src: "/images/restaurant/ice-cream-sundae.jpg",
    title: "Classic Sundae",
    description: "Made with premium ice cream and fresh toppings",
    year: "Present",
    category: "Food",
    featured: false
  },
  {
    id: 5,
    src: "/images/restaurant/ice-cream-glass.jpg",
    title: "Signature Limeade",
    description: "The perfect complement to any meal",
    year: "Present",
    category: "Beverages",
    featured: false
  },
  {
    id: 6,
    src: "/images/restaurant/doumar-sign-interior.jpg",
    title: "Classic Interior",
    description: "Step back in time in our vintage dining room",
    year: "1950s",
    category: "Interior",
    featured: false
  }
]

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  onLoad?: () => void
}

function LazyImage({ src, alt, className, priority = false, onLoad }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)
  const inView = useInView(imgRef, { once: true, margin: "100px" })

  useEffect(() => {
    if (inView || priority) {
      setIsInView(true)
    }
  }, [inView, priority])

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton loader */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-neutral-gray-lighter via-neutral-gray-light to-neutral-gray-lighter animate-pulse transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      
      {/* Actual image - only load when in view */}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onLoad={handleLoad}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      
      {/* Shimmer effect overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-1000 ${
          !isLoaded ? 'animate-shimmer' : ''
        }`}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          transform: isLoaded ? 'translateX(100%)' : 'translateX(-100%)',
        }}
      />
    </div>
  )
}

export function OptimizedPhotoGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  
  const featuredImages = galleryImages.filter(img => img.featured)
  const intervalRef = useRef<NodeJS.Timeout>()
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

  // Auto-advance slides
  useEffect(() => {
    if (isAutoPlaying && isInView) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % featuredImages.length)
      }, 4000)
    } else {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
  }, [isAutoPlaying, isInView, featuredImages.length])

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % featuredImages.length)
  }, [featuredImages.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + featuredImages.length) % featuredImages.length)
  }, [featuredImages.length])

  const openLightbox = useCallback((imageId: number) => {
    setSelectedImage(imageId)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    setSelectedImage(null)
  }, [])

  const handleImageLoad = useCallback(() => {
    // Image loaded successfully
  }, [])

  const currentImage = selectedImage ? galleryImages.find(img => img.id === selectedImage) : null

  return (
    <>
      <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-neutral-black via-neutral-gray-dark to-neutral-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <SectionHeading
              subtitle="Visual Journey"
              title="Experience Our Story"
              description="From the 1904 World's Fair to today - witness over 120 years of culinary excellence and family tradition."
              centered
              className="mb-16 text-white [&_span]:text-primary-yellow [&_h2]:text-white [&_p]:text-neutral-gray-light"
            />
          </motion.div>

          {/* Main Featured Gallery */}
          <div className="relative mb-16">
            <div className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <LazyImage
                    src={featuredImages[currentSlide].src}
                    alt={featuredImages[currentSlide].title}
                    className="w-full h-full"
                    priority={currentSlide === 0}
                    onLoad={handleImageLoad}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content overlay */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
                  >
                    <div className="max-w-3xl">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-primary-red/90 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full font-semibold">
                          {featuredImages[currentSlide].category}
                        </span>
                        <div className="flex items-center space-x-2 text-primary-yellow">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{featuredImages[currentSlide].year}</span>
                        </div>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        {featuredImages[currentSlide].title}
                      </h3>
                      <p className="text-lg md:text-xl text-neutral-gray-light leading-relaxed mb-6">
                        {featuredImages[currentSlide].description}
                      </p>
                      <Button
                        onClick={() => openLightbox(featuredImages[currentSlide].id)}
                        variant="secondary"
                        className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20 hover:border-white/40"
                      >
                        <Camera className="w-4 h-4 mr-2" />
                        View Full Size
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <Button
                onClick={prevSlide}
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white border-white/20 rounded-full w-12 h-12 opacity-0 hover:opacity-100 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                onClick={nextSlide}
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white border-white/20 rounded-full w-12 h-12 opacity-0 hover:opacity-100 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Play/Pause button */}
              <Button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white border-white/20 rounded-full w-10 h-10"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary-yellow shadow-lg shadow-primary-yellow/30' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                  <LazyImage
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
                    onLoad={handleImageLoad}
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="text-white text-sm font-semibold truncate">{image.title}</h4>
                      <p className="text-primary-yellow text-xs">{image.year}</p>
                    </div>
                  </div>
                  
                  {/* View icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-primary-yellow/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Optimized Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 bg-black border-none rounded-lg">
          <AnimatePresence>
            {currentImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                {/* Close button */}
                <Button
                  onClick={closeLightbox}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Image container */}
                <div className="relative">
                  <LazyImage
                    src={currentImage.src}
                    alt={currentImage.title}
                    className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                    priority
                  />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                    <div className="text-white max-w-4xl mx-auto">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-primary-red text-white text-sm px-3 py-1 rounded-full font-semibold">
                          {currentImage.category}
                        </span>
                        <div className="flex items-center space-x-2 text-primary-yellow">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{currentImage.year}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                        {currentImage.title}
                      </h3>
                      <p className="text-neutral-gray-light">
                        {currentImage.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </>
  )
}