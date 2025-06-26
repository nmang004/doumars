"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, X, Camera, Clock } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/images/historical/1904-worlds-fair.jpg",
    title: "Annual Norfolk Day Festival",
    description: "Serving thousands at Norfolk's biggest community celebration every year",
    year: "Every Summer",
    category: "Community Events",
    featured: true
  },
  {
    id: 2,
    src: "/images/restaurant/cone-machine-operator.jpg",
    title: "School Field Trips",
    description: "Teaching local students about Norfolk's history with live waffle cone demonstrations",
    year: "Year-Round",
    category: "Education",
    featured: true
  },
  {
    id: 3,
    src: "/images/food/bbq-sandwich.jpg",
    title: "Charity BBQ Nights",
    description: "Monthly fundraisers supporting local organizations and families in need",
    year: "Monthly",
    category: "Fundraisers",
    featured: true
  },
  {
    id: 4,
    src: "/images/restaurant/ice-cream-sundae.jpg",
    title: "Little League Celebrations",
    description: "The traditional victory spot for Norfolk's youth sports teams",
    year: "Sports Season",
    category: "Youth Sports",
    featured: false
  },
  {
    id: 5,
    src: "/images/restaurant/ice-cream-glass.jpg",
    title: "First Responder Appreciation",
    description: "Free meals for Norfolk's police, fire, and medical heroes",
    year: "Weekly",
    category: "Community Service",
    featured: false
  },
  {
    id: 6,
    src: "/images/restaurant/doumar-sign-interior.jpg",
    title: "Family Reunions",
    description: "Hosting Norfolk families' milestone gatherings for generations",
    year: "Year-Round",
    category: "Family Events",
    featured: false
  }
]

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  onLoad?: () => void
  sizes?: string
  quality?: number
}

function LazyImage({ src, alt, className, priority = false, onLoad, sizes, quality = 90 }: LazyImageProps) {
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
          sizes={sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 1200px"}
          quality={quality}
          loading={priority ? "eager" : "lazy"}
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
  
  // Swipe handling
  const x = useMotionValue(0)
  const scale = useTransform(x, [-200, 0, 200], [0.85, 1, 0.85])
  const opacity = useTransform(x, [-200, 0, 200], [0.5, 1, 0.5])

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

  // Handle swipe gestures
  const handleDragEnd = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50
    const swipeVelocity = 0.5
    
    if (info.offset.x > swipeThreshold || info.velocity.x > swipeVelocity) {
      // Swiped right - go to previous
      prevSlide()
    } else if (info.offset.x < -swipeThreshold || info.velocity.x < -swipeVelocity) {
      // Swiped left - go to next
      nextSlide()
    }
  }, [nextSlide, prevSlide])

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
              subtitle="Community Hub"
              title="Norfolk's Gathering Place"
              description="For over a century, we've been more than a restaurant - we're where Norfolk comes together. From local fundraisers to family celebrations, we're proud to be part of your community moments."
              centered
              className="mb-16 text-white [&_span]:text-primary-yellow [&_h2]:text-white [&_p]:text-neutral-gray-light"
            />
          </motion.div>

          {/* Main Featured Gallery */}
          <div className="relative mb-16">
            <div className="relative h-[60vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl touch-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  style={{ x, scale, opacity }}
                  whileTap={{ cursor: "grabbing" }}
                >
                  <LazyImage
                    src={featuredImages[currentSlide].src}
                    alt={featuredImages[currentSlide].title}
                    className="w-full h-full"
                    priority={true}
                    onLoad={handleImageLoad}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1600px"
                    quality={95}
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

              {/* Navigation buttons - hidden on mobile */}
              <Button
                onClick={prevSlide}
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white border-white/20 rounded-full w-12 h-12 opacity-0 hover:opacity-100 transition-all duration-300 hidden md:flex"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                onClick={nextSlide}
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white border-white/20 rounded-full w-12 h-12 opacity-0 hover:opacity-100 transition-all duration-300 hidden md:flex"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
              
              {/* Swipe indicator for mobile */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center space-x-2 md:hidden bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                <ChevronLeft className="w-4 h-4 text-white/70 animate-pulse" />
                <span className="text-xs text-white/70">Swipe to browse</span>
                <ChevronRight className="w-4 h-4 text-white/70 animate-pulse" />
              </div>

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
        <DialogContent className="max-w-6xl w-[95vw] p-0 bg-black border-none rounded-lg touch-none">
          <AnimatePresence>
            {currentImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, info) => {
                  const swipeThreshold = 50
                  if (info.offset.x > swipeThreshold) {
                    // Swiped right - go to previous image
                    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
                    setSelectedImage(galleryImages[prevIndex].id)
                  } else if (info.offset.x < -swipeThreshold) {
                    // Swiped left - go to next image
                    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
                    const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
                    setSelectedImage(galleryImages[nextIndex].id)
                  }
                }}
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