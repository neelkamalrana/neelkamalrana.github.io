import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Github, ExternalLink, Mail, Linkedin, Download, Building, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, projects, education, experience, skills } from './data/portfolioData';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <img
            src="/me.jpg"
            alt="Neelkamal Rana"
            className="w-56 h-56 mx-auto mb-8 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm {personalInfo.name} 👋</h1>
          <p className="text-xl text-gray-600 mb-6">
            {personalInfo.title}
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-blue-600 mb-4">
              <Building size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-600">2+ years in software development with focus on Java and React</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-green-600 mb-4">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">B.Tech in Computer Science with strong academic background</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-purple-600 mb-4">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p className="text-gray-600">Multiple full-stack projects showcasing various technologies</p>
          </div>
        </div>

                  <div className="text-center">
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
          </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents different skills and technologies I've learned.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gray-200 relative">
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
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition"
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

function Education() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Education</h1>
          <p className="text-lg text-gray-600">
            My academic journey and achievements
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                  <p className="text-xl text-blue-600 font-semibold">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                  <p className="text-sm text-gray-500">{edu.location}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  GPA: {edu.gpa}
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
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

function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Work Experience</h1>
          <p className="text-lg text-gray-600">
            My professional journey and contributions
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                  <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
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
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-600">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
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

function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Resume</h1>
          <p className="text-lg text-gray-600 mb-8">
            Download my latest resume or view it online
          </p>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="/resume.pdf" 
              download
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <Download size={20} />
              <span>Download PDF</span>
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <ExternalLink size={20} />
              <span>View Online</span>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{personalInfo.name}</h2>
            <p className="text-lg text-gray-600 mb-4">Software Developer</p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <span>{personalInfo.email}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Summary</h3>
              <p className="text-gray-600 leading-relaxed">
                Experienced software developer with expertise in Java, Spring Boot, and React. 
                Passionate about building scalable web applications and solving complex problems. 
                Strong background in full-stack development with experience in cloud technologies and agile methodologies.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Programming Languages</h4>
                  <p className="text-gray-600">{skills.programmingLanguages.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Frameworks & Libraries</h4>
                  <p className="text-gray-600">{skills.frameworks.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Databases</h4>
                  <p className="text-gray-600">{skills.databases.join(', ')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Tools & Technologies</h4>
                  <p className="text-gray-600">{skills.tools.join(', ')}</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                      <span className="text-sm text-gray-500">{exp.duration}</span>
                    </div>
                    <p className="text-blue-600 mb-2">{exp.company}</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {exp.description.slice(0, 3).map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start space-x-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-green-500 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                    <span className="text-sm text-gray-500">{edu.duration}</span>
                  </div>
                  <p className="text-green-600 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition">
                {personalInfo.name}
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition">Home</Link>
                <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition">Projects</Link>
                <Link to="/experience" className="text-gray-600 hover:text-blue-600 transition">Experience</Link>
                <Link to="/education" className="text-gray-600 hover:text-blue-600 transition">Education</Link>
                <Link to="/resume" className="text-gray-600 hover:text-blue-600 transition">Resume</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-blue-600 transition">
                <Mail size={20} />
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

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-300 mb-4">© 2025 {personalInfo.name}. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Built with React and ❤️</p>
        </div>
      </footer>
    </div>
  );
}