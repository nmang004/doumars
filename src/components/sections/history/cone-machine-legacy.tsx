"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Clock, Zap, Award, Hash } from "lucide-react"

export function ConeMachineLegacy() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  const machineStats = [
    {
      icon: Clock,
      value: "119",
      unit: "Years",
      label: "In Continuous Operation",
      description: "Same machine, same location, same recipe"
    },
    {
      icon: Hash,
      value: "50M+",
      unit: "Cones",
      label: "Hand-Rolled Since 1905",
      description: "Each one made with care"
    },
    {
      icon: Zap,
      value: "90",
      unit: "Seconds",
      label: "Per Perfect Cone",
      description: "The exact time for golden perfection"
    },
    {
      icon: Award,
      value: "4",
      unit: "Irons",
      label: "Revolutionary Design",
      description: "First multi-iron machine ever built"
    }
  ]

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-gradient-to-br from-doumar-cream via-white to-doumar-cream/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Engineering History"
          title="The Machine That Built an Empire"
          description="In 1905, Abe Doumar's revolutionary four-iron waffle machine changed the ice cream industry forever. Today, that same machine continues to create magic."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Machine Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/restaurant/cone-machine-operator.jpg"
                alt="The Original 1905 Cone Machine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-semibold text-primary-light mb-1">Since 1905</p>
                <h3 className="text-2xl font-heading font-bold">The Original Machine</h3>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              className="absolute -top-6 -right-6 bg-primary text-white rounded-full p-6 shadow-xl"
              style={{ scale, rotate }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold">119</div>
                <div className="text-xs">Years Old</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {machineStats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
              >
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4"
                    animate={{ rotate: hoveredStat === index ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <motion.span
                        className="text-2xl md:text-3xl font-bold text-gray-900"
                        animate={{ scale: hoveredStat === index ? 1.1 : 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                      >
                        {stat.value}
                      </motion.span>
                      <span className="text-xs md:text-sm text-gray-500">{stat.unit}</span>
                    </div>
                    <p className="text-sm md:text-base font-semibold text-gray-700">{stat.label}</p>
                    <p className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2 leading-tight">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Story Section */}
        <motion.div
          className="mt-16 md:mt-20 bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 md:mb-6">
              A Revolution in Four Irons
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 md:mb-6">
              While other vendors struggled with single-iron waffle makers, Abe Doumar saw an opportunity. 
              His four-iron design meant that while one waffle was being rolled into a cone, three others 
              were cooking. This simple innovation quadrupled production and allowed Doumar&apos;s to serve 
              thousands of customers daily.
            </p>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
              Today, visitors can watch this piece of history in action. The same machine that rolled cones 
              for visitors to the 1907 Jamestown Exhibition continues to delight customers over a century later. 
              Each cone is still hand-rolled using Abe&apos;s original recipe, taking exactly 90 seconds to achieve 
              the perfect golden color and crispy texture that made Doumar&apos;s famous.
            </p>
            
            {/* Call to Action */}
            <motion.div
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <span>Watch the machine in action at our Norfolk location</span>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}