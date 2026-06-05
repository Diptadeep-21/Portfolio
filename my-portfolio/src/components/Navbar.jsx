import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [today] = useState(() => {
    return new Date().toLocaleDateString("en-GB", {
      weekday: "long", day: "numeric", month: "long", year: "numeric"
    });
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Stats", "Contact"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=EB+Garamond:wght@400;500&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --ink: #1a1208;
          --ink-2: #3d3425;
          --ink-3: #6b5f4e;
          --paper: #f5f0e8;
          --paper-2: #ede7d9;
          --paper-3: #e0d8c8;
          --rule: #c8bfa8;
          --accent: #8b1a1a;
          --accent-2: #c0392b;
        }

        * { box-sizing: border-box; }

        .ed-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: var(--paper);
          transition: box-shadow 0.3s;
          font-family: 'EB Garamond', serif;
        }
        .ed-nav.scrolled {
          box-shadow: 0 1px 0 var(--rule), 0 4px 24px rgba(26,18,8,0.08);
        }

        .nav-dateline {
          border-bottom: 1px solid var(--rule);
          padding: 5px 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.68rem;
          color: var(--ink-3);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-family: 'DM Mono', monospace;
        }

        .nav-main {
          padding: 0 2rem;
          border-bottom: 3px double var(--ink);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          height: 64px;
        }

        .nav-logo-block {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1;
        }
        .nav-logo-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--ink);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .nav-logo-sub {
          font-size: 0.6rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-3);
          font-family: 'DM Mono', monospace;
          margin-top: 1px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0;
          height: 100%;
        }
        .nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-2);
          text-decoration: none;
          padding: 0 1.1rem;
          height: 100%;
          display: flex;
          align-items: center;
          border-left: 1px solid var(--rule);
          transition: background 0.2s, color 0.2s;
        }
        .nav-link:hover {
          background: var(--paper-2);
          color: var(--accent);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 100%;
        }
        .nav-resume {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-2);
          text-decoration: none;
          padding: 6px 14px;
          border: 1px solid var(--ink-2);
          transition: all 0.2s;
        }
        .nav-resume:hover {
          background: var(--ink);
          color: var(--paper);
        }
        .nav-hire {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--paper);
          background: var(--accent);
          text-decoration: none;
          padding: 7px 16px;
          transition: background 0.2s;
        }
        .nav-hire:hover { background: var(--accent-2); }

        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 20px;
          height: 1.5px;
          background: var(--ink);
          transition: all 0.3s;
        }

        .mobile-menu {
          display: none;
          position: fixed;
          top: 107px; left: 0; right: 0;
          background: var(--paper);
          border-top: 1px solid var(--rule);
          border-bottom: 3px double var(--ink);
          padding: 1rem 2rem 1.5rem;
          flex-direction: column;
          gap: 1rem;
          z-index: 99;
          transform: translateY(-110%);
          opacity: 0;
          transition: all 0.32s ease;
          pointer-events: none;
        }
        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        .mobile-nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-2);
          text-decoration: none;
          padding: 8px 0;
          border-bottom: 1px solid var(--paper-3);
        }
        .mobile-nav-link:hover { color: var(--accent); }

        @media (max-width: 768px) {
          .nav-links, .nav-actions { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: flex; }
        }
      `}</style>

      <nav className={`ed-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-dateline">
          <span>{today}</span>
          <span>Vol. III · KIIT CSE, Bhubaneswar</span>
          <span>Full-Stack Engineering · Est. 2022</span>
        </div>
        <div className="nav-main">
          <a href="#" className="nav-logo-block">
            <span className="nav-logo-name">Diptadeep Sinha</span>
            <span className="nav-logo-sub">Software Engineer · Portfolio</span>
          </a>
          <div className="nav-links">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
            ))}
          </div>
          <div className="nav-actions">
            <a href="/resume.pdf" download="Diptadeep_Sinha_Resume.pdf" className="nav-resume">↓ Resume</a>
            <a href="mailto:sinhadiptadeep@gmail.com" className="nav-hire">Hire me</a>
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l}</a>
        ))}
        <a href="/resume.pdf" download className="mobile-nav-link">↓ Download Resume</a>
        <a href="mailto:sinhadiptadeep@gmail.com" className="mobile-nav-link" style={{ color: "var(--accent)" }}>Hire me →</a>
      </div>
    </>
  );
}