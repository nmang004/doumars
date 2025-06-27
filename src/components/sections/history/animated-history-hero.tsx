"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Clock, Users, Award, Home } from "lucide-react"

export function AnimatedHistoryHero() {
  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-br from-doumar-cream via-white to-doumar-cream/30 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              subtitle="Est. 1904"
              title="A Legacy Written in Waffle Cones"
              description="From a chance encounter at the World's Fair to Norfolk's most beloved family restaurant, this is the story of innovation, perseverance, and the sweet taste of tradition."
              centered
            />
          </motion.div>

          {/* Animated Timeline Preview */}
          <motion.div
            className="relative max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />
            <div className="flex flex-col sm:flex-row sm:justify-between items-center relative gap-6 sm:gap-0">
              {["1904", "1907", "1934", "Today"].map((year, index) => (
                <motion.div
                  key={year}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    bounce: 0.5,
                  }}
                >
                  <div className="w-4 h-4 bg-primary rounded-full shadow-lg ring-4 ring-white" />
                  <motion.span
                    className="mt-3 text-sm font-semibold text-gray-700 whitespace-nowrap"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {year}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Stats Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-20 max-w-5xl mx-auto px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { 
                icon: Clock, 
                number: "120+", 
                label: "Years of History",
                description: "Serving Norfolk since 1907"
              },
              { 
                icon: Users, 
                number: "4", 
                label: "Generations",
                description: "Family-owned & operated"
              },
              { 
                icon: Award, 
                number: "23,000", 
                label: "Cones in One Day",
                description: "Our 1907 record"
              },
              { 
                icon: Home, 
                number: "1", 
                label: "Original Machine",
                description: "Still in use today"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 h-full border border-gray-100">
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-heading mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      bounce: 0.6,
                      delay: 1 + index * 0.1,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-700 font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}