"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = {
  main: [
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "Catering", href: "/catering" },
    { name: "Merchandise", href: "/merchandise" },
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
    <footer className="bg-doumar-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold">Doumar's</h3>
                  <p className="text-sm text-gray-400">Since 1904</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Home of the world's first waffle cone. Four generations of family tradition 
                serving Norfolk's finest ice cream and barbecue.
              </p>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
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
            <div>
              <h3 className="font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>20th Street & Monticello Ave</p>
                    <p>Norfolk, VA 23517</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-300">(757) 627-4163</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-gray-300">info@doumars.com</span>
                </div>
              </div>
            </div>

            {/* Hours & Newsletter */}
            <div>
              <h3 className="font-semibold text-white mb-4">Hours</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>Mon-Thu: 11am-10pm</p>
                    <p>Fri-Sat: 11am-11pm</p>
                    <p>Sun: 11am-9pm</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2 text-sm">Newsletter</h4>
                <p className="text-xs text-gray-400 mb-3">
                  Get updates on special events and new menu items
                </p>
                <div className="flex space-x-2">
                  <Input
                    type="email"
                    placeholder="Enter email"
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 text-sm"
                  />
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-white px-3"
                  >
                    Join
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-sm text-gray-400">
                © 2024 Doumar's Cones and BBQ. All rights reserved.
              </p>
              <div className="flex space-x-4">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-xs text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <span>Proudly serving Norfolk since 1904</span>
              <span className="text-primary">♦</span>
              <span>Family owned & operated</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}