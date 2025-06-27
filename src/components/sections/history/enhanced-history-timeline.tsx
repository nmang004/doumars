"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { MapPin, Trophy, Users, Lightbulb, Building, Globe } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { staggerContainer, staggerItem } from "@/lib/motion"

const historyEvents = [
  {
    year: "1904",
    title: "The Moment That Changed Everything",
    description: "At the St. Louis World's Fair, Abe Doumar witnessed an ice cream vendor run out of paper dishes. Nearby, a waffle maker was selling his wares with whipped cream. In a stroke of genius, 16-year-old Abe bought a waffle, rolled it into a cone, and topped it with ice cream. The world's first waffle cone was born, forever changing how we enjoy ice cream.",
    icon: Lightbulb,
    image: "/images/history/history1.jpg",
    highlight: true,
    details: [
      "23 million people attended the 1904 World's Fair",
      "Abe was selling paperweights when inspiration struck",
      "The collaboration between vendors created history"
    ]
  },
  {
    year: "1905",
    title: "The Four-Iron Revolution",
    description: "Abe Doumar built the revolutionary four-iron waffle machine that we still use today. Unlike single-iron machines of the time, this allowed him to roll a waffle while three others cooked. He opened the first of what would become a chain of Doumar's ice cream stands from Coney Island to Jacksonville, Florida.",
    icon: Building,
    image: "/images/history/history2.jpg",
    details: [
      "The original machine is still in daily use",
      "Four irons allowed continuous production",
      "Each cone takes exactly 90 seconds to make"
    ]
  },
  {
    year: "1907",
    title: "Norfolk Becomes Home",
    description: "Abe and his brother George arrived in Norfolk during the Jamestown Exhibition to open a stand in Ocean View Amusement Park, the south's most popular oceanfront destination. The stand sold nearly 23,000 cones in a single day. Norfolk's central East Coast location made it the perfect headquarters for the growing Doumar empire.",
    icon: MapPin,
    image: "/images/history/history3.jpg",
    highlight: true,
    details: [
      "Ocean View was the 'Coney Island of the South'",
      "23,000 cones sold in one day - still our record",
      "Norfolk chosen for its central East Coast location"
    ]
  },
  {
    year: "1920s",
    title: "Wholesale Innovation",
    description: "George Doumar expanded into wholesaling cones, recognizing the growing demand from other ice cream vendors. The family business now supplied cones throughout the region while maintaining their commitment to hand-rolled quality at their own stands.",
    icon: Globe,
    details: [
      "Supplied cones to vendors across Virginia",
      "Maintained hand-rolling tradition for their stands",
      "Business expanded beyond retail"
    ]
  },
  {
    year: "1933-1934",
    title: "Rising from the Storm",
    description: "After a devastating hurricane destroyed much of Ocean View Park in 1933, George Doumar made a pivotal decision. In 1934, he reopened Doumar's at our current Monticello Avenue location. To ensure year-round business, he added classic sandwiches and barbecue to the menu, creating the unique combination Norfolk loves today.",
    icon: Building,
    image: "/images/history/history4.jpg",
    details: [
      "Hurricane forced relocation from Ocean View",
      "Current location opened in 1934",
      "Menu expanded to include BBQ and sandwiches"
    ]
  },
  {
    year: "1940s-1950s",
    title: "The Next Generation Steps Up",
    description: "After serving in World War II, George's sons Albert and Victor returned home to help with the family business. The 1950s saw the introduction of curb service that became a Doumar's tradition. Despite challenges from emerging fast-food chains, the family commitment to quality never wavered.",
    icon: Users,
    details: [
      "Albert and Victor served in WWII",
      "Curb service introduced in 1949",
      "Family unity helped weather competition"
    ]
  },
  {
    year: "1960s-1970s",
    title: "Perseverance Through Change",
    description: "As suburbs grew and fast-food chains proliferated, Doumar's faced its toughest challenges. While some family members left the business, those who remained doubled down on quality and tradition. Their perseverance through these difficult decades laid the foundation for future success.",
    icon: Trophy,
    details: [
      "Suburbanization challenged downtown location",
      "McDonald's and chains created competition",
      "Quality and tradition won customer loyalty"
    ]
  },
  {
    year: "2000s-Present",
    title: "Four Generations Strong",
    description: "The fourth generation now carries the torch, earning national recognition including James Beard America's Classic designation. Featured on Food Network and in countless publications, Doumar's continues using Abe's original machine, hand-rolling every cone, and serving the quality that made us famous for over 120 years.",
    icon: Trophy,
    highlight: true,
    details: [
      "James Beard America's Classic recipient",
      "Featured on Food Network",
      "Fourth generation maintains traditions"
    ]
  }
]

export function EnhancedHistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Journey Through Time"
          title="From Street Vendor to Norfolk Institution"
          description="Follow the remarkable path of the Doumar family across four generations of innovation, perseverance, and dedication to quality."
          centered
          className="mb-20"
        />

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary via-primary to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-24">
            {historyEvents.map((event, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                >
                  <div
                    className={`w-16 h-16 rounded-full border-4 border-white shadow-xl flex items-center justify-center ${
                      event.highlight ? 'bg-primary' : 'bg-gray-600'
                    }`}
                  >
                    <event.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <motion.div
                    className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border ${
                      event.highlight ? 'border-primary/20' : 'border-gray-100'
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    {event.image && (
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-6 text-white">
                          <span className="text-3xl font-bold font-heading">{event.year}</span>
                        </div>
                      </div>
                    )}
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        {!event.image && (
                          <span className="text-2xl font-bold font-heading text-primary">
                            {event.year}
                          </span>
                        )}
                        {event.highlight && (
                          <motion.div
                            className="bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                          >
                            Major Milestone
                          </motion.div>
                        )}
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {event.description}
                      </p>
                      {event.details && (
                        <motion.div
                          className="space-y-2 pt-4 border-t border-gray-100"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          {event.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <p className="text-sm text-gray-500">{detail}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Summary */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From a teenage immigrant&apos;s innovation to a fourth-generation family business, 
            Doumar&apos;s story is one of American entrepreneurship, family dedication, and 
            the simple pleasure of a hand-rolled waffle cone filled with ice cream.
          </p>
        </motion.div>
      </div>
    </section>
  )
}