const entries = [
  {
    label: '[ 01_PRESENT ]',
    company: 'Rio Tinto',
    date: 'Feb 2024 - PRES',
    role: 'Full-Stack Software Engineer',
    description:
      'Built and shipped enterprise web and mobile applications across the full stack - React, React Native, .NET MAUI, and ASP.NET Core. Designed schema-driven form and workflow systems, built Azure serverless integrations with SAP data pipelines, and contributed to AI-assisted spec-driven development research. Worked in Agile Scrum with cross-functional, international teams from spec to production.',
    align: 'left' as const,
    active: true,
  },
  {
    label: '[ 02_EXPERIENCE ]',
    company: 'Zetron',
    date: 'Jan 2023 - May 2023',
    role: 'Software Engineer Intern',
    description:
      'Contributed features in C++ and C# to a mission-critical Command & Control platform managing emergency communication systems. Restored and improved the CI/CD unit testing pipeline in Azure DevOps - updating test output generation, XML reporting, and YAML build definitions to improve build stability and visibility.',
    align: 'right' as const,
    active: false,
  },
  {
    label: '[ 03_GROWTH ]',
    company: 'Swisscom',
    date: 'Aug 2018 - Nov 2019',
    role: 'Management Assistant, Enterprise Architecture & IT Clouds',
    description:
      "Supported strategic and operational activities within Swisscom's Enterprise Architecture division in a SAFe/Scrum environment. Led the team-wide rollout of Microsoft 365 tools, coordinated PI Plannings and Scrum ceremonies, and managed cross-team stakeholder communication. Also mentored apprentices and contributed to onboarding and process improvement initiatives.",
    align: 'left' as const,
    active: false,
  },
  {
    label: '[ 04_ROOTS ]',
    company: 'Swisscom',
    date: 'Aug 2015 - Jul 2018',
    role: 'Business Administration Apprentice',
    description:
      'Completed a 3-year rotational apprenticeship across five departments - from an open-innovation startup hub (Swisscom Pirates) to recruiting, editorial, roaming billing, and customer-facing sales and repair. Built a broad foundation in business operations, communication, and cross-functional collaboration across a large enterprise.',
    align: 'right' as const,
    active: false,
  },
]

export default function ProfessionalPath() {
  return (
    <section className="relative py-40 alpine-bg" id="experience">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-[80px] relative z-10">
        <div className="mb-24">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-primary mb-4 block">
            My Journey
          </span>
          <h2 className="font-[Hanken_Grotesk] text-6xl md:text-7xl font-black">How I Got Here.</h2>
        </div>

        <div className="relative pb-24" id="timeline-container">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/20 hidden md:block" />
          <div className="timeline-line-progress" id="progress-line" />

          <div className="flex flex-col gap-32 relative">
            {entries.map((entry, i) => (
              <div
                key={i}
                className={`reveal relative flex flex-col ${
                  entry.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center justify-between w-full`}
              >
                <div
                  className={`hidden md:block w-[45%] ${
                    entry.align === 'left' ? 'text-right pr-12' : 'text-left pl-12'
                  }`}
                >
                  <span className="font-mono text-primary/40 text-xs tracking-widest">
                    {entry.label}
                  </span>
                </div>
                <div
                  className={`w-3 h-3 rounded-full absolute left-1/2 -translate-x-1/2 z-10 hidden md:block ${
                    entry.active
                      ? 'bg-primary glow-accent shadow-[0_0_10px_#968fd6]'
                      : 'bg-primary/40'
                  }`}
                />
                <div className="glass-panel p-10 w-full md:w-[45%] shadow-sm hover:shadow-2xl hover:glow-accent transition-all duration-500 rounded-lg">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-[Hanken_Grotesk] text-2xl font-black text-primary">
                      {entry.company}
                    </h3>
                    <span className="text-[10px] font-mono text-secondary">{entry.date}</span>
                  </div>
                  <p className="font-bold text-on-surface text-sm mb-4">{entry.role}</p>
                  <p className="text-secondary text-sm leading-relaxed">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
