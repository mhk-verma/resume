'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'
import { personalInfo } from '@/data/personal'

const sidebarVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function Sidebar() {
  return (
    <motion.aside
      className="hidden lg:block fixed left-0 top-0 h-screen w-80 glass border-r border-border p-8 z-50"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col h-full">
        {/* Profile Photo */}
        <motion.div
          className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-primary/10 glow-effect"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="/profile.jpg"
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name and Title */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-2xl font-bold text-gradient mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p 
            className="text-royal-blue font-medium"
            whileHover={{ scale: 1.02 }}
          >
            {personalInfo.title}
          </motion.p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-8">
          <motion.div 
            className="flex items-center gap-3 text-muted-text"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Mail className="w-5 h-5 text-royal-blue" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
              {personalInfo.email}
            </a>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 text-muted-text"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Phone className="w-5 h-5 text-royal-blue" />
            <span>{personalInfo.phone}</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-3 text-muted-text"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MapPin className="w-5 h-5 text-royal-blue" />
            <span>{personalInfo.location}</span>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-auto">
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors glow-effect"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-5 h-5 text-primary" />
          </motion.a>
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors glow-effect"
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-5 h-5 text-primary" />
          </motion.a>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-text pt-4 border-t border-border">
          © 2024 Mahak Verma
        </div>
      </div>
    </motion.aside>
  )
}
