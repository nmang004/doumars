"use client"

import { motion } from "framer-motion"
import { AnimatedIceCreamCone, AnimatedBBQBurger, AnimatedLimeade } from "@/components/animations/animated-food-elements"

export function AnimatedLegacyQuote() {
  return (
    <section className="py-24 bg-doumar-cream relative overflow-hidden">
      {/* Animated food parade */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <motion.div
          className="flex space-x-20"
          animate={{
            x: ["-100%", "100%"]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <AnimatedIceCreamCone delay={0} />
          <AnimatedBBQBurger delay={0.5} />
          <AnimatedLimeade delay={1} />
          <AnimatedIceCreamCone delay={1.5} />
          <AnimatedBBQBurger delay={2} />
        </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.blockquote 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-7xl text-primary opacity-20"
            animate={{
              rotate: [0, -5, 5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &quot;
          </motion.div>
          
          <motion.p 
            className="text-2xl md:text-3xl font-heading text-doumar-black leading-relaxed"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We&apos;re not just serving food – we&apos;re serving history. Every cone tells the story 
            of innovation, family, and the American dream.
          </motion.p>
          
          <motion.footer 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <cite className="font-medium text-lg">— The Doumar Family</cite>
          </motion.footer>
          
          {/* Decorative animated elements */}
          <div className="flex justify-center space-x-8 pt-8">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="text-3xl">🍦</span>
            </motion.div>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <span className="text-3xl">🍔</span>
            </motion.div>
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 90, 180]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <span className="text-3xl">🍹</span>
            </motion.div>
          </div>
        </motion.blockquote>
      </div>
    </section>
  )
}