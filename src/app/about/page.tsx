import { Layout } from "@/components/layout/layout"
import { Timeline } from "@/components/sections/timeline"
import { PhotoGallery } from "@/components/sections/photo-gallery"
import { FamilyStory } from "@/components/sections/family-story"
import { Awards } from "@/components/sections/awards"
import { AnimatedAboutHero } from "@/components/sections/animated-about-hero"
import { AnimatedMachineSection } from "@/components/sections/animated-machine-section"
import { AnimatedLegacyQuote } from "@/components/sections/animated-legacy-quote"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - The Doumar Family Legacy | Doumar's Cones and BBQ",
  description: "Discover the incredible story of Doumar's, from Abe Doumar's invention of the waffle cone at the 1904 World's Fair to four generations of family tradition in Norfolk, Virginia.",
  keywords: "Doumar family, 1904 World's Fair, waffle cone history, Norfolk Virginia, family restaurant, BBQ tradition",
}

export default function AboutPage() {
  return (
    <Layout>
      {/* Animated Hero Section */}
      <AnimatedAboutHero />

      {/* Historical Timeline */}
      <Timeline />

      {/* Family Story */}
      <FamilyStory />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Awards & Recognition */}
      <Awards />

      {/* Enhanced Machine Section with Animations */}
      <AnimatedMachineSection />

      {/* Enhanced Legacy Quote with Food Parade */}
      <AnimatedLegacyQuote />
    </Layout>
  )
}