import { useEffect } from "react";
import InteractiveBackground from "./components/InteractiveBackground";
import PortfolioHeader from "./components/PortfolioHeader";
import Hero from "./components/Hero";
import ProjectRoadmap, { Experiments } from "./components/ProjectRoadmap";
import About, { Contact } from "./components/About";

const previousSections = {
  "/projects": "work",
  "/experience": "about",
  "/education": "education",
  "/resume": "contact",
};
export default function App() {
  useEffect(() => {
    const section = previousSections[window.location.pathname];
    if (section) document.getElementById(section)?.scrollIntoView();
  }, []);
  return (
    <>
      <InteractiveBackground />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <PortfolioHeader />
      <main id="main">
        <Hero />
        <ProjectRoadmap />
        <Experiments />
        <About />
        <Contact />
      </main>
    </>
  );
}
