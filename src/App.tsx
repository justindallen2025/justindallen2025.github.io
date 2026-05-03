/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Cloud, 
  Code, 
  Server,
  MapPin,
  Globe,
  Gamepad2,
  LineChart
} from 'lucide-react';

const Typewriter = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className="font-mono text-neon-cyan">
      {currentText}
      <span className="animate-pulse">_</span>
    </span>
  );
};

const SectionHeading = ({ children, icon: Icon }: { children: React.ReactNode; icon: any }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mb-8"
  >
    <div className="p-2 glass rounded-lg text-neon-cyan">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-mono font-bold tracking-tight text-white">{children}</h2>
  </motion.div>
);

const ProjectCard = ({ 
  title, 
  period, 
  description, 
  tech, 
  icon: Icon,
  imgSrc,
  links
}: { 
  title: string; 
  period: string; 
  description: string; 
  tech: string[]; 
  icon: any;
  imgSrc?: string;
  links?: { label: string, url: string, primary?: boolean }[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass glass-hover p-6 rounded-2xl flex flex-col h-full relative overflow-hidden group"
  >
    {/* Abstract Background Icon */}
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity z-0 pointer-events-none">
      <Icon size={160} strokeWidth={1} />
    </div>
    
    <div className="relative z-10 flex flex-col h-full">
      {/* Optional Project Image */}
      {imgSrc && (
        <div className="w-full h-40 mb-5 rounded-xl overflow-hidden relative border border-white/5">
          <div className="absolute inset-0 bg-neon-cyan/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
          <img 
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>
      )}

      <div className="flex justify-between items-start mb-4">
        {!imgSrc && (
          <div className="p-3 bg-neon-cyan/10 rounded-xl text-neon-cyan mb-2">
            <Icon size={24} />
          </div>
        )}
        <span className="text-xs font-mono text-gray-500 ml-auto bg-white/5 px-2 py-1 rounded">{period}</span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 font-mono text-white group-hover:text-neon-cyan transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span 
            key={t} 
            className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-400 group-hover:border-neon-cyan/30 group-hover:text-neon-cyan transition-all"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      {links && (
        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/5">
          {links.map((link, idx) => (
            <a 
              key={idx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`text-xs font-mono flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                link.primary 
                ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan hover:text-black shadow-[0_0_10px_rgba(0,243,255,0.2)]' 
                : 'glass hover:bg-white/10 text-gray-300'
              }`}
            >
              {link.label === 'View GitHub' || link.label === 'View GitHub Repo' ? <Github size={14} /> : <ExternalLink size={14} />}
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] relative selection:bg-neon-cyan/30">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,243,255,0.05),rgba(255,255,255,0))] pointer-events-none" />
      
      {/* Glowing Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 border-b border-white/5 backdrop-blur-md bg-black/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono font-bold text-xl tracking-tighter text-white flex items-center gap-2"
          >
            <Terminal size={20} className="text-neon-cyan" />
            <span>JUSTIN ALLEN</span>
          </motion.div>
          <div className="flex gap-8 text-sm font-mono uppercase tracking-widest text-gray-400">
            <a href="#about" className="hover:text-neon-cyan transition-colors">About</a>
            <a href="#projects" className="hover:text-neon-cyan transition-colors">Projects</a>
            <a href="https://github.com/justindallen2025" target="_blank" rel="noreferrer" className="hover:text-neon-cyan transition-colors hidden sm:block">GitHub</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 px-6 pb-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center mb-32">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="inline-block glass px-4 py-1.5 rounded-full mb-6 border-neon-cyan/20">
                <span className="flex items-center gap-2 text-xs font-mono text-neon-cyan">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                  </span>
                  SUMMER 2026 GTRI SWE INTERN
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 text-white font-sans">
                Justin Allen
              </h1>
              
              <div className="text-xl md:text-2xl font-mono text-gray-400 mb-8 h-12">
                <Typewriter text="CS @ Georgia Tech | Embedded Systems & AI" />
              </div>
              
              <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed">
                Computer Science student specializing in Information Internetworks and Cybersecurity. 
                Bridging the gap between high-level software and bare-metal performance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href="https://www.linkedin.com/in/justindallen2025/" 
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-neon-cyan text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all"
                >
                  <Linkedin size={20} /> LinkedIn
                </motion.a>
                <motion.a 
                  href="https://github.com/justindallen2025" 
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 glass rounded-xl text-white hover:bg-white/10 transition-all font-mono"
                >
                  <Github size={20} /> GitHub
                </motion.a>
              </div>
            </motion.div>

            {/* Profile Picture */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
            >
              <div className="absolute inset-0 bg-neon-cyan/20 blur-2xl rounded-full"></div>
              <img 
                src="/images/profile.jpg" 
                alt="Justin Allen" 
                className="relative w-full h-full object-cover object-[center_20%] rounded-full border-2 border-neon-cyan/50 shadow-[0_0_30px_rgba(0,243,255,0.2)] z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-48 scroll-mt-32">
          <SectionHeading icon={Terminal}>About Me</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-gray-400 leading-relaxed"
            >
              <p>
                I am a <span className="text-white font-medium">Computer Science student at Georgia Tech</span> with a focus on Information Internetworks and Cybersecurity & Privacy. 
              </p>
              <p>
                I am passionate about the intersection of software and the physical world—whether that means building low-latency embedded audio processors, 
                managing headless Linux servers, or developing complex software simulations.
              </p>
              <div className="pt-4 flex gap-4">
                <div className="flex flex-col">
                  <span className="text-white font-mono font-bold text-2xl uppercase">DEC 2028</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Graduation</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="flex flex-col">
                  <span className="text-white font-mono font-bold text-2xl uppercase text-neon-cyan" style={{ textShadow: '0 0 10px rgba(0,243,255,0.5)' }}>GTRI</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Summer '26</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Languages', value: 'Python, C++, Java' },
                { label: 'Embedded', value: 'ARM Cortex, Arduino' },
                { label: 'Ops', value: 'Linux, TCP/UDP, Bash' },
                { label: 'Concepts', value: 'DSP, OOP, Networking' }
              ].map((item) => (
                <div key={item.label} className="glass p-6 rounded-2xl border border-white/5 hover:border-neon-cyan/30 transition-colors">
                  <div className="text-xs font-mono text-neon-cyan uppercase mb-2">{item.label}</div>
                  <div className="text-white font-bold">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-48 scroll-mt-32">
          <SectionHeading icon={Cpu}>Core Engineering Projects</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Project CORE: Embedded Audio"
              period="Aug 2024 - Present"
              description="Developing a modular, embedded signal processing system for electric guitars. Utilizing an ARM Cortex-M7 to process 24-bit/96kHz audio with sub-10ms latency. Designed custom 4-layer PCBs in EasyEDA."
              tech={['C++', 'ARM Cortex-M7', 'DSP', 'Fusion 360', 'EasyEDA']}
              icon={Cpu}
              imgSrc="/images/pic01.jpg"
              links={[
                { label: 'View GitHub', url: 'https://github.com/justindallen2025' },
                { label: 'View Website', url: 'https://coremusictech.com', primary: true }
              ]}
            />
            <ProjectCard 
              title="Catalyst: Cloud Burn Tracker"
              period="Apr 2026 (SproutGT)"
              description="Proactive cloud-credit and SaaS burn tracker for founders. Ingests data via Plaid & Gmail, uses a Gemini MCP backend to forecast runway, and dispatches real-time multilingual voice alerts via ElevenLabs."
              tech={['Next.js', 'Gemini API', 'ElevenLabs', 'Plaid', 'MongoDB']}
              icon={Cloud}
              imgSrc="/images/pic02.jpg"
              links={[
                { label: 'View Live App', url: 'https://catalyst-689371061372.us-west1.run.app', primary: true },
                { label: 'View LinkedIn', url: 'https://lnkd.in/epVejapH' }
              ]}
            />
            <ProjectCard 
              title="App for Apps: PWA Generator"
              period="In Development"
              description="A Low-Code Progressive Web App (PWA) platform empowering non-technical creators to build and deploy functional applications directly to the mobile web, bypassing App Store bottlenecks and fees."
              tech={['Next.js', 'PWA', 'Cloud Architecture']}
              icon={Code}
              imgSrc="/images/pic03.jpg"
              links={[
                { label: 'View GitHub', url: 'https://github.com/justindallen2025' }
              ]}
            />
            <ProjectCard 
              title="Linux Distributed Server Ops"
              period="Jan 2023 - Present"
              description="Deployed and managed a high-performance Linux-based game server environment. Configured TCP/UDP port forwarding, managed headless instances, and optimized protocol bottlenecks for high-concurrency loads."
              tech={['Linux/Unix', 'Bash Scripting', 'TCP/UDP Networking']}
              icon={Server}
            />
            <ProjectCard 
              title="Autonomous Go-Kart Telemetry"
              period="Aug 2023 - May 2024"
              description="Engineered electrical and mechanical systems for a gas-powered vehicle. Programmed Arduino microcontrollers to manage engine kill-switches and monitor RPM/speed data via Hall Effect sensors."
              tech={['Arduino', 'C', 'Control Systems']}
              icon={Globe}
            />
            <ProjectCard 
              title="Python OOP Simulation"
              period="Apr 2024"
              description="Developed a fully functional 2D arcade-style game with thousands of lines of code. Implemented collision detection, sprite management, and a continuously scrolling background using modular OOP architecture."
              tech={['Python', 'Pygame', 'OOP', 'Game Design']}
              icon={Gamepad2}
            />
            <ProjectCard 
              title="Monte Carlo Investment Sim"
              period="Jan 2024"
              description="Built a Python simulation to model long-term market volatility. Implemented randomization algorithms to generate 10,000+ iteration scenarios, calculating confidence intervals for 30-year horizons."
              tech={['Python', 'Data Simulation', 'Algorithms']}
              icon={LineChart}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 pt-12 pb-24 px-6 relative z-10 bg-black/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="font-mono font-bold text-white tracking-widest uppercase">Justin Allen</span>
              <span className="text-xs text-gray-500 font-mono flex items-center gap-1 mt-1">
                <MapPin size={12} /> Atlanta, GA 30313
              </span>
            </div>
          </div>
          
          <div className="flex gap-4">
            {[
              { icon: Github, href: 'https://github.com/justindallen2025' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/justindallen2025/' }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank"
                rel="noreferrer"
                className="p-3 glass rounded-xl text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
            &copy; 2026 Justin Allen / Built for Performance
          </div>
        </div>
      </footer>
    </div>
  );
}