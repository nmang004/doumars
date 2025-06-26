"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = {
  main: [
    { name: "Menu", href: "/menu" },
    { name: "About Us", href: "/about" },
    { name: "News", href: "/news" },
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
    <footer className="bg-neutral-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {/* Brand Section */}
            <div className="space-y-4 md:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-primary-red flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl font-heading">D</span>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold">Doumar&apos;s</h3>
                  <p className="text-sm text-neutral-gray-light">Since 1904</p>
                </div>
              </div>
              <p className="text-neutral-gray-light text-base leading-relaxed">
                Home of the world&apos;s first waffle cone. Four generations of family tradition 
                serving Norfolk&apos;s finest ice cream and barbecue.
              </p>
              <div className="flex space-x-4 pt-2">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-neutral-gray-light hover:text-primary-yellow transition-colors duration-250"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-white text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-gray-light hover:text-primary-yellow transition-colors duration-250 text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Hours */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
                <div>
                  <h3 className="font-semibold text-white text-lg mb-4">Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary-yellow mt-1 flex-shrink-0" />
                      <div className="text-base text-neutral-gray-light">
                        <p>20th Street & Monticello Ave</p>
                        <p>Norfolk, VA 23517</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary-yellow flex-shrink-0" />
                      <span className="text-base text-neutral-gray-light">(757) 627-4163</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary-yellow flex-shrink-0" />
                      <span className="text-base text-neutral-gray-light">info@doumars.com</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-white text-lg mb-4">Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary-yellow mt-1 flex-shrink-0" />
                      <div className="text-base text-neutral-gray-light">
                        <p>Mon-Thu: 11am-10pm</p>
                        <p>Fri-Sat: 11am-11pm</p>
                        <p>Sun: 11am-9pm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-neutral-gray-dark py-8">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-neutral-gray-light">
                © 2024 Doumar&apos;s Cones and BBQ. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-start space-x-6 mt-2">
                {navigation.legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-neutral-gray-light hover:text-primary-yellow transition-colors duration-250"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
              <form className="flex w-full max-w-sm space-x-2">
                <Input
                  type="email"
                  placeholder="Join our newsletter"
                  className="bg-neutral-gray-dark border-neutral-gray-medium text-white placeholder-neutral-gray-light text-base h-12 flex-grow"
                  aria-label="Email for newsletter"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-primary-red hover:bg-primary-red-hover text-white h-12 w-12 flex-shrink-0 transition-colors duration-250"
                  aria-label="Subscribe to newsletter"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </form>
              <div className="flex items-center space-x-2 text-sm text-neutral-gray-light">
                <span>Family owned & operated since 1904</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}