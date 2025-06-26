"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { heroTitle, heroSubtitle, heroButton, fadeInUp } from "@/lib/motion"

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center"
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          poster="/images/restaurant/cone-machine-operator.jpg"
        >
          <source src="/videos/doumar-hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-6 max-w-4xl mx-auto"
          initial="initial"
          animate="animate"
        >
          {/* Subtitle */}
          <motion.div
            variants={heroSubtitle}
            className="flex items-center justify-center space-x-3"
          >
            <div className="h-px w-12 bg-white/60" />
            <span className="text-white/90 text-base uppercase tracking-wider font-medium">
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
                className="w-full sm:w-auto"
              >
                <Link href="/order">Order Online</Link>
              </Button>
            </motion.div>
            
            <motion.div variants={heroButton}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-doumar-black"
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
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏆</span>
              </div>
              <span className="text-white text-base font-medium">
                James Beard Award Winner
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Controls */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 flex space-x-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlay}
          className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-200 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
          ) : (
            <Play className="h-5 w-5 text-white ml-0.5 group-hover:text-primary transition-colors" />
          )}
        </motion.button>

        {/* Mute/Unmute Button */}
        <motion.button
          onClick={toggleMute}
          className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-200 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
          ) : (
            <Volume2 className="h-5 w-5 text-white group-hover:text-primary transition-colors" />
          )}
        </motion.button>
      </motion.div>

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
          className="flex flex-col items-center space-y-2 cursor-pointer group"
          onClick={() => {
            const nextSection = document.getElementById('our-story')
            nextSection?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-white/70 text-sm uppercase tracking-wider group-hover:text-white transition-colors">
            Discover Our Story
          </span>
          <ChevronDown className="h-6 w-6 text-white/70 group-hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  )
}