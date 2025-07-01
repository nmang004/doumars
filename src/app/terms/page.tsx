import { Layout } from "@/components/layout/layout"
import { Metadata } from "next"
import Link from "next/link"
import { FileText, Scale, Users, ShoppingBag, AlertCircle, Heart, MapPin, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - Doumar's Cones and BBQ",
  description: "Read our terms of service for using the Doumar's Cones and BBQ website and services. Learn about your rights and responsibilities.",
}

export default function TermsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-navy to-neutral-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-waffle.svg')] opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-yellow/10 rounded-full mb-6">
              <Scale className="h-10 w-10 text-primary-yellow" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-neutral-gray-light max-w-3xl mx-auto">
              Welcome to Doumar's! These terms govern your use of our website and services.
            </p>
            <p className="text-sm text-neutral-gray-medium mt-4">
              Effective Date: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Agreement Notice */}
            <div className="bg-primary-yellow/10 rounded-2xl p-8 mb-12 border-2 border-primary-yellow/30">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-8 w-8 text-primary-red flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-heading text-2xl font-bold text-neutral-black mb-3">
                    Agreement to Terms
                  </h2>
                  <p className="text-neutral-gray-dark leading-relaxed">
                    By accessing or using our website, placing an order, or using any of our services, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Use of Services */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6 flex items-center">
                <Users className="h-8 w-8 text-primary-red mr-3" />
                Use of Our Services
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-gray-light/20">
                  <h3 className="font-semibold text-xl text-neutral-black mb-4">Eligibility</h3>
                  <p className="text-neutral-gray-dark mb-4">
                    To use our services, you must:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-gray-dark ml-4">
                    <li>Be at least 13 years of age</li>
                    <li>Have the legal capacity to enter into a binding agreement</li>
                    <li>Provide accurate and complete information when requested</li>
                    <li>Use our services in compliance with all applicable laws</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-gray-light/20">
                  <h3 className="font-semibold text-xl text-neutral-black mb-4">Prohibited Uses</h3>
                  <p className="text-neutral-gray-dark mb-4">
                    You agree not to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-gray-dark ml-4">
                    <li>Use our services for any illegal or unauthorized purpose</li>
                    <li>Violate any laws in your jurisdiction</li>
                    <li>Transmit any harmful code, viruses, or malicious software</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Harass, abuse, or harm another person or entity</li>
                    <li>Infringe upon or violate our intellectual property rights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Orders and Purchases */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6 flex items-center">
                <ShoppingBag className="h-8 w-8 text-primary-red mr-3" />
                Orders and Purchases
              </h2>
              
              <div className="bg-gradient-to-r from-primary-red/5 to-primary-yellow/5 rounded-xl p-8 border border-primary-red/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-black mb-3">Order Acceptance</h3>
                    <p className="text-neutral-gray-dark">
                      All orders placed through our website are subject to acceptance and availability. We reserve the right to refuse or cancel any order 
                      for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-black mb-3">Pricing and Payment</h3>
                    <p className="text-neutral-gray-dark">
                      All prices are in U.S. dollars and are subject to change without notice. We accept various forms of payment as indicated on our website. 
                      You agree to provide current, complete, and accurate purchase and account information for all purchases.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-black mb-3">Refunds and Cancellations</h3>
                    <p className="text-neutral-gray-dark">
                      Our refund and cancellation policies are designed to be fair and reasonable. Please contact us immediately if you need to cancel or modify an order. 
                      Refunds for food items are subject to our discretion and local health regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6">Intellectual Property</h2>
              <div className="bg-primary-navy/5 rounded-xl p-8 border border-primary-navy/20">
                <p className="text-neutral-gray-dark mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of 
                  Doumar's Cones and BBQ or its content suppliers and is protected by U.S. and international copyright laws.
                </p>
                <p className="text-neutral-gray-dark">
                  The Doumar's name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Doumar's Cones and BBQ. 
                  You may not use such marks without our prior written permission.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6">Limitation of Liability</h2>
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <p className="text-neutral-gray-dark leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, DOUMAR'S CONES AND BBQ SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
                  OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, 
                  OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF OUR SERVICES.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6">Indemnification</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-gray-light/20">
                <p className="text-neutral-gray-dark">
                  You agree to defend, indemnify, and hold harmless Doumar's Cones and BBQ, its affiliates, and their respective officers, directors, 
                  employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees 
                  arising out of or relating to your violation of these Terms of Service or your use of our services.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6">Governing Law</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-yellow/10 rounded-lg p-6 border border-primary-yellow/20">
                  <h3 className="font-semibold text-lg text-neutral-black mb-3">Jurisdiction</h3>
                  <p className="text-neutral-gray-dark">
                    These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Virginia, 
                    without regard to its conflict of law provisions.
                  </p>
                </div>
                <div className="bg-primary-yellow/10 rounded-lg p-6 border border-primary-yellow/20">
                  <h3 className="font-semibold text-lg text-neutral-black mb-3">Dispute Resolution</h3>
                  <p className="text-neutral-gray-dark">
                    Any disputes arising out of or relating to these Terms of Service shall be resolved through good faith negotiations 
                    or in the courts of Norfolk, Virginia.
                  </p>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6">Changes to Terms</h2>
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <p className="text-neutral-gray-dark">
                  We reserve the right to modify these Terms of Service at any time. If we make material changes, we will notify you by updating the date 
                  at the top of these Terms and, in some cases, we may provide additional notice. Your continued use of our services after any changes 
                  constitutes your acceptance of the new Terms of Service.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-br from-primary-red to-primary-red-hover text-white rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <Heart className="h-12 w-12 text-primary-yellow mx-auto mb-4" />
                <h2 className="font-heading text-3xl font-bold mb-4">Questions About Our Terms?</h2>
                <p className="text-xl opacity-90">
                  We're here to help! Contact us if you have any questions about these Terms of Service.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <a href="mailto:legal@doumars.com" className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-colors group">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-primary-yellow" />
                  <p className="font-semibold mb-1">Email Us</p>
                  <p className="text-sm opacity-90">legal@doumars.com</p>
                </a>
                
                <Link href="/contact" className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-colors group">
                  <FileText className="h-8 w-8 mx-auto mb-3 text-primary-yellow" />
                  <p className="font-semibold mb-1">Contact Form</p>
                  <p className="text-sm opacity-90">Send a message</p>
                </Link>
                
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-primary-yellow" />
                  <p className="font-semibold mb-1">Visit Us</p>
                  <p className="text-sm opacity-90">1919 Monticello Ave</p>
                </div>
              </div>
            </div>

            {/* Family Note */}
            <div className="mt-12 text-center">
              <p className="text-sm text-neutral-gray-medium italic">
                "Thank you for being part of the Doumar's family. We've been serving Norfolk with pride since 1904, 
                and these terms help us continue that tradition of excellence."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}