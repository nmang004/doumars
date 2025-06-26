import { Layout } from "@/components/layout/layout"
import { SectionHeading } from "@/components/ui/section-heading"
import { Timeline } from "@/components/sections/timeline"
import { PhotoGallery } from "@/components/sections/photo-gallery"
import { FamilyStory } from "@/components/sections/family-story"
import { Awards } from "@/components/sections/awards"
import { AnimatedIceCreamCone, AnimatedBBQBurger, FloatingIngredients, AnimatedLimeade } from "@/components/animations/animated-food-elements"
import { Metadata } from "next"
import Image from "next/image"
import { motion } from "framer-motion"

export const metadata: Metadata = {
  title: "About Us - The Doumar Family Legacy | Doumar's Cones and BBQ",
  description: "Discover the incredible story of Doumar's, from Abe Doumar's invention of the waffle cone at the 1904 World's Fair to four generations of family tradition in Norfolk, Virginia.",
  keywords: "Doumar family, 1904 World's Fair, waffle cone history, Norfolk Virginia, family restaurant, BBQ tradition",
}

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section with Animated Elements */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-doumar-cream to-white overflow-hidden">
        {/* Floating Ingredients Background */}
        <FloatingIngredients delay={0.5} />
        
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
            
            {/* Animated Food Icons */}
            <motion.div 
              className="flex justify-center items-center space-x-8 md:space-x-16 py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="text-center">
                <AnimatedIceCreamCone delay={0.5} />
                <p className="text-sm font-semibold text-gray-600 mt-2">World&apos;s First</p>
              </div>
              <div className="text-center">
                <AnimatedBBQBurger delay={1} />
                <p className="text-sm font-semibold text-gray-600 mt-2">Famous BBQ</p>
              </div>
              <div className="text-center">
                <AnimatedLimeade delay={1.5} />
                <p className="text-sm font-semibold text-gray-600 mt-2">Signature Limeade</p>
              </div>
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

      {/* Historical Timeline */}
      <Timeline />

      {/* Family Story */}
      <FamilyStory />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Awards & Recognition */}
      <Awards />

      {/* Enhanced Machine Section with Animations */}
      <section className="py-20 md:py-32 bg-doumar-black text-white relative overflow-hidden">
        {/* Animated cone background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10"
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <AnimatedIceCreamCone delay={0} />
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-16"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <AnimatedBBQBurger delay={2} />
          </motion.div>
        </div>
        
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
                description="Over 118 years later, we&apos;re still using the very same waffle cone machine that Abe Doumar used to start it all. Every cone is hand-rolled with the same care and precision."
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
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
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
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotate: -2,
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
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  type: "spring",
                  bounce: 0.6
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
              >
                <motion.div 
                  className="text-4xl font-bold font-heading"
                  animate={{
                    scale: [1, 1.05, 1]
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
              
              {/* Floating sparkles around the image */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${10 + i * 25}%`,
                  }}
                  animate={{
                    y: [-10, -25, -10],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legacy Quote */}
      <section className="py-24 bg-doumar-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="space-y-6">
            <div className="text-7xl text-primary opacity-20">&quot;</div>
            <p className="text-2xl md:text-3xl font-heading text-doumar-black leading-relaxed">
              We&apos;re not just serving food – we&apos;re serving history. Every cone tells the story 
              of innovation, family, and the American dream.
            </p>
            <footer className="text-gray-600">
              <cite className="font-medium text-lg">— The Doumar Family</cite>
            </footer>
          </blockquote>
        </div>
      </section>
    </Layout>
  )
}