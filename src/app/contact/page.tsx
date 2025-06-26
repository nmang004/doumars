import { Layout } from "@/components/layout/layout"
import { ContactInfo } from "@/components/sections/contact-info"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact & Location - Doumar's Cones and BBQ | Norfolk, Virginia",
  description: "Visit Doumar's at 20th Street & Monticello Ave in Norfolk, VA. Get directions, hours, contact info, and learn about our famous curb service tradition.",
  keywords: "Doumar's location, Norfolk Virginia, contact information, directions, hours, curb service, drive-in restaurant",
}

export default function ContactPage() {
  return (
    <Layout>
      <ContactInfo />
    </Layout>
  )
}