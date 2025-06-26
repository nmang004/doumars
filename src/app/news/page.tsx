'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: "This Classic Drive-In Restaurant In Virginia Serves Up The Best Burgers You'll Ever Taste",
    summary: "Doumar's comes pretty close to a time machine!!!",
    author: "Christina Rado",
    image: "/images/news/doumar-mention.jpg",
    link: "https://www.newsbreak.com/news/2940123456789/this-classic-drive-in-restaurant-in-virginia-serves-up-the-best-burgers-youll-ever-taste",
    date: "March 2024"
  },
  {
    id: 2,
    title: "15 Drive-Ins Across the US that you should visit!",
    summary: "Doumar's listed as one of the must-visit drive-ins across America!",
    author: "DB Kelly",
    image: "/images/news/drive-ins-usa.jpg", 
    link: "https://www.tastingtable.com/15-drive-ins-across-the-us-that-you-should-visit",
    date: "February 2024"
  },
  {
    id: 3,
    title: "Holiday Hours Update",
    summary: "Check our updated holiday hours to plan your visit accordingly.",
    image: "/images/news/holiday-hours.jpg",
    isAnnouncement: true,
    date: "December 2023"
  },
  {
    id: 4,
    title: "Celebrating 120+ Years of Cone Innovation",
    summary: "From the world's first ice cream cone machine to today's delicious treats.",
    image: "/images/news/anniversary.jpg",
    isAnnouncement: true,
    date: "August 2023"
  }
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-orange-900 mb-6">
            Doumar's News
          </h1>
          <p className="text-xl text-orange-700 mb-8">
            Stay up to date with what's happening at America's first ice cream cone birthplace
          </p>
        </motion.div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-orange-400 to-yellow-400">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-20">📰</div>
                </div>
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.date}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-orange-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                {item.author && (
                  <p className="text-sm text-orange-600 mb-2">
                    By {item.author}
                  </p>
                )}
                
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {item.summary}
                </p>
                
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                  >
                    Read Full Article →
                  </Link>
                ) : (
                  <div className="text-orange-600 font-semibold">
                    📢 Announcement
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-orange-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Want to Share News About Doumar's?
            </h2>
            <p className="text-xl mb-8 text-orange-200">
              Have a story or event featuring Doumar's? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:(757)627-4163"
                className="bg-yellow-500 text-orange-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
              >
                📞 Call Us: (757) 627-4163
              </Link>
              <Link
                href="mailto:info@doumars.com"
                className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-orange-900 transition-colors duration-200"
              >
                ✉️ Email Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}