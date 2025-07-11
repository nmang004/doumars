"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { fadeInUp } from "@/lib/motion"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ 
  title, 
  subtitle, 
  description, 
  centered = false, 
  className 
}: SectionHeadingProps) {
  return (
    <motion.div 
      className={cn(
        "space-y-4",
        centered && "text-center",
        className
      )}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {subtitle && (
        <motion.span 
          className="text-primary-red font-semibold text-sm uppercase tracking-wider"
          variants={fadeInUp}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-black"
        variants={fadeInUp}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          className={cn(
            "text-neutral-gray-dark text-lg max-w-2xl",
            centered && "mx-auto"
          )}
          variants={fadeInUp}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}