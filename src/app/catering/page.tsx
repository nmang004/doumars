"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  Star,
  ChefHat,
  Utensils,
  Heart,
  CheckCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/ui/section-heading"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion"

export default function CateringPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    eventType: '',
    venue: '',
    address: '',
    services: [] as string[],
    dietaryRestrictions: '',
    additionalRequests: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const cateringPackages = [
    {
      name: "Ice Cream Social",
      description: "Perfect for birthday parties and casual gatherings",
      serves: "10-25 people",
      includes: ["Assorted ice cream flavors", "Waffle cones and cups", "Toppings bar", "Napkins and spoons"],
      price: "Starting at $12/person",
      popular: false
    },
    {
      name: "BBQ Feast",
      description: "Our signature BBQ spread for larger events",
      serves: "25-100 people",
      includes: ["Choice of BBQ meats", "Traditional sides", "Rolls and sauces", "Full setup and cleanup"],
      price: "Starting at $18/person",
      popular: true
    },
    {
      name: "Complete Celebration",
      description: "The full Doumar's experience with everything",
      serves: "50+ people",
      includes: ["BBQ buffet", "Ice cream station", "Waffle cone making", "Full-service staff"],
      price: "Starting at $25/person",
      popular: false
    }
  ]

  const eventTypes = [
    "Birthday Party",
    "Corporate Event",
    "Wedding",
    "Graduation",
    "School Function",
    "Community Event",
    "Other"
  ]

  const services = [
    "Full-service catering",
    "Drop-off catering",
    "On-site ice cream making",
    "Waffle cone demonstrations",
    "Setup and cleanup",
    "Serving staff"
  ]

  return (
    <div className="min-h-screen bg-doumar-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-doumar-black to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                <ChefHat className="h-8 w-8 text-primary" />
                <Badge className="bg-primary text-white text-lg px-4 py-2">
                  Catering Services
                </Badge>
              </div>
            </div>
            
            <SectionHeading
              subtitle="Make Your Event Unforgettable"
              title="Doumar's Catering"
              description="Bring 120 years of tradition to your special event. From intimate gatherings to large celebrations, we'll make your occasion as memorable as our legendary waffle cones."
              centered
              className="text-white [&_span]:text-primary [&_h2]:text-white [&_p]:text-gray-300"
            />
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="h-5 w-5" />
                <span>Any Size Event</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Star className="h-5 w-5" />
                <span>Premium Service</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Heart className="h-5 w-5" />
                <span>120+ Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Catering Packages */}
            <motion.section variants={staggerItem}>
              <SectionHeading
                subtitle="Our Catering Options"
                title="Choose Your Perfect Package"
                description="From intimate ice cream socials to grand celebrations, we have the perfect catering solution for your event"
                centered
              />
              
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                {cateringPackages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="relative"
                  >
                    <Card className={`h-full ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-primary text-white">
                            Most Popular
                          </Badge>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl">{pkg.name}</CardTitle>
                        <p className="text-gray-600">{pkg.description}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Users className="h-4 w-4" />
                          <span>{pkg.serves}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="text-2xl font-bold text-primary">
                            {pkg.price}
                          </div>
                          
                          <ul className="space-y-2">
                            {pkg.includes.map((item, i) => (
                              <li key={i} className="flex items-start space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-600">{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            Request Quote
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Catering Request Form */}
            <motion.section variants={staggerItem}>
              <SectionHeading
                subtitle="Ready to Get Started?"
                title="Request Your Catering Quote"
                description="Tell us about your event and we'll create a custom proposal just for you"
                centered
              />
              
              <div className="mt-12 max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Utensils className="h-6 w-6 mr-2 text-primary" />
                      Event Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Contact Information</h3>
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="(757) 555-0123"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company/Organization</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Optional"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Event Information</h3>
                        <div>
                          <Label htmlFor="eventDate">Event Date *</Label>
                          <Input
                            id="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => handleInputChange('eventDate', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="eventTime">Event Time *</Label>
                          <Input
                            id="eventTime"
                            type="time"
                            value={formData.eventTime}
                            onChange={(e) => handleInputChange('eventTime', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="guestCount">Number of Guests *</Label>
                          <Input
                            id="guestCount"
                            type="number"
                            value={formData.guestCount}
                            onChange={(e) => handleInputChange('guestCount', e.target.value)}
                            placeholder="e.g., 50"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="eventType">Event Type *</Label>
                          <RadioGroup 
                            value={formData.eventType} 
                            onValueChange={(value) => handleInputChange('eventType', value)}
                            className="mt-2"
                          >
                            <div className="grid grid-cols-2 gap-2">
                              {eventTypes.map((type) => (
                                <div key={type} className="flex items-center space-x-2">
                                  <RadioGroupItem value={type} id={type} />
                                  <Label htmlFor={type} className="text-sm">{type}</Label>
                                </div>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>

                    {/* Venue Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Venue Information</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="venue">Venue Name</Label>
                          <Input
                            id="venue"
                            value={formData.venue}
                            onChange={(e) => handleInputChange('venue', e.target.value)}
                            placeholder="Venue or location name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="address">Venue Address *</Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            placeholder="Full address"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Services Needed</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={service}
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceToggle(service)}
                              className="rounded border-gray-300 text-primary focus:ring-primary"
                            />
                            <Label htmlFor={service} className="text-sm cursor-pointer">
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Additional Information</h3>
                      <div>
                        <Label htmlFor="dietaryRestrictions">Dietary Restrictions/Allergies</Label>
                        <Textarea
                          id="dietaryRestrictions"
                          value={formData.dietaryRestrictions}
                          onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                          placeholder="Please list any dietary restrictions or allergies we should know about..."
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label htmlFor="additionalRequests">Additional Requests</Label>
                        <Textarea
                          id="additionalRequests"
                          value={formData.additionalRequests}
                          onChange={(e) => handleInputChange('additionalRequests', e.target.value)}
                          placeholder="Any special requests, menu preferences, or questions about your event..."
                          rows={4}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={!formData.name || !formData.email || !formData.phone || !formData.eventDate || !formData.guestCount || !formData.address}
                      >
                        Request Catering Quote
                      </Button>
                      <p className="text-sm text-gray-500 text-center mt-3">
                        We'll get back to you within 24 hours with a personalized quote
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Why Choose Doumar's */}
            <motion.section variants={staggerItem}>
              <SectionHeading
                subtitle="Why Choose Doumar's?"
                title="Experience Makes the Difference"
                description="Over 120 years of creating memorable moments for families and communities"
                centered
              />
              
              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Legendary Quality</h3>
                    <p className="text-gray-600">
                      Same recipes and quality standards that have made us a Norfolk institution since 1904.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Professional Service</h3>
                    <p className="text-gray-600">
                      Our experienced catering team handles every detail so you can enjoy your event.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Made with Love</h3>
                    <p className="text-gray-600">
                      Every dish is prepared with the same care and attention as if you were family.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Contact CTA */}
            <motion.section variants={staggerItem}>
              <Card className="bg-primary text-white">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Make Your Event Special?
                  </h3>
                  <p className="text-primary-100 mb-6">
                    Our catering team is standing by to help create an unforgettable experience for your guests.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                      <Phone className="h-5 w-5 mr-2" />
                      Call (757) 627-4163
                    </Button>
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                      <Mail className="h-5 w-5 mr-2" />
                      Email Us
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}