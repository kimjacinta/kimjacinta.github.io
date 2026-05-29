export default function Projects() {
  return (
    <section className="py-32 bg-surface-container-low relative" id="projects">
      <div className="absolute inset-0 data-stream opacity-20 -z-10" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-[80px]">
        {/* Header */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-xs font-black tracking-[0.4em] uppercase text-primary mb-4 block">
            Archive 02
          </span>
          <h2 className="font-[Hanken_Grotesk] text-6xl font-black tracking-tighter mb-6">
            Projects.
          </h2>
          <p className="text-secondary text-lg">
            A selection of projects I've worked on. More details coming soon.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Project 01 - Wide */}
          <div className="col-span-12 lg:col-span-8 group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-lg hud-border">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-primary/20">image</span>
              </div>
              <div className="w-full md:w-1/2 p-12">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">
                  Project 01
                </span>
                <h3 className="font-[Hanken_Grotesk] text-3xl font-black mb-6">
                  Coming Soon
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-8">
                  Details coming soon.
                </p>
                <a
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors"
                  href="https://github.com/kimjacinta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                  <span className="material-symbols-outlined text-sm">code</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 02 - Accent */}
          <div className="col-span-12 lg:col-span-4 bg-primary p-12 text-on-primary flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-primary/20 rounded-lg glow-accent">
            <div>
              <span className="material-symbols-outlined text-4xl mb-8 opacity-40">science</span>
              <h3 className="font-[Hanken_Grotesk] text-2xl font-black mb-4">Project 02</h3>
              <p className="text-on-primary/70 text-sm leading-relaxed">
                Details coming soon.
              </p>
            </div>
            <div className="mt-12 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 rounded w-fit">
                TBD
              </span>
              <a
                className="text-[10px] font-black uppercase tracking-widest text-white/80 hover:text-white flex items-center gap-1"
                href="https://github.com/kimjacinta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-xs">code</span> GitHub
              </a>
            </div>
          </div>

          {/* Project 03 - Glass */}
          <div className="col-span-12 lg:col-span-4 glass-panel p-12 border border-primary/10 hover:bg-surface transition-colors rounded-lg hud-border">
            <span className="material-symbols-outlined text-3xl text-primary/30 mb-8 block">
              dynamic_feed
            </span>
            <h3 className="font-[Hanken_Grotesk] text-2xl font-black mb-4">Project 03</h3>
            <p className="text-secondary text-sm leading-relaxed mb-8">
              Details coming soon.
            </p>
            <div className="flex justify-between items-end">
              <div className="flex gap-2">
                <span className="text-[9px] font-black uppercase bg-primary/10 text-primary px-2 py-1 rounded">
                  TBD
                </span>
              </div>
              <a
                className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
                href="https://github.com/kimjacinta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-xs">code</span> GitHub
              </a>
            </div>
          </div>

          {/* Project 04 - Dark */}
          <div className="col-span-12 lg:col-span-8 bg-on-surface text-white p-12 flex flex-col md:flex-row items-center gap-12 group rounded-lg glow-accent">
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 block">
                Project 04
              </span>
              <h3 className="font-[Hanken_Grotesk] text-3xl font-black mb-6">
                Coming Soon
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Details coming soon.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">code</span>
                  </div>
                </div>
                <a
                  className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white flex items-center gap-2"
                  href="https://github.com/kimjacinta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-sm">code</span> GitHub
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-lg hud-border border-white/10 bg-white/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-white/20">image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
