export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        .footer {
          background: #07051a;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 2rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          font-family: 'Space Grotesk', sans-serif;
        }
        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          background: linear-gradient(135deg, #e2d9ff, #f9a8d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.02em;
          text-decoration: none;
        }
        .footer-copy {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.04em;
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
        }
        .footer-link {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .footer-link:hover { color: rgba(255,255,255,0.6); }
      `}</style>

      <footer className="footer">
        <a href="#" className="footer-logo">DS</a>
        <span className="footer-copy">© 2026 Diptadeep Sinha · Built with React & Tailwind</span>
        <div className="footer-links">
          <a href="https://github.com/Diptadeep-21" target="_blank" className="footer-link">GitHub</a>
          <a href="https://www.linkedin.com/in/diptadeep-sinha-352365349/" target="_blank" className="footer-link">LinkedIn</a>
          <a href="mailto:sinhadiptadeep@gmail.com" className="footer-link">Email</a>
        </div>
      </footer>
    </>
  );
}