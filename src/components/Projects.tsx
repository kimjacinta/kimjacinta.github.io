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
            A selection of projects where I've applied technical rigor to solve practical engineering
            challenges.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* SAP Integration Suite - Wide */}
          <div className="col-span-12 lg:col-span-8 group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500 rounded-lg hud-border">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                <img
                  alt="SAP Suite"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoIi7WJHuhqtnsn-8OnESTyyoXPBhEnxvEG9GyjPS8V-HIClqWux2WBez61TZLzb3pywYf9_aVPjWEO3MTRwqKxVh30SCFUh7zL53lNSA3ZgbpcT3CPZe-AqnIUx5a1xDbd86IcQakTCP_HK25COdJJSwc0cWBAQfKGnqNmp-F1suuDVkKRMTvd5ZFQ2CvzO8ideqFBQE9oMpahRlVy6u49wuFnffwvkSjtbs02NLgpJsicGK2bZyqz6v_xrTmVte8RQ8-seB3MBk3"
                />
              </div>
              <div className="w-full md:w-1/2 p-12">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">
                  Enterprise Integration
                </span>
                <h3 className="font-[Hanken_Grotesk] text-3xl font-black mb-6">
                  SAP Integration Suite
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-8">
                  Automated bridge between legacy SAP databases and modern cloud workflows using Azure
                  Functions and Service Bus.
                </p>
                <div className="flex items-center gap-6">
                  <a
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group/link"
                    href="#"
                  >
                    Details
                    <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-secondary hover:text-primary transition-colors"
                    href="#"
                  >
                    GitHub
                    <span className="material-symbols-outlined text-sm">code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* AI-Supported SDD - Accent */}
          <div className="col-span-12 lg:col-span-4 bg-primary p-12 text-on-primary flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 shadow-xl shadow-primary/20 rounded-lg glow-accent">
            <div>
              <span className="material-symbols-outlined text-4xl mb-8 opacity-40">science</span>
              <h3 className="font-[Hanken_Grotesk] text-2xl font-black mb-4">AI-Supported SDD</h3>
              <p className="text-on-primary/70 text-sm leading-relaxed">
                Proof of concept exploration leveraging LLMs to accelerate Specification Driven
                Development for enterprise teams.
              </p>
            </div>
            <div className="mt-12 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/10 rounded w-fit">
                  Python / GPT-4
                </span>
                <a
                  className="text-[10px] font-black uppercase tracking-widest text-white/80 hover:text-white flex items-center gap-1"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xs">code</span> GitHub
                </a>
              </div>
              <a className="material-symbols-outlined text-white hover:rotate-45 transition-transform" href="#">
                open_in_new
              </a>
            </div>
          </div>

          {/* JSON Forms Engine - Glass */}
          <div className="col-span-12 lg:col-span-4 glass-panel p-12 border border-primary/10 hover:bg-surface transition-colors rounded-lg hud-border">
            <span className="material-symbols-outlined text-3xl text-primary/30 mb-8 block">
              dynamic_feed
            </span>
            <h3 className="font-[Hanken_Grotesk] text-2xl font-black mb-4">JSON Forms Engine</h3>
            <p className="text-secondary text-sm leading-relaxed mb-8">
              Dynamic frontend generation system allowing business users to define complex data models
              that render instantly into UI.
            </p>
            <div className="flex justify-between items-end">
              <div className="flex gap-2">
                <span className="text-[9px] font-black uppercase bg-primary/10 text-primary px-2 py-1 rounded">
                  React
                </span>
                <span className="text-[9px] font-black uppercase bg-primary/10 text-primary px-2 py-1 rounded">
                  JSON Schema
                </span>
              </div>
              <a
                className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline flex items-center gap-1"
                href="#"
              >
                <span className="material-symbols-outlined text-xs">code</span> GitHub
              </a>
            </div>
          </div>

          {/* Command & Control v2 - Dark */}
          <div className="col-span-12 lg:col-span-8 bg-on-surface text-white p-12 flex flex-col md:flex-row items-center gap-12 group rounded-lg glow-accent">
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 block">
                In Progress
              </span>
              <h3 className="font-[Hanken_Grotesk] text-3xl font-black mb-6">
                Command &amp; Control v2
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Redesigning the core UI for industrial resource management. Focus on high-density data
                and real-time visualization.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm">monitoring</span>
                  </div>
                </div>
                <a
                  className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white flex items-center gap-2"
                  href="#"
                >
                  <span className="material-symbols-outlined text-sm">code</span> GitHub
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded-lg hud-border border-white/10">
              <img
                alt="C2"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUMe9lxKWLAv75AMmLfSgIYWlKcmwmgPnr-MtD7Xj4MY-0CEA3ejbti8zo5yNmD1HTGnSiYvL87OlredW7BpNvz_fxnKWhOwJHklTXHZ192H6nkvG_NJYEPZ_XGTSdTBh8r8yuBHTo4pylbae0hHz8s9AasZV2DhU16_zgO5xYvxxqGStMA3s_ZydPlI2LZDwZEo4ZHR98AXWgferltHCONonYqSSEYA1VDkRI0YmAoX3gGGgWJUyiiYMsEcK-nC7chApbnauwZ7D7"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
