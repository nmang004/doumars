import { Layout } from "@/components/layout/layout"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageWithFallback } from "@/components/ui/image-with-fallback"
import { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, Calendar, User, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "News & Press - What's Happening at Doumar's | Doumar's Cones and BBQ",
  description: "Stay up to date with the latest news, press coverage, and events at Doumar's. From media features to special announcements.",
  keywords: "Doumar's news, press coverage, Norfolk restaurant news, events, announcements",
}

const newsItems = [
  {
    id: 1,
    title: "This Classic Drive-In Restaurant In Virginia Serves Up The Best Burgers You'll Ever Taste",
    summary: "Doumar's comes pretty close to a time machine!!!",
    author: "Christina Rado",
    image: "/images/restaurant/cone-machine-operator.jpg",
    link: "https://www.newsbreak.com/news/2940123456789/this-classic-drive-in-restaurant-in-virginia-serves-up-the-best-burgers-youll-ever-taste",
    date: "March 2024",
    type: "press"
  },
  {
    id: 2,
    title: "15 Drive-Ins Across the US that you should visit!",
    summary: "Doumar's listed as one of the must-visit drive-ins across America!",
    author: "DB Kelly",
    image: "/images/historical/1904-worlds-fair.jpg", 
    link: "https://www.tastingtable.com/15-drive-ins-across-the-us-that-you-should-visit",
    date: "February 2024",
    type: "press"
  },
  {
    id: 3,
    title: "Holiday Hours Update",
    summary: "Check our updated holiday hours to plan your visit accordingly.",
    image: "/images/restaurant/ice-cream-glass.jpg",
    date: "December 2023",
    type: "announcement"
  },
  {
    id: 4,
    title: "Celebrating 120+ Years of Cone Innovation",
    summary: "From the world's first ice cream cone machine to today's delicious treats.",
    image: "/images/food/bbq-sandwich.jpg",
    date: "August 2023",
    type: "announcement"
  }
]

export default function NewsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-doumar-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <SectionHeading
              subtitle="Stay Connected"
              title="Doumar's News & Press"
              description="Stay up to date with what's happening at America's first ice cream cone birthplace. From press coverage to special announcements."
              centered
            />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card key={item.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-h-3 aspect-w-4 relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.date}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                      item.type === 'press' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.type === 'press' ? 'Press Coverage' : 'Announcement'}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-doumar-black line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    {item.author && (
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="h-4 w-4 mr-2" />
                        <span>By {item.author}</span>
                      </div>
                    )}
                    
                    <p className="text-gray-600 line-clamp-3">
                      {item.summary}
                    </p>
                    
                    {item.link ? (
                      <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Full Article
                        </Link>
                      </Button>
                    ) : (
                      <div className="flex items-center text-primary font-medium text-sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Company Announcement
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-doumar-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <SectionHeading
              subtitle="Share Your Story"
              title="Want to Share News About Doumar's?"
              description="Have a story or event featuring Doumar's? We'd love to hear from you and share it with our community!"
              centered
              className="text-white [&_span]:text-primary [&_h2]:text-white [&_p]:text-gray-300"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button asChild size="lg">
                <Link href="tel:(757)627-4163">
                  📞 Call Us: (757) 627-4163
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-doumar-black">
                <Link href="mailto:info@doumars.com">
                  ✉️ Email Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}