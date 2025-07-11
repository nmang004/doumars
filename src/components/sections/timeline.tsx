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
    <section className="py-20 md:py-32 bg-neutral-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Journey"
          title="120+ Years of Innovation and Tradition"
          description="From a teenage entrepreneur's bright idea to a four-generation family legacy."
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
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-gray-lighter" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Timeline Icon */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-10 h-10 rounded-full border-4 border-neutral-white ${event.highlight ? 'bg-primary-red' : 'bg-neutral-gray-medium'} shadow-lg flex items-center justify-center`}>
                    <event.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    className={`bg-neutral-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden border ${event.highlight ? 'border-primary-red/20 shadow-primary-red/10' : 'border-neutral-gray-lighter'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`text-2xl font-bold font-heading ${event.highlight ? 'text-primary-red' : 'text-neutral-gray-dark'}`}>
                          {event.year}
                        </span>
                        {event.highlight && (
                          <div className="bg-primary-red text-white text-xs px-2 py-1 rounded-full font-semibold uppercase tracking-wide">
                            Milestone
                          </div>
                        )}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-neutral-black mb-3">
                        {event.title}
                      </h3>
                      <p className="text-neutral-gray-dark leading-relaxed">
                        {event.description}
                      </p>
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