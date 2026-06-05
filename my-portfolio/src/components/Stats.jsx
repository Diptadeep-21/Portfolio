import { motion } from "framer-motion";

export default function Stats() {
  const cards = [
    {
      label: "GitHub Stats",
      desc: "Contribution history & language breakdown",
      src: "https://github-readme-stats.shion.dev/api?username=Diptadeep-21&theme=merko&hide_border=false&include_all_commits=true&count_private=true",
    },
    {
      label: "LeetCode Stats",
      desc: "Problem solving across all difficulty levels",
      src: "https://leetcard.jacoblin.cool/Diptadeep_Sinha?theme=dark&font=Baloo&border=0",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap');

        .stats-section {
          background: var(--paper-2);
          font-family: 'EB Garamond', serif;
          border-bottom: 3px double var(--ink);
        }

        .stats-section-header {
          border-bottom: 3px double var(--ink);
          border-top: 3px double var(--ink);
          padding: 1.2rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .stats-layout {
          display: grid;
          grid-template-columns: 200px 1fr;
        }
        @media (max-width: 900px) {
          .stats-layout { grid-template-columns: 1fr; }
          .stats-sidebar { border-right: none !important; border-bottom: 1px solid var(--rule); }
        }

        .stats-sidebar {
          border-right: 1px solid var(--rule);
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .stats-sidebar-heading {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding-bottom: 6px;
          border-bottom: 1px solid var(--rule);
          margin-bottom: 0.75rem;
        }

        .stats-sidebar-note {
          font-size: 0.85rem;
          color: var(--ink-2);
          line-height: 1.7;
          font-style: italic;
        }

        .stats-profile-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .stats-profile-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--accent);
          text-decoration: none;
          padding: 6px 10px;
          border: 1px solid var(--rule);
          background: var(--paper);
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .stats-profile-link:hover { background: var(--ink); color: var(--paper); border-color: var(--ink); }

        .stats-big-num {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 900;
          color: var(--ink);
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .stats-main {
          padding: 2rem 2.5rem;
        }

        .stats-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 2rem;
        }
        @media (max-width: 700px) {
          .stats-cards-grid { grid-template-columns: 1fr; }
        }

        .stat-card-ed {
          border: 1px solid var(--rule);
          background: var(--paper);
          overflow: hidden;
          transition: border-color 0.2s;
        }
        .stat-card-ed:hover { border-color: var(--ink-3); }
        .stat-card-header {
          border-bottom: 1px solid var(--rule);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--paper-3);
        }
        .stat-card-label {
          font-family: 'Playfair Display', serif;
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--ink);
        }
        .stat-card-desc {
          font-family: 'DM Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.08em;
          color: var(--ink-3);
          text-transform: uppercase;
        }
        .stat-card-img {
          padding: 1rem;
        }
        .stat-card-img img {
          width: 100%;
          height: auto;
          display: block;
        }

        .stats-consistency-row {
          border-top: 1px solid var(--rule);
          padding-top: 1.5rem;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .stats-consistency-text {
          font-size: 0.9rem;
          color: var(--ink-2);
          line-height: 1.7;
          max-width: 500px;
          font-style: italic;
        }
        .stats-links-row {
          display: flex;
          gap: 12px;
        }
        .stats-ext-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
          text-decoration: none;
          border-bottom: 1px solid var(--accent);
          padding-bottom: 1px;
        }
        .stats-ext-link:hover { color: var(--ink); border-color: var(--ink); }
      `}</style>

      <section className="stats-section" id="stats">
        {/* Header */}
        <div className="stats-section-header">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ink-3)" }}>Activity</span>
          <div style={{ flex: 1, height: 1, background: "var(--rule)" }}></div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>
            Coding <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Stats</em>
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--rule)" }}></div>
        </div>

        <div className="stats-layout">
          {/* Sidebar */}
          <div className="stats-sidebar">
            <div>
              <div className="stats-sidebar-heading">Consistency</div>
              <div className="stats-big-num">350+</div>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.82rem", color: "var(--ink-3)", fontStyle: "italic", marginTop: 4 }}>DSA problems solved</div>
            </div>
            <div>
              <div className="stats-sidebar-heading">Open-source</div>
              <div className="stats-sidebar-note">Active GitHub contributor building real-world systems and maintaining public repos.</div>
            </div>
            <div>
              <div className="stats-sidebar-heading">Profiles</div>
              <div className="stats-profile-links">
                <a href="https://github.com/Diptadeep-21" target="_blank" className="stats-profile-link">
                  GitHub <span>↗</span>
                </a>
                <a href="https://leetcode.com/Diptadeep_Sinha" target="_blank" className="stats-profile-link">
                  LeetCode <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="stats-main">
            <div className="stats-cards-grid">
              {cards.map((c, i) => (
                <motion.div
                  key={c.label}
                  className="stat-card-ed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <div className="stat-card-header">
                    <span className="stat-card-label">{c.label}</span>
                    <span className="stat-card-desc">{c.desc}</span>
                  </div>
                  <div className="stat-card-img">
                    <img src={c.src} alt={c.label} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="stats-consistency-row">
              <p className="stats-consistency-text">
                350+ DSA problems solved across LeetCode & other platforms. Active GitHub contributor building real-world systems. Focused on writing clean, optimal code every day.
              </p>
              {/* <div className="stats-links-row">
                <a href="https://github.com/Diptadeep-21" target="_blank" className="stats-ext-link">GitHub ↗</a>
                <a href="https://leetcode.com/Diptadeep_Sinha" target="_blank" className="stats-ext-link">LeetCode ↗</a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}