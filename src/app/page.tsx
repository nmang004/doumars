import { Layout } from "@/components/layout/layout"
import { Hero } from "@/components/sections/hero"

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Our Story Preview Section */}
      <section id="our-story" className="py-24 bg-doumar-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  Our Legacy
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-doumar-black">
                  Four Generations of 
                  <span className="text-primary"> Family Tradition</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  It all started at the 1904 World's Fair in St. Louis, where Abe Doumar 
                  invented the world's first waffle cone. Today, we're still making cones 
                  on that very same machine, serving up the same quality and tradition 
                  that has made us a Norfolk institution.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1904</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4</div>
                  <div className="text-sm text-gray-600">Generations</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/images/historical/1904-worlds-fair.jpg"
                  alt="1904 World's Fair - The Birth of the Waffle Cone"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Signature Items
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-doumar-black">
              Taste the <span className="text-primary">Tradition</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From our world-famous waffle cones to our slow-cooked barbecue, 
              every item is made with the same care and quality we've maintained for over 120 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Original Waffle Cone",
                description: "Made fresh on our 1905 machine",
                price: "$4.50",
                image: "/images/restaurant/cone-machine-operator.jpg"
              },
              {
                name: "BBQ Sandwich",
                description: "Slow-cooked perfection",
                price: "$8.95", 
                image: "/images/food/bbq-sandwich.jpg"
              },
              {
                name: "Famous Limeade",
                description: "Our signature refreshing drink",
                price: "$3.50",
                image: "/images/restaurant/ice-cream-glass.jpg"
              }
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-heading text-xl font-semibold text-doumar-black">
                      {item.name}
                    </h3>
                    <span className="text-primary font-bold text-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
