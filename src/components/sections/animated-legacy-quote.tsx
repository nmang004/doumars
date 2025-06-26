"use client"

import { motion } from "framer-motion"

export function AnimatedLegacyQuote() {
  return (
    <section className="py-24 bg-doumar-cream relative overflow-hidden">
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
              rotate: [0, -3, 3, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            &quot;
          </motion.div>
          
          <motion.p 
            className="text-2xl md:text-3xl font-heading text-doumar-black leading-relaxed"
            initial={{ opacity: 0, scale: 0.95 }}
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
          
          {/* Single decorative element - much cleaner */}
          <motion.div
            className="pt-8"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl"
            >
              🍦
            </motion.div>
          </motion.div>
        </motion.blockquote>
      </div>
    </section>
  )
}