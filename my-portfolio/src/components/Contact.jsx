import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("sinhadiptadeep@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const links = [
    {
      label: "GitHub",
      handle: "@Diptadeep-21",
      href: "https://github.com/Diptadeep-21",
      color: "#fff",
      bg: "rgba(255,255,255,0.06)",
      border: "rgba(255,255,255,0.12)",
      icon: "⌥",
    },
    {
      label: "LinkedIn",
      handle: "Diptadeep Sinha",
      href: "https://www.linkedin.com/in/diptadeep-sinha-352365349/",
      color: "#60a5fa",
      bg: "rgba(96,165,250,0.06)",
      border: "rgba(96,165,250,0.2)",
      icon: "in",
    },
    {
      label: "LeetCode",
      handle: "Diptadeep_Sinha",
      href: "https://leetcode.com/Diptadeep_Sinha",
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.06)",
      border: "rgba(245,158,11,0.2)",
      icon: "⌗",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        .contact-section {
          background: #07051a;
          padding: 8rem 1.5rem 10rem;
          position: relative;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
        }
        .contact-section::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.15), transparent 70%);
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
        .contact-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #fff;
          max-width: 700px;
          margin: 0 auto;
        }
        .contact-title em {
          font-style: normal;
          background: linear-gradient(135deg, #a78bfa, #f472b6, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200%;
          animation: shimmer 4s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .email-copy {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 28px;
          border-radius: 100px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
          transition: all 0.3s;
          margin-top: 2.5rem;
          font-size: 1rem;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
        }
        .email-copy:hover {
          background: rgba(167,139,250,0.1);
          border-color: rgba(167,139,250,0.35);
          color: #fff;
          transform: translateY(-2px);
        }
        .copy-badge {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 100px;
          background: rgba(167,139,250,0.15);
          color: #a78bfa;
          transition: all 0.2s;
        }
        .copy-badge.copied {
          background: rgba(52,211,153,0.15);
          color: #34d399;
        }
        .social-grid {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .social-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 22px;
          border-radius: 16px;
          text-decoration: none;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .social-card:hover { transform: translateY(-3px); }
        .social-icon {
          font-size: 0.85rem;
          font-weight: 700;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .social-label { font-size: 0.85rem; font-weight: 600; }
        .social-handle { font-size: 0.75rem; margin-top: 1px; opacity: 0.55; }
        .divider {
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent);
          margin: 2.5rem auto 0;
        }
        .open-to {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 100px;
          background: rgba(52,211,153,0.08);
          border: 1px solid rgba(52,211,153,0.2);
          color: #34d399;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          margin-top: 3rem;
        }
        .open-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #34d399;
          box-shadow: 0 0 8px #34d399;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100%{opacity:1} 50%{opacity:0.4}
        }
      `}</style>

      <section className="contact-section" id="contact">
        <motion.div
          style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-label">Get in touch</div>

          <h2 className="contact-title">
            Let's build something <em>remarkable</em> together
          </h2>

          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.95rem", marginTop: "1.25rem", maxWidth: 440, margin: "1.25rem auto 0", lineHeight: 1.7 }}>
            Open to internships, full-time roles, freelance projects, and collaboration opportunities. Let's connect.
          </p>

          <div className="open-to">
            <div className="open-dot"></div>
            Open to opportunities
          </div>

          <div>
            <button className="email-copy" onClick={copyEmail}>
              <span>sinhadiptadeep@gmail.com</span>
              <span className={`copy-badge ${copied ? "copied" : ""}`}>
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </div>

          <div className="divider"></div>

          <div className="social-grid">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                className="social-card"
                style={{ background: l.bg, border: `1px solid ${l.border}` }}
              >
                <div className="social-icon" style={{ background: `${l.bg}`, color: l.color, border: `1px solid ${l.border}` }}>
                  {l.icon}
                </div>
                <div style={{ textAlign: "left" }}>
                  <div className="social-label" style={{ color: l.color }}>{l.label}</div>
                  <div className="social-handle" style={{ color: "rgba(255,255,255,0.4)" }}>{l.handle}</div>
                </div>
                <span style={{ color: "rgba(255,255,255,0.2)", marginLeft: 8 }}>↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}