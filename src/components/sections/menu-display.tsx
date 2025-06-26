"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { MenuItemCard } from "@/components/ui/menu-item-card"
import { getCategories, getItemsByCategory } from "@/data/menu-data"
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/motion"

export function MenuDisplay() {
  const categories = getCategories()

  return (
    <div className="min-h-screen bg-neutral-off-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-neutral-black to-neutral-gray-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <SectionHeading
              subtitle="Our Complete Menu"
              title="World Famous Flavors Since 1904"
              description="From our original waffle cones to slow-cooked barbecue, every item is made with the same care and quality we've maintained for over 120 years"
              centered
              className="text-white [&_span]:text-primary-yellow [&_h2]:text-white [&_p]:text-neutral-gray-light"
            />
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category-First Menu Display */}
        {categories.map((category) => {
          const categoryItems = getItemsByCategory(category)
          
          return (
            <motion.section
              key={category}
              className="mb-16 last:mb-0"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-10%" }}
            >
              {/* Category Header */}
              <div className="mb-8 mt-12 first:mt-0">
                <h2 className="font-heading text-h2 font-bold text-primary-red mb-4">
                  {category}
                </h2>
                <div className="w-24 h-1 bg-primary-red rounded"></div>
              </div>

              {/* Menu Items Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {categoryItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={staggerItem}
                  >
                    <MenuItemCard item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )
        })}
      </div>
    </div>
  )
}