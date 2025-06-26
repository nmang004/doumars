import { Layout } from "@/components/layout/layout"
import { SectionHeading } from "@/components/ui/section-heading"
import { Timeline } from "@/components/sections/timeline"
import { PhotoGallery } from "@/components/sections/photo-gallery"
import { FamilyStory } from "@/components/sections/family-story"
import { Awards } from "@/components/sections/awards"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us - The Doumar Family Legacy | Doumar's Cones and BBQ",
  description: "Discover the incredible story of Doumar's, from Abe Doumar's invention of the waffle cone at the 1904 World's Fair to four generations of family tradition in Norfolk, Virginia.",
  keywords: "Doumar family, 1904 World's Fair, waffle cone history, Norfolk Virginia, family restaurant, BBQ tradition",
}

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-doumar-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <SectionHeading
              subtitle="Our Legacy"
              title="The Story Behind the World's First Waffle Cone"
              description="From a young entrepreneur&apos;s innovation at the 1904 World&apos;s Fair to a Norfolk institution spanning four generations, discover the remarkable journey of the Doumar family."
              centered
            />
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 max-w-4xl mx-auto">
              {[
                { number: "1904", label: "Founded" },
                { number: "4", label: "Generations" },
                { number: "120+", label: "Years of Service" },
                { number: "1", label: "Original Machine" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/50 p-4 rounded-lg shadow-sm">
                  <div className="text-4xl md:text-5xl font-bold text-primary font-heading mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm uppercase tracking-wider font-semibold">
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
      <section className="py-20 md:py-32 bg-doumar-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <SectionHeading
                subtitle="Still Making History"
                title="The Original 1905 Cone Machine"
                description="Over 118 years later, we&apos;re still using the very same waffle cone machine that Abe Doumar used to start it all. Every cone is hand-rolled with the same care and precision."
                className="text-white [&_span]:text-primary [&_h2]:text-white [&_p]:text-gray-300"
              />
              
              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-lg">Hand-Crafted Tradition</h4>
                    <p className="text-gray-300">Each cone is still rolled by hand, just like Abe did in 1904.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-lg">Original Recipe</h4>
                    <p className="text-gray-300">The same waffle cone recipe that won hearts at the World&apos;s Fair.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white text-lg">Living History</h4>
                    <p className="text-gray-300">Watch our cone makers demonstrate this historic craft every day.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px]">
              <Image
                src="/images/restaurant/cone-machine-operator.jpg"
                alt="Original 1905 waffle cone machine in operation"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg text-center">
                <div className="text-4xl font-bold font-heading">1905</div>
                <div className="text-sm uppercase tracking-wider">Original Machine</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Quote */}
      <section className="py-24 bg-doumar-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="space-y-6">
            <div className="text-7xl text-primary opacity-20">&quot;</div>
            <p className="text-2xl md:text-3xl font-heading text-doumar-black leading-relaxed">
              We&apos;re not just serving food – we&apos;re serving history. Every cone tells the story 
              of innovation, family, and the American dream.
            </p>
            <footer className="text-gray-600">
              <cite className="font-medium text-lg">— The Doumar Family</cite>
            </footer>
          </blockquote>
        </div>
      </section>
    </Layout>
  )
}