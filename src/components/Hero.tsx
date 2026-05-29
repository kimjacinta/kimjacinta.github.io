export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" id="about">
      <div className="absolute inset-0 data-stream opacity-40 -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low/30 -z-10 blueprint-grid border-l border-primary/10" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-[80px] w-full grid grid-cols-12 gap-0 relative z-10">
        {/* Background vertical text */}
        <div className="absolute -left-20 top-0 h-full flex items-center z-0 opacity-[0.03] select-none pointer-events-none">
          <h1
            className="vertical-text font-black text-[20rem] leading-none tracking-tighter font-[Hanken_Grotesk]"
            id="hero-bg-text"
          >
            ENGINEER
          </h1>
        </div>

        {/* Left content */}
        <div className="col-span-12 lg:col-span-7 pt-12 lg:pt-0 z-20">
          <div className="inline-flex items-center gap-3 mb-8 bg-primary/5 px-4 py-1.5 rounded-lg border border-primary/30 glow-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary-container">
              Available for new challenges
            </span>
          </div>

          <h1 className="font-[Hanken_Grotesk] text-[14vw] lg:text-[8rem] leading-[0.85] font-black tracking-tighter mb-10">
            Hi,
            <br />
            <span className="text-primary italic">I'm Kim.</span>
          </h1>

          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-on-surface-variant leading-tight mb-12">
              A full-stack software engineer with 2.5 years of experience, building across web,
              mobile, and cloud. I'm drawn to domains where software meets the physical or human
              world - health tech, robotics, AI - wherever there's a real problem worth solving. I
              care about clean code and building things that matter.
            </p>
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  Engineer @ Rio Tinto
                </span>
              </div>
              <a
                className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-primary hover:gap-5 transition-all"
                href="#projects"
              >
                Explore my work
                <span className="material-symbols-outlined text-sm">east</span>
              </a>
              <span className="text-xs text-secondary font-medium hidden md:inline">
                [47.37, 8.54] ZRH
              </span>
            </div>
          </div>
        </div>

        {/* Right photo */}
        <div className="col-span-12 lg:col-span-5 relative mt-20 lg:mt-0 z-10 flex justify-center lg:justify-end">
          <div className="relative w-full aspect-[4/5] max-w-[280px] md:max-w-[450px]">
            <div className="absolute -top-10 -left-10 w-24 h-24 border-t-2 border-l-2 border-primary/20" />
            <div className="absolute -bottom-10 -right-10 w-24 h-24 border-b-2 border-r-2 border-primary/20" />
            <div className="w-full h-full relative overflow-hidden bg-surface-container rounded-lg shadow-[40px_40px_0px_-10px_rgba(150,143,214,0.1)] hud-border">
              <img
                alt="Kim"
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6MJS5-GwrfiZErPa20nhEq2Yb6dUfUwE23rPnZYTibzZDNin1mZcyLQmjW4jehPg2sU4ApIXBCz_4Syb-Fg2US66qHLNnz_xS5tmbvOXVxjRby3hxDr9GpFVjceB6ptoHmF5ZHKgxLUqYhxOoHC5zlb1eqUQIEnDQ5gdrDrXMRpziwFaECX-kVEqZDgmHykdrWw5xNRYkHYfO7EyHgOdOdvXW9682CoxRPFxgkM5fs2EBlx-62jatG96EQUF1WMxZBRrFoptNuhCm"
              />
            </div>
            {/* Floating glass card */}
            <div className="absolute bottom-10 -right-16 glass-panel p-6 shadow-xl animate-float rounded-lg z-30 hidden lg:block">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-[10px] text-primary/60 font-mono">
                  <span>NODE_STATUS</span>
                  <span className="text-green-600">ACTIVE</span>
                </div>
                <span className="font-[Hanken_Grotesk] text-lg font-semibold">Building things that matter.</span>
                <div className="w-full h-[1px] bg-primary/10" />
                <p className="text-[10px] text-secondary leading-relaxed uppercase tracking-tighter">
                  Scalable systems, clean code, real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
