import React, { useState } from 'react';

const EXPERIENCE = [
  {
    role: "Software Engineer Intern",
    company: "Georgia Tech Research Institute",
    period: "May 2026 to Present",
    desc: "Architecting tactical network environments. Engineering Python and Node-RED middleware for real-time sensor ingestion across federal and state networks."
  },
  {
    role: "IT Intern",
    company: "Fellowship Christian School",
    period: "Jan 2024",
    desc: "Mapped wireless access points for emergency services 911 dispatch to improve response time and safety infrastructure."
  }
];

const PROJECTS = [
  {
    title: "Project CORE",
    subtitle: "Digital Signal Processing Architecture",
    description: "Modular embedded audio digital signal processing system. Authored low latency C++ callbacks for high fidelity 24 bit 96kHz audio processing utilizing an ARM Cortex M7 microcontroller."
  },
  {
    title: "Catalyst Cloud Burn Tracker",
    subtitle: "Financial Alerting Pipeline",
    description: "Proactive cloud credit and software burn tracker for founders. Integrated Plaid and Gmail APIs with a Gemini backend for real time runway forecasting."
  },
  {
    title: "Distributed Server Operations",
    subtitle: "High Concurrency Infrastructure",
    description: "Deployed and managed a high performance Linux based server environment. Configured TCP and UDP port forwarding and optimized protocol bottlenecks."
  },
  {
    title: "Autonomous Telemetry",
    subtitle: "Control Systems",
    description: "Engineered electrical and mechanical systems for a gas powered vehicle. Programmed Arduino microcontrollers to monitor RPM and speed data via Hall Effect sensors."
  }
];

