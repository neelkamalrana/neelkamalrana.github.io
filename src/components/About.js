import { certifications, personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section className="about wrap" id="about" aria-labelledby="about-title">
      <div className="about-copy">
        <h2 id="about-title">
          Built on software
          <br />
          engineering.
        </h2>
        <p>
          Before exploring AI systems, I worked on the backend systems that move
          data between services. That foundation shapes how I want to build:
          useful, measurable, and reliable.
        </p>
      </div>
      <div className="background-details">
        <div className="timeline" aria-label="Education and career timeline">
          <article>
            <h3>NY Plates and Registration Solution Corp</h3>
            <p className="role">Full Stack Developer · Jun 2026–Present</p>
            <p className="timeline-location">New York, NY</p>
            <p>
              A React, TypeScript, and Supabase portal for registration intake,
              document review, invoicing, and DMV tracking. AI document
              extraction and automated DMV form filling with human review,
              alongside secure role-based workflows, task pipelines, and batch
              reporting.
            </p>
          </article>
          <article>
            <h3>Shoptaki</h3>
            <p className="role">Software Engineer Intern · Oct 2025–Jun 2026</p>
            <p className="timeline-location">Remote</p>
            <p>
              Next.js interfaces and analytics dashboards, AI-agent handoff
              workflows, and backend services for identity verification.
            </p>
          </article>
          <article>
            <h3>Master of Science</h3>
            <p className="role">Computer Science · Aug 2023–May 2025</p>
            <p>Pace University. Concentration in Software Development.</p>
            <p className="timeline-location">New York, NY</p>
          </article>
          <article>
            <h3>HCL Technologies</h3>
            <p className="role">
              Associate Software Developer · Nov 2021–Aug 2023
            </p>
            <p className="timeline-location">Bangalore, India</p>
            <p>
              Courier tracking, EDI integrations, caching, and data pipelines
              with Java, Spring Boot, Redis, and RabbitMQ.
            </p>
          </article>
          <article>
            <h3>Bharat Heavy Electricals Limited</h3>
            <p className="role">Software Engineering Intern · May–Aug 2021</p>
            <p className="timeline-location">Haridwar, India</p>
            <p>
              An Android application for field operations, with offline storage
              and backend synchronization.
            </p>
          </article>
          <article id="education">
            <h3>Bachelor of Technology</h3>
            <p className="role">Computer Science · 2017–2021</p>
            <p>Uttarakhand Technical University</p>
            <p className="timeline-location">Dehradun, Uttarakhand, India</p>
          </article>
        </div>
        <details className="certifications" id="certifications">
          <summary>
            Certifications <span aria-hidden="true">+</span>
          </summary>
          <ul>
            {certifications.map((cert) => (
              <li key={cert.name}>
                <a
                  href={encodeURI(cert.image)}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cert.name.replace("Cerified", "Certified")}{" "}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">
                    {" "}
                    (opens certificate in a new tab)
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <>
      <section
        className="contact sage-band"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="wrap">
          <h2 id="contact-title">Let’s build something useful.</h2>
          <div className="contact-links">
            <a href={`mailto:${personalInfo.email}`}>
              Get in touch <span aria-hidden="true">↗</span>
            </a>
            <a href={personalInfo.linkedin}>
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href={personalInfo.github}>
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="site-footer wrap">
        <a className="footer-name" href="#top">
          Neelkamal Rana
        </a>
        <span>New York</span>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
