import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import busImg from "../assets/bus.jpg";
import learnImg from "../assets/learning.jpg";
import hospitalImg from "../assets/hospital.jpg";
import buildora from "../assets/buildora1.png";
import merchanta from "../assets/merchantaAI.png";

const PROJECTS = [
  { title: "Merchanta AI", img: merchanta, tag: "AI-Optimizer" },
  { title: "Glide-Way", img: busImg, tag: "Real-time" },
  { title: "Buildora", img: buildora, tag: "SaaS" },
  { title: "Accessible Learning Platform", img: learnImg, tag: "A11y" },
  { title: "SmartClinic Queue", img: hospitalImg, tag: "Healthcare" },
  {
    title: "Network Intrusion Detection", tag: "ML/Security",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Restaurant Management System", tag: "Full-stack",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Soft Tunes", tag: "Media",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
  },
];

const ROLES = ["Full-Stack Developer", "MERN Stack Engineer", "System Architect", "Problem Solver"];

export default function Hero() {
  const roleRef = useRef(null);
  const idx = useRef(0);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;
    el.textContent = ROLES[0];
    const cycle = () => {
      el.style.opacity = 0;
      setTimeout(() => {
        idx.current = (idx.current + 1) % ROLES.length;
        el.textContent = ROLES[idx.current];
        el.style.opacity = 1;
      }, 350);
    };
    const t = setInterval(cycle, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap');

        .hero-section {
          background: var(--paper);
          padding-top: 107px;
          position: relative;
          overflow: hidden;
          font-family: 'EB Garamond', serif;
        }

        /* ── Masthead ── */
        .hero-masthead {
          border-bottom: 3px double var(--ink);
          padding: 3rem 2rem 2.5rem;
          text-align: center;
          position: relative;
        }
        .hero-edition {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }
        .hero-edition::before, .hero-edition::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
          max-width: 120px;
        }
        .hero-title-block {
          position: relative;
          display: inline-block;
        }
        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 10vw, 8rem);
          font-weight: 900;
          color: var(--ink);
          line-height: 0.92;
          letter-spacing: -0.03em;
          display: block;
        }
        .hero-title-line2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 3.2rem);
          font-weight: 700;
          font-style: italic;
          color: var(--ink-2);
          letter-spacing: -0.01em;
          display: block;
          margin-top: 0.15rem;
        }
        .hero-role-cycle {
          color: var(--accent);
          transition: opacity 0.35s ease;
          font-style: italic;
        }
        .hero-ornament {
          font-size: 1.2rem;
          color: var(--accent);
          margin: 0.8rem auto;
          letter-spacing: 0.5rem;
          display: block;
          text-align: center;
        }

        /* ── Body layout ── */
        .hero-body {
          display: grid;
          grid-template-columns: 220px 1fr 220px;
          border-bottom: 1px solid var(--rule);
        }
        @media (max-width: 900px) {
          .hero-body { grid-template-columns: 1fr; }
          .hero-sidebar { border-right: none !important; border-left: none !important; border-bottom: 1px solid var(--rule); }
        }

        .hero-sidebar {
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .hero-sidebar-left { border-right: 1px solid var(--rule); }
        .hero-sidebar-right { border-left: 1px solid var(--rule); }

        .sidebar-heading {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding-bottom: 6px;
          border-bottom: 1px solid var(--rule);
          margin-bottom: 0.5rem;
        }
        .sidebar-stat {
          display: flex;
          flex-direction: column;
        }
        .sidebar-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--ink);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .sidebar-stat-label {
          font-size: 0.78rem;
          color: var(--ink-3);
          font-style: italic;
          line-height: 1.3;
        }
        .sidebar-note {
          font-size: 0.82rem;
          color: var(--ink-2);
          line-height: 1.65;
        }
        .sidebar-tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .sidebar-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 8px;
          border: 1px solid var(--rule);
          color: var(--ink-3);
        }

        /* Center column */
        .hero-center {
          padding: 2.5rem 2.5rem;
          border-right: 1px solid var(--rule);
          border-left: 1px solid var(--rule);
          position: relative;
        }
        @media (max-width: 900px) {
          .hero-center { border: none; border-bottom: 1px solid var(--rule); }
        }
        .hero-lede {
          font-size: clamp(1.1rem, 2.2vw, 1.35rem);
          line-height: 1.65;
          color: var(--ink);
          font-style: italic;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--rule);
        }
        .hero-lede strong {
          font-style: normal;
          font-weight: 700;
          color: var(--ink);
        }
        .hero-drop-cap::first-letter {
          font-family: 'Playfair Display', serif;
          font-size: 4.2rem;
          font-weight: 900;
          line-height: 0.8;
          float: left;
          margin-right: 6px;
          margin-top: 4px;
          color: var(--ink);
        }
        .hero-body-text {
          font-size: 0.95rem;
          color: var(--ink-2);
          line-height: 1.75;
          column-count: 2;
          column-gap: 2rem;
          column-rule: 1px solid var(--rule);
        }
        @media (max-width: 640px) {
          .hero-body-text { column-count: 1; }
        }
        .hero-cta-row {
          display: flex;
          gap: 12px;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        .btn-ed-primary {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 10px 22px;
          background: var(--ink);
          color: var(--paper);
          text-decoration: none;
          border: 1px solid var(--ink);
          transition: all 0.2s;
        }
        .btn-ed-primary:hover { background: var(--accent); border-color: var(--accent); }
        .btn-ed-ghost {
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 10px 22px;
          background: transparent;
          color: var(--ink-2);
          text-decoration: none;
          border: 1px solid var(--rule);
          transition: all 0.2s;
        }
        .btn-ed-ghost:hover { border-color: var(--ink); color: var(--ink); }

        /* ── Ticker strip ── */
        .hero-ticker {
          border-top: 1px solid var(--rule);
          border-bottom: 3px double var(--ink);
          padding: 0.7rem 0;
          overflow: hidden;
          position: relative;
          background: var(--ink);
        }
        .ticker-track {
          display: flex;
          gap: 0;
          animation: tickerScroll 28s linear infinite;
          width: max-content;
        }
        .ticker-track:hover { animation-play-state: paused; }
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .ticker-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 2rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.7);
          white-space: nowrap;
          cursor: pointer;
          border-right: 1px solid rgba(245,240,232,0.1);
          transition: color 0.2s;
        }
        .ticker-item:hover { color: var(--paper); }
        .ticker-item-tag {
          color: var(--accent-2);
          font-size: 0.58rem;
        }

        /* ── Project scroll strip ── */
        .hero-scroll-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--rule);
        }
        @media (max-width: 800px) {
          .hero-scroll-strip { grid-template-columns: repeat(2, 1fr); }
        }
        .scroll-card {
          position: relative;
          height: 180px;
          overflow: hidden;
          border-right: 1px solid var(--rule);
          cursor: pointer;
        }
        .scroll-card:last-child { border-right: none; }
        .scroll-card img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          filter: sepia(0.3) contrast(1.05);
        }
        .scroll-card:hover img { transform: scale(1.06); }
        .scroll-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.2) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 12px 14px;
          transition: background 0.3s;
        }
        .scroll-card:hover .scroll-card-overlay {
          background: linear-gradient(to top, rgba(139,26,26,0.88) 0%, rgba(139,26,26,0.3) 60%, transparent 100%);
        }
        .scroll-card-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.6);
          margin-bottom: 3px;
        }
        .scroll-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--paper);
          line-height: 1.25;
        }
      `}</style>

      <section className="hero-section" id="hero">
        {/* Masthead */}
        <div className="hero-masthead">
          <div className="hero-edition">
            Available for opportunities · KIIT CSE · 2023–2027
          </div>
          <div className="hero-title-block">
            <motion.span
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Diptadeep Sinha
            </motion.span>
            <motion.span
              className="hero-title-line2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="hero-role-cycle" ref={roleRef}></span>
            </motion.span>
          </div>
          <motion.span
            className="hero-ornament"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            ✦ ✦ ✦
          </motion.span>
        </div>

        {/* 3-column body */}
        <motion.div
          className="hero-body"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Left sidebar */}
          <div className="hero-sidebar hero-sidebar-left">
            <div>
              <div className="sidebar-heading">Academic record</div>
              <div className="sidebar-stat">
                <span className="sidebar-stat-num">9.52</span>
                <span className="sidebar-stat-label">CGPA at KIIT University</span>
              </div>
            </div>
            <div>
              <div className="sidebar-heading">Problem solving</div>
              <div className="sidebar-stat">
                <span className="sidebar-stat-num">350+</span>
                <span className="sidebar-stat-label">DSA problems solved</span>
              </div>
            </div>
            <div>
              <div className="sidebar-heading">Systems built</div>
              <div className="sidebar-stat">
                <span className="sidebar-stat-num">5+</span>
                <span className="sidebar-stat-label">Production-ready systems</span>
              </div>
            </div>
          </div>

          {/* Center */}
          <div className="hero-center">
            <p className="hero-lede hero-drop-cap">
              <strong>Building systems that endure.</strong> A computer science student at KIIT with a singular focus on scalable, real-world software — from real-time platforms to accessibility-driven applications.
            </p>
            <div className="hero-body-text">
              Diptadeep Sinha is pursuing B.Tech Computer Science at KIIT University, Bhubaneswar, maintaining a CGPA of 9.52 while building production-ready systems across the full stack.
              <br /><br />
              His engineering work spans real-time communication platforms, AI-assisted SaaS tools, machine learning pipelines, and accessibility-first applications — each project built from first principles to solve a genuine problem.
              <br /><br />
              A Smart India Hackathon 2025 Finalist, Diptadeep contributed to an AI-based space debris prediction system applying machine learning to real satellite safety challenges.
            </div>
            <div className="hero-cta-row">
              <a href="#projects" className="btn-ed-primary">View Portfolio →</a>
              <a href="https://github.com/Diptadeep-21" target="_blank" className="btn-ed-ghost">GitHub ↗</a>
              <a href="mailto:sinhadiptadeep@gmail.com" className="btn-ed-ghost">Contact</a>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="hero-sidebar hero-sidebar-right">
            <div>
              <div className="sidebar-heading">Distinction</div>
              <p className="sidebar-note">
                SIH 2025 Finalist — Selected among top teams nationally. Contributed to an AI-based space debris prediction system.
              </p>
            </div>
            <div>
              <div className="sidebar-heading">Core stack</div>
              <div className="sidebar-tag-row">
                {["Java", "MERN", "Next.js", "Spring Boot", "PostgreSQL", "TypeScript", "Python"].map(t => (
                  <span key={t} className="sidebar-tag">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="sidebar-heading">Status</div>
              <p className="sidebar-note">
                Open to internships, full-time roles & freelance projects.<br />
                <a href="mailto:sinhadiptadeep@gmail.com" style={{ color: "var(--accent)", fontStyle: "italic" }}>sinhadiptadeep@gmail.com</a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Ticker */}
        <div className="hero-ticker">
          <div className="ticker-track">
            {[...PROJECTS, ...PROJECTS].map((p, i) => (
              <div key={i} className="ticker-item" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                <span className="ticker-item-tag">{p.tag}</span>
                <span>{p.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project preview strip */}
        <div className="hero-scroll-strip">
          {PROJECTS.slice(0, 4).map((p, i) => (
            <div
              key={i}
              className="scroll-card"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <img src={p.img} alt={p.title} />
              <div className="scroll-card-overlay">
                <div className="scroll-card-tag">{p.tag}</div>
                <div className="scroll-card-name">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}