"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"

export function LegacyQuoteSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary-darker text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 text-white/10"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Quote className="w-32 h-32" />
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-10 text-white/10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Quote className="w-24 h-24 rotate-180" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Quote Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur rounded-full mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
          >
            <Quote className="w-10 h-10 text-white" />
          </motion.div>

          {/* Main Quote */}
          <motion.blockquote
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            &quot;From a paper dish shortage to a family legacy spanning four generations, 
            our story proves that the sweetest innovations come from simple solutions.&quot;
          </motion.blockquote>

          {/* Attribution */}
          <motion.div
            className="space-y-2 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-xl font-semibold">The Doumar Family</p>
            <p className="text-white/80">Four Generations of Innovation & Tradition</p>
          </motion.div>

          {/* Legacy Statement */}
          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg text-white/90 leading-relaxed">
              Today, as we continue hand-rolling cones on Abe&apos;s original machine, we&apos;re not just 
              preserving history – we&apos;re creating it daily. Every cone we serve carries forward a 
              legacy of innovation, quality, and the belief that the best things in life are made 
              with care, one at a time.
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <h3 className="text-2xl font-heading font-bold">
              Be Part of Our Next Chapter
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu" className="group">
                <motion.div
                  className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Experience Our Menu</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              
              <Link href="/locations" className="group">
                <motion.div
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Visit Us Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Historical Note */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-sm text-white/70 max-w-2xl mx-auto">
              From our family to yours, thank you for being part of the Doumar&apos;s story. 
              Here&apos;s to another century of hand-rolled cones, slow-cooked barbecue, and 
              the warm hospitality that makes Norfolk feel like home.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}