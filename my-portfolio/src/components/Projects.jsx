import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { useState } from "react";

// Map tech strings → filter tag
const TAG_MAP = {
  "MERN Stack": "MERN",
  "Next.js + Prisma ORM + PostgreSQL + Groque LLM": "Next.js",
  "MERN + Web Speech API": "MERN",
  "Spring Boot + React": "Java",
  "Python + XGBoost": "Python",
  "Laravel + PHP": "PHP",
  "React": "React",
};

// Readable chips shown on each card
const TECH_DISPLAY = {
  "MERN Stack": ["MERN", "MongoDB", "Express"],
  "Next.js + Prisma ORM + PostgreSQL + Groque LLM": ["Next.js", "Prisma", "AI / LLM"],
  "MERN + Web Speech API": ["MERN", "Web Speech API"],
  "Spring Boot + React": ["Spring Boot", "React"],
  "Python + XGBoost": ["Python", "XGBoost", "ML"],
  "Laravel + PHP": ["Laravel", "PHP"],
  "React": ["React"],
};

// Per-project accent colours (matches order in projects.js)
const ACCENTS = [
  "#a78bfa", // Glide-Way      — purple
  "#60a5fa", // Buildora       — blue
  "#34d399", // Accessible LP  — green
  "#f472b6", // SmartClinic    — pink
  "#f59e0b", // Network IDS    — amber
  "#fb923c", // Restaurant     — orange
  "#818cf8", // Soft Tunes     — indigo
];

const ALL = "All";
const FILTER_TAGS = [ALL, "MERN", "Next.js", "Java", "Python", "PHP", "React"];

