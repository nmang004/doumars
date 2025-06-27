"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Calendar, FileText, Award, Camera, Filter } from "lucide-react"

const artifacts = [
  {
    id: 1,
    type: "menu",
    decade: "1930s",
    title: "Original 1934 Menu",
    description: "First menu from our Monticello Avenue location featuring ice cream and sandwiches",
    icon: FileText,
    color: "bg-amber-50 text-amber-600"
  },
  {
    id: 2,
    type: "photo",
    decade: "1940s",
    title: "WWII Era Service Photo",
    description: "Albert and Victor Doumar in military uniform before returning to the family business",
    icon: Camera,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 3,
    type: "award",
    decade: "1950s",
    title: "City Recognition Award",
    description: "Norfolk's official recognition of Doumar's contribution to local business",
    icon: Award,
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: 4,
    type: "document",
    decade: "1960s",
    title: "Original Cone Recipe Card",
    description: "Handwritten recipe card with Abe's secret waffle cone formula",
    icon: FileText,
    color: "bg-green-50 text-green-600"
  },
  {
    id: 5,
    type: "photo",
    decade: "1970s",
    title: "Three Generations Photo",
    description: "Rare photo showing three generations of Doumars working together",
    icon: Camera,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 6,
    type: "menu",
    decade: "1980s",
    title: "Expanded BBQ Menu",
    description: "Menu showing the full barbecue offerings that became our signature",
    icon: FileText,
    color: "bg-amber-50 text-amber-600"
  },
  {
    id: 7,
    type: "award",
    decade: "2000s",
    title: "James Beard Recognition",
    description: "Official James Beard America's Classic award documentation",
    icon: Award,
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: 8,
    type: "document",
    decade: "2010s",
    title: "Food Network Feature",
    description: "Production notes from our Food Network appearance",
    icon: FileText,
    color: "bg-green-50 text-green-600"
  }
]

const filterOptions = [
  { id: "all", label: "All Artifacts", icon: Filter },
  { id: "menu", label: "Menus", icon: FileText },
  { id: "photo", label: "Photos", icon: Camera },
  { id: "award", label: "Awards", icon: Award },
  { id: "document", label: "Documents", icon: Calendar }
]

export function HistoricalArtifactsGallery() {
  const [filter, setFilter] = useState("all")
  const [selectedArtifact, setSelectedArtifact] = useState<typeof artifacts[0] | null>(null)

  const filteredArtifacts = filter === "all" 
    ? artifacts 
    : artifacts.filter(artifact => artifact.type === filter)

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Historical Archives"
          title="Treasures from Our Past"
          description="A curated collection of menus, photographs, awards, and documents that tell the Doumar's story"
          centered
          className="mb-12"
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => setFilter(option.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${
                filter === option.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <option.icon className="w-4 h-4" />
              <span>{option.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Artifacts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredArtifacts.map((artifact, index) => (
              <motion.div
                key={artifact.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedArtifact(artifact)}
              >
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  {/* Artifact Preview */}
                  <div className={`aspect-square ${artifact.color} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <artifact.icon className="w-24 h-24 opacity-20" />
                    </motion.div>
                    
                    {/* Decade Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                      <span className="text-sm font-bold text-gray-700">{artifact.decade}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {artifact.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {artifact.description}
                    </p>
                    
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, x: 5 }}
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredArtifacts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500">No artifacts found for this category.</p>
          </motion.div>
        )}

        {/* Archive Note */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            These artifacts represent just a fraction of our historical collection. 
            Visit our Norfolk location to see more memorabilia and experience the living history 
            of Doumar&apos;s firsthand.
          </p>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedArtifact && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedArtifact(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-20 h-20 ${selectedArtifact.color} rounded-xl flex items-center justify-center mb-6`}>
                <selectedArtifact.icon className="w-10 h-10" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-primary font-semibold">{selectedArtifact.decade}</span>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mt-1">
                    {selectedArtifact.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {selectedArtifact.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    This artifact is part of the Doumar family archives, carefully preserved 
                    to document our journey from a World&apos;s Fair innovation to a Norfolk institution.
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedArtifact(null)}
                  className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}