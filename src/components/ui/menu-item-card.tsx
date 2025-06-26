"use client"

import { memo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { MenuItem } from '@/types/menu'
import { formatPrice } from '@/lib/utils'

interface MenuItemCardProps {
  item: MenuItem
}

export const MenuItemCard = memo(function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <motion.div
      className="group"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Card className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl transition-all duration-300 bg-white border-gray-100 rounded-lg focus-within:ring-2 focus-within:ring-primary-red focus-within:ring-offset-2">
        {/* Conditional Image */}
        {item.imageUrl && (
          <div className="relative aspect-video">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}

        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="space-y-4 flex flex-col flex-grow">
            {/* Item Info */}
            <div className="flex-grow">
              <h3 className="font-heading text-xl font-semibold text-neutral-black mb-2 leading-tight">
                {item.name}
              </h3>
              
              {item.description && (
                <p className="text-neutral-gray-medium text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              )}

              {/* Pricing Display */}
              <div className="mt-auto">
                {item.price && !item.variations ? (
                  // Simple item with single price
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary-red">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                ) : item.variations ? (
                  // Complex item with variations
                  <div className="space-y-2">
                    {item.variations.map((variation, index) => (
                      <div key={index} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
                        <span className="text-sm text-neutral-gray-dark flex-1 pr-3">
                          {variation.name}
                        </span>
                        <span className="text-lg font-semibold text-primary-red whitespace-nowrap">
                          {formatPrice(variation.price)}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
})

MenuItemCard.displayName = 'MenuItemCard'