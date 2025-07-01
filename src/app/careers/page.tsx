import { Layout } from "@/components/layout/layout"
import { Metadata } from "next"
import { CareersContent } from "@/components/sections/careers-content"

export const metadata: Metadata = {
  title: "Careers - Join the Doumar's Family | Doumar's Cones and BBQ",
  description: "Join our team at Doumar's! We're hiring for multiple positions including curbside service, counter staff, kitchen staff, and more. Be part of Norfolk's historic restaurant family.",
}

export default function CareersPage() {
  return (
    <Layout>
      <CareersContent />
    </Layout>
  )
}