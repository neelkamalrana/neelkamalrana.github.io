// TEST COMMENT: Deployment verification
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Github, ExternalLink, Mail, Linkedin, Download, Building, GraduationCap, Briefcase, Phone } from 'lucide-react';
import { personalInfo, projects, education, experience, certifications } from './data/portfolioData';

function Projects() {
  return (
    <div className="min-h-screen bg-pastel-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents different skills and technologies I've learned.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-pastel-surface border border-pastel-gray rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
              <div className="h-48 bg-pastel-gray relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-pastel-yellow text-pastel-purple text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-pastel-accent text-gray-800 hover:bg-pastel-secondary font-medium transition px-4 py-2 rounded-lg shadow"
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
    <div id="certifications" className="min-h-screen" style={{ backgroundColor: '#FFF9DB' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Certifications</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my certifications. Hover over a card to enlarge the certificate image. Click to view full size.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-pastel-surface border border-pastel-gray rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
              <div className="h-64 bg-pastel-gray relative group cursor-pointer" onClick={() => openModal(cert.image, cert.name)}>
                <img 
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{cert.name}</h3>
              </div>
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full flex flex-col items-center relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl font-bold" onClick={closeModal}>&times;</button>
              <img src={modalImg} alt={modalAlt} className="max-h-[80vh] w-auto object-contain rounded" />
              <div className="mt-2 text-lg font-semibold text-gray-800">{modalAlt}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D6EAF8' }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h1>
          <p className="text-lg text-gray-600">
            My professional journey and contributions
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="rounded-xl shadow-lg p-8 bg-pastel-surface border border-pastel-gray">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <p className="text-xl text-pastel-purple font-semibold">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="flex items-start space-x-2">
                      <span className="text-pastel-primary mt-1">•</span>
                      <span className="text-gray-600">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-pastel-yellow text-pastel-purple text-sm rounded-full">
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
    <div className="min-h-screen bg-pastel-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Education</h1>
          <p className="text-lg text-gray-600">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="rounded-xl shadow-lg p-8 bg-pastel-surface border border-pastel-gray">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                  <p className="text-xl text-pastel-purple font-semibold">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-pastel-yellow text-pastel-purple px-3 py-1 rounded-full text-sm font-medium">
                  GPA: {edu.gpa}
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start space-x-2">
                      <span className="text-pastel-primary mt-1">•</span>
                      <span className="text-gray-600">{highlight}</span>
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
    <div className="min-h-screen bg-pastel-background">
      <div className="flex justify-center w-full mb-8">
        <a 
          href="/resources/Neelkamal_Rana_Resume_2025.pdf" 
          download
          className="flex items-center space-x-2 bg-pastel-accent text-gray-800 px-6 py-3 rounded-lg hover:bg-pastel-secondary transition shadow"
        >
          <Download size={20} />
          <span className="px-4">Download Resume as PDF</span>
        </a>
      </div>
      <iframe
        src="/resources/Neelkamal_Rana_Resume_2025.pdf"
        width="100%"
        style={{ height: '100vh', width: '100%' }}
        title="NeelkamalRana_Resume"
        className="border rounded-lg shadow-lg bg-pastel-surface"
      />
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
    <div className="min-h-screen" style={{ backgroundColor: '#F6D1C1' }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <img
            src="/resources/me.jpg"
            alt="Neelkamal Rana"
            className="w-96 h-96 mx-auto mb-8 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm {personalInfo.name} 👋</h1>
          <p className="text-xl text-gray-600 mb-6">
            {personalInfo.title}
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-xl shadow-lg">
            <div className="text-blue-600 mb-4">
              <Building size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-600">2+ years in software development with focus on Java and React</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg">
            <div className="text-green-600 mb-4">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">MS in Computer Science with concentration in Software Development</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg">
            <div className="text-purple-600 mb-4">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p className="text-gray-600">Multiple full-stack projects showcasing various technologies</p>
          </div>
        </div> */}

        {/* <div className="text-center">
          <div className="flex justify-center space-x-4">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              <Mail size={20} />
              <span>Get in Touch</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          <div className="flex justify-center mt-4">
            <a
              href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`}
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              <Phone size={20} />
              <span>{personalInfo.phone}</span>
            </a>
          </div>
        </div> */}
      </div>
      <Projects />
      <Certifications />
      <Experience />
      <Education />
      <Resume />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-code-pattern font-sans">
      <nav className="bg-pastel-primary shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <a href="https://leetcode.com/u/neelkamal" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-gray-800 hover:text-pastel-purple transition">
                My Leetcode
              </a>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-600 hover:text-pastel-purple transition">Home</Link>
                <Link to="/projects" className="text-gray-600 hover:text-pastel-purple transition">Projects</Link>
                <button
                  onClick={() => {
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#certifications';
                    } else {
                      const el = document.getElementById('certifications');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-600 hover:text-pastel-purple transition bg-transparent border-none cursor-pointer"
                  style={{ padding: 0 }}
                >
                  Certifications
                </button>
                <Link to="/experience" className="text-gray-600 hover:text-pastel-purple transition">Experience</Link>
                <Link to="/education" className="text-gray-600 hover:text-pastel-purple transition">Education</Link>
                <Link to="/resume" className="text-gray-600 hover:text-pastel-purple transition">Resume</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pastel-purple transition">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-pastel-purple transition">
                <Mail size={20} />
              </a>
              <a href={`tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`} className="text-gray-600 hover:text-green-600 transition">
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
  );
}