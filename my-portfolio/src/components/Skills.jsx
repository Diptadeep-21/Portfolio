import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "Spring Boot", icon: "devicon-spring-plain colored" },
      { name: "Laravel", icon: "devicon-laravel-plain colored" },
      { name: "Prisma", icon: "devicon-prisma-original" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ],
  },
  {
    title: "Core CS",
    skills: [
      { name: "DSA", icon: "devicon-codeforces-plain" },
      { name: "Operating Systems", icon: "devicon-linux-plain" },
      { name: "DBMS", icon: "devicon-docker-plain" },
      { name: "Networks", icon: "devicon-networkx-plain" },
    ],
  },
  {
    title: "Tools & APIs",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "REST API", icon: "devicon-fastapi-plain colored" },
      { name: "JWT", icon: "devicon-json-plain" },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap');

        .skills-section {
          background: var(--paper-2);
          font-family: 'EB Garamond', serif;
          border-bottom: 3px double var(--ink);
        }

        .skills-section-header {
          border-bottom: 3px double var(--ink);
          border-top: 3px double var(--ink);
          padding: 1.2rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .skills-broadsheet-layout {
          display: grid;
          grid-template-columns: 200px 1fr;
          min-height: 400px;
        }
        @media (max-width: 768px) {
          .skills-broadsheet-layout { grid-template-columns: 1fr; }
          .skills-index-col { border-right: none !important; border-bottom: 1px solid var(--rule); }
        }

        .skills-index-col {
          border-right: 1px solid var(--rule);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .skills-index-heading {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding-bottom: 6px;
          border-bottom: 1px solid var(--rule);
          margin-bottom: 1rem;
        }
        .skills-index-item {
          font-family: 'Playfair Display', serif;
          font-size: 0.88rem;
          font-style: italic;
          color: var(--ink-2);
          padding: 5px 8px;
          border-left: 2px solid transparent;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: block;
        }
        .skills-index-item:hover {
          color: var(--accent);
          border-left-color: var(--accent);
          background: var(--paper-3);
        }

        .skills-main-col {
          padding: 2rem 2.5rem;
        }

        .skills-table {
          width: 100%;
          border-collapse: collapse;
        }
        .skills-table-row {
          border-bottom: 1px solid var(--rule);
          transition: background 0.15s;
        }
        .skills-table-row:hover { background: var(--paper-3); }
        .skills-table-row:last-child { border-bottom: none; }
        .skills-table-cat {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding: 1.2rem 1rem 1.2rem 0;
          vertical-align: top;
          white-space: nowrap;
          width: 110px;
          border-right: 1px solid var(--rule);
        }
        .skills-table-chips {
          padding: 1rem 0 1rem 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
          vertical-align: middle;
        }
        .skill-chip-ed {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border: 1px solid var(--rule);
          background: var(--paper);
          font-family: 'EB Garamond', serif;
          font-size: 0.88rem;
          color: var(--ink-2);
          transition: all 0.2s;
          cursor: default;
        }
        .skill-chip-ed:hover {
          border-color: var(--ink);
          background: var(--ink);
          color: var(--paper);
        }
        .skill-chip-ed:hover i { filter: brightness(10); }
        .skill-chip-ed i { font-size: 1rem; }

        .skills-footer-band {
          border-top: 3px double var(--ink);
          padding: 1.5rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          background: var(--ink);
          color: var(--paper-2);
        }
        .skills-footer-text {
          font-family: 'EB Garamond', serif;
          font-size: 1rem;
          font-style: italic;
        }
        .skills-footer-text strong {
          font-style: normal;
          font-weight: 700;
          color: var(--paper);
        }
        .skills-footer-stats {
          display: flex;
          gap: 2.5rem;
        }
        .skills-footer-stat { text-align: right; }
        .skills-footer-stat-num {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 900;
          color: var(--paper);
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .skills-footer-stat-lbl {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.45);
          margin-top: 2px;
        }
      `}</style>

      <section className="skills-section" id="skills">
        {/* Header */}
        <div className="skills-section-header">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ink-3)" }}>Technical Arsenal</span>
          <div style={{ flex: 1, height: 1, background: "var(--rule)" }}></div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>
            My <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Skillset</em>
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--rule)" }}></div>
        </div>

        <div className="skills-broadsheet-layout">
          {/* Index column */}
          <div className="skills-index-col">
            <div className="skills-index-heading">Disciplines</div>
            {SKILL_GROUPS.map(g => (
              <a key={g.title} className="skills-index-item" href={`#skill-${g.title.toLowerCase()}`}>
                {g.title}
              </a>
            ))}
            <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "0.4rem" }}>Total skills</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 900, color: "var(--ink)", lineHeight: 1 }}>
                {SKILL_GROUPS.reduce((sum, g) => sum + g.skills.length, 0)}
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--ink-3)", fontStyle: "italic" }}>technologies</div>
            </div>
          </div>

          {/* Main table */}
          <div className="skills-main-col">
            <motion.table
              className="skills-table"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <tbody>
                {SKILL_GROUPS.map((group, i) => (
                  <motion.tr
                    key={group.title}
                    id={`skill-${group.title.toLowerCase()}`}
                    className="skills-table-row"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <td className="skills-table-cat">{group.title}</td>
                    <td>
                      <div className="skills-table-chips">
                        {group.skills.map(s => (
                          <span key={s.name} className="skill-chip-ed">
                            <i className={s.icon}></i>
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </div>
        </div>

        {/* Footer band */}
        <div className="skills-footer-band">
          <div>
            <div className="skills-footer-text">
              <strong>Strong in problem-solving & system design</strong> — proven across academic projects, hackathons & personal builds.
            </div>
          </div>
          <div className="skills-footer-stats">
            <div className="skills-footer-stat">
              <div className="skills-footer-stat-num">350+</div>
              <div className="skills-footer-stat-lbl">DSA Problems</div>
            </div>
            <div className="skills-footer-stat">
              <div className="skills-footer-stat-num">5+</div>
              <div className="skills-footer-stat-lbl">Systems Built</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}