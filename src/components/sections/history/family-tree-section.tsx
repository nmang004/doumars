"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Users, Heart, Star } from "lucide-react"

const familyGenerations = [
  {
    generation: "First Generation",
    years: "1888-1950s",
    members: [
      {
        name: "Abe Doumar",
        role: "Founder & Inventor",
        years: "1888-1947",
        highlight: true,
        achievements: [
          "Invented the waffle cone at 1904 World's Fair",
          "Built the first four-iron waffle machine",
          "Established chain from Coney Island to Florida"
        ]
      },
      {
        name: "George Doumar",
        role: "Co-Founder",
        years: "1890s-1960s",
        achievements: [
          "Managed Norfolk Ocean View location",
          "Expanded into wholesale cone business",
          "Relocated to Monticello Avenue in 1934"
        ]
      }
    ]
  },
  {
    generation: "Second Generation",
    years: "1920s-1990s",
    members: [
      {
        name: "Albert Doumar",
        role: "Operations Manager",
        years: "1920s-1990s",
        achievements: [
          "WWII veteran",
          "Modernized operations",
          "Maintained quality standards"
        ]
      },
      {
        name: "Victor Doumar",
        role: "Business Developer",
        years: "1920s-1990s",
        achievements: [
          "WWII veteran",
          "Introduced curb service",
          "Expanded menu offerings"
        ]
      }
    ]
  },
  {
    generation: "Third Generation",
    years: "1950s-Present",
    members: [
      {
        name: "Al Doumar",
        role: "Current Owner",
        highlight: true,
        achievements: [
          "Preserved original recipes",
          "Maintained cone-making tradition",
          "Earned national recognition"
        ]
      },
      {
        name: "Extended Family",
        role: "Various Roles",
        achievements: [
          "Continued family involvement",
          "Preserved company culture",
          "Supported growth initiatives"
        ]
      }
    ]
  },
  {
    generation: "Fourth Generation",
    years: "1980s-Present",
    members: [
      {
        name: "Thad Doumar",
        role: "Operations & Innovation",
        highlight: true,
        achievements: [
          "Modernized while preserving tradition",
          "Expanded community engagement",
          "Leading next generation"
        ]
      },
      {
        name: "Next Generation",
        role: "Future Leaders",
        achievements: [
          "Learning the family business",
          "Carrying on traditions",
          "Planning for the future"
        ]
      }
    ]
  }
]

export function FamilyTreeSection() {
  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Four Generations Strong"
          title="The Doumar Family Legacy"
          description="From Syrian immigrant to American dream, the Doumar family has passed down not just recipes, but values of quality, innovation, and service."
          centered
          className="mb-16"
        />

        <div className="space-y-12">
          {familyGenerations.map((gen, genIndex) => (
            <motion.div
              key={genIndex}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: genIndex * 0.1 }}
            >
              {/* Generation Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white font-bold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {genIndex + 1}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    {gen.generation}
                  </h3>
                  <p className="text-gray-600">{gen.years}</p>
                </div>
              </div>

              {/* Family Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-16">
                {gen.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    className={`relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 ${
                      member.highlight ? 'ring-2 ring-primary ring-offset-2' : ''
                    }`}
                    initial={{ opacity: 0, x: memberIndex % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + memberIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {member.highlight && (
                      <motion.div
                        className="absolute -top-3 -right-3 bg-primary text-white p-2 rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        <Star className="w-4 h-4" />
                      </motion.div>
                    )}

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-gray-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-heading font-bold text-gray-900">
                          {member.name}
                        </h4>
                        <p className="text-primary font-semibold text-sm mb-1">
                          {member.role}
                        </p>
                        {member.years && (
                          <p className="text-gray-500 text-sm mb-3">{member.years}</p>
                        )}
                        
                        <ul className="space-y-2">
                          {member.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-2 text-sm text-gray-600"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + achIndex * 0.1 }}
                            >
                              <Heart className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Connecting Line */}
              {genIndex < familyGenerations.length - 1 && (
                <div className="absolute left-6 top-full h-12 w-0.5 bg-gray-300" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Family Values */}
        <motion.div
          className="mt-20 bg-primary/5 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
            The Values We Pass Down
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through four generations, the Doumar family has maintained the same commitment to quality, 
            innovation, and community that Abe Doumar established in 1904. Each generation has added 
            their own contributions while preserving the core traditions that make Doumar&apos;s special. 
            From the original waffle cone recipe to the dedication to hand-rolling every cone, these 
            values continue to guide us as we serve Norfolk and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  )
}