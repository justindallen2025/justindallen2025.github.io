import React, { useState } from 'react';

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Georgia Tech Research Institute",
    period: "May 2026 to Present",
    desc: "Architecting tactical network environments[cite: 4]. Engineering Python and Node RED middleware for real time sensor ingestion across federal and state networks[cite: 4]."
  },
  {
    role: "IT Intern",
    company: "Fellowship Christian School",
    period: "Jan 2024",
    desc: "Mapped wireless access points for emergency services 911 dispatch to improve response time and safety infrastructure[cite: 6]."
  }
];

const PROJECTS = [
  {
    title: "Project CORE",
    subtitle: "Digital Signal Processing Architecture",
    description: "Modular embedded audio digital signal processing system[cite: 4, 6]. Authored low latency C++ callbacks for high fidelity 24 bit 96kHz audio processing utilizing an ARM Cortex M7 microcontroller[cite: 4, 6].",
  },
  {
    title: "Catalyst Cloud Burn Tracker",
    subtitle: "Financial Alerting Pipeline",
    description: "Proactive cloud credit and software burn tracker for founders[cite: 4]. Integrated Plaid and Gmail APIs with a Gemini backend for real time runway forecasting[cite: 4].",
  },
  {
    title: "Distributed Server Operations",
    subtitle: "High Concurrency Infrastructure",
    description: "Deployed and managed a high performance Linux based server environment[cite: 4, 6]. Configured TCP and UDP port forwarding and optimized protocol bottlenecks[cite: 4, 6].",
  },
  {
    title: "Autonomous Telemetry",
    subtitle: "Control Systems",
    description: "Engineered electrical and mechanical systems for a gas powered vehicle[cite: 4, 6]. Programmed Arduino microcontrollers to monitor RPM and speed data via Hall Effect sensors[cite: 4, 6].",
  }
];

const HOBBIES = [
  {
    title: "Digital Production and Audio",
    description: "Extensive background in guitar performance and audio engineering. Produced three full length albums and one single including a Vevo featured music video."
  },
  {
    title: "Mechanical Performance",
    description: "Active in mountain biking and automotive mechanics focusing on physical endurance and mechanical optimization[cite: 4, 6]."
  },
  {
    title: "Community Impact",
    description: "Dedicated to outdoor exploration and community service. Active volunteer with Operation Christmas Child and various non profit organizations."
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderNav = () => (
    <nav className="max-w-7xl mx-auto px-8 py-10 flex justify-between items-center w-full relative z-50">
      <button onClick={() => setCurrentPage('home')} className="text-xl font-bold tracking-tighter uppercase text-white hover:opacity-70 transition-opacity">
        Justin Allen
      </button>
      <div className="flex gap-8 text-xs uppercase tracking-widest text-zinc-400">
        <button onClick={() => setCurrentPage('home')} className={`hover:text-white transition-colors ${currentPage === 'home' ? 'text-white' : ''}`}>Home</button>
        <button onClick={() => setCurrentPage('projects')} className={`hover:text-white transition-colors ${currentPage === 'projects' ? 'text-white' : ''}`}>Projects</button>
        <button onClick={() => setCurrentPage('about')} className={`hover:text-white transition-colors ${currentPage === 'about' ? 'text-white' : ''}`}>About</button>
      </div>
    </nav>
  );

  const renderHome = () => (
    <div className="animate-in fade-in duration-1000">
      {/* FULL BLEED HERO PLACEHOLDER */}
      <div className="w-full h-[70vh] bg-zinc-900 flex flex-col justify-end p-12 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-zinc-800 text-sm tracking-widest uppercase">
          Hero Image Placeholder
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white mb-6">
            Justin Allen
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-snug">
            Computer Science Georgia Tech[cite: 4, 6]. Software Engineer Intern at GTRI[cite: 4, 6]. 
            Bridging high level software with bare metal performance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Current Mission</h3>
            <p className="text-lg text-zinc-300 leading-relaxed">
              I focus on embedded systems and low level optimization. Currently I reverse engineer firmware and model tactical network environments to solve complex reliability problems[cite: 6].
            </p>
          </div>
          <div className="md:col-span-2">
            {/* WIDE IMAGE PLACEHOLDER */}
            <div className="w-full aspect-[21/9] bg-zinc-900 flex items-center justify-center text-zinc-800 text-sm tracking-widest uppercase">
              Contextual Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="max-w-7xl mx-auto px-8 py-24 animate-in fade-in duration-1000">
      <header className="mb-24">
        <h1 className="text-5xl font-bold tracking-tighter mb-6 text-white">Engineering Dossier</h1>
        <p className="text-xl text-zinc-400 max-w-2xl">Hardware architecture and full stack systems designed for zero latency and high availability.</p>
      </header>

      <div className="space-y-32">
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-16 items-center">
            <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
              <h2 className="text-zinc-500 text-xs uppercase tracking-widest mb-4">{proj.subtitle}</h2>
              <h3 className="text-4xl font-bold mb-6 text-white">{proj.title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">{proj.description}</p>
              <button className="border-b border-white pb-1 text-sm text-white hover:text-zinc-400 hover:border-zinc-400 transition-colors uppercase tracking-widest">
                View Details
              </button>
            </div>
            <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
              {/* PROJECT IMAGE PLACEHOLDER */}
              <div className="w-full aspect-square bg-zinc-900 flex items-center justify-center text-zinc-800 text-sm tracking-widest uppercase">
                Project Image Placeholder
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="max-w-7xl mx-auto px-8 py-24 animate-in fade-in duration-1000">
      <div className="grid md:grid-cols-2 gap-24">
        
        {/* LEFT COLUMN */}
        <div>
          <div className="mb-24">
            <h1 className="text-5xl font-bold tracking-tighter mb-12 text-white">The Architect</h1>
            {/* PORTRAIT IMAGE PLACEHOLDER */}
            <div className="w-full aspect-[3/4] bg-zinc-900 mb-8 flex items-center justify-center text-zinc-800 text-sm tracking-widest uppercase">
              Portrait Image Placeholder
            </div>
          </div>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-12 border-b border-zinc-800 pb-4">Professional History</h2>
            <div className="space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <div key={i}>
                  <div className="text-zinc-500 text-xs tracking-widest uppercase mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-zinc-400 text-sm mb-4">{exp.company}</div>
                  <p className="text-zinc-400 text-base leading-relaxed">{exp.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="md:pt-48">
          <section className="mb-24">
            <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-12 border-b border-zinc-800 pb-4">Personal Pursuits</h2>
            <div className="space-y-16">
              {HOBBIES.map((hobby, i) => (
                <div key={i}>
                  {/* HOBBY IMAGE PLACEHOLDER */}
                  <div className="w-full aspect-video bg-zinc-900 mb-6 flex items-center justify-center text-zinc-800 text-sm tracking-widest uppercase">
                    Lifestyle Image Placeholder
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{hobby.title}</h3>
                  <p className="text-zinc-400 text-base leading-relaxed">{hobby.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans selection:bg-white selection:text-black">
      {renderNav()}
      <main>
        {currentPage === 'home' && renderHome()}
        {currentPage === 'projects' && renderProjects()}
        {currentPage === 'about' && renderAbout()}
      </main>
      <footer className="max-w-7xl mx-auto px-8 py-12 border-t border-zinc-900 mt-24 text-zinc-700 text-xs tracking-widest uppercase flex justify-between">
        <span>Justin Allen 2026</span>
        <span>Built for Performance</span>
      </footer>
    </div>
  );
}
