"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Trophy, Users } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { staggerContainer, staggerItem } from "@/lib/motion"

const timelineEvents = [
  {
    year: "1904",
    title: "The Birth of the Waffle Cone",
    description: "At the St. Louis World's Fair, 16-year-old Abe Doumar revolutionized ice cream forever by creating the world's first waffle cone. When an ice cream vendor ran out of bowls, Abe rolled a waffle into a cone shape – and history was made.",
    icon: Trophy,
    image: "/images/historical/1904-worlds-fair.jpg",
    highlight: true
  },
  {
    year: "1905",
    title: "The Machine That Started It All",
    description: "Abe acquired his first waffle cone machine and began perfecting the art of cone making. This original machine is still in use today at our Norfolk location – the same machine that has made millions of cones over 118 years.",
    icon: Calendar,
    image: "/images/restaurant/cone-machine-operator.jpg"
  },
  {
    year: "1907",
    title: "Coming to Norfolk",
    description: "The Doumar family established their first permanent location in Norfolk, Virginia. What started as a small operation would grow to become a beloved Norfolk institution.",
    icon: MapPin,
    image: "/images/restaurant/doumar-sign-interior.jpg"
  },
  {
    year: "1930s",
    title: "Adding BBQ to the Menu",
    description: "The second generation of Doumars expanded beyond ice cream, adding slow-cooked barbecue to the menu. This combination of sweet and savory became the signature that Norfolk fell in love with.",
    icon: Users,
    image: "/images/food/bbq-sandwich.jpg"
  },
  {
    year: "1950s-1980s",
    title: "Three Generations Strong",
    description: "The third generation of the Doumar family continued the tradition, maintaining the original recipes and quality standards while adapting to changing times. The curb service tradition began during this era.",
    icon: Users,
    image: "/images/restaurant/doumar-family.jpg"
  },
  {
    year: "2000s",
    title: "National Recognition",
    description: "Doumar's gained national attention, being featured on Food Network and earning recognition as a James Beard America's Classic. The fourth generation took over, ensuring the legacy continues.",
    icon: Trophy,
    image: "/images/restaurant/ice-cream-sundae.jpg"
  },
  {
    year: "Today",
    title: "Still Making History",
    description: "Four generations later, we're still using the original 1905 machine, still hand-rolling every cone, and still serving the same quality that made us famous. The tradition lives on.",
    icon: Calendar,
    image: "/images/restaurant/ice-cream-glass.jpg",
    highlight: true
  }
]

export function Timeline() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Journey"
          title="120+ Years of Innovation and Tradition"
          description="From a teenage entrepreneur's bright idea to a four-generation family legacy"
          centered
          className="mb-16"
        />

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className={`w-6 h-6 rounded-full border-4 border-white ${
                    event.highlight ? 'bg-primary' : 'bg-gray-400'
                  } shadow-lg flex items-center justify-center`}>
                    <event.icon className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <motion.div
                    className={`bg-white rounded-lg shadow-lg overflow-hidden border ${
                      event.highlight ? 'border-primary/20 shadow-primary/10' : 'border-gray-100'
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Image */}
                    <div className="aspect-video">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`text-2xl font-bold font-heading ${
                          event.highlight ? 'text-primary' : 'text-gray-600'
                        }`}>
                          {event.year}
                        </span>
                        {event.highlight && (
                          <div className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                            Milestone
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-doumar-black mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Year Badge for Desktop */}
                <div className={`hidden md:block w-5/12 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}>
                  <motion.div
                    className="inline-block"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-4xl md:text-6xl font-bold font-heading ${
                      event.highlight ? 'text-primary' : 'text-gray-200'
                    }`}>
                      {event.year}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}