"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Clock, User, MessageSquare } from "lucide-react"
import { StripePaymentForm } from "@/components/payment/stripe-payment-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { SectionHeading } from "@/components/ui/section-heading"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/utils"
import { fadeInUp } from "@/lib/motion"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

import Image from "next/image"

export default function CheckoutPage() {
  const { items, subtotal, tax, total, itemCount } = useCart()
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup')
  const [currentStep, setCurrentStep] = useState<'details' | 'payment'>('details')
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: 'VA',
    zipCode: '',
    specialInstructions: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const deliveryFee = orderType === 'delivery' ? 3.99 : 0
  const finalTotal = total + deliveryFee

  const handlePaymentSuccess = () => {
    // Clear cart and redirect to confirmation
    window.location.href = '/order-confirmation'
  }

  const handlePaymentError = (error: string) => {
    setPaymentError(error)
  }

  const proceedToPayment = () => {
    if (!formData.name || !formData.email || !formData.phone || 
        (orderType === 'delivery' && (!formData.street || !formData.city || !formData.zipCode))) {
      return
    }
    setCurrentStep('payment')
  }

  const isDetailsComplete = formData.name && formData.email && formData.phone && 
    (orderType === 'pickup' || (formData.street && formData.city && formData.zipCode))

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-doumar-cream">
        <Header />
        <div className="pt-32 pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <h1 className="text-3xl font-heading font-bold text-doumar-black mb-4">
                Your cart is empty
              </h1>
              <p className="text-gray-600 mb-8">
                Add some delicious items from our menu to continue with checkout.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/menu">Browse Menu</Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-doumar-cream">
      <Header />
      
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button and header */}
          <motion.div
            className="mb-8"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Button 
              variant="ghost" 
              asChild 
              className="mb-6 -ml-4 hover:bg-white/80"
            >
              <Link href="/menu">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Menu
              </Link>
            </Button>
            
            <SectionHeading
              subtitle="Complete Your Order"
              title="Checkout"
              description={`${itemCount} ${itemCount === 1 ? 'item' : 'items'} ready for pickup or delivery`}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Form */}
            <motion.div
              className="space-y-6"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Order Type */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Order Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup 
                    value={orderType} 
                    onValueChange={(value: 'pickup' | 'delivery') => setOrderType(value)}
                    className="space-y-4"
                  >
                    <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                        <div className="font-medium">Pickup</div>
                        <div className="text-sm text-gray-600">
                          <Clock className="h-4 w-4 inline mr-1" />
                          Ready in 15-20 minutes
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="flex-1 cursor-pointer">
                        <div className="font-medium">Delivery</div>
                        <div className="text-sm text-gray-600">
                          <Clock className="h-4 w-4 inline mr-1" />
                          30-45 minutes • {formatPrice(deliveryFee)} fee
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                  
                  <div className="grid grid-cols-2 gap-4">
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
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              {orderType === 'delivery' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      Delivery Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="street">Street Address *</Label>
                      <Input
                        id="street"
                        value={formData.street}
                        onChange={(e) => handleInputChange('street', e.target.value)}
                        placeholder="123 Main Street"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          placeholder="Norfolk"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          placeholder="23510"
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Special Instructions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                    Special Instructions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={formData.specialInstructions}
                    onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                    placeholder="Any special requests or delivery instructions..."
                    rows={3}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              className="space-y-6"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {/* Order Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex space-x-3">
                      <Image
                        src={item.image || ''}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-sm text-doumar-black truncate">
                              {item.name}
                            </h4>
                            <p className="text-xs text-gray-600">
                              Qty: {item.quantity} × {formatPrice(item.price)}
                            </p>
                            {item.selectedCustomizations && Object.keys(item.selectedCustomizations).length > 0 && (
                              <div className="mt-1 space-y-1">
                                {Object.entries(item.selectedCustomizations).map(([key, value]) => (
                                  <div key={key} className="text-xs text-gray-500">
                                    {key}: {value}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                          <span className="font-semibold text-sm">
                            {formatPrice(item.itemTotal)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Totals */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    {orderType === 'delivery' && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span>{formatPrice(deliveryFee)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax</span>
                      <span>{formatPrice(tax)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span className="text-primary">{formatPrice(finalTotal)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment or Proceed Button */}
              {currentStep === 'details' ? (
                <>
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4"
                    disabled={!isDetailsComplete}
                    onClick={proceedToPayment}
                  >
                    Proceed to Payment • {formatPrice(finalTotal)}
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500">
                    Review your order details before proceeding to payment.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-center mb-4">
                    <Button
                      variant="ghost"
                      onClick={() => setCurrentStep('details')}
                      className="text-gray-600 hover:text-primary"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back to Order Details
                    </Button>
                  </div>

                  {paymentError && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-sm">{paymentError}</p>
                    </div>
                  )}

                  <StripePaymentForm
                    amount={finalTotal}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />

                  <p className="text-xs text-center text-gray-500 mt-4">
                    By completing your purchase, you agree to our terms of service and privacy policy.
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}