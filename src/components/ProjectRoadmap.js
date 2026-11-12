import { aiProjects } from "../data/aiProjects";

function ProjectRow({ project }) {
  return (
    <article className="project-row" aria-labelledby={`${project.id}-title`}>
      <div className="project-heading">
        <span className="project-number" aria-hidden="true">
          {project.number}
        </span>
        <div>
          <h3 id={`${project.id}-title`}>{project.title}</h3>
          <p className="project-category">{project.category}</p>
        </div>
      </div>
      <p className="project-description">{project.description}</p>
      <details className="project-details">
        <summary>
          <span className="project-status">{project.status}</span>
          <span className="project-toggle">
            <span className="when-closed">View project plan</span>
            <span className="when-open">Close project plan</span>{" "}
            <span className="disclosure-arrow" aria-hidden="true">
              ↗
            </span>
          </span>
          <span className="sr-only">: {project.title}</span>
        </summary>
        <div className="project-plan">
          <div>
            <h4>First version</h4>
            <p>{project.scope}</p>
            <h4>Approach</h4>
            <ol>
              {project.approach.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h4>How I’ll evaluate it</h4>
            <p>{project.evaluation}</p>
            <h4>First step</h4>
            <p>{project.firstStep}</p>
            <p className="proposed-tools">{project.tools}</p>
          </div>
          <p className="plan-note">
            Planning stage. Implementation and evaluation results are not
            available yet.
          </p>
        </div>
      </details>
    </article>
  );
}
export default function ProjectRoadmap() {
  return (
    <section className="roadmap wrap" id="work" aria-labelledby="work-title">
      <div className="section-intro">
        <h2 id="work-title">Small scope. Real engineering.</h2>
        <p>
          Three focused applications on my roadmap. Each will pair a usable
          interface with an honest look at how it works.
        </p>
      </div>
      <article className="project-row" aria-labelledby="littlelift-title">
        <div className="project-heading">
          <span className="project-number" aria-hidden="true">↗</span>
          <div><h3 id="littlelift-title">Little Lift</h3><p className="project-category">Independent web application · Public beta</p></div>
        </div>
        <p className="project-description">A no-signup community bill wall with optional images, direct PayPal links, and private links to manage requests. Payments happen on PayPal; the app does not verify transfers.</p>
        <p><a href="/littlelift/">Open Little Lift ↗</a>{" · "}<a href="https://github.com/neelkamalrana/littlelift" target="_blank" rel="noopener noreferrer">View source ↗</a></p>
      </article>
      <div className="project-list">
        {aiProjects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export function Experiments() {
  return (
    <section
      className="experiments sage-band"
      id="experiments"
      aria-labelledby="experiments-title"
    >
      <div className="wrap">
        <h2 id="experiments-title">A notebook, not a highlight reel.</h2>
        <p>
          Small machine learning experiments will live here: a question, a
          baseline, the result, and what I learned.
        </p>
        <p className="experiment-status">
          First experiments planned <span aria-hidden="true">·</span> No results
          published yet
        </p>
      </div>
    </section>
  );
}
