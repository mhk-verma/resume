'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/personal'
import { ExternalLink, Github, Play } from 'lucide-react'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:pl-80 px-6">
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
          Portfolio
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="glass rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-royal-blue/30 transition-all duration-300 group relative"
              whileHover={{ y: -12, scale: 1.02 }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
            >
              {/* Project Image/Thumbnail */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-indigo/10 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Play className="w-16 h-16 text-primary/30 group-hover:text-royal-blue/50 transition-colors" />
                </motion.div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.div 
                  className="mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-xs font-medium text-royal-blue bg-royal-blue/10 px-3 py-1 rounded-full glow-effect">
                    {project.category}
                  </span>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-primary mb-2 group-hover:text-royal-blue transition-colors"
                  whileHover={{ x: 3 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-muted-text text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-md"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(53, 106, 230, 0.2)" }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-muted-text mb-2">Key Features:</p>
                  <ul className="text-xs text-muted-text space-y-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start gap-2"
                        whileHover={{ x: 3 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="text-royal-blue">•</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors glow-effect relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="shimmer absolute inset-0" />
                      <span className="relative z-10 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </span>
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-surface text-primary border border-border rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors glow-effect"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State Message */}
        {projects.length === 0 && (
          <motion.div
            variants={cardVariants}
            className="glass rounded-2xl p-12 text-center border border-border"
          >
            <p className="text-muted-text">More projects coming soon!</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
