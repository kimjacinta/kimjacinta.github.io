const skills = [
  {
    icon: 'cloud_done',
    title: 'Cloud & DevOps',
    description: 'Azure Functions, DevOps pipelines, and serverless architectures that scale.',
  },
  {
    icon: 'terminal',
    title: 'Backend',
    description: 'ASP.NET Core APIs and C# services with SQL Server for robust data layers.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile',
    description: 'Cross-platform apps with React Native and .NET MAUI for iOS and Android.',
  },
  {
    icon: 'view_quilt',
    title: 'Frontend',
    description: 'React and TypeScript interfaces built for complex enterprise workflows.',
  },
]

const chips = ['React', 'TypeScript', 'React Native', '.NET MAUI', 'ASP.NET Core', 'Azure', 'C#', 'SQL Server', 'Python', 'Azure DevOps']

const nodes = [
  { label: 'Agile / Scrum', className: 'left-[5%] top-[10%]', style: 'glass', hasDot: true },
  { label: 'Ownership', className: 'left-[35%] top-[40%]', style: 'primary', icon: 'rocket_launch' },
  { label: 'Adaptability', className: 'right-[5%] top-[10%]', style: 'glass' },
  { label: 'CI/CD', className: 'right-[10%] bottom-[10%]', style: 'glass', icon: 'sync' },
  { label: 'Clean Architecture', className: 'left-[5%] bottom-[10%]', style: 'glass', italic: true },
  { label: 'Cross-functional', className: 'left-[35%] top-[5%]', style: 'glass', icon: 'groups' },
  { label: 'Problem-first', className: 'right-[5%] top-[45%]', style: 'glass', icon: 'lightbulb' },
]

export default function TechnicalEcosystem() {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="stack">
      {/* Neural grid background */}
      <div className="absolute inset-0 opacity-5 neural-lines pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#968fd6" />
              <path d="M 0 50 L 100 50 M 50 0 L 50 100" stroke="#968fd6" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-[80px] relative z-10">
        <div className="grid grid-cols-12 gap-6 items-center mb-24">
          <div className="col-span-12 lg:col-span-5">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/40 mb-6 block">
              The Toolkit
            </span>
            <h2 className="font-[Hanken_Grotesk] text-5xl font-black mb-8 leading-none">
              Tech
              <br />
              Stack
            </h2>
            <p className="text-secondary mb-12 text-lg">
              Versatile across web, mobile, and cloud - I pick up new tools fast and hit the ground running.
            </p>
            <div className="flex flex-wrap gap-4">
              {chips.map((chip, i) => (
                <span
                  key={chip}
                  className={`px-5 py-2.5 glass-panel text-primary text-[10px] font-bold uppercase tracking-widest rounded-lg ${
                    i === 0 || i === 4 ? 'glow-accent' : ''
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 mt-20 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10 border border-primary/10 relative overflow-hidden rounded-lg glow-accent">
              <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="bg-white/80 backdrop-blur-sm p-10 hover:bg-surface transition-colors group relative hud-border"
                >
                  <span className="material-symbols-outlined text-primary mb-6 group-hover:scale-110 transition-transform inline-block">
                    {skill.icon}
                  </span>
                  <h4 className="font-[Hanken_Grotesk] text-xl font-black mb-4">{skill.title}</h4>
                  <p className="text-secondary text-xs leading-relaxed">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Node visualization */}
        <div className="relative h-[500px] md:h-[400px] bg-surface-container-low/30 blueprint-grid border border-primary/5 rounded-lg overflow-hidden mt-12 hud-border">
          <div className="absolute inset-0 data-stream opacity-10" />
          {nodes.map((node) => (
            <div key={node.label} className={`absolute ${node.className} hover-lift z-20`}>
              {node.style === 'primary' ? (
                <div className="bg-primary text-white px-10 py-8 shadow-2xl flex items-center gap-6 rounded-lg glow-accent">
                  {node.icon && (
                    <span className="material-symbols-outlined text-4xl">{node.icon}</span>
                  )}
                  <span className="font-black text-3xl tracking-tighter uppercase">{node.label}</span>
                </div>
              ) : node.style === 'bordered' ? (
                <div className="glass-panel border-2 border-primary/30 px-12 py-10 shadow-lg flex flex-col gap-2 rounded-lg glow-accent">
                  {node.sublabel && (
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                      {node.sublabel}
                    </span>
                  )}
                  <span className="font-black text-4xl tracking-tighter uppercase">{node.label}</span>
                </div>
              ) : (
                <div className="glass-panel px-8 py-6 shadow-xl flex items-center gap-4 rounded-lg">
                  {node.hasDot && <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />}
                  {node.icon && (
                    <span className="material-symbols-outlined text-primary">{node.icon}</span>
                  )}
                  <span
                    className={`font-black text-2xl tracking-tighter uppercase ${
                      node.italic ? 'italic' : ''
                    }`}
                  >
                    {node.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
