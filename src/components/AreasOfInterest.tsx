'use client'

import { motion } from 'framer-motion'
import { areasOfInterest } from '@/data/personal'
import { Heart, Code2, Database, Globe, Layers, Cpu } from 'lucide-react'

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

const icons = [Heart, Code2, Database, Globe, Layers, Cpu]

export default function AreasOfInterest() {
  return (
    <section className="py-20 lg:pl-80 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl font-bold text-primary mb-8">Areas of Interest</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areasOfInterest.map((interest, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-surface rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-royal-blue/30 transition-all cursor-pointer group"
                whileHover={{ y: -8, scale: 1.02 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-royal-blue/10 transition-colors">
                  <Icon className="w-7 h-7 text-royal-blue group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-primary group-hover:text-royal-blue transition-colors">
                  {interest}
                </h3>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
