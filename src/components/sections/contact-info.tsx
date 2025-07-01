"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Mail, Car, Users, Star, Navigation } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/motion"

const contactDetails = [
  {
    icon: MapPin,
    title: "Location",
    details: ["20th Street & Monticello Ave", "Norfolk, VA 23517"],
    action: "Get Directions",
    link: "https://maps.google.com/?q=Doumar's+Norfolk+VA"
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["(757) 627-4163"],
    action: "Call Now",
    link: "tel:7576274163"
  },
  {
    icon: Clock,
    title: "Hours",
    details: [
      "Mon-Thu: 11am-10pm",
      "Fri-Sat: 11am-11pm", 
      "Sun: 11am-9pm"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@doumars.com"],
    action: "Send Email",
    link: "mailto:info@doumars.com"
  }
]

const features = [
  {
    icon: Car,
    title: "Famous Curb Service",
    description: "Pull up and we'll bring your order right to your car, just like we've done for decades."
  },
  {
    icon: Users,
    title: "Family Friendly",
    description: "Perfect for families with kids' menus, high chairs, and a welcoming atmosphere."
  },
  {
    icon: Star,
    title: "Historic Experience",
    description: "Watch our cone makers demonstrate the original 1905 waffle cone machine in action."
  },
  {
    icon: Navigation,
    title: "Easy to Find",
    description: "Located at the iconic corner of 20th Street & Monticello Ave in Norfolk."
  }
]

export function ContactInfo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-doumar-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <SectionHeading
              subtitle="Visit Us"
              title="Experience History in Norfolk"
              description="Come taste what food critics have been raving about for over 120 years. We're easy to find and excited to serve you!"
              centered
              className="text-white [&_span]:text-primary [&_h2]:text-white [&_p]:text-gray-300"
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <detail.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-doumar-black mb-3">
                    {detail.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {detail.details.map((item, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                  {detail.action && detail.link && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-white transition-colors"
                    >
                      <a
                        href={detail.link}
                        target={detail.link.startsWith('http') ? '_blank' : undefined}
                        rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {detail.action}
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Map and Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full">
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-200 relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.0101070671913!2d-76.2849643!3d36.866176900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ba983c902ff9bb%3A0x4bb1cfcf7cbfba44!2sDoumar&#39;s%20Cones%20%26%20Barbecue!5e0!3m2!1sen!2sus!4v1751336474523!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading font-bold text-doumar-black mb-6">
                  Send Us a Message
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" className="border-gray-300 bg-white focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" className="border-gray-300 bg-white focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@example.com" className="border-gray-300 bg-white focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone (Optional)
                    </label>
                    <Input type="tel" placeholder="(757) 123-4567" className="border-gray-300 bg-white focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input placeholder="What can we help you with?" className="border-gray-300 bg-white focus:border-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      rows={4}
                      className="border-gray-300 bg-white focus:border-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-doumar-black mb-4">
              What Makes Us Special
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              More than just a restaurant – we&apos;re a Norfolk institution with unique features 
              that have delighted visitors for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-doumar-black mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="bg-primary/10 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-heading font-bold text-doumar-black mb-4">
              Ready to Experience History?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Come visit us at our Norfolk location and taste what food critics have been 
              raving about for over 120 years. We can&apos;t wait to serve you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg"
              >
                <a href="/menu">View Our Menu</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg"
              >
                <a href="https://order.toasttab.com/online/doumars-cones-barbecue-1919-monticello-ave" target="_blank" rel="noopener noreferrer">Order Online</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}