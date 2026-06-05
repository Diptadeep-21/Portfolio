import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function About() {
  const traits = [
    { label: "Scalable by design", body: "Every system I build is architected with scale in mind from day one — load-balanced, cache-aware, failure-tolerant." },
    { label: "Precision problem solving", body: "350+ DSA problems have sharpened the way I approach algorithmic challenges — optimal before correct." },
    { label: "Accessibility-first", body: "I build tools that work for everyone. Screen reader support, keyboard navigation, and WCAG compliance aren't afterthoughts." },
  ];

  const journey = [
    { year: "2022", event: "Enrolled in B.Tech CSE at KIIT University, Bhubaneswar" },
    { year: "2023", event: "Mastered MERN stack; crossed 100+ DSA problems on LeetCode" },
    { year: "2024", event: "Delivered 5+ full-stack production systems; reached 350+ DSA" },
    { year: "2025", event: "SIH Finalist · Targeting top engineering roles in India & abroad" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap');

        .about-section {
          background: var(--paper);
          padding: 0;
          font-family: 'EB Garamond', serif;
          border-bottom: 3px double var(--ink);
        }

        .about-section-header {
          border-bottom: 3px double var(--ink);
          border-top: 3px double var(--ink);
          padding: 1.2rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .section-rubric {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-3);
        }
        .section-rule { flex: 1; height: 1px; background: var(--rule); }
        .section-title-ed {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 900;
          color: var(--ink);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .section-title-ed em {
          font-style: italic;
          color: var(--accent);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          border-bottom: 1px solid var(--rule);
        }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; }
          .about-right { border-left: none !important; border-top: 1px solid var(--rule); }
        }

        .about-left {
          padding: 2.5rem 2.5rem;
          border-right: 1px solid var(--rule);
        }
        .about-right {
          padding: 2rem 1.75rem;
          border-left: 1px solid var(--rule);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .about-intro {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          line-height: 1.75;
          color: var(--ink);
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--rule);
        }
        .about-intro strong { font-weight: 700; }
        .about-body-cols {
          column-count: 2;
          column-gap: 2rem;
          column-rule: 1px solid var(--rule);
          font-size: 0.93rem;
          color: var(--ink-2);
          line-height: 1.75;
        }
        @media (max-width: 640px) { .about-body-cols { column-count: 1; } }

        .about-quote {
          margin-top: 1.5rem;
          padding: 1.2rem 1.5rem;
          border-left: 3px solid var(--ink);
          font-style: italic;
          font-size: 1.05rem;
          color: var(--ink-2);
          line-height: 1.65;
          background: var(--paper-2);
        }

        /* Traits — editorial pullout style */
        .traits-section {
          border-top: 1px solid var(--rule);
          padding: 2rem 2.5rem;
        }
        .traits-heading {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-bottom: 1.5rem;
          padding-bottom: 6px;
          border-bottom: 1px solid var(--rule);
        }
        .traits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 1px solid var(--rule);
        }
        @media (max-width: 700px) {
          .traits-grid { grid-template-columns: 1fr; }
        }
        .trait-item {
          padding: 1.5rem;
          border-right: 1px solid var(--rule);
          transition: background 0.2s;
        }
        .trait-item:last-child { border-right: none; }
        .trait-item:hover { background: var(--paper-2); }
        .trait-label {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 700;
          font-style: italic;
          color: var(--ink);
          margin-bottom: 0.6rem;
          padding-bottom: 0.6rem;
          border-bottom: 1px solid var(--rule);
        }
        .trait-body {
          font-size: 0.82rem;
          color: var(--ink-3);
          line-height: 1.65;
        }

        /* Right sidebar */
        .stat-box {
          padding: 1.25rem;
          border: 1px solid var(--rule);
        }
        .stat-box-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-bottom: 0.5rem;
          padding-bottom: 5px;
          border-bottom: 1px solid var(--rule);
        }
        .stat-box-num {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1;
          color: var(--ink);
          letter-spacing: -0.02em;
        }
        .stat-box-desc {
          font-size: 0.82rem;
          color: var(--ink-3);
          font-style: italic;
          margin-top: 4px;
        }

        /* Journey timeline */
        .timeline {
          display: flex;
          flex-direction: column;
        }
        .timeline-heading {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding-bottom: 6px;
          border-bottom: 1px solid var(--rule);
          margin-bottom: 1rem;
        }
        .timeline-item {
          display: flex;
          gap: 1rem;
          padding: 0.7rem 0;
          border-bottom: 1px solid var(--paper-3);
        }
        .timeline-year {
          font-family: 'Playfair Display', serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent);
          min-width: 36px;
          padding-top: 2px;
        }
        .timeline-event {
          font-size: 0.82rem;
          color: var(--ink-2);
          line-height: 1.5;
        }

        .hackathon-pullout {
          padding: 1rem;
          background: var(--ink);
          color: var(--paper-2);
        }
        .hackathon-pullout-label {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245,240,232,0.5);
          margin-bottom: 0.5rem;
        }
        .hackathon-pullout-text {
          font-family: 'EB Garamond', serif;
          font-size: 0.9rem;
          line-height: 1.6;
          font-style: italic;
          color: rgba(245,240,232,0.85);
        }
        .hackathon-pullout-text strong {
          font-style: normal;
          color: var(--paper);
        }

        /* Certifications band */
        .certs-section {
          border-top: 1px solid var(--rule);
          padding: 2rem 2.5rem;
          background: var(--paper);
        }
        .certs-heading {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-bottom: 1.5rem;
          padding-bottom: 6px;
          border-bottom: 1px solid var(--rule);
        }
        .certs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border: 1px solid var(--rule);
        }
        @media (max-width: 700px) {
          .certs-grid { grid-template-columns: 1fr; }
          .cert-item { border-right: none !important; border-bottom: 1px solid var(--rule); }
          .cert-item:last-child { border-bottom: none; }
        }
        .cert-item {
          padding: 1.5rem;
          border-right: 1px solid var(--rule);
          transition: background 0.2s;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .cert-item:last-child { border-right: none; }
        .cert-item:hover { background: var(--paper-2); }
        .cert-issuer {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--rule);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cert-issuer-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.5;
        }
        .cert-title {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 700;
          font-style: italic;
          color: var(--ink);
          line-height: 1.35;
        }
        .cert-meta {
          font-size: 0.78rem;
          color: var(--ink-3);
          margin-top: auto;
          padding-top: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .cert-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-3);
          text-decoration: none;
          border-bottom: 1px solid var(--rule);
          padding-bottom: 1px;
          transition: color 0.2s, border-color 0.2s;
        }
        .cert-link:hover { color: var(--accent); border-color: var(--accent); }
      `}</style>

      <section className="about-section" id="about">
        {/* Section header */}
        <div className="about-section-header">
          <span className="section-rubric">About</span>
          <div className="section-rule"></div>
          <h2 className="section-title-ed">I build <em>systems</em> that solve real problems</h2>
          <div className="section-rule"></div>
        </div>

        {/* Main grid */}
        <div className="about-grid">
          {/* Left */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="about-left">
              <p className="about-intro">
                I'm <strong>Diptadeep Sinha</strong>, a Computer Science student at KIIT with a CGPA of <strong style={{ color: "var(--accent)" }}>9.52</strong>. My work focuses on scalable, real-world systems — from real-time communication platforms to accessibility-driven applications.
              </p>
              <div className="about-body-cols">
                I enjoy breaking down complex problems and delivering production-ready solutions. Every system I build is designed with scale, correctness, and usability as the guiding principles — not as afterthoughts.
                <br /><br />
                The discipline comes from consistent practice: 350+ data structures and algorithms problems have shaped how I think about efficiency, edge cases, and system behaviour under load. That rigor carries into every project I ship.
              </div>
              <blockquote className="about-quote">
                "I focus on building systems that are not just functional, but scalable, efficient, and meaningful."
              </blockquote>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.12 }}>
            <div className="about-right">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { num: "9.52", label: "CGPA at KIIT", desc: "Academic record" },
                  { num: "350+", label: "DSA Problems", desc: "LeetCode & beyond" },
                  { num: "5+", label: "Systems Built", desc: "Production-ready" },
                  { num: "Top", label: "SIH 2025 Team", desc: "National finalist" },
                ].map(s => (
                  <div key={s.label} className="stat-box">
                    <div className="stat-box-label">{s.desc}</div>
                    <div className="stat-box-num">{s.num}</div>
                    <div className="stat-box-desc">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="hackathon-pullout">
                <div className="hackathon-pullout-label">Distinction · SIH 2025</div>
                <div className="hackathon-pullout-text">
                  <strong>Smart India Hackathon 2025 Finalist</strong> — Selected among top teams nationally. Contributed to an AI-based space debris prediction system applying ML to real satellite safety challenges.
                </div>
              </div>

              <div className="timeline">
                <div className="timeline-heading">Journey</div>
                {[
                  { year: "2022", event: "Started B.Tech CSE at KIIT" },
                  { year: "2023", event: "MERN Stack development & 100+ DSA problems" },
                  { year: "2024", event: "Built 5+ full-stack systems; hit 350+ DSA" },
                  { year: "2025", event: "SIH Finalist · Targeting top engineering roles" },
                ].map((item, i) => (
                  <div key={i} className="timeline-item">
                    <span className="timeline-year">{item.year}</span>
                    <span className="timeline-event">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Traits */}
        <div className="traits-section">
          <div className="traits-heading">Core principles</div>
          <div className="traits-grid">
            {traits.map(t => (
              <div key={t.label} className="trait-item">
                <div className="trait-label">{t.label}</div>
                <div className="trait-body">{t.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="certs-section">
          <div className="certs-heading">Certifications</div>
          <div className="certs-grid">
            {[
              {
                issuer: "AWS",
                title: "AWS Academy Graduate - Cloud Foundations",
                year: "2025",
                credential: "https://www.credly.com/badges/b27c48e8-f498-457e-b3ed-ba5d79f1dc53/public_url",
              },
              {
                issuer: "Cisco Networking Academy",
                title: "Introduction to Networks",
                year: "2026",
                credential: "https://www.credly.com/badges/6be1b044-f42f-4b2e-bee6-b8ea9719c5c1/public_url",
              },
              {
                issuer: "Coursera",
                title: "Introduction to DevOps",
                year: "2026",
                credential: "https://coursera.org/share/b8eff57b6c1e973c9dd78e69b900e87d",
              },
            ].map(c => (
              <div key={c.title} className="cert-item">
                <div className="cert-issuer">
                  {c.issuer}
                  <span className="cert-issuer-dot"></span>
                </div>
                <div className="cert-title">{c.title}</div>
                <div className="cert-meta">
                  <span>{c.year}</span>
                  <a href={c.credential} target="_blank" rel="noopener noreferrer" className="cert-link">
                    View credential ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}