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
        {/* Conditional Image - Compact horizontal on XL screens */}
        {item.imageUrl && (
          <div className="relative aspect-video xl:aspect-[2.5/1] xl:h-20">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}

        <CardContent className="p-6 xl:p-4 flex flex-col flex-grow">
          <div className="space-y-4 xl:space-y-3 flex flex-col flex-grow">
            {/* Item Info */}
            <div className="flex-grow">
              <h3 className="font-heading text-xl xl:text-lg font-semibold text-neutral-black mb-2 xl:mb-1.5 leading-tight">
                {item.name}
              </h3>
              
              {item.description && (
                <p className="text-neutral-gray-medium text-sm xl:text-xs leading-relaxed mb-4 xl:mb-3">
                  {item.description}
                </p>
              )}

              {/* Pricing Display */}
              <div className="mt-auto">
                {item.price && !item.variations ? (
                  // Simple item with single price
                  <div className="text-right">
                    <span className="text-2xl xl:text-xl font-bold text-primary-red">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                ) : item.variations ? (
                  // Complex item with variations - More compact on desktop
                  <div className="space-y-2 xl:space-y-1">
                    {item.variations.map((variation, index) => (
                      <div key={index} className="flex justify-between items-center py-1 xl:py-0.5 border-b border-gray-100 last:border-b-0">
                        <span className="text-sm xl:text-xs text-neutral-gray-dark flex-1 pr-3">
                          {variation.name}
                        </span>
                        <span className="text-lg xl:text-base font-semibold text-primary-red whitespace-nowrap">
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