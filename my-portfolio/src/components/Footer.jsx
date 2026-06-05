export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer {
          border-top: 3px double var(--ink);
          padding: 1.5rem 2rem;
          text-align: center;
          background: var(--paper-2);
        }

        .footer-top {
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--rule);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          text-decoration: none;
        }

        .footer-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--ink);
          line-height: 1;
        }

        .footer-sub {
          font-family: 'DM Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-top: 4px;
        }

        .footer-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
          border-left: 1px solid var(--rule);
        }

        .footer-link {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-2);
          text-decoration: none;
          padding: 0.8rem 1.2rem;
          border-right: 1px solid var(--rule);
          transition: all 0.2s ease;
        }

        .footer-link:hover {
          background: var(--paper-2);
          color: var(--accent);
        }

        .footer-bottom {
          padding: 0.8rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-3);
        }

        .footer-divider {
          flex: 1;
          height: 1px;
          background: var(--rule);
          min-width: 50px;
        }

        @media (max-width: 768px) {
          .footer-top,
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .footer-links {
            width: 100%;
            border-left: none;
            border-top: 1px solid var(--rule);
          }

          .footer-link {
            flex: 1;
            text-align: center;
          }

          .footer-divider {
            display: none;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-top">
          <a href="#" className="footer-brand">
            <span className="footer-name">Diptadeep Sinha</span>
            <span className="footer-sub">
              Software Engineer · Portfolio
            </span>
          </a>

          <div className="footer-links">
            <a
              href="https://github.com/Diptadeep-21"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/diptadeep-sinha-352365349/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>

            <a
              href="mailto:sinhadiptadeep@gmail.com"
              className="footer-link"
            >
              Email
            </a>

            <a
              href="/resume.pdf"
              download
              className="footer-link"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Diptadeep Sinha</span>

          <div className="footer-divider"></div>

          <span>KIIT CSE · Bhubaneswar</span>

          <div className="footer-divider"></div>

          <span>Full-Stack Engineering · Est. 2022</span>
        </div>
      </footer>
    </>
  );
}