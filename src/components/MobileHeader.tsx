'use client'

import { motion } from 'framer-motion'
import { basePath, personalInfo } from '@/data/personal'

export default function MobileHeader() {
  return (
    <motion.header
      className="lg:hidden fixed top-0 left-0 right-0 bg-surface/90 backdrop-blur-md border-b border-border z-30 px-4 py-3"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
          <img
            src={`${basePath}/profile.jpg`}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-lg font-bold text-primary">{personalInfo.name}</h1>
          <p className="text-xs text-royal-blue">{personalInfo.title}</p>
        </div>
      </div>
    </motion.header>
  )
}
