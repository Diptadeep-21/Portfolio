import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Languages",
    accent: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
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
    accent: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.2)",
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-original" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    ],
  },
  {
    title: "Backend",
    accent: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
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
    accent: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
    ],
  },
  {
    title: "Core CS",
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    skills: [
      { name: "DSA", icon: "devicon-codeforces-plain" },
      { name: "OS", icon: "devicon-linux-plain" },
      { name: "DBMS", icon: "devicon-docker-plain" },
      { name: "Networks", icon: "devicon-networkx-plain" },
    ],
  },
  {
    title: "Tools & APIs",
    accent: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
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
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        .skills-section {
          background: #07051a;
          padding: 8rem 1.5rem;
          position: relative;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
        }
        .skills-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 80%, rgba(96,165,250,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(167,139,250,0.06) 0%, transparent 50%);
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
        .skills-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
        }
        .skills-title em {
          font-style: normal;
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
          margin-top: 3.5rem;
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }
        .skill-card {
          border-radius: 20px;
          padding: 1.75rem;
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(10px);
          transition: transform 0.3s, border-color 0.3s, background 0.3s;
          position: relative;
          overflow: hidden;
        }
        .skill-card::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, var(--card-accent, #a78bfa22), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .skill-card:hover::after { opacity: 1; }
        .skill-card:hover {
          transform: translateY(-4px);
          border-color: var(--card-border, rgba(167,139,250,0.25));
          background: rgba(255,255,255,0.035);
        }
        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-chip {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 13px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          font-size: 0.82rem;
          color: rgba(255,255,255,0.65);
          transition: all 0.2s;
        }
        .skill-chip:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
          border-color: rgba(255,255,255,0.15);
        }
        .skill-chip i { font-size: 1.1rem; }
        .skills-footer {
          max-width: 1100px;
          margin: 2.5rem auto 0;
          padding: 2rem 2.5rem;
          background: linear-gradient(135deg, rgba(124,58,237,0.15), rgba(236,72,153,0.1));
          border: 1px solid rgba(167,139,250,0.2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-text {
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }
        .footer-sub {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.45);
          margin-top: 4px;
        }
        .footer-stat {
          text-align: right;
        }
        .footer-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }
        .footer-stat-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      `}</style>

      <section className="skills-section" id="skills">
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", marginBottom: "0" }}>
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label">Technical arsenal</div>
            <h2 className="skills-title">My <em>Skillset</em></h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.95rem", marginTop: "0.75rem", maxWidth: 480, margin: "0.75rem auto 0" }}>
              Technologies and concepts I use to architect scalable, production-ready systems
            </p>
          </motion.div>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              className="skill-card"
              style={{ "--card-accent": group.bg, "--card-border": group.border }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="card-title" style={{ color: group.accent }}>
                {group.title}
              </div>
              <div className="skill-chips">
                {group.skills.map(s => (
                  <div key={s.name} className="skill-chip">
                    <i className={s.icon}></i>
                    {s.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="footer-text">Strong in problem-solving & system design</div>
            <div className="footer-sub">Proven across academic projects, hackathons & personal builds</div>
          </div>
          <div style={{ display: "flex", gap: "2.5rem" }}>
            <div className="footer-stat">
              <div className="footer-stat-num">350+</div>
              <div className="footer-stat-label">DSA Problems</div>
            </div>
            <div className="footer-stat">
              <div className="footer-stat-num">5+</div>
              <div className="footer-stat-label">Systems Built</div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}