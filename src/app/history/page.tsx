import { Layout } from "@/components/layout/layout"
import { AnimatedHistoryHero } from "@/components/sections/history/animated-history-hero"
import { EnhancedHistoryTimeline } from "@/components/sections/history/enhanced-history-timeline"
import { HistoricalPhotoShowcase } from "@/components/sections/history/historical-photo-showcase"
import { ConeMachineLegacy } from "@/components/sections/history/cone-machine-legacy"
import { FamilyTreeSection } from "@/components/sections/history/family-tree-section"
import { HistoricalArtifactsGallery } from "@/components/sections/history/historical-artifacts-gallery"
import { LegacyQuoteSection } from "@/components/sections/history/legacy-quote-section"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our History - From 1904 World's Fair to Today | Doumar's",
  description: "Discover the remarkable history of Doumar's, from Abe Doumar's invention of the waffle cone at the 1904 World's Fair to becoming Norfolk's beloved 4-generation family restaurant.",
  keywords: "Doumar's history, 1904 World's Fair, waffle cone invention, Abe Doumar, Norfolk history, Virginia restaurant history, family business story",
}

export default function HistoryPage() {
  return (
    <Layout>
      {/* Animated Hero Section */}
      <AnimatedHistoryHero />

      {/* Enhanced Historical Timeline */}
      <EnhancedHistoryTimeline />

      {/* Historical Photo Showcase with Parallax */}
      <HistoricalPhotoShowcase />

      {/* Cone Machine Legacy Interactive Section */}
      <ConeMachineLegacy />

      {/* Family Tree Section */}
      <FamilyTreeSection />

      {/* Historical Artifacts Gallery */}
      <HistoricalArtifactsGallery />

      {/* Legacy Quote Closing Section */}
      <LegacyQuoteSection />
    </Layout>
  )
}