'use client'

import { motion } from 'framer-motion'
import { certifications } from '@/data/personal'
import { Award, Building2 } from 'lucide-react'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export default function Certifications() {
  return (
    <section className="py-20 lg:pl-80 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl font-bold text-primary mb-8">Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-royal-blue/30 transition-all"
              whileHover={{ y: -4, scale: 1.02 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-royal-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-text text-sm">
                    <Building2 className="w-4 h-4" />
                    {cert.institution}
                  </div>
                  {cert.details && (
                    <p className="text-royal-blue text-sm mt-2 font-medium">
                      {cert.details}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
