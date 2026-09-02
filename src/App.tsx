import React, { useState } from 'react';

const SKILLS = [
  { category: "Languages", items: "Java, Python, C++, C, Bash, XML, JavaScript, HTML, CSS" },
  { category: "Embedded Systems", items: "ARM Cortex M7, Arduino, Atmel, Custom PCB Design, I2C, SPI, UART, Fusion 360" },
  { category: "Cybersecurity and Ops", items: "Network Architecture, Headless Linux Administration, TCP and UDP Networking, REST APIs, Wireshark, Nmap, Ansible" },
  { category: "Core Concepts", items: "Digital Signal Processing, Object Oriented Design, Memory Management, Data Simulation" }
];

const EXPERIENCE = [
  {
    role: "Student Assistant / Embedded Security Researcher",
    company: "GTRI (CIPHER)",
    period: "August 2026 to Present",
    desc: "Building physics-based UAV digital twins and reversing frequency-hopping wireless links using Software-Defined Radios to extract raw packet headers and secure tactical infrastructures."
  },
  {
    role: "Founder & CEO",
    company: "Signl Systems",
    period: "January 2026 to Present",
    desc: "Engineering embedded DSP prototypes on custom hardware, utilizing ARM Cortex-M7 microcontrollers for low-latency audio processing and custom hardware pipelines."
  },
  {
    role: "Software Engineer Intern",
    company: "Georgia Tech Research Institute",
    period: "May 2026 to August 2026",
    desc: "Architected tactical network environments, engineering Python and Node-RED middleware for real-time sensor ingestion and live camera feed routing for the National Guard."
  }
];

const PROJECTS = [
  {
    title: "Signl Systems (Formerly CORE Music Tech)",
    subtitle: "Digital Signal Processing Architecture",
    description: "Modular embedded audio digital signal processing system. Authored low latency C++ callbacks for high fidelity 24 bit 96kHz audio processing utilizing a 480 MHz ARM Cortex M7 microcontroller.",
    img: "/images/FullSizeRender.jpeg",
    linkText: "View Website",
    linkUrl: "https://signltech.com"
  },
  {
    title: "Catalyst Cloud Burn Tracker",
    subtitle: "Financial Alerting Pipeline",
    description: "Proactive cloud credit and software burn tracker for founders. Integrated Plaid and Gmail APIs with a Gemini backend for real time runway forecasting.",
    img: "/images/catalyst.png",
    linkText: "View Devpost",
    linkUrl: "https://devpost.com/software/catalyst-6x758e"
  },
  {
    title: "Distributed Server Operations",
    subtitle: "High Concurrency Infrastructure",
    description: "Deployed and managed a high performance Linux based private server environment. Learned the basics of SSH server administration and local network deployment via custom firewall rules.",
    img: "/images/terminal.png"
  }
];

