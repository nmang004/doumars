"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroTitle, heroSubtitle, heroButton, fadeInUp } from "@/lib/motion"

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false) // Start paused to improve LCP
  const [isMuted, setIsMuted] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [autoplayFailed, setAutoplayFailed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    checkMobile()
  }, [])

  // Preload the hero image for better LCP
  useEffect(() => {
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.src = '/images/restaurant/cone-machine-operator.jpg'
  }, [])

  // Intersection Observer for lazy loading
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Video event listeners
  useEffect(() => {
    const video = videoRef.current
    if (!video || !isInView) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleVolumeChange = () => setIsMuted(video.muted)
    const handleLoadedData = () => {
      setVideoLoaded(true)
      // Try auto-play after video is loaded
      if (video.paused) {
        video.play().catch((error) => {
          console.log('Autoplay failed:', error)
          setAutoplayFailed(true)
          // On mobile or when autoplay fails, show play button
        })
      }
    }

    // Add event listeners
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('volumechange', handleVolumeChange)
    video.addEventListener('loadeddata', handleLoadedData)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('volumechange', handleVolumeChange)
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [isInView])

  const togglePlay = async () => {
    if (!videoRef.current) return
    
    try {
      if (isPlaying) {
        await videoRef.current.pause()
      } else {
        await videoRef.current.play()
        setAutoplayFailed(false) // Hide the big play button after successful play
      }
    } catch (error) {
      console.log('Video play/pause error:', error)
    }
  }

  const handleVideoClick = async () => {
    if (!videoRef.current) return
    
    try {
      if (videoRef.current.paused) {
        await videoRef.current.play()
        setAutoplayFailed(false)
      } else {
        await videoRef.current.pause()
      }
    } catch (error) {
      console.log('Video click error:', error)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    
    try {
      videoRef.current.muted = !isMuted
      setIsMuted(videoRef.current.muted)
    } catch (error) {
      console.log('Video mute error:', error)
    }
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        {/* Optimized background image that loads immediately */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: imageLoaded ? `url('/images/restaurant/cone-machine-operator.jpg')` : '',
            backgroundColor: imageLoaded ? 'transparent' : '#1a1a1a',
            opacity: videoLoaded ? 0 : 1,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
        
        {/* Video loads only when in view */}
        {isInView && (
          <video
            ref={videoRef}
            className="w-full h-full object-cover object-center cursor-pointer"
            muted={isMuted}
            loop
            playsInline
            preload="none"
            poster="/images/restaurant/cone-machine-operator.jpg"
            onClick={handleVideoClick}
            style={{ 
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out'
            }}
          >
            <source src="/videos/doumar-hero-video.mp4" type="video/mp4" />
          </video>
        )}
        
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
            <div className="h-px w-12 bg-primary-yellow/60" />
            <span className="text-white/90 text-sm uppercase tracking-wider font-semibold">
              Since 1904
            </span>
            <div className="h-px w-12 bg-primary-yellow/60" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={heroTitle}
            className="font-heading text-h1 font-bold text-white leading-tight"
          >
            Home of the World&apos;s
            <br />
            <span className="text-primary-yellow">First Waffle Cone</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={heroSubtitle}
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Four generations of family tradition serving Norfolk&apos;s finest ice cream 
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
                variant="accent"
                size="lg"
                className="w-full sm:w-auto min-w-[180px]"
              >
                <a href="https://order.toasttab.com/online/doumars-cones-barbecue-1919-monticello-ave" target="_blank" rel="noopener noreferrer">Order Online</a>
              </Button>
            </motion.div>
            
            <motion.div variants={heroButton}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto min-w-[180px] border-white text-white hover:bg-white hover:text-neutral-black"
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
              <div className="w-10 h-10 bg-primary-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏆</span>
              </div>
              <span className="text-white text-sm font-medium uppercase tracking-wide">
                James Beard Award Winner
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Large Play Button Overlay - Shows when autoplay fails (especially on mobile) */}
      {videoLoaded && (autoplayFailed || (isMobile && !isPlaying)) && (
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={handleVideoClick}
            className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="h-8 w-8 md:h-10 md:w-10 text-white ml-1 group-hover:text-primary-yellow transition-colors" />
          </motion.button>
          <div className="absolute bottom-[-60px] text-center">
            <p className="text-white/80 text-sm font-medium">Tap to play video</p>
          </div>
        </motion.div>
      )}

      {/* Video Controls - Only show when video is loaded */}
      {videoLoaded && (
        <motion.div
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-10 flex space-x-2 md:space-x-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlay}
          onTouchEnd={(e) => {
            e.preventDefault()
            togglePlay()
          }}
          className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-250 group touch-manipulation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ touchAction: 'manipulation' }}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5 text-white group-hover:text-primary-yellow transition-colors" />
          ) : (
            <Play className="h-5 w-5 text-white ml-0.5 group-hover:text-primary-yellow transition-colors" />
          )}
        </motion.button>

        {/* Mute/Unmute Button */}
        <motion.button
          onClick={toggleMute}
          onTouchEnd={(e) => {
            e.preventDefault()
            toggleMute()
          }}
          className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-250 group touch-manipulation"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ touchAction: 'manipulation' }}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white group-hover:text-primary-yellow transition-colors" />
          ) : (
            <Volume2 className="h-5 w-5 text-white group-hover:text-primary-yellow transition-colors" />
          )}
        </motion.button>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 flex justify-center"
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
          <span className="text-white/70 text-xs md:text-sm uppercase tracking-wider group-hover:text-white transition-colors text-center">
            Discover Our Story
          </span>
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-white/70 group-hover:text-white transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  )
}