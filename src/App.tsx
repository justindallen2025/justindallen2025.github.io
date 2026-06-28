import React from 'react';

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Georgia Tech Research Institute",
    period: "May 2026 - Present",
    desc: "Architecting tactical network environments (TAK). Engineering Python/Node-RED middleware for real-time sensor ingestion across federal and state networks[cite: 4]."
  },
  {
    role: "IT Intern",
    company: "Fellowship Christian School",
    period: "Jan 2024",
    desc: "Mapped wireless access points for emergency services (911 dispatch) to improve response time and safety infrastructure[cite: 6]."
  }
];

const PROJECTS = [
  {
    title: "Project CORE",
    description: "Modular embedded audio DSP system. Authored low-latency C++ callbacks for 24-bit/96kHz processing[cite: 4].",
    img: "/images/pic01.jpg"
  },
  {
    title: "Catalyst: Cloud Burn Tracker",
    description: "Financial alerting pipeline for startups, integrating Plaid/Gmail with Gemini MCP backend[cite: 4].",
    img: "/images/pic02.jpg"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <nav className="max-w-6xl mx-auto px-8 py-8 flex justify-between items-center">
        <span className="text-xl font-bold tracking-tighter">JUSTIN ALLEN</span>
        <div className="flex gap-8 text-xs uppercase tracking-[0.2em] opacity-60">
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-24">
        {/* HERO */}
        <header className="mb-32">
          <h1 className="text-7xl font-bold mb-8 tracking-tighter">Justin Allen</h1>
          <p className="text-2xl text-zinc-400 mb-12 max-w-2xl leading-snug">
            Computer Science @ Georgia Tech. Software Engineer Intern at GTRI. 
            Bridging high-level software with bare-metal performance.
          </p>
          <div className="flex gap-6">
            <a href="#" className="border-b border-white pb-1 text-sm hover:opacity-70">LinkedIn</a>
            <a href="#" className="border-b border-white pb-1 text-sm hover:opacity-70">GitHub</a>
          </div>
        </header>

        {/* ABOUT */}
        <section id="about" className="mb-32">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-8">About</h2>
          <p className="text-xl leading-relaxed text-zinc-300 max-w-2xl">
            I am a Computer Science student at Georgia Tech focusing on Cybersecurity and Information Internetworks[cite: 6]. 
            My work centers on embedded systems and low-level optimization. Currently at GTRI (CIPHER), 
            I reverse engineer firmware and model tactical network environments to solve complex reliability problems[cite: 6].
          </p>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-32">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-12">Experience</h2>
          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="grid md:grid-cols-[1fr,2fr] gap-8">
                <div className="text-zinc-500 text-sm">{exp.period}</div>
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <div className="text-zinc-400 mb-3">{exp.company}</div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-12">Core Projects</h2>
          <div className="grid gap-16">
            {PROJECTS.map((proj, i) => (
              <div key={i} className="group">
                <div className="bg-zinc-900 aspect-[16/9] w-full rounded-sm mb-6 overflow-hidden">
                   <img src={proj.img} alt={proj.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{proj.title}</h3>
                <p className="text-zinc-400 max-w-xl mb-6">{proj.description}</p>
                <a href="#" className="text-sm border-b border-white pb-1 hover:opacity-70">View Project →</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-8 py-24 text-zinc-700 text-xs">
        &copy; 2026 Justin Allen.
      </footer>
    </div>
  );
}
