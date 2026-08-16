import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
import MobileHeader from '@/components/MobileHeader'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import Achievements from '@/components/Achievements'
import AreasOfInterest from '@/components/AreasOfInterest'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import ScrollProgress from '@/components/ScrollProgress'
import Particles from '@/components/Particles'

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <ScrollProgress />
      <Particles />
      <MobileHeader />
      <Sidebar />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Achievements />
      <AreasOfInterest />
      <Portfolio />
      <Contact />
    </main>
  )
}
