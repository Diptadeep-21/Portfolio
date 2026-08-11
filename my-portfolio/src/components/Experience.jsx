import { motion } from "framer-motion";

export default function Experience() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap');

        .experience-section {
          background: var(--paper);
          font-family: 'EB Garamond', serif;
          border-bottom: 3px double var(--ink);
        }

        .experience-section-header {
          border-bottom: 3px double var(--ink);
          border-top: 3px double var(--ink);
          padding: 1.2rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .experience-broadsheet-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          min-height: 350px;
        }
        @media (max-width: 768px) {
          .experience-broadsheet-layout { grid-template-columns: 1fr; }
          .experience-index-col { border-right: none !important; border-bottom: 1px solid var(--rule); }
        }

        .experience-index-col {
          border-right: 1px solid var(--rule);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .experience-index-heading {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding-bottom: 6px;
          border-bottom: 1px solid var(--rule);
          margin-bottom: 1rem;
        }
        .experience-index-item {
          font-family: 'Playfair Display', serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--ink);
          padding: 8px 12px;
          border-left: 2px solid var(--accent);
          background: var(--paper-2);
          transition: all 0.2s;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .experience-index-sub {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--ink-3);
          font-weight: 400;
        }

        .experience-main-col {
          padding: 2rem 2.5rem;
        }

        .experience-role-header {
          border-bottom: 1px solid var(--rule);
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .experience-role-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
        }
        .experience-company-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .experience-company-link {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          font-style: italic;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s;
        }
        .experience-company-link:hover {
          border-color: var(--accent);
        }
        .experience-meta-details {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-3);
        }

        .experience-summary {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--ink-2);
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .experience-bullets {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .experience-bullets li {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--ink-2);
          padding-left: 20px;
          position: relative;
        }
        .experience-bullets li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--accent);
        }
        .experience-bullets strong {
          color: var(--ink);
          font-weight: 700;
        }

        .experience-footer-band {
          border-top: 3px double var(--ink);
          padding: 1.2rem 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          background: var(--paper-2);
        }
        .experience-footer-text {
          font-size: 0.9rem;
          color: var(--ink-2);
          font-style: italic;
        }
        .experience-footer-text strong {
          font-style: normal;
          font-weight: 700;
          color: var(--ink);
        }
        .experience-doc-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
          padding-bottom: 1px;
          transition: all 0.2s;
        }
        .experience-doc-link:hover {
          color: var(--accent-2);
          border-color: var(--accent-2);
        }
      `}</style>

      <section className="experience-section" id="experience">
        {/* Header */}
        <div className="experience-section-header">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ink-3)" }}>Chronology</span>
          <div style={{ flex: 1, height: 1, background: "var(--rule)" }}></div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>
            Work <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Experience</em>
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--rule)" }}></div>
        </div>

        <div className="experience-broadsheet-layout">
          {/* Index column */}
          <div className="experience-index-col">
            <div className="experience-index-heading">Positions</div>
            <div className="experience-index-item">
              <span>BYAMN</span>
              <span className="experience-index-sub">June – Sep 2026</span>
            </div>
            <div style={{ marginTop: "auto", paddingTop: "2rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: "0.4rem" }}>Internship Term</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 900, color: "var(--ink)", lineHeight: 1 }}>
                3 Mos
              </div>
              <div style={{ fontSize: "0.78rem", color: "var(--ink-3)", fontStyle: "italic" }}>Full-Stack Focus</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="experience-main-col">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="experience-role-header">
                <h3 className="experience-role-title">Full Stack Developer Intern</h3>
                <div className="experience-company-row">
                  <a href="https://www.byamn.in" target="_blank" rel="noopener noreferrer" className="experience-company-link">
                    BYAMN Enterprise
                  </a>
                  <span className="experience-meta-details">· Gorakhpur, UP, India (Remote)</span>
                </div>
                <div className="experience-meta-details" style={{ color: "var(--accent)", fontWeight: 500, marginTop: "2px" }}>
                  June 15, 2026 – September 15, 2026 (Extended Term Contract)
                </div>
              </div>

              <p className="experience-summary">
                Under the direct guidance of Product Management and engineering leadership, contributed to building, scaling, and maintaining full-stack web applications using modern software engineering practices.
              </p>

              <ul className="experience-bullets">
                <li>
                  <strong>Secure & Scalable REST APIs:</strong> Designed and implemented robust APIs with <strong>Zod validation</strong>, JWT authentication, and rate limiting to prevent unauthorized access and abuse, validated extensively using Postman.
                </li>
                <li>
                  <strong>Database Performance:</strong> Scaled backend systems using <strong>MongoDB indexing</strong>, cursor pagination, and cascade deletion scripts, reducing API latency and securing database consistency.
                </li>
                <li>
                  <strong>Frontend Architecture:</strong> Developed reusable and modular React/TypeScript components across multiple product pages to improve loading speed, maintainability, and visual consistency.
                </li>
                <li>
                  <strong>Collaborative Workflow:</strong> Engaged in code reviews, feature definitions, and Git version control workflows within cross-functional teams to deliver high-quality software solutions.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Footer Band */}
        <div className="experience-footer-band">
          <p className="experience-footer-text">
            <strong>Documented Proof</strong> — Extension offer letter validated by Founder Aman Singh and Product Management.
          </p>
          <a href="/resume.pdf" download="Diptadeep_Sinha_Resume.pdf" className="experience-doc-link">
            Download Resume PDF ↗
          </a>
        </div>
      </section>
    </>
  );
}
