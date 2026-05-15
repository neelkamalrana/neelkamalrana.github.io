import React, { useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Github, ExternalLink, Mail, Linkedin, Download, Phone } from 'lucide-react';
import { personalInfo, projects, education, experience, certifications } from './data/portfolioData';
import BlockBackground from './components/BlockBackground';
import ParticleBackground from './components/ParticleBackground';

const glassCard =
  'rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.09] to-white/[0.04] backdrop-blur-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)]';

function navLinkClass({ isActive }) {
  return [
    'rounded-md px-0.5 transition-colors',
    isActive ? 'text-cyan-300 font-medium' : 'text-slate-300 hover:text-cyan-300',
  ].join(' ');
}

function Projects() {
  return (
    <div className="section-dyn section-dyn--projects min-h-screen py-12">
      <div className="section-dyn-inner max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-100 mb-4">My Projects</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents different skills and technologies I've learned.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${glassCard} overflow-hidden hover:border-cyan-400/30 hover:shadow-cyan-950/40 transition-all duration-300 w-full max-w-sm`}
            >
              <div className="h-48 bg-slate-950/80 relative border-b border-white/5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-95" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-violet-500/20 text-violet-200 border border-violet-400/25"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-cyan-400 text-slate-900 hover:bg-cyan-300 font-medium transition px-4 py-2 rounded-lg shadow-lg shadow-cyan-900/30"
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [modalAlt, setModalAlt] = useState('');

  const openModal = (img, alt) => {
    setModalImg(img);
    setModalAlt(alt);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div id="certifications" className="section-dyn section-dyn--certs min-h-screen py-12">
      <div className="section-dyn-inner max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-50 mb-4">Certifications</h1>
          <p className="text-lg text-amber-100/70 max-w-2xl mx-auto">
            Here are some of my certifications. Click on a card to view full size.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`${glassCard} overflow-hidden hover:border-amber-400/35 transition-all duration-300 w-full max-w-sm`}
            >
              <div
                className="h-64 bg-slate-950/60 relative group cursor-pointer border-b border-white/5"
                onClick={() => openModal(cert.image, cert.name)}
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-50 mb-3 text-center">{cert.name}</h3>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={closeModal}>
            <div
              className="bg-slate-900 border border-white/15 rounded-xl shadow-2xl p-4 max-w-3xl w-full flex flex-col items-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute top-2 right-2 text-slate-400 hover:text-rose-400 text-2xl font-bold leading-none"
                onClick={closeModal}
              >
                &times;
              </button>
              <img src={modalImg} alt={modalAlt} className="max-h-[80vh] w-auto object-contain rounded-lg" />
              <div className="mt-3 text-lg font-semibold text-slate-100">{modalAlt}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="section-dyn section-dyn--experience min-h-screen py-12">
      <div className="section-dyn-inner max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-50 mb-4">Work Experience</h1>
          <p className="text-lg text-sky-200/70">My professional journey and contributions</p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className={`${glassCard} p-8 hover:border-sky-400/25 transition-colors`}>
              <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">{exp.title}</h3>
                  <p className="text-xl text-sky-300 font-semibold">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">{exp.duration}</p>
                  <p className="text-sm text-slate-500">{exp.location}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-200 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span className="text-slate-400">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-200 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/25"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="section-dyn section-dyn--education min-h-screen py-12">
      <div className="section-dyn-inner max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-50 mb-4">Education</h1>
          <p className="text-lg text-emerald-100/70">My academic journey and achievements.</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className={`${glassCard} p-8 hover:border-emerald-400/25 transition-colors`}>
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-2">{edu.degree}</h3>
                  <p className="text-xl text-emerald-300 font-semibold">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-400">{edu.duration}</p>
                  <p className="text-sm text-slate-500">{edu.location}</p>
                </div>
              </div>

              <div className="mb-4">
                <span className="inline-block bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-3 py-1 rounded-full text-sm font-medium">
                  GPA: {edu.gpa}
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-slate-200 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start space-x-2">
                      <span className="text-emerald-400 mt-1">•</span>
                      <span className="text-slate-400">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div className="section-dyn section-dyn--resume min-h-screen py-10 pb-16">
      <div className="section-dyn-inner max-w-5xl mx-auto px-6">
        <div className="flex justify-center w-full mb-8">
          <a
            href="/resources/Neelkamal_Rana_Resume.pdf"
            download
            className="flex items-center space-x-2 bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg hover:bg-cyan-300 transition font-medium shadow-lg shadow-black/40"
          >
            <Download size={20} />
            <span className="px-2">Download Resume as PDF</span>
          </a>
        </div>
        <iframe
          src="/resources/Neelkamal_Rana_Resume.pdf"
          width="100%"
          style={{ height: '85vh', width: '100%' }}
          title="NeelkamalRana_Resume"
          className="border border-white/15 rounded-xl shadow-2xl bg-slate-950/40"
        />
      </div>
    </div>
  );
}

function Home() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash === '#certifications') {
      const el = document.getElementById('certifications');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <>
      <div className="section-dyn section-dyn--home min-h-screen">
        <div className="section-dyn-inner max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <img
              src="/resources/me.jpg"
              alt="Neelkamal Rana"
              className="w-96 h-96 mx-auto mb-8 rounded-full object-cover border-4 border-cyan-400/40 shadow-2xl shadow-cyan-900/30 ring-2 ring-white/10"
            />
            <h1 className="text-5xl font-bold text-slate-100 mb-4">Hi, I'm {personalInfo.name} 👋</h1>
            <p className="text-xl text-cyan-200/90 mb-6">{personalInfo.title}</p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">{personalInfo.summary}</p>
          </div>
        </div>
      </div>
      <Projects />
      <Certifications />
      <Experience />
      <Education />
      <Resume />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-200">
      <BlockBackground />
      <ParticleBackground />
      <div className="relative z-10">
        <nav className="bg-[#060a12]/78 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_30px_-8px_rgba(0,0,0,0.5)] sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-8">
                <a
                  href="https://leetcode.com/u/neelkamal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-slate-100 hover:text-cyan-300 transition"
                >
                  My Leetcode
                </a>
                <div className="hidden md:flex space-x-6">
                  <NavLink to="/" end className={navLinkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/projects" className={navLinkClass}>
                    Projects
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => {
                      if (window.location.pathname !== '/') {
                        window.location.href = '/#certifications';
                      } else {
                        const el = document.getElementById('certifications');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-slate-300 hover:text-cyan-300 transition bg-transparent border-none cursor-pointer"
                    style={{ padding: 0 }}
                  >
                    Certifications
                  </button>
                  <NavLink to="/experience" className={navLinkClass}>
                    Experience
                  </NavLink>
                  <NavLink to="/education" className={navLinkClass}>
                    Education
                  </NavLink>
                  <NavLink to="/resume" className={navLinkClass}>
                    Resume
                  </NavLink>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-100 transition"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-300 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-cyan-300 transition">
                  <Mail size={20} />
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`}
                  className="text-slate-400 hover:text-emerald-400 transition"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}
