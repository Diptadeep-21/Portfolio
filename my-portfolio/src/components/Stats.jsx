import { motion } from "framer-motion";

export default function Stats() {
  const cards = [
    {
      label: "GitHub Stats",
      accent: "#7c3aed",
      borderColor: "rgba(124,58,237,0.3)",
      src: "https://github-readme-stats.shion.dev/api?username=Diptadeep-21&theme=merko&hide_border=false&include_all_commits=true&count_private=true",
      desc: "Contribution history & language breakdown",
    },
    {
      label: "LeetCode Stats",
      accent: "#f59e0b",
      borderColor: "rgba(245,158,11,0.3)",
      src: "https://leetcard.jacoblin.cool/Diptadeep_Sinha?theme=dark&font=Baloo&border=0",
      desc: "Problem solving across all difficulty levels",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        .stats-section {
          background: #07051a;
          padding: 8rem 1.5rem;
          position: relative;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
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
        .stats-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
        }
        .stats-title em {
          font-style: normal;
          background: linear-gradient(135deg, #a78bfa, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 20px;
          max-width: 1100px;
          margin: 3.5rem auto 0;
        }
        @media (max-width: 860px) {
          .stats-grid { grid-template-columns: 1fr; }
        }
        .stat-card {
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
          padding: 0;
          overflow: hidden;
          transition: transform 0.3s, border-color 0.3s;
        }
        .stat-card:hover { transform: translateY(-4px); border-color: var(--card-border); }
        .stat-card-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .card-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .card-label {
          font-weight: 600;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.05em;
        }
        .card-desc {
          margin-left: auto;
          font-size: 0.72rem;
          color: rgba(255,255,255,0.25);
        }
        .stat-img-wrap {
          padding: 1.5rem;
        }
        .stat-img-wrap img {
          width: 100%;
          height: auto;
          border-radius: 10px;
          display: block;
        }
        .consistency-row {
          max-width: 1100px;
          margin: 1.5rem auto 0;
          padding: 1.5rem 2rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .cons-text {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.4);
          max-width: 480px;
          line-height: 1.6;
        }
        .cons-link {
          font-size: 0.82rem;
          font-weight: 600;
          color: #a78bfa;
          text-decoration: none;
          border-bottom: 1px solid rgba(167,139,250,0.3);
          padding-bottom: 1px;
        }
        .cons-link:hover { color: #f472b6; }
      `}</style>

      <section className="stats-section" id="stats">
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="section-label">Activity</div>
            <h2 className="stats-title">Coding <em>Stats</em></h2>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.95rem", marginTop: "0.75rem", maxWidth: 480, margin: "0.75rem auto 0" }}>
              Consistency in problem solving and open-source development
            </p>
          </motion.div>
        </div>

        <div className="stats-grid">
          {cards.map((c, i) => (
            <motion.div
              key={c.label}
              className="stat-card"
              style={{ "--card-border": c.borderColor }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="stat-card-header">
                <div className="card-dot" style={{ background: c.accent, boxShadow: `0 0 8px ${c.accent}` }}></div>
                <span className="card-label">{c.label}</span>
                <span className="card-desc">{c.desc}</span>
              </div>
              <div className="stat-img-wrap">
                <img src={c.src} alt={c.label} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="consistency-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="cons-text">
            350+ DSA problems solved across LeetCode & other platforms. Active GitHub contributor building real-world systems.
            Focused on writing clean, optimal code every day.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="https://github.com/Diptadeep-21" target="_blank" className="cons-link">GitHub ↗</a>
            <a href="https://leetcode.com/Diptadeep_Sinha" target="_blank" className="cons-link">LeetCode ↗</a>
          </div>
        </motion.div>
      </section>
    </>
  );
}