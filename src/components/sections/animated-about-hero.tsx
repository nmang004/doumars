"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"

export function AnimatedAboutHero() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-doumar-cream to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              subtitle="Our Legacy"
              title="The Story Behind the World's First Waffle Cone"
              description="From a young entrepreneur&apos;s innovation at the 1904 World&apos;s Fair to a Norfolk institution spanning four generations, discover the remarkable journey of the Doumar family."
              centered
            />
          </motion.div>
          
          
          {/* Stats with Animation */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { number: "1904", label: "Founded" },
              { number: "4", label: "Generations" },
              { number: "120+", label: "Years of Service" },
              { number: "1", label: "Original Machine" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center bg-white/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-primary font-heading mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    bounce: 0.6,
                    delay: 1 + index * 0.1
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 text-sm uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}