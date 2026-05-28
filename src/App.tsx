import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProfessionalPath from './components/ProfessionalPath'
import TechnicalEcosystem from './components/TechnicalEcosystem'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY

      // Parallax for hero background text
      const verticalText = document.getElementById('hero-bg-text')
      if (verticalText) {
        verticalText.style.transform = `translateY(${scroll * 0.15}px)`
      }

      // Reveal animations
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('active')
        }
      })

      // Timeline progress
      const timelineContainer = document.getElementById('timeline-container')
      const progressLine = document.getElementById('progress-line')
      if (timelineContainer && progressLine) {
        const rect = timelineContainer.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const start = rect.top + scroll
        const triggerPoint = scroll + windowHeight * 0.5
        if (triggerPoint > start) {
          const progress = ((triggerPoint - start) / rect.height) * 100
          progressLine.style.height = `${Math.min(100, Math.max(0, progress))}%`
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <ProfessionalPath />
        <TechnicalEcosystem />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
