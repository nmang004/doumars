"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Clock, MapPin, Phone, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SectionHeading } from "@/components/ui/section-heading"
import { formatPrice } from "@/lib/utils"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function OrderConfirmationPage() {
  const [orderNumber] = useState(() => 
    Math.floor(Math.random() * 9000) + 1000
  )
  const [estimatedTime] = useState(() => 
    new Date(Date.now() + (Math.random() > 0.5 ? 20 : 35) * 60000)
  )

  // Sample order data - in real app this would come from URL params or state
  const orderData = {
    orderNumber,
    orderType: 'pickup' as const,
    customerInfo: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(757) 555-0123'
    },
    items: [
      {
        id: '1',
        name: 'Original Waffle Cone',
        quantity: 2,
        price: 4.50,
        total: 9.00,
        customizations: { 'Ice Cream Flavor': 'Vanilla' }
      },
      {
        id: '2',
        name: 'BBQ Pork Sandwich',
        quantity: 1,
        price: 8.95,
        total: 8.95,
        customizations: { 'Sauce Level': 'Medium' }
      }
    ],
    subtotal: 17.95,
    tax: 1.03,
    total: 18.98,
    estimatedTime
  }

  return (
    <div className="min-h-screen bg-doumar-cream">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {/* Success Header */}
            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
              </div>
              
              <SectionHeading
                subtitle="Order Confirmed!"
                title="Thank you for your order"
                description="We've received your order and will have it ready soon"
                centered
              />
              
              <div className="mt-6 flex justify-center">
                <Badge className="bg-primary text-white text-lg px-4 py-2">
                  Order #{orderData.orderNumber}
                </Badge>
              </div>
            </motion.div>

            {/* Order Status */}
            <motion.div
              variants={staggerItem}
              className="grid md:grid-cols-2 gap-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    {orderData.orderType === 'pickup' ? 'Pickup Time' : 'Delivery Time'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-doumar-black mb-2">
                    {orderData.estimatedTime.toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true
                    })}
                  </div>
                  <p className="text-gray-600">
                    Estimated {orderData.orderType} time
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    {orderData.orderType === 'pickup' ? 'Pickup Location' : 'Delivery Address'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-doumar-black mb-2">
                    Doumar's Cones and BBQ
                  </div>
                  <p className="text-gray-600">
                    1919 Monticello Ave<br />
                    Norfolk, VA 23517
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Order Details */}
            <motion.div
              variants={staggerItem}
              className="grid lg:grid-cols-2 gap-6"
            >
              {/* Order Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {orderData.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-medium text-doumar-black">
                          {item.name} × {item.quantity}
                        </div>
                        {item.customizations && Object.keys(item.customizations).length > 0 && (
                          <div className="mt-1 space-y-1">
                            {Object.entries(item.customizations).map(([key, value]) => (
                              <div key={key} className="text-sm text-gray-600">
                                {key}: {value}
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="text-sm text-gray-500">
                          {formatPrice(item.price)} each
                        </div>
                      </div>
                      <div className="font-semibold">
                        {formatPrice(item.total)}
                      </div>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span>{formatPrice(orderData.subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span>{formatPrice(orderData.tax)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(orderData.total)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Customer Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Phone className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">{orderData.customerInfo.phone}</div>
                      <div className="text-sm text-gray-600">Phone</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Mail className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-medium">{orderData.customerInfo.email}</div>
                      <div className="text-sm text-gray-600">Email</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      We'll send you updates about your order via email and text message.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* What's Next */}
            <motion.div
              variants={staggerItem}
            >
              <Card>
                <CardHeader>
                  <CardTitle>What's Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <h4 className="font-medium mb-2">Order Preparation</h4>
                      <p className="text-sm text-gray-600">
                        We're preparing your order with care using our time-tested recipes.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <h4 className="font-medium mb-2">Ready Notification</h4>
                      <p className="text-sm text-gray-600">
                        We'll notify you when your order is ready for pickup.
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <h4 className="font-medium mb-2">Enjoy!</h4>
                      <p className="text-sm text-gray-600">
                        Enjoy your fresh Doumar's favorites made with over 120 years of tradition.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/menu">Order Again</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Star className="h-5 w-5 text-primary" />
                    <span className="font-medium">Need Help?</span>
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-gray-600 mb-3">
                    Questions about your order? We're here to help!
                  </p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="tel:+17576274163" 
                      className="flex items-center space-x-2 text-primary hover:text-primary/80"
                    >
                      <Phone className="h-4 w-4" />
                      <span>(757) 627-4163</span>
                    </a>
                    <a 
                      href="mailto:info@doumars.com" 
                      className="flex items-center space-x-2 text-primary hover:text-primary/80"
                    >
                      <Mail className="h-4 w-4" />
                      <span>info@doumars.com</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}