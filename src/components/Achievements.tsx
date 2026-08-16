'use client'

import { motion } from 'framer-motion'
import { achievements } from '@/data/personal'
import { Trophy, Star, Target, Zap } from 'lucide-react'

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

const icons = [Trophy, Star, Target, Zap]

export default function Achievements() {
  return (
    <section className="py-20 lg:pl-80 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl font-bold text-primary mb-8">Achievements</h2>
        
        <div className="space-y-4">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-surface rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow flex items-start gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-royal-blue" />
                </div>
                <p className="text-muted-text leading-relaxed">{achievement}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
