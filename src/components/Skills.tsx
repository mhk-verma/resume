'use client'

import { motion } from 'framer-motion'
import { technicalSkills, softSkills, languages } from '@/data/personal'
import { Code, Database, Wrench, Monitor } from 'lucide-react'

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

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:pl-80 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="text-4xl font-bold text-gradient mb-8"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Technical Skills
        </motion.h2>
        
        {/* Programming Languages */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 shadow-sm border border-border mb-6 glow-effect"
          whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Code className="w-6 h-6 text-royal-blue" />
            </motion.div>
            <h3 className="text-xl font-semibold text-primary">Programming Languages</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.programmingLanguages.map((skill, idx) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-primary/5 text-primary rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors glow-effect"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 400 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Frameworks */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 shadow-sm border border-border mb-6 glow-effect"
          whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: -15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Wrench className="w-6 h-6 text-royal-blue" />
            </motion.div>
            <h3 className="text-xl font-semibold text-primary">Frameworks & Libraries</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.frameworks.map((skill, idx) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-primary/5 text-primary rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors glow-effect"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 400 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Database */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 shadow-sm border border-border mb-6 glow-effect"
          whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Database className="w-6 h-6 text-royal-blue" />
            </motion.div>
            <h3 className="text-xl font-semibold text-primary">Database</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.database.map((skill, idx) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-primary/5 text-primary rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors glow-effect"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 400 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 shadow-sm border border-border mb-6 glow-effect"
          whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: -15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Wrench className="w-6 h-6 text-royal-blue" />
            </motion.div>
            <h3 className="text-xl font-semibold text-primary">Tools & Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.tools.map((skill, idx) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-primary/5 text-primary rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors glow-effect"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 400 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Operating Systems */}
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 shadow-sm border border-border mb-8 glow-effect"
          whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Monitor className="w-6 h-6 text-royal-blue" />
            </motion.div>
            <h3 className="text-xl font-semibold text-primary">Operating Systems</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {technicalSkills.operatingSystems.map((skill, idx) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-primary/5 text-primary rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors glow-effect"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 400 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.h3 
          className="text-2xl font-bold text-gradient mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Soft Skills
        </motion.h3>
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 shadow-sm border border-border mb-8 glow-effect"
          whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={skill}
                className="flex items-center gap-2 text-muted-text"
                whileHover={{ x: 5, scale: 1.05 }}
                transition={{ delay: idx * 0.05, type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-royal-blue rounded-full"
                  whileHover={{ scale: 1.5 }}
                />
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.h3 
          className="text-2xl font-bold text-gradient mb-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Languages
        </motion.h3>
        <motion.div
          variants={cardVariants}
          className="glass rounded-2xl p-6 shadow-sm border border-border glow-effect"
          whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, idx) => (
              <motion.span
                key={lang}
                className="px-4 py-2 bg-indigo/10 text-primary rounded-lg text-sm font-medium glow-effect"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 400 }}
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
