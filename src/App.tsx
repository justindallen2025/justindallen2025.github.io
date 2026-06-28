import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Terminal, 
  Cpu, 
  Cloud, 
  Code, 
  Server,
  MapPin,
  ExternalLink
} from 'lucide-react';

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <Icon className="text-zinc-500" size={20} />
    <h2 className="text-xl font-medium tracking-tight text-white">{children}</h2>
  </div>
);

const ProjectCard = ({ title, period, description, tech, icon: Icon, imgSrc, links }: any) => (
  <div className="p-6 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors flex flex-col h-full bg-[#0a0a0a]">
    <div className="flex justify-between items-start mb-4">
      <Icon className="text-zinc-400" size={20} />
      <span className="text-xs font-mono text-zinc-500">{period}</span>
    </div>
    
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    <p className="text-zinc-400 text-sm mb-6 flex-grow">{description}</p>
    
    <div className="flex flex-wrap gap-2 mb-6">
      {tech.map((t: string) => (
        <span key={t} className="text-[10px] font-mono px-2 py-1 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded">
          {t}
        </span>
      ))}
    </div>

    {links && (
      <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-zinc-800">
        {links.map((link: any, idx: number) => (
          <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="text-xs flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors">
            {link.label} <ExternalLink size={12} />
          </a>
        ))}
      </div>
    )}
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-white selection:text-black">
      <nav className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
        <span className="font-bold text-white tracking-tight">JUSTIN ALLEN</span>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <section id="hero" className="mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Justin Allen</h1>
          <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
            Computer Science @ Georgia Tech | Software Engineer Intern at GTRI. 
            Bridging high-level software with bare-metal performance.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/justindallen2025/" className="text-sm border border-white px-4 py-2 hover:bg-white hover:text-black transition-all">LinkedIn</a>
            <a href="https://github.com/justindallen2025" className="text-sm border border-zinc-700 px-4 py-2 hover:border-zinc-500 transition-all">GitHub</a>
          </div>
        </section>

        <section id="about" className="mb-24">
          <SectionHeading icon={Terminal}>About</SectionHeading>
          <div className="max-w-2xl space-y-4">
            <p>I am a Computer Science student at Georgia Tech focusing on Cybersecurity and Information Internetworks.</p>
            <p>I focus on embedded systems and low-level optimization. Currently at GTRI (CIPHER), I spend my time reverse engineering firmware and modeling tactical network environments.</p>
          </div>
        </section>

        <section id="projects">
          <SectionHeading icon={Cpu}>Projects</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProjectCard 
              title="Project CORE"
              period="2024 - Present"
              description="Modular embedded signal processing system for electric guitars. Utilizing ARM Cortex-M7 with 24-bit/96kHz audio."
              tech={['C++', 'ARM Cortex-M7', 'DSP']}
              icon={Cpu}
              links={[{ label: 'GitHub', url: 'https://github.com/justindallen2025' }]}
            />
            {/* Catalyst and other cards go here... */}
          </div>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-900 text-xs text-zinc-600">
        &copy; 2026 Justin Allen. Built for performance.
      </footer>
    </div>
  );
}
