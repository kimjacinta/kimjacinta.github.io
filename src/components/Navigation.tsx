import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-sm h-16'
          : 'h-20'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-[80px] flex justify-between items-center h-full">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-black text-xs glow-accent">
            K
          </span>
          <span className="font-[Hanken_Grotesk] text-xl font-black tracking-tighter text-on-surface">
            KIM.DEV
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a
            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#stack"
          >
            Stack
          </a>
          <a
            className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-[10px] font-black tracking-widest uppercase hover:shadow-lg hover:shadow-primary/40 transition-all glow-accent"
            href="#contact"
          >
            Let's Chat
          </a>
        </div>

        <button className="md:hidden text-primary" aria-label="Menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  )
}