const HOBBIES = [
  {
    title: "Digital Production and Audio",
    description: "Extensive background in guitar performance and audio engineering. Produced three full length albums and one single including a Vevo featured music video."
  },
  {
    title: "Mechanical Performance",
    description: "Active in mountain biking and automotive mechanics focusing on physical endurance and mechanical optimization."
  },
  {
    title: "Community Impact",
    description: "Dedicated to outdoor exploration and community service. Active volunteer with Operation Christmas Child and various non profit organizations."
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderNav = () => (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent px-8 py-10 flex justify-between items-center pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full pointer-events-auto">
        <button onClick={() => setCurrentPage('home')} className="text-xl font-bold tracking-tighter uppercase text-white hover:opacity-70 transition-opacity">
          Justin Allen
        </button>
        <div className="flex gap-8 text-xs uppercase tracking-widest text-zinc-400">
          <button onClick={() => setCurrentPage('home')} className={`hover:text-white transition-colors ${currentPage === 'home' ? 'text-white' : ''}`}>Home</button>
          <button onClick={() => setCurrentPage('projects')} className={`hover:text-white transition-colors ${currentPage === 'projects' ? 'text-white' : ''}`}>Projects</button>
          <button onClick={() => setCurrentPage('about')} className={`hover:text-white transition-colors ${currentPage === 'about' ? 'text-white' : ''}`}>About</button>
        </div>
      </div>
    </nav>
  );

  const renderHome = () => (
    <div className="animate-in fade-in duration-1000">
      
      {/* SECTION 1: HERO */}
      <div className="w-full h-screen bg-black flex flex-col justify-end p-12 relative overflow-hidden">
        <img 
          src="/images/IMG_0851.jpeg" 
          alt="Embedded Hardware" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="relative z-10 max-w-4xl pb-12">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white mb-6 uppercase">
            Justin Allen
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-snug">
            Computer Science Georgia Tech and Software Engineer Intern at GTRI. 
            Bridging high level software with bare metal performance.
          </p>
        </div>
      </div>

      {/* SECTION 2: CURRENT FOCUS (SATELLITES) */}
      <div className="w-full h-screen bg-black flex flex-col justify-end p-12 relative overflow-hidden border-t border-zinc-900">
        <img 
          src="/images/IMG_1349.jpeg" 
          alt="Tactical Network Infrastructure" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        <div className="relative z-10 max-w-4xl pb-12 mx-auto w-full px-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 uppercase">
            Tactical Operations
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8">
            Currently a Software Engineering Intern in ANGPD for the GTTAK project. Architecting deployable server environments and routing live video feeds for cross agency situational awareness platforms.
          </p>
          <button 
            onClick={() => setCurrentPage('about')}
            className="border border-white text-white px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors uppercase tracking-widest backdrop-blur-sm"
          >
            Read Background
          </button>
        </div>
      </div>

      {/* SECTION 3: FEATURED PROJECT (CAD GUITAR - FIXED) */}
      <div className="w-full h-screen bg-black flex flex-col justify-end p-12 relative overflow-hidden border-t border-zinc-900">
        {/* Placed the transparent PNG in a flex container to center it as an object rather than a stretched background */}
        <div className="absolute inset-0 flex items-center justify-center pb-32 px-12">
           <img 
            src="/images/image_1.png" 
            alt="Hardware Design" 
            className="w-full max-w-5xl object-contain opacity-90 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          />
        </div>
        {/* Adjusted the gradient to only darken the bottom area behind the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent h-2/3 mt-auto"></div>
        <div className="relative z-10 max-w-4xl pb-12 mx-auto w-full px-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 uppercase">
            Systems Architecture
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8">
            Developing modular computing platforms and custom routed circuit boards. Utilizing microcontrollers and low latency algorithms to build high fidelity systems and complex hardware integrations.
          </p>
          <button 
            onClick={() => setCurrentPage('projects')}
            className="border border-white text-white px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors uppercase tracking-widest backdrop-blur-sm"
          >
            View Engineering Projects
          </button>
        </div>
      </div>

      {/* SECTION 4: PERFORMANCE (MTB DROP) */}
      <div className="w-full h-screen bg-black flex flex-col justify-end p-12 relative overflow-hidden border-t border-zinc-900">
        <img 
          src="/images/IMG_1716.jpeg" 
          alt="Mountain Biking Drop" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="relative z-10 max-w-4xl pb-12 mx-auto w-full px-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 uppercase">
            Personal Pursuits
          </h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8">
            Passionate about mountain biking and automotive mechanics. Dedicated to community service and producing original music.
          </p>
          <button 
            onClick={() => setCurrentPage('about')}
            className="border border-white text-white px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors uppercase tracking-widest backdrop-blur-sm"
          >
            View Lifestyle
          </button>
        </div>
      </div>

    </div>
  );

  const renderProjects = () => (
    <div className="max-w-7xl mx-auto px-8 pt-48 pb-24 animate-in fade-in duration-1000">
      <header className="mb-24">
        <h1 className="text-5xl font-bold tracking-tighter mb-6 text-white uppercase">Core Engineering</h1>
        <p className="text-xl text-zinc-400 max-w-2xl">Hardware architecture and full stack systems designed for zero latency and high availability.</p>
      </header>

      <div className="space-y-48">
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-16 items-center">
            <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
              <h2 className="text-zinc-500 text-xs uppercase tracking-widest mb-4">{proj.subtitle}</h2>
              <h3 className="text-4xl font-bold mb-6 text-white uppercase">{proj.title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">{proj.description}</p>
              <button className="border-b border-white pb-1 text-sm text-white hover:text-zinc-400 hover:border-zinc-400 transition-colors uppercase tracking-widest">
                View Repository
              </button>
            </div>
            <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
              {/* Restored Structural Placeholder for future images */}
              <div className="w-full aspect-[4/3] bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-700 text-xs tracking-widest uppercase">
                Project Image Placeholder
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="max-w-7xl mx-auto px-8 pt-48 pb-24 animate-in fade-in duration-1000">
      <div className="grid md:grid-cols-2 gap-24">
        
        {/* LEFT COLUMN */}
        <div>
          <div className="mb-24">
            <h1 className="text-5xl font-bold tracking-tighter mb-12 text-white uppercase">Professional Background</h1>
            <div className="w-full aspect-[3/4] bg-zinc-900 mb-8 overflow-hidden border border-zinc-800 flex items-center justify-center text-zinc-700 text-xs tracking-widest uppercase">
               Portrait Image Placeholder
            </div>
          </div>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-12 border-b border-zinc-800 pb-4">Professional History</h2>
            <div className="space-y-12">
              {EXPERIENCE.map((exp, i) => (
                <div key={i}>
                  <div className="text-zinc-500 text-xs tracking-widest uppercase mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{exp.role}</h3>
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
            <div className="space-y-24">
              {HOBBIES.map((hobby, i) => (
                <div key={i}>
                   {/* Restored Structural Placeholder for future images */}
                  <div className="w-full aspect-video bg-zinc-900 mb-6 border border-zinc-800 flex items-center justify-center text-zinc-700 text-xs tracking-widest uppercase">
                    Pursuit Image Placeholder
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{hobby.title}</h3>
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
