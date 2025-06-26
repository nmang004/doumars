import { Layout } from "@/components/layout/layout"
import { MenuDisplay } from "@/components/sections/menu-display"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Menu - Doumar's Cones and BBQ | World Famous Waffle Cones & BBQ",
  description: "Explore our complete menu featuring world-famous waffle cones, slow-cooked barbecue, signature limeade, and classic American favorites. Made fresh daily since 1904.",
  keywords: "Doumar's menu, waffle cones, barbecue, ice cream, limeade, Norfolk restaurant, family dining",
}

export default function MenuPage() {
  return (
    <Layout>
      <MenuDisplay />
    </Layout>
  )
}