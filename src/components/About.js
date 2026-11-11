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
        <div className="timeline">
          <article>
            <h3>HCL Technologies</h3>
            <p className="role">Associate Software Developer · 2021–2023</p>
            <p>
              Courier tracking, EDI integrations, caching, and data pipelines
              with Java, Spring Boot, Redis, and RabbitMQ.
            </p>
          </article>
          <article>
            <h3>Bharat Heavy Electricals Limited</h3>
            <p className="role">Software Engineering Intern · 2021</p>
            <p>
              An Android application for field operations, with offline storage
              and backend synchronization.
            </p>
          </article>
        </div>
        <div className="education" id="education">
          <h3>Education</h3>
          <p>
            <strong>MS Computer Science</strong> — Pace University, 2023–2025
          </p>
          <p>
            <strong>BTech Computer Science</strong> — Uttarakhand Technical
            University, 2017–2021
          </p>
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
