import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
  ]

  return (
    <>
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              className="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-[10px] font-black tracking-widest uppercase hover:shadow-lg hover:shadow-primary/40 transition-all glow-accent"
              href="#contact"
            >
              Let's Chat
            </a>
          </div>

          <button
            className="md:hidden text-primary"
            aria-label="Menu"
            onClick={() => setMenuOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col">
          <div className="flex justify-between items-center px-6 h-20">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-black text-xs glow-accent">
                K
              </span>
              <span className="font-[Hanken_Grotesk] text-xl font-black tracking-tighter text-on-surface">
                KIM.DEV
              </span>
            </div>
            <button
              className="text-primary"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
          </div>

          <div className="flex flex-col items-center justify-center flex-1 gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="text-2xl font-[Hanken_Grotesk] font-black uppercase tracking-widest hover:text-primary transition-colors"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="bg-primary text-on-primary px-8 py-4 rounded-lg text-sm font-black tracking-widest uppercase hover:shadow-lg hover:shadow-primary/40 transition-all glow-accent mt-4"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let's Chat
            </a>
          </div>
        </div>
      )}
    </>
  )
}
