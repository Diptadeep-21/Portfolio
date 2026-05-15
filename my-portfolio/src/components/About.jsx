import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0, transition: { duration: 0.65 } } };

export default function About() {
  const highlights = [
    { value: "9.51", label: "CGPA at KIIT", accent: "#a78bfa" },
    { value: "350+", label: "DSA Problems", accent: "#60a5fa" },
    { value: "5+", label: "Systems Built", accent: "#34d399" },
    { value: "Top", label: "SIH 2025 Team", accent: "#f472b6" },
  ];

  const traits = [
    { icon: "⚡", title: "Scalable by design", desc: "Every system I build is architected with scale in mind from day one." },
    { icon: "🎯", title: "Precision problem solving", desc: "350+ DSA problems refine how I think through algorithmic challenges." },
    { icon: "♿", title: "Accessibility-first", desc: "I build tools that work for everyone, not just power users." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        .about-section {
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
        .about-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #fff;
          max-width: 560px;
        }
        .about-title em {
          font-style: normal;
          background: linear-gradient(135deg, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .about-body {
          color: rgba(255,255,255,0.45);
          font-size: 1rem;
          line-height: 1.8;
          max-width: 480px;
          margin-top: 1.5rem;
        }
        .about-body strong { color: rgba(255,255,255,0.85); font-weight: 600; }
        .quote-block {
          margin-top: 2rem;
          padding-left: 1.5rem;
          border-left: 2px solid rgba(167,139,250,0.4);
          color: rgba(255,255,255,0.4);
          font-size: 0.9rem;
          font-style: italic;
          line-height: 1.6;
          max-width: 440px;
        }
        .metric-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 1rem;
        }
        .metric-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 1.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
        }
        .metric-card:hover { border-color: rgba(167,139,250,0.25); transform: translateY(-3px); }
        .metric-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, var(--accent-color, #a78bfa22), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .metric-card:hover::before { opacity: 1; }
        .metric-value {
          font-family: 'Syne', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 4px;
        }
        .metric-label {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.04em;
        }
        .trait-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 1.5rem;
        }
        .trait-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 1rem 1.25rem;
          transition: background 0.3s;
        }
        .trait-item:hover { background: rgba(167,139,250,0.06); border-color: rgba(167,139,250,0.15); }
        .trait-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 2px; }
        .trait-title { font-weight: 600; color: #fff; font-size: 0.9rem; margin-bottom: 3px; }
        .trait-desc { font-size: 0.82rem; color: rgba(255,255,255,0.4); line-height: 1.6; }
        .hackathon-banner {
          margin-top: 1.5rem;
          padding: 1rem 1.25rem;
          background: linear-gradient(135deg, rgba(167,139,250,0.1), rgba(244,114,182,0.08));
          border: 1px solid rgba(167,139,250,0.2);
          border-radius: 14px;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.6;
        }
        .hackathon-banner strong { color: #c4b5fd; }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          max-width: 1100px;
          margin: 0 auto;
          align-items: start;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
          .metric-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section className="about-section" id="about">
        {/* Subtle glow */}
        <div style={{ position: "absolute", top: "20%", left: "60%", width: 400, height: 400,
          background: "rgba(124,58,237,0.08)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }}></div>

        <div className="about-grid">
          {/* LEFT */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="section-label">About me</div>
            <h2 className="about-title">
              I build <em>systems</em> that solve real problems
            </h2>
            <p className="about-body">
              I'm <strong>Diptadeep Sinha</strong>, a Computer Science student at KIIT with a CGPA of <strong style={{ color: "#a78bfa" }}>9.51</strong>.
              <br /><br />
              My work focuses on scalable, real-world systems — from real-time communication platforms to accessibility-driven applications.
              I enjoy breaking down complex problems and delivering production-ready solutions.
            </p>
            <blockquote className="quote-block">
              "I focus on building systems that are not just functional, but scalable, efficient, and meaningful."
            </blockquote>

            <div className="trait-list" style={{ marginTop: "2rem" }}>
              {traits.map(t => (
                <div key={t.title} className="trait-item">
                  <div className="trait-icon">{t.icon}</div>
                  <div>
                    <div className="trait-title">{t.title}</div>
                    <div className="trait-desc">{t.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="metric-grid">
              {highlights.map(h => (
                <div key={h.label} className="metric-card" style={{ "--accent-color": h.accent + "22" }}>
                  <div className="metric-value" style={{ color: h.accent }}>{h.value}</div>
                  <div className="metric-label">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="hackathon-banner">
              🏆 <strong>Smart India Hackathon 2025 Finalist</strong> — Selected among top teams nationally.
              Contributed to an AI-based space debris prediction system, applying ML to real satellite safety challenges.
            </div>

            {/* Timeline */}
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: "1rem" }}>Journey</div>
              {[
                { year: "2022", event: "Started B.Tech CSE at KIIT" },
                { year: "2023", event: "MERN Stack development & 100+ DSA problems" },
                { year: "2024", event: "Built 5+ full-stack systems; hit 350+ DSA" },
                { year: "2025", event: "SIH Finalist · Targeting top engineering roles" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "0.9rem" }}>
                  <div style={{ flexShrink: 0, width: 44, fontSize: "0.72rem", fontWeight: 700, color: "#7c3aed", fontFamily: "'Syne', sans-serif", paddingTop: "2px" }}>{item.year}</div>
                  <div style={{ flex: 1, paddingLeft: "1rem", borderLeft: "1px solid rgba(255,255,255,0.07)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", paddingBottom: "0.8rem", lineHeight: 1.5 }}>
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}