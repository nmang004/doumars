import { Layout } from "@/components/layout/layout"
import { Hero } from "@/components/sections/hero"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Our Story Preview Section */}
      <section id="our-story" className="py-20 md:py-32 bg-neutral-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <SectionHeading 
                subtitle="Our Legacy"
                title="Four Generations of Family Tradition"
                description="It all started at the 1904 World's Fair in St. Louis, where Abe Doumar invented the world's first waffle cone. Today, we're still making cones on that very same machine, serving up the same quality and tradition that has made us a Norfolk institution."
              />
              
              <div className="grid grid-cols-2 gap-6 max-w-sm mx-auto lg:mx-0">
                <div className="text-center bg-gradient-to-br from-primary-red/5 to-primary-yellow/5 border border-primary-red/20 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-250">
                  <div className="text-h3 font-heading font-bold text-primary-red">1904</div>
                  <div className="text-sm text-neutral-gray-dark font-semibold uppercase tracking-wider">Founded</div>
                </div>
                <div className="text-center bg-gradient-to-br from-primary-yellow/5 to-primary-navy/5 border border-primary-navy/20 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-250">
                  <div className="text-h3 font-heading font-bold text-primary-navy">4</div>
                  <div className="text-sm text-neutral-gray-dark font-semibold uppercase tracking-wider">Generations</div>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild variant="default" size="lg">
                  <Link href="/about">Discover Our Full Story</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-[500px] lg:h-auto lg:aspect-square">
              <ImageWithFallback
                src="/images/historical/1904-worlds-fair.jpg"
                alt="1904 World's Fair - The Birth of the Waffle Cone"
                fill
                className="object-cover rounded-xl shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-350 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-neutral-white via-primary-navy/5 to-neutral-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Signature Items"
            title="Taste the Tradition"
            description="From our world-famous waffle cones to our slow-cooked barbecue, every item is made with the same care and quality we've maintained for over 120 years."
            centered
            className="mb-12 md:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Original Waffle Cone",
                description: "Made fresh on our original 1905 machine.",
                price: "$4.50",
                image: "/images/restaurant/cone-machine-operator.jpg"
              },
              {
                name: "BBQ Pork Sandwich",
                description: "Slow-cooked perfection on a fresh bun.",
                price: "$8.95", 
                image: "/images/food/bbq-sandwich.jpg"
              },
              {
                name: "Famous Limeade",
                description: "Our signature ice-cold, refreshing drink.",
                price: "$3.50",
                image: "/images/restaurant/ice-cream-glass.jpg"
              }
            ].map((item, index) => (
              <Card key={index} className="group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-250 bg-neutral-white border border-neutral-gray-lighter hover:border-primary-red/20">
                <div className="aspect-h-3 aspect-w-4 relative overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-350 ease-out"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-heading text-xl font-semibold text-neutral-black group-hover:text-primary-red transition-colors duration-250">
                      {item.name}
                    </h3>
                    <span className="text-primary-red font-mono font-bold text-lg whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-neutral-gray-dark mt-2 text-sm leading-relaxed">{item.description}</p>
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
    </Layout>
  )
}
