import { Layout } from "@/components/layout/layout"
import { Metadata } from "next"
import Link from "next/link"
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Doumar's Cones and BBQ",
  description: "Learn how Doumar's Cones and BBQ collects, uses, and protects your personal information when you visit our website or dine with us.",
}

export default function PrivacyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-neutral-gray-dark to-neutral-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-waffle.svg')] opacity-5"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-yellow/10 rounded-full mb-6">
              <Shield className="h-10 w-10 text-primary-yellow" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-neutral-gray-light max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-neutral-gray-medium mt-4">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-primary-yellow/5 rounded-2xl p-8 mb-12 border border-primary-yellow/20">
              <h2 className="font-heading text-2xl font-bold text-neutral-black mb-4 flex items-center">
                <FileText className="h-6 w-6 text-primary-red mr-3" />
                Introduction
              </h2>
              <p className="text-neutral-gray-dark leading-relaxed">
                Welcome to Doumar's Cones and BBQ ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6 flex items-center">
                <Eye className="h-8 w-8 text-primary-red mr-3" />
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-gray-light/20">
                  <h3 className="font-semibold text-xl text-neutral-black mb-3">Personal Information</h3>
                  <p className="text-neutral-gray-dark mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-gray-dark ml-4">
                    <li>Place an order online or in-store</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us via email, phone, or contact forms</li>
                    <li>Participate in surveys or promotions</li>
                    <li>Create an account on our website</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-gray-light/20">
                  <h3 className="font-semibold text-xl text-neutral-black mb-3">Automatically Collected Information</h3>
                  <p className="text-neutral-gray-dark mb-4">
                    When you visit our website, we automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-gray-dark ml-4">
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>IP address</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6 flex items-center">
                <Lock className="h-8 w-8 text-primary-red mr-3" />
                How We Use Your Information
              </h2>
              
              <div className="bg-gradient-to-r from-primary-red/5 to-primary-yellow/5 rounded-xl p-8 border border-primary-red/10">
                <p className="text-neutral-gray-dark mb-6">
                  We use the information we collect to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-gray-dark">Process and fulfill your orders</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-gray-dark">Send order confirmations and updates</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-gray-dark">Respond to your inquiries and requests</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-gray-dark">Send promotional communications (with consent)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-gray-dark">Improve our website and services</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-gray-dark">Comply with legal obligations</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6">Data Security</h2>
              <div className="bg-primary-navy/5 rounded-xl p-8 border border-primary-navy/20">
                <p className="text-neutral-gray-dark leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="font-heading text-3xl font-bold text-neutral-black mb-6">Your Rights</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-primary-yellow">
                  <h3 className="font-semibold text-lg text-neutral-black mb-2">Access and Update</h3>
                  <p className="text-neutral-gray-dark">
                    You have the right to access and update your personal information at any time.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-primary-yellow">
                  <h3 className="font-semibold text-lg text-neutral-black mb-2">Opt-Out</h3>
                  <p className="text-neutral-gray-dark">
                    You can opt-out of receiving promotional communications from us by following the unsubscribe instructions in any email.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-primary-yellow">
                  <h3 className="font-semibold text-lg text-neutral-black mb-2">Data Deletion</h3>
                  <p className="text-neutral-gray-dark">
                    You may request that we delete your personal information, subject to certain legal exceptions.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-primary-red to-primary-red-hover text-white rounded-2xl p-8 md:p-12">
              <h2 className="font-heading text-3xl font-bold mb-6">Contact Us</h2>
              <p className="text-xl mb-8 opacity-90">
                If you have any questions about this Privacy Policy or our practices, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a href="mailto:privacy@doumars.com" className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="opacity-90">privacy@doumars.com</p>
                  </div>
                </a>
                
                <a href="tel:7576274163" className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="opacity-90">(757) 627-4163</p>
                  </div>
                </a>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="opacity-90">1919 Monticello Ave<br />Norfolk, VA 23517</p>
                  </div>
                </div>
                
                <Link href="/contact" className="flex items-center space-x-3 group">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ExternalLink className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Contact Form</p>
                    <p className="opacity-90">Send us a message</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Updates Notice */}
            <div className="mt-12 text-center">
              <p className="text-sm text-neutral-gray-medium">
                This Privacy Policy may be updated from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}