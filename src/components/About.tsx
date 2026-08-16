'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/personal'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:pl-80 px-6">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-4xl font-bold text-primary mb-8">About Me</h2>
        
        <div className="bg-surface rounded-2xl p-8 shadow-sm border border-border">
          <p className="text-lg text-muted-text leading-relaxed mb-6">
            {personalInfo.bio}
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-royal-blue rounded-full mt-2" />
              <p className="text-muted-text">
                Currently pursuing B.Tech in Computer Science & Information Technology at Chameli Devi Group of Institutions, Indore, with a strong academic foundation (First Year CGPA: 7.95/10).
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-royal-blue rounded-full mt-2" />
              <p className="text-muted-text">
                Passionate about full-stack development with expertise in Python, Django, and React.js. I enjoy building real-world applications that solve practical problems.
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 bg-royal-blue rounded-full mt-2" />
              <p className="text-muted-text">
                Continuously learning and improving my skills in web technologies, database management, and data structures & algorithms to become a well-rounded developer.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
