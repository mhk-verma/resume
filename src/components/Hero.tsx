'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code2, Database, Globe } from 'lucide-react'
import { basePath, personalInfo } from '@/data/personal'
import { useState, useEffect } from 'react'

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = personalInfo.title
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center lg:pl-80 pt-16 lg:pt-0 px-6 relative">
      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Mobile Profile Photo */}
        <motion.div
          className="lg:hidden w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-primary/10 glow-effect"
          variants={heroVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={`${basePath}/profile.jpg`}
            alt={personalInfo.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Greeting */}
        <motion.div variants={heroVariants} className="mb-4">
          <span className="text-royal-blue font-medium">Hello, I'm</span>
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          variants={heroVariants}
          className="text-5xl lg:text-7xl font-bold text-gradient mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Title with typing effect */}
        <motion.h2
          variants={heroVariants}
          className="text-2xl lg:text-3xl font-semibold text-royal-blue mb-6 h-10"
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={heroVariants}
          className="text-lg text-muted-text mb-8 max-w-2xl"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Tech Stack Icons with pulse */}
        <motion.div
          variants={heroVariants}
          className="flex gap-6 mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="pulse"
          >
            <Code2 className="w-8 h-8 text-primary/60" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="pulse"
            style={{ animationDelay: '0.5s' }}
          >
            <Database className="w-8 h-8 text-primary/60" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="pulse"
            style={{ animationDelay: '1s' }}
          >
            <Globe className="w-8 h-8 text-primary/60" />
          </motion.div>
        </motion.div>

        {/* CTA Buttons with enhanced effects */}
        <motion.div
          variants={heroVariants}
          className="flex gap-4 flex-wrap"
        >
          <motion.button
            onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 glow-effect relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="shimmer absolute inset-0" />
            <span className="relative z-10">View My Work</span>
            <ArrowRight className="w-4 h-4 relative z-10" />
          </motion.button>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-surface text-primary border border-border rounded-lg font-medium hover:bg-primary/5 transition-colors glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={heroVariants}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2 glow-effect">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
