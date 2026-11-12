import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="intro-title">
      <div className="hero-copy">
        <h1 id="intro-title">
          Software foundations.
          <br />
          <em>AI ambitions.</em>
        </h1>
        <p className="intro">
          I’m Neelkamal, a software engineer in New York, bringing experience
          in backend development and cloud computing to a growing focus on AI
          engineering.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Explore the roadmap <span aria-hidden="true">↘</span>
          </a>
          <a className="button button-outline" href={personalInfo.github}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <figure
        className="system-diagram"
        aria-label="Conceptual AI workflow: retrieve, reason, evaluate"
      >
        <ol>
          {["Retrieve", "Reason", "Evaluate"].map((step, index) => (
            <li key={step}>
              <span className="step-number">0{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <figcaption>The systems I’m learning to build</figcaption>
      </figure>
    </section>
  );
}
