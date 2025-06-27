import { Layout } from "@/components/layout/layout"
import { Hero } from "@/components/sections/hero"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { Card, CardContent } from "@/components/ui/card"
import { OptimizedPhotoGallery } from "@/components/sections/optimized-photo-gallery"
import { Awards } from "@/components/sections/awards"
import Link from "next/link"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <link 
          rel="preload" 
          as="image" 
          href="/images/restaurant/cone-machine-operator.jpg"
          fetchPriority="high"
        />
      </Head>
      <Layout>
        <Hero />
      
      {/* Our Story Preview Section */}
      <section id="our-story" className="py-16 md:py-24 bg-neutral-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
              <SectionHeading 
                subtitle="Our Legacy"
                title="Four Generations of Family Tradition"
                description="It all started at the 1904 World's Fair in St. Louis, where Abe Doumar invented the world's first waffle cone. Today, we're still making cones on that very same machine, serving up the same quality and tradition that has made us a Norfolk institution."
              />
              
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6 max-w-2xl mx-auto lg:mx-0">
                <div className="text-center bg-gradient-to-br from-primary-red/5 to-primary-yellow/5 border border-primary-red/20 p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                  <div className="text-3xl lg:text-h3 font-heading font-bold text-primary-red group-hover:scale-110 transition-transform duration-300">1904</div>
                  <div className="text-xs lg:text-sm text-neutral-gray-dark font-semibold uppercase tracking-wider">Founded</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-yellow/5 to-primary-navy/5 border border-primary-navy/20 p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                  <div className="text-3xl lg:text-h3 font-heading font-bold text-primary-navy group-hover:scale-110 transition-transform duration-300">4</div>
                  <div className="text-xs lg:text-sm text-neutral-gray-dark font-semibold uppercase tracking-wider">Generations</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-navy/5 to-primary-red/5 border border-primary-red/20 p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                  <div className="text-3xl lg:text-h3 font-heading font-bold text-primary-red group-hover:scale-110 transition-transform duration-300">120+</div>
                  <div className="text-xs lg:text-sm text-neutral-gray-dark font-semibold uppercase tracking-wider">Years</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-yellow/5 to-primary-navy/5 border border-primary-yellow/20 p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
                  <div className="text-3xl lg:text-h3 font-heading font-bold text-primary-yellow group-hover:scale-110 transition-transform duration-300">1M+</div>
                  <div className="text-xs lg:text-sm text-neutral-gray-dark font-semibold uppercase tracking-wider">Cones Made</div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" size="lg" className="flex-1 sm:flex-none h-18 sm:h-14 px-6 text-lg font-semibold">
                  <Link href="/about">Discover Our Full Story</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-none h-18 sm:h-14 px-6 text-lg font-semibold border-primary-red text-primary-red hover:bg-primary-red hover:text-white">
                  <Link href="/our-scrapbook">View Our Family Scrapbook</Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              {/* Heritage Timeline */}
              <div className="bg-gradient-to-br from-neutral-white to-primary-yellow/5 border border-primary-yellow/20 rounded-xl p-6 lg:p-8 shadow-lg">
                <h3 className="font-heading text-xl lg:text-2xl font-semibold text-neutral-black mb-6 text-center lg:text-left">Our Heritage Timeline</h3>
                <div className="space-y-3 lg:space-y-4">
                  {[
                    { year: "1904", event: "Abe Doumar invents the waffle cone at St. Louis World's Fair" },
                    { year: "1905", event: "Original cone-making machine installed, still in use today" },
                    { year: "1930s", event: "Second generation takes over, adds famous barbecue" },
                    { year: "Today", event: "Fourth generation continues the family tradition" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 lg:space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 bg-primary-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-xs lg:text-sm">{item.year}</span>
                      </div>
                      <div className="flex-1 pt-1 lg:pt-2">
                        <p className="text-neutral-gray-dark text-sm lg:text-base leading-relaxed group-hover:text-neutral-black transition-colors duration-300">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Norfolk Institution Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center space-x-3 bg-primary-navy/10 backdrop-blur-sm rounded-full px-4 lg:px-6 py-2 lg:py-3 border border-primary-navy/20">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-primary-navy rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs lg:text-sm">🏛️</span>
                  </div>
                  <span className="text-primary-navy text-xs lg:text-sm font-semibold uppercase tracking-wide">
                    Norfolk Historic Institution
                  </span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-white via-primary-navy/5 to-neutral-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Signature Items"
            title="Taste the Tradition"
            description="From our world-famous waffle cones to our slow-cooked barbecue, every item is made with the same care and quality we've maintained for over 120 years."
            centered
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                name: "Original Waffle Cone",
                description: "Made fresh on our original 1905 machine - the world's first!",
                price: "$4.50",
                image: "/images/restaurant/cone-machine-operator.jpg",
                badge: "Original"
              },
              {
                name: "BBQ Pork Sandwich",
                description: "Slow-cooked perfection on a fresh bun with our secret sauce.",
                price: "$8.95", 
                image: "/images/food/bbq-sandwich.jpg",
                badge: "Popular"
              },
              {
                name: "Famous Limeade",
                description: "Our signature ice-cold, refreshing drink made fresh daily.",
                price: "$3.50",
                image: "/images/restaurant/ice-cream-glass.jpg",
                badge: "Signature"
              },
              {
                name: "Ice Cream Sundae",
                description: "Premium ice cream with fresh toppings and whipped cream.",
                price: "$6.95",
                image: "/images/restaurant/ice-cream-sundae.jpg",
                badge: "Classic"
              }
            ].map((item, index) => (
              <Card key={index} className="group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-neutral-white border border-neutral-gray-lighter hover:border-primary-red/30 hover:-translate-y-1">
                <div className="aspect-h-3 aspect-w-4 relative overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary-red/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <h3 className="font-heading text-lg font-semibold text-neutral-black group-hover:text-primary-red transition-colors duration-250 leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-primary-red font-mono font-bold text-xl whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-neutral-gray-dark text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" variant="secondary">
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Optimized Photo Gallery */}
      <OptimizedPhotoGallery />

      {/* Customer Testimonials */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-neutral-off-white to-neutral-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What People Say"
            title="Loved by Generations"
            description="Don't just take our word for it - hear from the families and food lovers who keep coming back."
            centered
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Four generations of my family have been coming here. The waffle cones are still made the exact same way as when my great-grandmother first tried them!",
                author: "Sarah M.",
                role: "4th Generation Customer",
                rating: 5
              },
              {
                text: "Absolutely incredible BBQ and the most amazing ice cream. Watching them make the waffle cones on that antique machine is worth the trip alone.",
                author: "Mike R.",
                role: "Food Enthusiast",
                rating: 5
              },
              {
                text: "This place is a Norfolk treasure. The limeade is legendary and the curb service takes you back in time. A must-visit!",
                author: "Jennifer L.",
                role: "Local Food Blogger",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-neutral-gray-lighter">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-primary-yellow fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-neutral-gray-dark mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                  <footer>
                    <div className="font-semibold text-neutral-black">{testimonial.author}</div>
                    <div className="text-primary-red text-sm">{testimonial.role}</div>
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <Awards />

      {/* Google Maps & Location */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary-navy to-neutral-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Find Us"
            title="Visit Our Historic Location"
            description="We're conveniently located at the corner of 20th Street & Monticello Ave in Norfolk - the same spot we've called home for generations."
            centered
            className="mb-16 text-white [&_span]:text-primary-yellow [&_h2]:text-white [&_p]:text-neutral-gray-light"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Container */}
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-neutral-gray-dark">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.8944!2d-76.284!3d36.877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae1e8b4b4e4e7%3A0x1234567890abcdef!2sDoumar%27s%20Cones%20%26%20Barbecue!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Doumar's Location on Google Maps"
                  className="rounded-xl"
                />
              </div>
              
              {/* Map overlay with quick actions */}
              <div className="absolute top-4 right-4">
                <Button
                  asChild
                  variant="secondary"
                  className="bg-white/90 backdrop-blur-sm hover:bg-white text-neutral-black border-0 shadow-lg"
                >
                  <a
                    href="https://maps.google.com/?q=Doumar's+Cones+Barbecue+Norfolk+VA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Maps
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">Address</h3>
                  <p className="text-white/90 leading-relaxed">
                    1919 Monticello Ave<br />
                    Norfolk, VA 23517
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">Phone</h3>
                  <p className="text-white/90">
                    <a href="tel:7576274163" className="hover:text-primary-yellow transition-colors underline">
                      (757) 627-4163
                    </a>
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">Hours</h3>
                  <div className="text-white/90 text-sm space-y-1">
                    <p>Mon-Thu: 11am-10pm</p>
                    <p>Fri-Sat: 11am-11pm</p>
                    <p>Sun: 11am-9pm</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-heading font-semibold text-white mb-3">Quick Order</h3>
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full bg-primary-red hover:bg-primary-red/80 text-white border-0"
                  >
                    <a
                      href="https://order.toasttab.com/online/doumars-cones-barbecue-1919-monticello-ave"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Order Online
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Special features */}
              <div className="bg-white/10 rounded-lg p-6 border border-white/20">
                <h3 className="text-xl font-heading font-semibold text-white mb-3">What Makes Us Special</h3>
                <ul className="text-white/90 space-y-2 text-sm">
                  <li>• Famous curb service - we bring food to your car!</li>
                  <li>• Live waffle cone demonstrations on original 1905 machine</li>
                  <li>• Family-friendly atmosphere with kids menu</li>
                  <li>• Historic Norfolk landmark since 1904</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  )
}
