"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import Image from "next/image"

export function AnimatedMachineSection() {
  return (
    <section className="py-20 md:py-32 bg-doumar-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            className="space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              subtitle="Still Making History"
              title="The Original 1905 Cone Machine"
              description="Over 118 years later, we're still using the very same waffle cone machine that Abe Doumar used to start it all. Every cone is hand-rolled with the same care and precision."
              className="text-white [&_span]:text-primary [&_h2]:text-white [&_p]:text-gray-300"
            />
            
            <div className="space-y-4 max-w-md mx-auto lg:mx-0">
              {[
                {
                  title: "Hand-Crafted Tradition",
                  description: "Each cone is still rolled by hand, just like Abe did in 1904.",
                  icon: "🥞"
                },
                {
                  title: "Original Recipe",
                  description: "The same waffle cone recipe that won hearts at the World's Fair.",
                  icon: "📜"
                },
                {
                  title: "Living History",
                  description: "Watch our cone makers demonstrate this historic craft every day.",
                  icon: "👨‍🍳"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="text-2xl"
                    animate={{
                      rotate: [0, 8, -8, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.8
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative h-[500px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/restaurant/cone-machine-operator.jpg"
                alt="Original 1905 waffle cone machine in operation"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            {/* Animated badge */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg text-center"
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                type: "spring",
                bounce: 0.6
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
            >
              <motion.div 
                className="text-4xl font-bold font-heading"
                animate={{
                  scale: [1, 1.02, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                1905
              </motion.div>
              <div className="text-sm uppercase tracking-wider">Original Machine</div>
            </motion.div>
            
            {/* Subtle sparkles */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-50"
                style={{
                  left: `${25 + i * 50}%`,
                  top: `${15 + i * 35}%`,
                }}
                animate={{
                  y: [-8, -20, -8],
                  opacity: [0, 0.5, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}