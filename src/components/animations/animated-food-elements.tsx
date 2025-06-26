"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

// Animated Ice Cream Cone Component
export function AnimatedIceCreamCone({ delay = 0 }: { delay?: number }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="relative w-24 h-32 mx-auto"
    >
      {/* Ice Cream Scoops */}
      <motion.div
        variants={{
          hidden: { y: -100, opacity: 0, scale: 0 },
          visible: { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: { 
              delay: delay + 0.3,
              type: "spring",
              bounce: 0.6,
              duration: 0.8
            }
          }
        }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
      >
        {/* Top Scoop - Strawberry */}
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full relative overflow-hidden"
          animate={{ 
            rotate: [0, 2, -2, 0],
            scale: [1, 1.02, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Ice cream texture */}
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-200/30 to-transparent rounded-full" />
          <div className="absolute top-2 left-2 w-2 h-2 bg-red-400 rounded-full opacity-60" />
          <div className="absolute bottom-3 right-2 w-1 h-1 bg-red-500 rounded-full opacity-40" />
        </motion.div>
        
        {/* Middle Scoop - Vanilla */}
        <motion.div
          className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full relative overflow-hidden -mt-6 mx-auto"
          animate={{ 
            rotate: [0, -1, 1, 0],
            scale: [1, 1.01, 1]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-50/50 to-transparent rounded-full" />
          <div className="absolute top-3 right-3 w-1 h-1 bg-yellow-400 rounded-full opacity-50" />
        </motion.div>
        
        {/* Bottom Scoop - Chocolate */}
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full relative overflow-hidden -mt-8 mx-auto"
          animate={{ 
            rotate: [0, 1, -1, 0],
            scale: [1, 1.015, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/30 to-transparent rounded-full" />
          <div className="absolute top-4 left-3 w-2 h-1 bg-amber-800 rounded-full opacity-60" />
          <div className="absolute bottom-4 right-4 w-1 h-2 bg-amber-800 rounded-full opacity-40" />
        </motion.div>
      </motion.div>

      {/* Waffle Cone */}
      <motion.div
        variants={{
          hidden: { y: 50, opacity: 0, scale: 0.8 },
          visible: { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: { 
              delay: delay,
              type: "spring",
              bounce: 0.4,
              duration: 0.6
            }
          }
        }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-0 h-0 border-l-[30px] border-r-[30px] border-t-[80px] border-l-transparent border-r-transparent border-t-amber-600 relative">
          {/* Waffle pattern */}
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-amber-800 rounded" />
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-amber-800 rounded" />
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-amber-800 rounded" />
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-amber-800 rounded" />
          </div>
          {/* Cone highlight */}
          <div className="absolute top-0 left-2 w-4 h-16 bg-gradient-to-r from-amber-400/30 to-transparent" />
        </div>
      </motion.div>

      {/* Floating sparkles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-300 rounded-full"
          style={{
            left: `${20 + i * 30}%`,
            top: `${10 + i * 15}%`,
          }}
          animate={{
            y: [-5, -15, -5],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: delay + i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  )
}

// Animated BBQ Burger Component
export function AnimatedBBQBurger({ delay = 0 }: { delay?: number }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="relative w-28 h-20 mx-auto"
    >
      {/* Top Bun */}
      <motion.div
        variants={{
          hidden: { y: -30, opacity: 0, rotate: -10 },
          visible: { 
            y: 0, 
            opacity: 1, 
            rotate: 0,
            transition: { 
              delay: delay + 0.6,
              type: "spring",
              bounce: 0.5
            }
          }
        }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-t-full relative overflow-hidden"
        animate={{ 
          y: [0, -2, 0],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Sesame seeds */}
        <div className="absolute top-1 left-3 w-1 h-1 bg-yellow-200 rounded-full" />
        <div className="absolute top-2 right-4 w-1 h-1 bg-yellow-200 rounded-full" />
        <div className="absolute top-1 left-1/2 w-1 h-1 bg-yellow-200 rounded-full" />
        <div className="absolute top-2 left-6 w-1 h-1 bg-yellow-200 rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/40 to-transparent rounded-t-full" />
      </motion.div>

      {/* Lettuce */}
      <motion.div
        variants={{
          hidden: { x: -20, opacity: 0 },
          visible: { 
            x: 0, 
            opacity: 1,
            transition: { delay: delay + 0.4 }
          }
        }}
        className="absolute top-6 left-1/2 transform -translate-x-1/2 w-26 h-3"
      >
        <div className="w-full h-full bg-green-400 rounded-full opacity-80 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-300/60 to-transparent rounded-full" />
          <div className="absolute top-0 left-2 w-6 h-2 bg-green-500 rounded-full opacity-70 transform -rotate-12" />
          <div className="absolute top-1 right-3 w-4 h-2 bg-green-500 rounded-full opacity-60 transform rotate-6" />
        </div>
      </motion.div>

      {/* BBQ Patty */}
      <motion.div
        variants={{
          hidden: { scale: 0, opacity: 0 },
          visible: { 
            scale: 1, 
            opacity: 1,
            transition: { 
              delay: delay + 0.2,
              type: "spring",
              bounce: 0.3
            }
          }
        }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 w-22 h-4 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full relative overflow-hidden"
      >
        {/* Grill marks */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute top-1 left-2 w-4 h-0.5 bg-black rounded transform -rotate-45" />
          <div className="absolute top-2 left-4 w-4 h-0.5 bg-black rounded transform -rotate-45" />
          <div className="absolute top-1 right-4 w-4 h-0.5 bg-black rounded transform rotate-45" />
          <div className="absolute top-2 right-2 w-4 h-0.5 bg-black rounded transform rotate-45" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-700/40 to-transparent rounded-full" />
      </motion.div>

      {/* Bottom Bun */}
      <motion.div
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { delay: delay }
          }
        }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-gradient-to-br from-amber-500 to-amber-700 rounded-b-full relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/40 to-transparent rounded-b-full" />
      </motion.div>

      {/* Steam effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-8 bg-gradient-to-t from-white/60 to-transparent rounded-full"
          style={{
            left: `${35 + i * 15}%`,
            top: -10,
          }}
          animate={{
            y: [0, -15, -25],
            opacity: [0, 0.6, 0],
            scaleY: [1, 1.5, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: delay + 1 + i * 0.4,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  )
}

// Floating Ingredients Animation
export function FloatingIngredients({ delay = 0 }: { delay?: number }) {
  const ingredients = [
    { emoji: "🍯", name: "honey", color: "text-yellow-500" },
    { emoji: "🥛", name: "milk", color: "text-blue-100" },
    { emoji: "🍓", name: "strawberry", color: "text-red-400" },
    { emoji: "🍫", name: "chocolate", color: "text-amber-700" },
    { emoji: "🥓", name: "bacon", color: "text-red-600" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {ingredients.map((ingredient, i) => (
        <motion.div
          key={ingredient.name}
          className={`absolute text-2xl ${ingredient.color}`}
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + i * 15}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: delay + i * 0.5,
            ease: "easeInOut"
          }}
        >
          {ingredient.emoji}
        </motion.div>
      ))}
    </div>
  )
}

// Animated Limeade Glass
export function AnimatedLimeade({ delay = 0 }: { delay?: number }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className="relative w-16 h-24 mx-auto"
    >
      {/* Glass */}
      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { 
            y: 0, 
            opacity: 1,
            transition: { delay: delay }
          }
        }}
        className="absolute bottom-0 w-full h-20 border-4 border-blue-200 rounded-b-lg bg-gradient-to-t from-green-100 to-green-200 relative overflow-hidden"
      >
        {/* Limeade liquid with bubbles */}
        <motion.div
          className="absolute bottom-0 w-full bg-gradient-to-t from-lime-300 to-lime-200"
          variants={{
            hidden: { height: 0 },
            visible: { 
              height: "85%",
              transition: { 
                delay: delay + 0.3,
                duration: 1,
                ease: "easeOut"
              }
            }
          }}
        >
          {/* Bubbles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-70"
              style={{
                left: `${20 + i * 15}%`,
                bottom: `${10 + i * 10}%`,
              }}
              animate={{
                y: [-5, -25, -5],
                opacity: [0.7, 0, 0.7],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: delay + 0.5 + i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>

        {/* Glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent w-1/3" />
      </motion.div>

      {/* Straw */}
      <motion.div
        variants={{
          hidden: { y: -20, opacity: 0, rotate: -45 },
          visible: { 
            y: 0, 
            opacity: 1, 
            rotate: 15,
            transition: { 
              delay: delay + 0.6,
              type: "spring",
              bounce: 0.4
            }
          }
        }}
        className="absolute top-0 right-2 w-1 h-16 bg-gradient-to-b from-red-400 to-red-500 rounded-full"
        animate={{
          rotate: [15, 20, 15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Straw stripes */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent w-full rounded-full" />
      </motion.div>

      {/* Lime slice garnish */}
      <motion.div
        variants={{
          hidden: { scale: 0, rotate: -90 },
          visible: { 
            scale: 1, 
            rotate: 0,
            transition: { 
              delay: delay + 0.8,
              type: "spring",
              bounce: 0.6
            }
          }
        }}
        className="absolute top-2 left-2 w-4 h-4 bg-gradient-to-br from-lime-300 to-lime-500 rounded-full relative"
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Lime segments */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-lime-600 opacity-40" />
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-lime-600 opacity-40" />
        </div>
      </motion.div>
    </motion.div>
  )
}