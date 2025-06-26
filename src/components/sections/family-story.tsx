"use client"

import { motion } from "framer-motion"
import { Heart, Users, Award, Clock } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion"

const familyMembers = [
  {
    name: "Abe Doumar",
    generation: "Founder",
    period: "1904-1947",
    description: "The visionary who invented the waffle cone at age 16 and founded our family legacy.",
    achievement: "Invented the world's first waffle cone",
    image: "/images/historical/1904-worlds-fair.jpg"
  },
  {
    name: "Second Generation",
    generation: "The Builders", 
    period: "1930s-1960s",
    description: "Expanded the business and added our famous barbecue, creating the unique combination Norfolk loves.",
    achievement: "Added BBQ to create our signature menu",
    image: "/images/restaurant/doumar-sign-interior.jpg"
  },
  {
    name: "Third Generation",
    generation: "The Keepers",
    period: "1960s-2000s", 
    description: "Preserved the traditions while modernizing operations, maintaining quality through changing times.",
    achievement: "Maintained original recipes and quality",
    image: "/images/restaurant/doumar-family.jpg"
  },
  {
    name: "Fourth Generation",
    generation: "The Innovators",
    period: "2000s-Present",
    description: "Bringing Doumar's into the digital age while honoring our heritage and preparing for the future.",
    achievement: "National recognition and modern growth",
    image: "/images/restaurant/cone-machine-operator.jpg"
  }
]

const values = [
  {
    icon: Heart,
    title: "Family First",
    description: "Every decision is made with family values at the core, treating customers like family.",
    color: "primary-red"
  },
  {
    icon: Clock,
    title: "Time-Honored Tradition",
    description: "We've maintained the same recipes and methods for over 120 years.",
    color: "primary-yellow"
  },
  {
    icon: Users,
    title: "Community Connection", 
    description: "Deeply rooted in Norfolk, we're proud to be part of this community's story.",
    color: "primary-navy"
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Never compromising on quality, every item is made with pride and care.",
    color: "primary-red"
  }
]


export function FamilyStory() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary-red/5 via-neutral-off-white to-primary-yellow/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Four Generations Strong"
          title="A Family Legacy Built on Love and Innovation"
          description="Meet the generations of Doumars who have kept the tradition alive while constantly innovating for the future."
          centered
          className="mb-16"
        />

        {/* Family Generations */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {familyMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-250 rounded-lg border-neutral-gray-lighter bg-neutral-white hover:border-primary-red/20">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-neutral-black">
                        {member.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="text-primary-red font-medium">{member.generation}</span>
                        <span className="text-neutral-gray-light">•</span>
                        <span className="text-neutral-gray-dark">{member.period}</span>
                      </div>
                    </div>
                    <p className="text-neutral-gray-dark leading-relaxed">
                      {member.description}
                    </p>
                    <div className="pt-3 border-t border-neutral-gray-lighter">
                      <div className="text-xs text-primary-red font-medium uppercase tracking-wider mb-1">
                        Key Achievement
                      </div>
                      <div className="text-sm text-neutral-black font-medium">
                        {member.achievement}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Family Values */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-neutral-black mb-4">
              Our Family Values
            </h3>
            <p className="text-neutral-gray-dark max-w-2xl mx-auto">
              These core values have guided every generation of the Doumar family 
              and continue to shape how we serve our community today.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center group p-6 bg-neutral-white/80 rounded-lg shadow-sm hover:shadow-lg transition-all duration-250 hover:bg-primary-yellow/5"
              >
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-250 ${
                  value.color === 'primary-red' ? 'bg-primary-red/10 group-hover:bg-primary-red/20' :
                  value.color === 'primary-yellow' ? 'bg-primary-yellow/10 group-hover:bg-primary-yellow/20' :
                  value.color === 'primary-navy' ? 'bg-primary-navy/10 group-hover:bg-primary-navy/20' :
                  'bg-primary-red/10 group-hover:bg-primary-red/20'
                }`}>
                  <value.icon className={`w-8 h-8 ${
                    value.color === 'primary-red' ? 'text-primary-red' :
                    value.color === 'primary-yellow' ? 'text-primary-yellow' :
                    value.color === 'primary-navy' ? 'text-primary-navy' :
                    'text-primary-red'
                  }`} />
                </div>
                <h4 className="text-lg font-heading font-semibold text-neutral-black mb-2">
                  {value.title}
                </h4>
                <p className="text-neutral-gray-dark text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}