import { Layout } from "@/components/layout/layout"
import { SectionHeading } from "@/components/ui/section-heading"
import { Timeline } from "@/components/sections/timeline"
import { PhotoGallery } from "@/components/sections/photo-gallery"
import { FamilyStory } from "@/components/sections/family-story"
import { Awards } from "@/components/sections/awards"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - The Doumar Family Legacy | Doumar's Cones and BBQ",
  description: "Discover the incredible story of Doumar's, from Abe Doumar's invention of the waffle cone at the 1904 World's Fair to four generations of family tradition in Norfolk, Virginia.",
  keywords: "Doumar family, 1904 World's Fair, waffle cone history, Norfolk Virginia, family restaurant, BBQ tradition",
}

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-doumar-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <SectionHeading
              subtitle="Our Legacy"
              title="The Story Behind the World's First Waffle Cone"
              description="From a young entrepreneur's innovation at the 1904 World's Fair to a Norfolk institution spanning four generations, discover the remarkable journey of the Doumar family."
              centered
            />
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {[
                { number: "1904", label: "Founded" },
                { number: "4", label: "Generations" },
                { number: "120+", label: "Years of Service" },
                { number: "1", label: "Original Machine" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary font-heading mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <Timeline />

      {/* Family Story */}
      <FamilyStory />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Awards & Recognition */}
      <Awards />

      {/* The Machine Section */}
      <section className="py-24 bg-doumar-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                subtitle="Still Making History"
                title="The Original 1905 Cone Machine"
                description="Over 118 years later, we're still using the very same waffle cone machine that Abe Doumar used to start it all. Every cone is hand-rolled with the same care and precision."
                className="text-white [&_span]:text-primary [&_h2]:text-white [&_p]:text-gray-300"
              />
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Hand-Crafted Tradition</h4>
                    <p className="text-gray-300 text-sm">Each cone is still rolled by hand, just like Abe did in 1904</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Original Recipe</h4>
                    <p className="text-gray-300 text-sm">The same waffle cone recipe that won hearts at the World's Fair</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Living History</h4>
                    <p className="text-gray-300 text-sm">Watch our cone makers demonstrate this historic craft every day</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="/images/restaurant/cone-machine-operator.jpg"
                  alt="Original 1905 waffle cone machine in operation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">1905</div>
                  <div className="text-xs uppercase">Original Machine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Quote */}
      <section className="py-24 bg-doumar-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="space-y-6">
            <div className="text-6xl text-primary opacity-20">"</div>
            <p className="text-2xl md:text-3xl font-heading text-doumar-black leading-relaxed">
              We're not just serving food – we're serving history. Every cone tells the story 
              of innovation, family, and the American dream.
            </p>
            <footer className="text-gray-600">
              <cite className="font-medium">— The Doumar Family</cite>
            </footer>
          </blockquote>
        </div>
      </section>
    </Layout>
  )
}