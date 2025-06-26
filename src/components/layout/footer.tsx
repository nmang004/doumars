"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = {
  main: [
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://facebook.com/doumars",
      icon: Facebook,
    },
    {
      name: "Instagram", 
      href: "https://instagram.com/doumars",
      icon: Instagram,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/doumars", 
      icon: Twitter,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-black to-neutral-gray-dark text-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-red via-primary-yellow to-primary-red"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 md:py-16 border-b border-neutral-gray-medium/30">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Stay Connected</h3>
            <p className="text-neutral-gray-light text-lg">Get updates on special events, new menu items, and Norfolk community happenings.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-neutral-gray-light text-base h-12 flex-grow hover:bg-white/15 focus:bg-white/15 transition-colors"
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                className="bg-primary-red hover:bg-primary-red-hover text-white h-12 px-8 transition-all duration-300 group whitespace-nowrap"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-6 lg:col-span-1">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src="/images/doumarslogo.png" 
                    alt="Doumar's Logo" 
                    className="h-14 w-auto object-contain brightness-0 invert"
                  />
                  <div>
                    <h3 className="font-heading text-2xl font-bold">Doumar's</h3>
                    <p className="text-sm text-primary-yellow">Since 1904</p>
                  </div>
                </div>
                <p className="text-neutral-gray-light text-base leading-relaxed">
                  Home of the world's first waffle cone. Four generations of family tradition 
                  serving Norfolk's finest ice cream and barbecue.
                </p>
              </div>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary-yellow hover:text-neutral-black transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-gray-light hover:text-white hover:pl-2 transition-all duration-300 text-base inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold text-white">Visit Us</h3>
              <div className="space-y-4">
                <Link 
                  href="https://maps.google.com/?q=Doumar's+Cones+Barbecue+Norfolk+VA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-yellow/20 transition-colors">
                    <MapPin className="h-5 w-5 text-primary-yellow" />
                  </div>
                  <div className="text-base text-neutral-gray-light group-hover:text-white transition-colors">
                    <p className="font-medium">1919 Monticello Ave</p>
                    <p>Norfolk, VA 23517</p>
                  </div>
                </Link>
                
                <a 
                  href="tel:7576274163"
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-yellow/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary-yellow" />
                  </div>
                  <span className="text-base text-neutral-gray-light group-hover:text-white transition-colors font-medium">(757) 627-4163</span>
                </a>
                
                <a 
                  href="mailto:info@doumars.com"
                  className="flex items-center space-x-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-yellow/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary-yellow" />
                  </div>
                  <span className="text-base text-neutral-gray-light group-hover:text-white transition-colors font-medium">info@doumars.com</span>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold text-white">Hours</h3>
              <div className="bg-white/5 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-neutral-gray-light">Monday - Thursday</span>
                  <span className="text-white font-medium">11am - 10pm</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-neutral-gray-light">Friday - Saturday</span>
                  <span className="text-white font-medium">11am - 11pm</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-gray-light">Sunday</span>
                  <span className="text-white font-medium">11am - 9pm</span>
                </div>
              </div>
              <div className="bg-primary-yellow/10 border border-primary-yellow/20 rounded-lg p-3 text-center">
                <p className="text-sm text-primary-yellow font-medium">
                  <Clock className="inline-block h-4 w-4 mr-1" />
                  Open Now
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left space-y-3">
              <p className="text-sm text-neutral-gray-light">
                © 2024 Doumar's Cones and BBQ. All rights reserved. • Family owned & operated since 1904
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                {navigation.legal.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-neutral-gray-light hover:text-white transition-colors duration-300 relative group"
                  >
                    {item.name}
                    {index < navigation.legal.length - 1 && (
                      <span className="ml-6 text-neutral-gray-medium hidden sm:inline">•</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Quick Actions for Mobile */}
            <div className="flex items-center gap-4 md:hidden">
              <Button
                asChild
                size="sm"
                className="bg-primary-red hover:bg-primary-red-hover text-white"
              >
                <a href="tel:7576274163">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Link href="/menu">
                  Menu
                </Link>
              </Button>
            </div>

            {/* Desktop Badge */}
            <div className="hidden md:flex items-center">
              <div className="bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <p className="text-sm text-primary-yellow font-medium">
                  Norfolk Historic Landmark • Est. 1904
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-red via-primary-yellow to-primary-red opacity-50"></div>
    </footer>
  )
}