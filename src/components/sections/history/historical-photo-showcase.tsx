"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { X, ZoomIn } from "lucide-react"

const historicalPhotos = [
  {
    src: "/images/history/history1.jpg",
    title: "The 1904 World's Fair",
    caption: "Where it all began - St. Louis World's Fair, the birthplace of the waffle cone",
    year: "1904"
  },
  {
    src: "/images/history/history2.jpg",
    title: "The Doumar Brothers",
    caption: "Albert, John, George, and Victor Doumar serve ice cream to waitress Inez Cuthrell in 1957",
    year: "1957"
  },
  {
    src: "/images/history/history3.jpg",
    title: "Ocean View Stand",
    caption: "Our original Ocean View location, the most successful of all Doumar's stands",
    year: "1907-1933"
  },
  {
    src: "/images/history/history4.jpg",
    title: "The 1949 Curb Crew",
    caption: "Our dedicated curb service team that started a Norfolk tradition",
    year: "1949"
  }
]

export function HistoricalPhotoShowcase() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof historicalPhotos[0] | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Parallax transforms for each photo (disabled on mobile for performance)
  const y1 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [50, -50])
  const y3 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [80, -80])
  const y4 = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [40, -40])

  const transforms = [y1, y2, y3, y4]

  return (
    <>
      <section ref={containerRef} className="py-20 md:py-32 bg-neutral-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Visual History"
            title="Moments Frozen in Time"
            description="Rare photographs from our archives capturing over a century of memories"
            centered
            className="mb-16 text-white"
            dark
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {historicalPhotos.map((photo, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                style={{ y: transforms[index] }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative overflow-hidden rounded-lg bg-gray-900">
                  <motion.img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-[280px] md:h-[350px] lg:h-[400px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                    whileHover={{ scale: isMobile ? 1 : 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-end justify-between">
                      <div className="flex-1 pr-2">
                        <p className="text-primary text-xs md:text-sm font-semibold mb-1 md:mb-2">{photo.year}</p>
                        <h3 className="text-white text-lg md:text-xl font-heading font-bold mb-1 md:mb-2 leading-tight">
                          {photo.title}
                        </h3>
                        <p className="text-gray-300 text-xs md:text-sm opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-tight">
                          {photo.caption}
                        </p>
                      </div>
                      <motion.div
                        className="opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: isMobile ? 1 : 1.1 }}
                      >
                        <ZoomIn className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-8 md:-top-12 right-0 text-white hover:text-primary transition-colors z-10"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              <div className="p-4 md:p-6 bg-gray-50">
                <p className="text-primary text-sm font-semibold mb-2">{selectedPhoto.year}</p>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">{selectedPhoto.caption}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}