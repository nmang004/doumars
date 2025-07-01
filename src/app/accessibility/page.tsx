import { Layout } from "@/components/layout/layout"
import { Metadata } from "next"
import Link from "next/link"
import { Accessibility, Eye, Ear, Hand, Keyboard, Monitor, Smartphone, Heart, Mail, Phone, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Accessibility - Doumar's Cones and BBQ",
  description: "Learn about our commitment to making Doumar's Cones and BBQ accessible to everyone. We strive to ensure all customers can enjoy our services.",
}

export default function AccessibilityPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-yellow to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-waffle.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
              <Accessibility className="h-10 w-10 text-neutral-black" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-black mb-6">
              Accessibility at Doumar's
            </h1>
            <p className="text-xl text-neutral-black/80 max-w-3xl mx-auto">
              Everyone deserves to enjoy the Doumar's experience. We're committed to making our restaurant and website accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Our Commitment */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-black mb-6">
              Our Commitment to Accessibility
            </h2>
            <p className="text-lg text-neutral-gray-dark max-w-3xl mx-auto leading-relaxed">
              For over 120 years, Doumar's has been a gathering place for the Norfolk community. We believe that everyone, 
              regardless of ability, should be able to enjoy our food, service, and hospitality. This commitment extends to 
              both our physical location and our digital presence.
            </p>
          </div>

          {/* Website Accessibility Features */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-neutral-black mb-8 flex items-center">
              <Monitor className="h-8 w-8 text-primary-red mr-3" />
              Website Accessibility Features
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-gray-light/20 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Keyboard className="h-6 w-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-black mb-2">Keyboard Navigation</h3>
                    <p className="text-neutral-gray-dark">
                      Our website is fully navigable using only a keyboard. Tab through interactive elements and use Enter to activate links and buttons.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-gray-light/20 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="h-6 w-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-black mb-2">Screen Reader Compatible</h3>
                    <p className="text-neutral-gray-dark">
                      We use semantic HTML and ARIA labels to ensure screen readers can accurately convey information to users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-gray-light/20 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="h-6 w-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-black mb-2">High Contrast Design</h3>
                    <p className="text-neutral-gray-dark">
                      Our color choices meet WCAG 2.1 AA standards for contrast ratios, ensuring text is readable for users with visual impairments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-gray-light/20 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-yellow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-black mb-2">Mobile Responsive</h3>
                    <p className="text-neutral-gray-dark">
                      Our website adapts to any device size, with touch-friendly interfaces and appropriately sized interactive elements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-8 bg-primary-yellow/10 rounded-2xl p-8 border border-primary-yellow/20">
              <h3 className="font-semibold text-xl text-neutral-black mb-4">Additional Accessibility Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-red flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-gray-dark">Alternative text for all images to describe visual content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-red flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-gray-dark">Clear heading structure for easy navigation and content understanding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-red flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-gray-dark">Form labels and error messages that are clearly associated with their fields</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-red flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-gray-dark">Skip navigation links to jump directly to main content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary-red flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-gray-dark">Focus indicators that are clearly visible when navigating with keyboard</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Restaurant Accessibility */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-neutral-black mb-8 flex items-center">
              <Heart className="h-8 w-8 text-primary-red mr-3" />
              Restaurant Accessibility
            </h2>
            
            <div className="bg-gradient-to-r from-primary-red/5 to-primary-yellow/5 rounded-2xl p-8 border border-primary-red/10">
              <p className="text-neutral-gray-dark mb-6 leading-relaxed">
                Our historic building has been thoughtfully updated to welcome all guests while preserving its character:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-neutral-black">Wheelchair Accessible Entrance</p>
                      <p className="text-sm text-neutral-gray-medium">Ramp access available at main entrance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-neutral-black">Accessible Restrooms</p>
                      <p className="text-sm text-neutral-gray-medium">Fully equipped with grab bars and adequate space</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-neutral-black">Accessible Seating</p>
                      <p className="text-sm text-neutral-gray-medium">Multiple table heights and moveable seating options</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-neutral-black">Service Animal Friendly</p>
                      <p className="text-sm text-neutral-gray-medium">Service animals are always welcome</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-neutral-black">Large Print Menus</p>
                      <p className="text-sm text-neutral-gray-medium">Available upon request</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-neutral-black">Staff Assistance</p>
                      <p className="text-sm text-neutral-gray-medium">Our team is happy to provide any additional help needed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Improvement */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-neutral-black mb-8">Continuous Improvement</h2>
            <div className="bg-primary-navy/5 rounded-xl p-8 border border-primary-navy/20">
              <p className="text-neutral-gray-dark mb-6 leading-relaxed">
                We recognize that accessibility is an ongoing journey, not a destination. We regularly review and update our practices to ensure 
                we're meeting the needs of all our customers. Your feedback is invaluable in helping us improve.
              </p>
              <div className="bg-white rounded-lg p-6 border border-neutral-gray-light/20">
                <h3 className="font-semibold text-lg text-neutral-black mb-3">Recent Improvements</h3>
                <ul className="space-y-2 text-neutral-gray-dark">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Enhanced color contrast throughout the website</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Improved keyboard navigation for all interactive elements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Added descriptive labels to all form fields</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span>Implemented skip navigation links</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-primary-red to-primary-red-hover text-white rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Hand className="h-12 w-12 text-primary-yellow mx-auto mb-4" />
              <h2 className="font-heading text-3xl font-bold mb-4">Need Assistance?</h2>
              <p className="text-xl opacity-90">
                We're here to help make your Doumar's experience exceptional.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a href="mailto:accessibility@doumars.com" className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors group">
                <Mail className="h-8 w-8 text-primary-yellow mb-3" />
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="opacity-90">accessibility@doumars.com</p>
                <p className="text-sm opacity-75 mt-2">For accessibility feedback or assistance</p>
              </a>
              
              <a href="tel:7576274163" className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors group">
                <Phone className="h-8 w-8 text-primary-yellow mb-3" />
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="opacity-90">(757) 627-4163</p>
                <p className="text-sm opacity-75 mt-2">Speak with our team directly</p>
              </a>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm opacity-90">
                If you encounter any barriers to accessing our website or services, please let us know. 
                We take all feedback seriously and will work to address any issues promptly.
              </p>
            </div>
          </div>

          {/* Standards Compliance */}
          <div className="mt-12 text-center">
            <h3 className="font-heading text-2xl font-bold text-neutral-black mb-4">Standards & Compliance</h3>
            <p className="text-neutral-gray-dark mb-6">
              We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary-yellow/10 rounded-full px-6 py-3 border border-primary-yellow/20">
              <Accessibility className="h-5 w-5 text-primary-red" />
              <span className="font-medium text-neutral-black">WCAG 2.1 AA Compliant</span>
            </div>
          </div>

          {/* Closing Message */}
          <div className="mt-16 text-center bg-neutral-gray-light/10 rounded-2xl p-8">
            <p className="text-lg text-neutral-gray-dark italic leading-relaxed">
              "At Doumar's, every customer is family. We've been bringing people together over great food for over 120 years, 
              and we're committed to ensuring everyone can share in that experience."
            </p>
            <p className="mt-4 font-semibold text-neutral-black">
              – The Doumar Family
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}