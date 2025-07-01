"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Briefcase, Users, Heart, Award, Clock, MapPin, Phone, Mail, 
  ChefHat, HandPlatter, Store, ArrowRight, CheckCircle, Upload,
  Star, Coffee, Utensils, Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

const benefits = [
  {
    icon: Heart,
    title: "Family Environment",
    description: "Work with a team that treats you like family"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "We work with your schedule and life commitments"
  },
  {
    icon: Utensils,
    title: "Staff Meals",
    description: "Enjoy delicious meals during your shifts"
  },
  {
    icon: Award,
    title: "Growth Opportunities",
    description: "Advance your career with internal promotions"
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Regular team events and celebrations"
  },
  {
    icon: Shield,
    title: "Job Security",
    description: "Join a stable business serving Norfolk since 1904"
  }
]

const positions = [
  {
    title: "Curbside Service",
    type: "Full-time/Part-time",
    description: "Deliver our famous food to customers' cars with a smile",
    requirements: ["Excellent customer service skills", "Ability to work in all weather conditions", "Fast-paced work ethic"]
  },
  {
    title: "Counter Staff",
    type: "Full-time/Part-time",
    description: "Take orders and interact with our wonderful customers",
    requirements: ["Friendly personality", "Cash handling experience", "Multitasking abilities"]
  },
  {
    title: "Kitchen Staff",
    type: "Full-time/Part-time",
    description: "Prepare our legendary BBQ and ice cream treats",
    requirements: ["Food service experience preferred", "Attention to detail", "Team player attitude"]
  },
  {
    title: "Wait Staff",
    type: "Full-time/Part-time",
    description: "Provide exceptional table service to our dine-in guests",
    requirements: ["Previous serving experience helpful", "Strong communication skills", "Positive attitude"]
  }
]

export function CareersContent() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
    coverLetter: "",
    position: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-red to-primary-red-hover overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-waffle.svg')] opacity-10"></div>
        
        {/* Animated Icons */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 text-white/20"
        >
          <ChefHat className="h-16 w-16" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 text-white/20"
        >
          <Coffee className="h-20 w-20" />
        </motion.div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Join the Doumar's Family
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Be part of a Norfolk tradition that's been serving smiles since 1904. 
                We're looking for passionate people who love great food and even better service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Openings Alert */}
      <section className="py-8 bg-primary-yellow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Star className="h-6 w-6 text-neutral-black animate-pulse" />
              <p className="text-lg font-semibold text-neutral-black">
                We're actively hiring! Multiple positions available.
              </p>
            </div>
            <p className="text-neutral-black/80">
              Call us at <a href="tel:7576274163" className="font-bold underline">(757) 627-4163</a> or apply below
            </p>
          </div>
        </div>
      </section>

      {/* Why Work at Doumar's */}
      <section className="py-16 md:py-24 bg-neutral-off-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-4">
              Why Work at Doumar's?
            </h2>
            <p className="text-lg text-neutral-gray-dark max-w-2xl mx-auto">
              More than just a job – it's a chance to be part of history and a close-knit team that values every member.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-yellow/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-red" />
                </div>
                <h3 className="font-semibold text-lg text-neutral-black mb-2">{benefit.title}</h3>
                <p className="text-neutral-gray-dark">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Employee Photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: num * 0.1 }}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={`/images/careers/career${num}.jpeg`}
                  alt={`Doumar's team member ${num}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">Our Amazing Team</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Positions */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-4">
              Current Positions
            </h2>
            <p className="text-lg text-neutral-gray-dark">
              We're looking for enthusiastic team members to fill these roles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-neutral-gray-light/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-black mb-2">
                      {position.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-primary-yellow/20 text-primary-red text-sm font-medium rounded-full">
                      {position.type}
                    </span>
                  </div>
                  <HandPlatter className="h-8 w-8 text-primary-red" />
                </div>
                
                <p className="text-neutral-gray-dark mb-4">{position.description}</p>
                
                <div className="space-y-2">
                  <p className="font-semibold text-neutral-black">Requirements:</p>
                  <ul className="space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-red mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-gray-dark">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General Requirements */}
          <div className="bg-primary-navy/5 rounded-2xl p-8 border border-primary-navy/10">
            <h3 className="font-heading text-2xl font-bold text-neutral-black mb-4">
              What We're Looking For
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg text-neutral-black mb-3">Essential Qualities</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                    <span className="text-neutral-gray-dark">Positive attitude and friendly demeanor</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                    <span className="text-neutral-gray-dark">Reliable and punctual</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                    <span className="text-neutral-gray-dark">Team player mentality</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-red rounded-full"></div>
                    <span className="text-neutral-gray-dark">Commitment to quality service</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-neutral-black mb-3">Nice to Have</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
                    <span className="text-neutral-gray-dark">Previous restaurant experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
                    <span className="text-neutral-gray-dark">Knowledge of Norfolk area</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
                    <span className="text-neutral-gray-dark">Passion for food and hospitality</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-yellow rounded-full"></div>
                    <span className="text-neutral-gray-dark">Interest in learning our history</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-yellow/10 to-primary-red/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-4">
                Apply Today
              </h2>
              <p className="text-lg text-neutral-gray-dark">
                Ready to join our team? Fill out the form below or visit us in person!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium text-neutral-black">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-medium text-neutral-black">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="(757) 555-0123"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email" className="text-base font-medium text-neutral-black">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="position" className="text-base font-medium text-neutral-black">
                    Position Interested In *
                  </Label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    <option value="curbside">Curbside Service</option>
                    <option value="counter">Counter Staff</option>
                    <option value="kitchen">Kitchen Staff</option>
                    <option value="wait">Wait Staff</option>
                    <option value="any">Any Available Position</option>
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="experience" className="text-base font-medium text-neutral-black">
                  Relevant Experience *
                </Label>
                <Input
                  id="experience"
                  name="experience"
                  type="text"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="mt-2"
                  placeholder="e.g., 3 years in customer service"
                />
              </div>

              <div>
                <Label htmlFor="coverLetter" className="text-base font-medium text-neutral-black">
                  Why do you want to work at Doumar's? (Optional)
                </Label>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="mt-2"
                  placeholder="Tell us about yourself and why you'd be a great fit for our team..."
                />
              </div>

              <div className="bg-neutral-off-white rounded-lg p-4">
                <Label className="text-base font-medium text-neutral-black flex items-center cursor-pointer">
                  <Upload className="h-5 w-5 mr-2" />
                  Upload Resume (Optional)
                </Label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="mt-2 text-sm text-neutral-gray-dark file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-yellow file:text-neutral-black hover:file:bg-primary-yellow/80"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-primary-red hover:bg-primary-red-hover text-white"
                >
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-neutral-gray-light/30">
              <div className="text-center">
                <p className="text-neutral-gray-dark mb-4">
                  Prefer to apply in person? We'd love to meet you!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary-red" />
                    <span className="text-neutral-black font-medium">1919 Monticello Ave, Norfolk, VA</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary-red" />
                    <a href="tel:7576274163" className="text-neutral-black font-medium hover:text-primary-red">
                      (757) 627-4163
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-red to-primary-red-hover text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Store className="h-16 w-16 mx-auto mb-6 text-primary-yellow" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Start Your Journey with Doumar's
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join a team that's been serving Norfolk with pride for over 120 years. 
            We can't wait to meet you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-primary-red hover:bg-neutral-off-white"
            >
              <a href="tel:7576274163">
                <Phone className="mr-2 h-5 w-5" />
                Call Now to Apply
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}