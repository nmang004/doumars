"use client"

import { motion } from "framer-motion"
import { Trophy, Star, Tv, Newspaper, Award, Users } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { staggerContainer, staggerItem } from "@/lib/motion"

const awards = [
  {
    icon: Trophy,
    title: "James Beard America's Classics",
    year: "2005",
    description: "Recognized as an American Classic for our contribution to the nation's food culture and heritage.",
    color: "bg-yellow-500"
  },
  {
    icon: Tv,
    title: "Food Network Featured",
    year: "Multiple",
    description: "Featured on various Food Network shows highlighting our historical significance and delicious food.",
    color: "bg-blue-500"
  },
  {
    icon: Newspaper,
    title: "National Media Coverage",
    year: "Ongoing",
    description: "Covered by major publications including The New York Times, USA Today, and Southern Living.",
    color: "bg-green-500"
  },
  {
    icon: Award,
    title: "Virginia Tourism Award",
    year: "2010",
    description: "Honored for our contribution to Virginia's tourism and culinary heritage.",
    color: "bg-purple-500"
  },
  {
    icon: Users,
    title: "Community Choice Awards",
    year: "Annual",
    description: "Consistently voted as Norfolk's favorite ice cream and BBQ destination by locals.",
    color: "bg-primary"
  },
  {
    icon: Star,
    title: "TripAdvisor Excellence",
    year: "2015-Present",
    description: "Certificate of Excellence for consistently positive reviews and customer satisfaction.",
    color: "bg-orange-500"
  }
]

const mediaFeatures = [
  {
    outlet: "Food Network",
    show: "Diners, Drive-Ins and Dives",
    description: "Featured for our historic significance and amazing barbecue"
  },
  {
    outlet: "The New York Times",
    show: "Travel Section",
    description: "Highlighted as a must-visit destination in Norfolk"
  },
  {
    outlet: "Southern Living",
    show: "Best of the South",
    description: "Named one of the South's most iconic restaurants"
  },
  {
    outlet: "USA Today",
    show: "Historic Restaurants",
    description: "Featured in America's most historic dining establishments"
  }
]

const testimonials = [
  {
    text: "Doumar's represents the best of American culinary innovation and family tradition.",
    author: "James Beard Foundation",
    role: "America's Classics Award"
  },
  {
    text: "A true Norfolk institution that has perfectly preserved its heritage while serving incredible food.",
    author: "Virginia Tourism Board",
    role: "Heritage Tourism Award"
  },
  {
    text: "The waffle cone machine alone makes this place a living museum, but the food keeps you coming back.",
    author: "Food Network",
    role: "Featured Review"
  }
]

export function Awards() {
  return (
    <section className="py-24 bg-gradient-to-br from-doumar-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Recognition & Awards"
          title="Nationally Recognized Excellence"
          description="Our commitment to quality and tradition has earned recognition from culinary experts and media across the nation"
          centered
          className="mb-16 text-white [&_span]:text-primary [&_h2]:text-white [&_p]:text-gray-300"
        />

        {/* Awards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${award.color} flex-shrink-0`}>
                      <award.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-lg font-heading font-semibold text-white group-hover:text-primary transition-colors">
                          {award.title}
                        </h3>
                        <div className="text-primary text-sm font-medium">
                          {award.year}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Media Features */}
        <motion.div
          className="mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              Featured In National Media
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our story has been shared across major television networks, 
              newspapers, and magazines nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Tv className="w-5 h-5 text-primary" />
                  <div>
                    <h4 className="font-semibold text-white">{feature.outlet}</h4>
                    <div className="text-primary text-sm">{feature.show}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-white mb-4">
              What The Experts Say
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from culinary experts and industry leaders about what makes Doumar's special.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
              >
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="text-4xl text-primary opacity-30 mb-4">"</div>
                  <blockquote className="text-gray-300 mb-6 leading-relaxed">
                    {testimonial.text}
                  </blockquote>
                  <footer>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-primary text-sm">{testimonial.role}</div>
                  </footer>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={staggerItem}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-primary/10 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Experience Award-Winning Quality
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Come taste what food critics and culinary experts have been raving about for decades. 
              Experience the quality that has earned us national recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/menu"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Menu
              </motion.a>
              <motion.a
                href="/order"
                className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Online
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}