import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Stats", "Contact"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        .nav-link {
          position: relative;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          transition: color 0.3s;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #a78bfa, #f472b6);
          transition: width 0.3s ease;
        }
        .nav-link:hover { color: #fff; }
        .nav-link:hover::after { width: 100%; }

        .nav-resume {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 16px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .nav-resume:hover {
          border-color: rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.08);
          color: #fff;
          transform: translateY(-1px);
        }
        .nav-resume svg {
          flex-shrink: 0;
          transition: transform 0.25s;
        }
        .nav-resume:hover svg {
          transform: translateY(2px);
        }

        .nav-hire {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 18px;
          border-radius: 100px;
          background: linear-gradient(135deg, rgba(167,139,250,0.18), rgba(244,114,182,0.14));
          border: 1px solid rgba(167,139,250,0.35);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #c4b5fd;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .nav-hire:hover {
          background: linear-gradient(135deg, rgba(167,139,250,0.3), rgba(244,114,182,0.22));
          border-color: rgba(167,139,250,0.6);
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(167,139,250,0.2);
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: rgba(255,255,255,0.7);
          margin: 5px 0;
          transition: all 0.3s;
        }

        .mobile-menu {
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          background: rgba(7,5,20,0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(167,139,250,0.12);
          padding: 1.5rem 2rem 2rem;
          z-index: 49;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
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
        .mobile-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 0.4rem 0;
        }
        .mobile-resume {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          letter-spacing: 0.04em;
        }
        .mobile-hire {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          color: #c4b5fd;
          text-decoration: none;
          letter-spacing: 0.04em;
        }

        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>

      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(7,5,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(167,139,250,0.08)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}>

        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.25rem",
            fontWeight: 800,
            background: "linear-gradient(135deg, #e2d9ff, #f9a8d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em",
          }}>DS</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: "2.2rem" }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden-mobile" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Resume download */}
          <a href="/resume.pdf" download="Diptadeep_Sinha_Resume.pdf" className="nav-resume">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v7M6.5 8l-2.5-2.5M6.5 8l2.5-2.5M1.5 10.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Resume
          </a>
          {/* Hire me */}
          <a href="mailto:sinhadiptadeep@gmail.com" className="nav-hire">
            Hire me ✦
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="show-mobile hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          aria-label="Toggle menu"
        >
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
          <span></span>
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="nav-link"
            style={{ fontSize: "1rem" }}
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </a>
        ))}
        <div className="mobile-divider" />
        <a href="/resume.pdf" download="Diptadeep_Sinha_Resume.pdf" className="mobile-resume" onClick={() => setMenuOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 13 13" fill="none">
            <path d="M6.5 1v7M6.5 8l-2.5-2.5M6.5 8l2.5-2.5M1.5 10.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Download Resume
        </a>
        <a href="mailto:sinhadiptadeep@gmail.com" className="mobile-hire" onClick={() => setMenuOpen(false)}>
          ✦ Hire me
        </a>
      </div>
    </>
  );
}