"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { heroTitle, heroSubtitle, heroButton, fadeInUp } from "@/lib/motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/restaurant/cone-machine-operator.jpg"
          alt="Making waffle cones at Doumar's"
          width={1920}
          height={1080}
          priority
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          initial="initial"
          animate="animate"
        >
          {/* Subtitle */}
          <motion.div
            variants={heroSubtitle}
            className="flex items-center justify-center space-x-2"
          >
            <div className="h-px w-12 bg-white/60" />
            <span className="text-white/90 text-sm uppercase tracking-wider font-medium">
              Since 1904
            </span>
            <div className="h-px w-12 bg-white/60" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={heroTitle}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Home of the World's
            <br />
            <span className="text-primary">First Waffle Cone</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={heroSubtitle}
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Four generations of family tradition serving Norfolk's finest ice cream 
            and barbecue. Still making cones on our original 1905 machine.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.div variants={heroButton}>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200"
              >
                <Link href="/order">Order Online</Link>
              </Button>
            </motion.div>
            
            <motion.div variants={heroButton}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-doumar-black font-semibold px-8 py-4 text-lg rounded-full transition-all duration-200"
              >
                <Link href="/menu">View Menu</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Awards Badge */}
          <motion.div
            variants={fadeInUp}
            className="pt-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🏆</span>
              </div>
              <span className="text-white text-sm font-medium">
                James Beard Award Winner
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 cursor-pointer"
          onClick={() => {
            const nextSection = document.getElementById('our-story')
            nextSection?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-white/70 text-sm uppercase tracking-wider">
            Discover Our Story
          </span>
          <ChevronDown className="h-6 w-6 text-white/70" />
        </motion.div>
      </motion.div>

      {/* Video Play Button (Optional) */}
      <motion.button
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <Play className="h-6 w-6 text-white ml-1" />
      </motion.button>
    </section>
  )
}