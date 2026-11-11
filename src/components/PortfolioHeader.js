import { useState } from "react";

const links = [
  ["Work", "#work"],
  ["Experiments", "#experiments"],
  ["About", "#about"],
];
export const resumePath = "/resources/Neelkamal_Rana_Resume.pdf";

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header wrap" id="top">
      <a className="wordmark" href="#top" onClick={closeMenu}>
        Neelkamal Rana<span>.</span>
      </a>
      <button
        className="menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="primary-nav"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "Close" : "Menu"}{" "}
        <span aria-hidden="true">{menuOpen ? "−" : "+"}</span>
      </button>
      <nav
        id="primary-nav"
        aria-label="Main navigation"
        className={menuOpen ? "navigation is-open" : "navigation"}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeMenu();
            document.querySelector(".menu-toggle")?.focus();
          }
        }}
      >
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a
          className="button button-outline resume-link"
          href={resumePath}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Résumé <span aria-hidden="true">↗</span>
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        </a>
      </nav>
    </header>
  );
}
