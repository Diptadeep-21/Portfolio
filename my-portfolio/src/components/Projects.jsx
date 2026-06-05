import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { useState } from "react";

const TAG_MAP = {
  "Next.js + TypeScript + Node.js + Express.js + FastAPI + MongoDB + Zustand + RAG Pipelines":
    "Next.js",
  "MERN Stack": "MERN",
  "Next.js + Prisma ORM + PostgreSQL + Groq LLM": "Next.js",
  "MERN + Web Speech API": "MERN",
  "Spring Boot + React": "Java",
  "Python + XGBoost": "Python",
  "Laravel + PHP": "PHP",
  "HTML5 + CSS3": "CSS3",
};

const TECH_DISPLAY = {
  "Next.js + TypeScript + Node.js + Express.js + FastAPI + MongoDB + Zustand + RAG Pipelines": [
    "Next.js",
    "FastAPI",
    "MongoDB",
  ],

  "MERN Stack": ["MERN", "MongoDB", "Express"],

  "Next.js + Prisma ORM + PostgreSQL + Groq LLM": [
    "Next.js",
    "Prisma",
    "AI / LLM",
  ],

  "MERN + Web Speech API": ["MERN", "Web Speech API"],

  "Spring Boot + React": ["Spring Boot", "React"],

  "Python + XGBoost": ["Python", "XGBoost", "ML"],

  "Laravel + PHP": ["Laravel", "PHP"],

  "CSS3": ["HTML5", "CSS3"],
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
const ALL = "All";
const FILTER_TAGS = [ALL, "MERN", "Next.js", "Java", "Python", "PHP", "CSS3"];

export default function Projects() {
  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL
      ? projects
      : projects.filter((p) => TAG_MAP[p.tech] === active);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap');

        .projects-section {
          background: var(--paper);
          font-family: 'EB Garamond', serif;
          border-bottom: 3px double var(--ink);
        }

        .projects-section-header {
          border-bottom: 3px double var(--ink);
          border-top: 3px double var(--ink);
          padding: 1.2rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        /* Filter bar — editorial tabs */
        .projects-filter-bar {
          border-bottom: 1px solid var(--rule);
          padding: 0 2rem;
          display: flex;
          align-items: center;
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .projects-filter-bar::-webkit-scrollbar { display: none; }
        .filter-tab {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding: 10px 16px;
          border-right: 1px solid var(--rule);
          border-bottom: 2px solid transparent;
          cursor: pointer;
          background: none;
          border-top: none;
          border-left: none;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .filter-tab:first-child { border-left: none; }
        .filter-tab:hover { color: var(--ink); background: var(--paper-2); }
        .filter-tab.active {
          color: var(--accent);
          border-bottom-color: var(--accent);
          background: var(--paper-2);
        }
        .filter-count {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          color: var(--ink-3);
          padding: 10px 16px;
          margin-left: auto;
        }

        /* Projects grid */
        .projects-broadsheet {
          padding: 0 2rem;
        }

        /* Featured row: first project large */
        .projects-featured-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid var(--rule);
        }
        @media (max-width: 800px) {
          .projects-featured-row { grid-template-columns: 1fr; }
        }

        .project-card-featured {
          border-right: 1px solid var(--rule);
          padding: 0;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: background 0.2s;
        }
        .project-card-featured:hover { background: var(--paper-2); }
        .project-card-featured:last-child { border-right: none; }

        .project-img-featured {
          height: 220px;
          overflow: hidden;
          position: relative;
        }
        .project-img-featured img {
          width: 100%; height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
          filter: sepia(0.25) contrast(1.08);
        }
        .project-card-featured:hover .project-img-featured img { transform: scale(1.04); }
        .project-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(26,18,8,0.5) 0%, transparent 60%);
        }
        .project-img-index {
          position: absolute; top: 12px; right: 14px;
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem; font-weight: 900;
          color: rgba(245,240,232,0.35);
          line-height: 1;
        }
        .project-card-body {
          padding: 1.2rem 1.5rem 1.5rem;
          border-top: 1px solid var(--rule);
        }
        .project-tech-row {
          display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 0.7rem;
        }
        .project-chip-ed {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 2px 8px;
          border: 1px solid var(--rule);
          color: var(--ink-3);
          background: var(--paper-3);
        }
        .project-name-ed {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
          margin-bottom: 0.5rem;
        }
        .project-desc-ed {
          font-size: 0.88rem;
          color: var(--ink-3);
          line-height: 1.65;
          margin-bottom: 1rem;
        }
        .project-link-ed {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
          padding-bottom: 1px;
          transition: color 0.2s;
        }
        .project-link-ed:hover { color: var(--accent-2); border-color: var(--accent-2); }

        /* Secondary rows: compact list style */
        .projects-list {
          display: flex;
          flex-direction: column;
        }
        .project-list-item {
          display: grid;
          grid-template-columns: 140px 1fr;
          border-bottom: 1px solid var(--rule);
          transition: background 0.2s;
        }
        .project-list-item:hover { background: var(--paper-2); }
        .project-list-item:last-child { border-bottom: none; }
        @media (max-width: 640px) {
          .project-list-item { grid-template-columns: 1fr; }
          .project-list-img { height: 120px; border-right: none !important; border-bottom: 1px solid var(--rule); }
        }
        .project-list-img {
          height: 100px;
          overflow: hidden;
          border-right: 1px solid var(--rule);
          position: relative;
          min-height: 100px;
        }
        .project-list-img img {
          width: 100%; height: 100%;
          object-fit: cover;
          filter: sepia(0.3) contrast(1.05);
          transition: transform 0.5s;
        }
        .project-list-item:hover .project-list-img img { transform: scale(1.06); }
        .project-list-img-idx {
          position: absolute; bottom: 6px; left: 8px;
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem; font-weight: 900;
          color: rgba(245,240,232,0.5);
          line-height: 1;
        }
        .project-list-body {
          padding: 0.9rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .project-list-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* Bottom CTA */
        .projects-cta-strip {
          border-top: 3px double var(--ink);
          padding: 1.2rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          background: var(--paper-2);
        }
        .projects-cta-text {
          font-size: 0.92rem;
          color: var(--ink-2);
          font-style: italic;
        }
        .projects-cta-text strong { font-style: normal; font-weight: 700; color: var(--ink); }
        .cta-btn-ed {
          font-family: 'DM Mono', monospace;
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 8px 20px;
          border: 1px solid var(--ink);
          color: var(--ink);
          text-decoration: none;
          background: transparent;
          transition: all 0.2s;
          cursor: pointer;
        }
        .cta-btn-ed:hover { background: var(--ink); color: var(--paper); }
      `}</style>

      <section className="projects-section" id="projects">
        {/* Header */}
        <div className="projects-section-header">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ink-3)" }}>Portfolio</span>
          <div style={{ flex: 1, height: 1, background: "var(--rule)" }}></div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>
            Selected <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Projects</em>
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--rule)" }}></div>
        </div>

        {/* Filter bar */}
        <div className="projects-filter-bar">
          {FILTER_TAGS.map(tag => (
            <button
              key={tag}
              className={`filter-tab ${active === tag ? "active" : ""}`}
              onClick={() => setActive(tag)}
            >{tag}</button>
          ))}
          <span className="filter-count">{filtered.length} / {projects.length}</span>
        </div>

        {/* Projects */}
        <div className="projects-broadsheet">
          <AnimatePresence mode="popLayout">
            {/* Featured: first 2 projects in grid */}
            {filtered.length > 0 && (
              <motion.div
                className="projects-featured-row"
                key="featured-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {filtered.slice(0, 2).map((p, i) => {
                  const globalIdx = projects.indexOf(p);
                  const chips = TECH_DISPLAY[p.tech] ?? [p.tech];
                  const isPrivate = !p.github || p.github === "#";
                  return (
                    <motion.div
                      key={p.title}
                      className="project-card-featured"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: i * 0.08 }}
                      layout
                    >
                      <div className="project-img-featured">
                        <img src={p.image} alt={p.title} loading="lazy" />
                        <div className="project-img-overlay" />
                        <span className="project-img-index">{ROMAN[globalIdx]}</span>
                      </div>
                      <div className="project-card-body">
                        <div className="project-tech-row">
                          {chips.map(c => <span key={c} className="project-chip-ed">{c}</span>)}
                        </div>
                        <div className="project-name-ed">{p.title}</div>
                        <div className="project-desc-ed">{p.description}</div>
                        <div
                          style={{
                            display: "flex",
                            gap: "1rem",
                            flexWrap: "wrap",
                          }}
                        >
                          {p.github && p.github !== "#" && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link-ed"
                            >
                              GitHub →
                            </a>
                          )}

                          {p.live && (
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="project-link-ed"
                            >
                              Live Demo ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* Rest as compact list */}
            {filtered.slice(2).map((p, i) => {
              const globalIdx = projects.indexOf(p);
              const chips = TECH_DISPLAY[p.tech] ?? [p.tech];
              const isPrivate = !p.github || p.github === "#";
              return (
                <motion.div
                  key={p.title}
                  id={p.title.replace(/\s+/g, "-")}
                  className="project-list-item"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: (i + 2) * 0.06 }}
                  layout
                >
                  <div className="project-list-img">
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span className="project-list-img-idx">{ROMAN[globalIdx]}</span>
                  </div>
                  <div className="project-list-body">
                    <div className="project-list-meta">
                      {chips.slice(0, 2).map(c => <span key={c} className="project-chip-ed">{c}</span>)}
                    </div>
                    <div className="project-name-ed" style={{ fontSize: "1.05rem" }}>{p.title}</div>
                    <div className="project-desc-ed" style={{ marginBottom: 0 }}>{p.description}</div>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      {p.github && p.github !== "#" && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-ed"
                        >
                          GitHub →
                        </a>
                      )}

                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-ed"
                        >
                          Live Demo ↗
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* CTA strip */}
        <div className="projects-cta-strip">
          <p className="projects-cta-text">
            <strong>More on GitHub</strong> — experiments, DSA solutions, and work-in-progress builds.
          </p>
          <a href="https://github.com/Diptadeep-21" target="_blank" rel="noopener noreferrer" className="cta-btn-ed">
            GitHub Profile ↗
          </a>
        </div>
      </section>
    </>
  );
}