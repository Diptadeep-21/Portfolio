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
      note: "Source code & open-source work",
    },
    {
      label: "LinkedIn",
      handle: "Diptadeep Sinha",
      href: "https://www.linkedin.com/in/diptadeep-sinha-352365349/",
      note: "Professional network & experience",
    },
    {
      label: "LeetCode",
      handle: "Diptadeep_Sinha",
      href: "https://leetcode.com/Diptadeep_Sinha",
      note: "Problem solving · 350+ solved",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@400;500&display=swap');

        .contact-section {
          background: var(--paper);
          font-family: 'EB Garamond', serif;
          border-bottom: 3px double var(--ink);
        }

        .contact-section-header {
          border-bottom: 3px double var(--ink);
          border-top: 3px double var(--ink);
          padding: 1.2rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
        }
        @media (max-width: 900px) {
          .contact-layout { grid-template-columns: 1fr; }
          .contact-sidebar { border-left: none !important; border-top: 1px solid var(--rule); }
        }

        .contact-main {
          padding: 3rem 2.5rem;
          border-right: 1px solid var(--rule);
        }

        .contact-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 900;
          color: var(--ink);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
        }
        .contact-headline em {
          font-style: italic;
          color: var(--accent);
        }

        .contact-availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-3);
          border: 1px solid var(--rule);
          padding: 6px 14px;
          margin-bottom: 1.5rem;
          background: var(--paper-2);
        }
        .avail-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #2e7d32;
          box-shadow: 0 0 0 2px rgba(46,125,50,0.2);
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot {
          0%,100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .contact-body {
          font-size: 0.95rem;
          color: var(--ink-2);
          line-height: 1.75;
          margin-bottom: 2rem;
          max-width: 500px;
        }

        .email-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .email-display {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--ink);
          font-style: italic;
        }
        .copy-btn {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 14px;
          border: 1px solid var(--rule);
          background: var(--paper-2);
          color: var(--ink-3);
          cursor: pointer;
          transition: all 0.2s;
        }
        .copy-btn:hover { border-color: var(--ink); background: var(--ink); color: var(--paper); }
        .copy-btn.copied { border-color: #2e7d32; background: #e8f5e9; color: #2e7d32; }

        .contact-cta-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .cta-primary-ed {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 10px 22px;
          background: var(--ink);
          color: var(--paper);
          text-decoration: none;
          border: 1px solid var(--ink);
          transition: all 0.2s;
        }
        .cta-primary-ed:hover { background: var(--accent); border-color: var(--accent); }
        .cta-ghost-ed {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 10px 22px;
          background: transparent;
          color: var(--ink-2);
          text-decoration: none;
          border: 1px solid var(--rule);
          transition: all 0.2s;
        }
        .cta-ghost-ed:hover { border-color: var(--ink); color: var(--ink); }

        /* Sidebar */
        .contact-sidebar {
          border-left: 1px solid var(--rule);
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .sidebar-link-heading {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-3);
          padding-bottom: 8px;
          border-bottom: 1px solid var(--rule);
          margin-bottom: 0;
        }
        .contact-link-item {
          padding: 1.1rem 0;
          border-bottom: 1px solid var(--rule);
          text-decoration: none;
          display: block;
          transition: background 0.15s;
        }
        .contact-link-item:hover { padding-left: 8px; }
        .contact-link-label {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--ink);
          margin-bottom: 2px;
        }
        .contact-link-handle {
          font-family: 'DM Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 0.06em;
          color: var(--accent);
          margin-bottom: 4px;
        }
        .contact-link-note {
          font-size: 0.78rem;
          color: var(--ink-3);
          font-style: italic;
        }
        .contact-link-arrow {
          float: right;
          color: var(--rule);
          font-size: 1rem;
          margin-top: -1.8rem;
          transition: color 0.2s;
        }
        .contact-link-item:hover .contact-link-arrow { color: var(--accent); }

        /* Bottom band */
        .contact-bottom-band {
          border-top: 3px double var(--ink);
          padding: 1.5rem 2rem;
          text-align: center;
          background: var(--paper-2);
        }
        .contact-bottom-ornament {
          color: var(--accent);
          letter-spacing: 0.5rem;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        .contact-bottom-text {
          font-size: 0.85rem;
          color: var(--ink-3);
          font-style: italic;
        }
      `}</style>

      <section className="contact-section" id="contact">
        {/* Header */}
        <div className="contact-section-header">
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--ink-3)" }}>Get in touch</span>
          <div style={{ flex: 1, height: 1, background: "var(--rule)" }}></div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>
            Let's build something <em style={{ fontStyle: "italic", color: "var(--accent)" }}>remarkable</em>
          </h2>
          <div style={{ flex: 1, height: 1, background: "var(--rule)" }}></div>
        </div>

        <div className="contact-layout">
          {/* Main */}
          <motion.div
            className="contact-main"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-headline">
              Open to<br /><em>opportunities</em>
            </h3>

            <div className="contact-availability">
              <span className="avail-dot"></span>
              Open to opportunities
            </div>

            <p className="contact-body">
              Available for internships, full-time engineering roles, freelance projects, and collaboration opportunities. I'm particularly interested in roles involving scalable systems, full-stack development, and impactful engineering.
            </p>

            <div className="email-row">
              <span className="email-display">sinhadiptadeep@gmail.com</span>
              <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={copyEmail}>
                {copied ? "Copied ✓" : "Copy email"}
              </button>
            </div>

            <div className="contact-cta-row">
              <a href="mailto:sinhadiptadeep@gmail.com" className="cta-primary-ed">Send a message →</a>
              <a href="/resume.pdf" download="Diptadeep_Sinha_Resume.pdf" className="cta-ghost-ed">↓ Download resume</a>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="contact-sidebar"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="sidebar-link-heading">Profiles & presence</div>
            {links.map(l => (
              <a key={l.label} href={l.href} target="_blank" className="contact-link-item">
                <span className="contact-link-arrow">↗</span>
                <div className="contact-link-label">{l.label}</div>
                <div className="contact-link-handle">{l.handle}</div>
                <div className="contact-link-note">{l.note}</div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom ornament */}
        <div className="contact-bottom-band">
          <div className="contact-bottom-ornament">✦ ✦ ✦</div>
          <div className="contact-bottom-text">Diptadeep Sinha · KIIT University · Bhubaneswar, India</div>
        </div>
      </section>
    </>
  );
}