export default function Projects() {
  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL
      ? projects
      : projects.filter((p) => TAG_MAP[p.tech] === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        .projects-section {
          background: #07051a;
          padding: 8rem 1.5rem;
          position: relative;
          font-family: 'Space Grotesk', sans-serif;
          overflow: hidden;
        }
        .projects-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167,139,250,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,139,250,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .projects-section::after {
          content: '';
          position: absolute;
          top: 20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(124,58,237,0.07), transparent 65%);
          pointer-events: none;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1rem;
        }
        .section-label::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #a78bfa;
        }
        .projects-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
        }
        .projects-title em {
          font-style: normal;
          background: linear-gradient(135deg, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .filter-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 2.5rem;
          margin-bottom: 3.5rem;
          align-items: center;
        }
        .filter-btn {
          padding: 7px 18px;
          border-radius: 100px;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.4);
          cursor: pointer;
          transition: all 0.22s ease;
        }
        .filter-btn:hover {
          border-color: rgba(167,139,250,0.35);
          color: rgba(255,255,255,0.8);
          background: rgba(167,139,250,0.06);
        }
        .filter-btn.active {
          background: rgba(167,139,250,0.14);
          border-color: rgba(167,139,250,0.45);
          color: #c4b5fd;
          box-shadow: 0 0 16px rgba(167,139,250,0.1);
        }
        .count-text {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.18);
          letter-spacing: 0.06em;
          margin-left: 4px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr; }
        }

        .project-card {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--card-accent-border);
          box-shadow: 0 24px 64px rgba(0,0,0,0.45),
                      0 0 40px var(--card-glow);
        }

        .project-img-wrap {
          position: relative;
          height: 175px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .project-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-img-wrap img {
          transform: scale(1.07);
        }
        .img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 20%, rgba(7,5,26,0.88) 100%);
        }
        .img-index {
          position: absolute;
          top: 12px;
          right: 14px;
          font-family: 'Syne', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          color: rgba(255,255,255,0.22);
          letter-spacing: 0.08em;
        }

        .project-body {
          padding: 1.2rem 1.4rem 1.4rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
          margin-bottom: 0.8rem;
        }
        .tech-chip {
          padding: 3px 9px;
          border-radius: 100px;
          font-size: 0.67rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          background: var(--chip-bg);
          color: var(--chip-color);
          border: 1px solid var(--chip-border);
        }

        .project-name {
          font-family: 'Syne', sans-serif;
          font-size: 1.08rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.01em;
          margin-bottom: 0.5rem;
          line-height: 1.25;
        }
        .project-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.37);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 1.2rem;
        }

        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--card-accent);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: gap 0.2s;
        }
        .project-link:hover { gap: 10px; }
        .project-link svg { transition: transform 0.2s; }
        .project-link:hover svg { transform: translate(2px, -2px); }
        .link-private {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.18);
          font-style: italic;
          letter-spacing: 0.04em;
        }
        .card-hash {
          font-size: 0.66rem;
          color: rgba(255,255,255,0.1);
          font-weight: 600;
          letter-spacing: 0.06em;
        }

        .projects-cta {
          max-width: 1100px;
          margin: 2.5rem auto 0;
          padding: 1.4rem 2rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .cta-text {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.5;
        }
        .cta-text strong { color: rgba(255,255,255,0.65); font-weight: 600; }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          border-radius: 100px;
          background: rgba(167,139,250,0.1);
          border: 1px solid rgba(167,139,250,0.25);
          color: #c4b5fd;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.22s;
        }
        .cta-btn:hover {
          background: rgba(167,139,250,0.18);
          border-color: rgba(167,139,250,0.45);
          color: #fff;
          transform: translateY(-1px);
        }
      `}</style>

      <section className="projects-section" id="projects">
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-label">Portfolio</div>
            <h2 className="projects-title">Selected <em>Projects</em></h2>
            <p style={{
              color: "rgba(255,255,255,0.32)",
              fontSize: "0.95rem",
              marginTop: "0.75rem",
              maxWidth: 500,
              lineHeight: 1.65,
            }}>
              Seven systems across full-stack, ML, accessibility, and AI — each built to solve a real problem.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="filter-row">
            {FILTER_TAGS.map((tag) => (
              <button
                key={tag}
                className={`filter-btn ${active === tag ? "active" : ""}`}
                onClick={() => setActive(tag)}
              >
                {tag}
              </button>
            ))}
            <span className="count-text">
              {filtered.length} / {projects.length}
            </span>
          </div>

          {/* Grid */}
          <div className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => {
                const globalIdx = projects.indexOf(p);
                const accent = ACCENTS[globalIdx] ?? "#a78bfa";
                const chips = TECH_DISPLAY[p.tech] ?? [p.tech];
                const isPrivate = !p.github || p.github === "#";

                return (
                  <motion.div
                    key={p.title}
                    id={p.title.replace(/\s+/g, "-")}
                    className="project-card"
                    style={{
                      "--card-accent": accent,
                      "--card-accent-border": `${accent}44`,
                      "--card-glow": `${accent}12`,
                      "--chip-bg": `${accent}16`,
                      "--chip-color": accent,
                      "--chip-border": `${accent}32`,
                    }}
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.32, delay: filtered.indexOf(p) * 0.06 }}
                    layout
                  >
                    {/* Image */}
                    <div className="project-img-wrap">
                      <img src={p.image} alt={p.title} loading="lazy" />
                      <div className="img-overlay" />
                      <span className="img-index">
                        {String(globalIdx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="project-body">
                      <div className="tech-row">
                        {chips.map((chip) => (
                          <span key={chip} className="tech-chip">{chip}</span>
                        ))}
                      </div>

                      <h3 className="project-name">{p.title}</h3>
                      <p className="project-desc">{p.description}</p>

                      <div className="project-footer">
                        {isPrivate ? (
                          <span className="link-private">Private repo</span>
                        ) : (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            View on GitHub
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path
                                d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                        )}
                        <span className="card-hash">
                          #{p.title.replace(/\s+/g, "").toLowerCase()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Bottom strip */}
          <motion.div
            className="projects-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="cta-text">
              <strong>More on GitHub</strong> — experiments, DSA solutions, and work-in-progress builds.
            </p>
            <a
              href="https://github.com/Diptadeep-21"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              GitHub Profile
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}