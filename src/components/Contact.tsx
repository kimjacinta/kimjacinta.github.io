export default function Contact() {
  return (
    <section className="py-40 bg-white relative overflow-hidden" id="contact">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute inset-0 data-stream opacity-30" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-[80px] text-center relative z-10">
        <h2 className="font-[Hanken_Grotesk] text-6xl md:text-8xl font-black tracking-tighter mb-12">
          LET'S CONNECT.
        </h2>
        <p className="text-secondary text-lg max-w-xl mx-auto mb-16">
          Whether you have an exciting project, a collaboration idea, or just want to chat about
          tech and animals - my inbox is always open.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <a
            className="group flex items-center gap-4 bg-primary text-on-primary px-10 py-6 rounded-lg font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-2xl shadow-primary/40 glow-accent"
            href="mailto:kimjacintasoka@gmail.com"
          >
            Send me an email
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              mail
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