const HOBBIES = [
  {
    title: "Digital Production and Audio",
    description: "Extensive background in guitar performance and audio engineering. Produced three full length albums and one single including a Vevo featured music video.",
    img: "/images/music.png",
    imgClass: "object-cover object-center"
  },
  {
    title: "Mechanical Performance",
    description: "Active in mountain biking and automotive mechanics focusing on physical endurance and mechanical optimization.",
    img: "/images/IMG_1261.jpeg",
    imgClass: "object-cover object-center"
  },
  {
    title: "Community Impact",
    description: "Dedicated to outdoor exploration and community service. Active volunteer with Operation Christmas Child and various non profit organizations.",
    img: "/images/7E6B1CF2-3034-42E1-994C-AA2054D26435_1_105_c.jpeg",
    imgClass: "object-cover object-top"
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderNav = () => (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent px-8 py-10 flex justify-between items-center pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full pointer-events-auto">
        <button onClick={() => handleNavigate('home')} className="text-xl font-bold tracking-tighter uppercase text-white hover:opacity-70 transition-opacity">
          Justin Allen
        </button>
        <div className="flex gap-8 text-xs uppercase tracking-widest text-zinc-400">
          <button onClick={() => handleNavigate('home')} className={`hover:text-white transition-colors ${currentPage === 'home' ? 'text-white' : ''}`}>Home</button>
          <button onClick={() => handleNavigate('projects')} className={`hover:text-white transition-colors ${currentPage === 'projects' ? 'text-white' : ''}`}>Projects</button>
          <button onClick={() => handleNavigate('about')} className={`hover:text-white transition-colors ${currentPage === 'about' ? 'text-white' : ''}`}>About</button>
        </div>
      </div>
    </nav>
  );

  const renderHome = () => (
    <div className="animate-in fade-in duration-1000">
      
      {/* SECTION 1: HERO */}
      <div className="w-full h-screen bg-black flex flex-col justify-end p-12 relative overflow-hidden group">
        <img src="/images/IMG_0851.jpeg" alt="Embedded Hardware" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="relative z-10 max-w-4xl pb-12 w-full">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white mb-6 uppercase">Justin Allen</h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-snug">
            Computer Science student at Georgia Tech and security researcher at GTRI CIPHER. Bridging high-level software with bare-metal performance.
          </p>
        </div>
      </div>

      {/* SECTION 2: TACTICAL OPERATIONS */}
      <div className="w-full h-screen bg-black flex flex-col justify-end p-12 relative overflow-hidden border-t border-zinc-900 group">
        <img src="/images/IMG_1349.jpeg" alt="Tactical Network" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70"></div>
        <div className="relative z-10 max-w-4xl pb-12 mx-auto w-full px-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 uppercase">Tactical Operations</h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8">
            Currently researching embedded security at GTRI CIPHER, building UAV digital twins, and analyzing frequency-hopping wireless links with Software-Defined Radios.
          </p>
          <button onClick={() => handleNavigate('about')} className="border border-white text-white px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors uppercase tracking-widest backdrop-blur-sm">Read Background</button>
        </div>
      </div>

      {/* SECTION 3: SYSTEMS ARCHITECTURE */}
      <div className="w-full h-screen bg-black flex flex-col justify-end p-12 relative overflow-hidden border-t border-zinc-900 group">
        <img src="/images/image_1.png" alt="Hardware Design" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="relative z-10 max-w-4xl pb-12 mx-auto w-full px-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 uppercase">Systems Architecture</h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8">
            Developing modular computing platforms and custom routed circuit boards. Utilizing microcontrollers and low latency algorithms to build high fidelity systems and complex hardware integrations.
          </p>
          <button onClick={() => handleNavigate('projects')} className="border border-white text-white px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors uppercase tracking-widest backdrop-blur-sm">View Engineering Projects</button>
        </div>
      </div>

      {/* SECTION 4: PERFORMANCE */}
      <div className="w-full h-screen bg-black flex flex-col justify-end p-12 relative overflow-hidden border-t border-zinc-900 group">
        <img src="/images/IMG_1716.jpeg" alt="Mountain Biking" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="relative z-10 max-w-4xl pb-12 mx-auto w-full px-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 uppercase">Personal Pursuits</h2>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8">
            Passionate about mountain biking and automotive mechanics. Dedicated to community service and producing original music.
          </p>
          <button onClick={() => handleNavigate('about')} className="border border-white text-white px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors uppercase tracking-widest backdrop-blur-sm">View Lifestyle</button>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="animate-in fade-in duration-1000">
      
      {/* PROJECTS BANNER */}
      <div className="w-full h-screen bg-black flex flex-col justify-end p-12 relative overflow-hidden group">
        <img src="/images/option2.png" alt="Data Spectrogram" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="relative z-10 max-w-4xl pb-12 w-full">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white mb-6 uppercase">Engineering</h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-snug">Hardware architecture and full stack systems designed for zero latency and high availability.</p>
        </div>
      </div>

      {/* PROJECTS LIST */}
      <div className="max-w-7xl mx-auto px-8 py-32 space-y-48">
        {PROJECTS.map((proj, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-16 items-center group">
            <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
              <h2 className="text-zinc-500 text-xs uppercase tracking-widest mb-4">{proj.subtitle}</h2>
              <h3 className="text-4xl font-bold mb-6 text-white uppercase">{proj.title}</h3>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">{proj.description}</p>
              
              {proj.linkUrl && (
                <a 
                  href={proj.linkUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-block border-b border-white pb-1 text-sm text-white hover:text-zinc-400 hover:border-zinc-400 transition-colors uppercase tracking-widest"
                >
                  {proj.linkText}
                </a>
              )}
            </div>
            <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
              <div className="w-full aspect-[4/3] bg-zinc-900 border border-zinc-800 overflow-hidden relative">
                {/* Added scale transition on hover */}
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover object-center opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="animate-in fade-in duration-1000">

      {/* ABOUT BANNER - Reverted to default object position */}
      <div className="w-full h-screen bg-black flex flex-col justify-end p-12 relative overflow-hidden group">
        <img src="/images/EFFD921D-DEE4-4A6A-9D22-AEE17F6375D5_1_105_c.jpeg" alt="Georgia Tech Klaus Building" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="relative z-10 max-w-4xl pb-12 w-full">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white mb-6 uppercase">Experience & About</h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-snug">Professional background, technical capabilities, and personal pursuits.</p>
        </div>
      </div>

      {/* SINGLE COLUMN SCROLLING CONTENT */}
      <div className="max-w-4xl mx-auto px-8 py-32 space-y-32">
        
        {/* BIO SECTION */}
        <div className="grid md:grid-cols-3 gap-12 items-center group">
          
          {/* PROFILE IMAGE - Added scale transition on hover */}
          <div className="w-full aspect-[4/5] bg-zinc-900 overflow-hidden border border-zinc-800 flex items-end justify-center relative">
            <img src="/images/NEW_Profile_Pic.png" alt="Justin Allen" className="w-[115%] max-w-none h-auto object-contain object-bottom drop-shadow-2xl translate-y-4 translate-x-3 transition-transform duration-700 group-hover:scale-105" />
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">Professional Background</h2>
            <p className="text-zinc-400 leading-relaxed mb-6 text-lg">
              I am a Computer Science student at the Georgia Institute of Technology specializing in Information Internetworks and Cybersecurity. My engineering focus lies at the intersection of high level software architecture and bare metal embedded systems.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              From reverse engineering firmware for tactical network environments to developing low latency digital signal processing algorithms, I build systems designed for absolute reliability and performance.
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-4">Academic Background</h2>
          <div>
            <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">Georgia Institute of Technology</h3>
            <div className="text-zinc-400 text-sm mb-4">Bachelor of Science in Computer Science</div>
            <ul className="text-zinc-400 text-base space-y-2 leading-relaxed">
              <li>Expected Graduation December 2028</li>
              <li>Threads: Information Internetworks and Cybersecurity and Privacy</li>
              <li>Zell Miller Scholarship and Deans List</li>
              <li>CompTIA Security+ Certified</li>
            </ul>
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-4">Technical Capabilities</h2>
          <div className="space-y-6">
            {SKILLS.map((skill, i) => (
              <div key={i}>
                <h3 className="text-sm font-bold text-white mb-2 uppercase">{skill.category}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-4">Professional History</h2>
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

        {/* HOBBIES / PURSUITS */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-12 border-b border-zinc-800 pb-4">Personal Pursuits</h2>
          <div className="space-y-24">
            {HOBBIES.map((hobby, i) => (
              <div key={i} className="group">
                <div className="w-full aspect-video bg-zinc-900 mb-6 overflow-hidden border border-zinc-800">
                  {/* Added scale transition on hover */}
                  <img src={hobby.img} alt={hobby.title} className={`w-full h-full opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 ${hobby.imgClass}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{hobby.title}</h3>
                <p className="text-zinc-400 text-base leading-relaxed">{hobby.description}</p>
              </div>
            ))}
          </div>
        </section>

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
