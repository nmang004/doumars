import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ScrapbookGallery } from "@/components/sections/scrapbook-gallery"

export const metadata: Metadata = {
  title: "Our Scrapbook - Doumar's Family Legacy | Doumar's Cones and BBQ",
  description: "Journey through 120+ years of Doumar's family history from the 1904 World's Fair to today. Our scrapbook tells the story of Norfolk's iconic restaurant and the family legacy behind it.",
  keywords: "Doumar's history, family legacy, Norfolk restaurant history, waffle cone invention, Ocean View Amusement Park, 1904 World's Fair, Abe Doumar",
  openGraph: {
    title: "Our Scrapbook - Doumar's Family Legacy",
    description: "Journey through 120+ years of Doumar's family history from the 1904 World's Fair to today.",
    type: "website",
    url: "https://doumars.com/our-scrapbook",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Scrapbook - Doumar's Family Legacy",
    description: "Journey through 120+ years of Doumar's family history from the 1904 World's Fair to today.",
  },
}

export default function OurScrapbookPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-red-50">
      <Header />
      <main>
        <ScrapbookGallery />
      </main>
      <Footer />
    </div>
  )
}