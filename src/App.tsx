import React from 'react';
import { Github, Linkedin } from 'lucide-react';

// --- LOW MAINTENANCE CONFIGURATION ---
const PROJECTS = [
  {
    title: "Project CORE",
    period: "2024 - Present",
    description: "Modular embedded signal processing system for electric guitars. Utilizing ARM Cortex-M7 with 24-bit/96kHz audio.",
    imgSrc: "/images/pic01.jpg",
    links: [{ label: "GitHub", url: "https://github.com/justindallen2025" }]
  },
  {
    title: "Catalyst: Cloud Burn Tracker",
    period: "2026",
    description: "Proactive cloud-credit and SaaS burn tracker for founders. Integrated Plaid & Gmail APIs for real-time runway forecasting.",
    imgSrc: "/images/pic02.jpg",
    links: [{ label: "View App", url: "#" }]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
        <span className="font-bold tracking-tighter text-xl">JUSTIN ALLEN</span>
        <div className="flex gap-8 text-sm opacity-70">
          <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
          <a href="#projects" className="hover:opacity-100 transition-opacity">Projects</a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <header className="mb-24">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">Justin Allen</h1>
          <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-8">
            Computer Science @ Georgia Tech | Software Engineer Intern at GTRI. 
            Bridging high-level software with bare-metal performance.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-white text-black px-6 py-3 text-sm font-medium hover:bg-zinc-200 transition-colors">LinkedIn</a>
            <a href="#" className="border border-zinc-800 px-6 py-3 text-sm font-medium hover:border-white transition-colors">GitHub</a>
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="mb-32">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">About</h2>
          <div className="text-lg text-zinc-300 space-y-6">
            <p>I am a Computer Science student at Georgia Tech focusing on Cybersecurity and Information Internetworks.</p>
            <p>I focus on embedded systems and low-level optimization. Currently at GTRI (CIPHER), I spend my time reverse engineering firmware and modeling tactical network environments.</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-12">Projects</h2>
          <div className="space-y-24">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">{proj.title}</h3>
                  <p className="text-zinc-400 mb-6">{proj.description}</p>
                  <a href={proj.links[0].url} className="text-sm border-b border-white pb-1 hover:opacity-70 transition-opacity">
                    {proj.links[0].label} →
                  </a>
                </div>
                <div className="bg-zinc-900 aspect-video w-full rounded-sm overflow-hidden">
                  {/* Image placeholder */}
                  <img src={proj.imgSrc} alt={proj.title} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-8 py-24 text-zinc-600 text-xs">
        &copy; 2026 Justin Allen.
      </footer>
    </div>
  );
}
