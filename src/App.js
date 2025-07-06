import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const projects = [
  {
    title: 'SkyConnect',
    description: 'Shortest path finder between airports using Dijkstra\'s algorithm.',
    link: 'https://github.com/neelkamalrana/SkyConnect'
  },
  {
    title: 'Swastha Sanchar',
    description: 'Community-driven wellness Android app using Firebase and Jetpack Compose.',
    link: 'https://github.com/neelkamalrana/SwasthaSanchar'
  },
  {
    title: 'MoveEasy',
    description: 'Pay-as-you-go delivery platform for individuals and small businesses.',
    link: 'https://github.com/neelkamalrana/MoveEasy'
  }
];

function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">Hi, I'm Neelkamal Rana 👋</h1>
      <p className="text-lg text-gray-700">
        Java Developer | Spring Boot | React | AWS | Always Learning
      </p>
      <p className="mt-6 text-gray-600">
        Welcome to my portfolio! Navigate to the Projects page to explore my work.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <section className="max-w-5xl mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block p-5 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 font-sans">
        <nav className="bg-white shadow p-4 flex justify-center space-x-6">
          <Link to="/" className="text-blue-600 font-medium hover:underline">Home</Link>
          <Link to="/projects" className="text-blue-600 font-medium hover:underline">Projects</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>

        <footer className="text-center mt-16 text-gray-500 text-sm p-4">
          © 2025 Neelkamal Rana | Built with React
        </footer>
      </div>
    </Router>
  );
}