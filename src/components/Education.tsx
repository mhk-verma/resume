'use client'

import { motion } from 'framer-motion'
import { education } from '@/data/personal'
import { GraduationCap, Calendar } from 'lucide-react'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export default function Education() {
  return (
    <section id="education" className="py-20 lg:pl-80 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl font-bold text-primary mb-8">Education</h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
          
          {/* Education Items */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 top-6 w-5 h-5 bg-royal-blue rounded-full border-4 border-background" />
                
                {/* Education Card */}
                <div className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <GraduationCap className="w-6 h-6 text-royal-blue flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {edu.degree}
                      </h3>
                      {edu.institution && (
                        <p className="text-muted-text mb-2">{edu.institution}</p>
                      )}
                      {edu.period && (
                        <div className="flex items-center gap-2 text-sm text-muted-text mb-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                      )}
                      <p className="text-royal-blue font-medium">{edu.details}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
