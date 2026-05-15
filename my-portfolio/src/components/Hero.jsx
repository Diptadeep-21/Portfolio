import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import busImg from "../assets/bus.jpg";
import learnImg from "../assets/learning.jpg";
import hospitalImg from "../assets/hospital.jpg";
import buildora from "../assets/buildora1.png";

const PROJECTS = [
  { title: "Glide-Way", img: busImg, tag: "Real-time" },
  { title: "Buildora", img: buildora, tag: "SaaS" },
  { title: "Accessible Learning Platform", img: learnImg, tag: "A11y" },
  { title: "SmartClinic Queue", img: hospitalImg, tag: "Healthcare" },
  { title: "Network Intrusion Detection", tag: "ML/Security",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop" },
  { title: "Restaurant Management System", tag: "Full-stack",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop" },
  { title: "Soft Tunes", tag: "Media",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop" },
];

const ROLES = ["Full-Stack Developer", "MERN Stack Engineer", "Problem Solver", "System Architect"];

export default function Hero() {
  const roleRef = useRef(null);
  const idx = useRef(0);

  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;
    el.textContent = ROLES[0];
    const cycle = () => {
      el.style.opacity = 0;
      el.style.transform = "translateY(8px)";
      setTimeout(() => {
        idx.current = (idx.current + 1) % ROLES.length;
        el.textContent = ROLES[idx.current];
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 400);
    };
    const t = setInterval(cycle, 2800);
    return () => clearInterval(t);
  }, []);

  const handleProjectClick = (title) => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      document.getElementById(title.replace(/\s+/g, "-"))
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Syne:wght@700;800&display=swap');
        .hero-section {
          min-height: 100vh;
          background: #07051a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 100px 1.5rem 3rem;
          position: relative;
          overflow: hidden;
          font-family: 'Space Grotesk', sans-serif;
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(167,139,250,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(167,139,250,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 100%);
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid rgba(167,139,250,0.25);
          background: rgba(167,139,250,0.08);
          font-size: 0.75rem;
          font-weight: 500;
          color: #c4b5fd;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #a78bfa;
          box-shadow: 0 0 8px #a78bfa;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #fff;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }
        .hero-gradient-text {
          background: linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #60a5fa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .role-cycle {
          display: inline-block;
          transition: opacity 0.3s ease, transform 0.3s ease;
          color: #a78bfa;
          font-style: italic;
        }
        .hero-sub {
          max-width: 560px;
          text-align: center;
          color: rgba(255,255,255,0.45);
          font-size: 1rem;
          line-height: 1.7;
          margin: 1.5rem auto 0;
        }
        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 2.5rem;
        }
        .btn-primary {
          padding: 12px 28px;
          border-radius: 100px;
          background: linear-gradient(135deg, #7c3aed, #ec4899);
          color: #fff;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(124,58,237,0.35);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(124,58,237,0.5); }
        .btn-ghost {
          padding: 11px 28px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.75);
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
        }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.3); color: #fff; background: rgba(255,255,255,0.08); }
        .stat-row {
          display: flex;
          gap: 2px;
          justify-content: center;
          margin-top: 3rem;
          flex-wrap: wrap;
        }
        .stat-chip {
          padding: 8px 20px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #e2d9ff, #f9a8d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stat-label {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 2px;
        }
        .projects-scroll {
          width: 100%;
          max-width: 1100px;
          margin-top: 5rem;
          overflow: hidden;
          position: relative;
        }
        .projects-scroll::before, .projects-scroll::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }
        .projects-scroll::before { left: 0; background: linear-gradient(90deg, #07051a, transparent); }
        .projects-scroll::after { right: 0; background: linear-gradient(-90deg, #07051a, transparent); }
        .projects-track {
          display: flex;
          gap: 16px;
          animation: scrollTrack 30s linear infinite;
          width: max-content;
        }
        .projects-track:hover { animation-play-state: paused; }
        @keyframes scrollTrack {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .project-card {
          width: 350px;
          height: 130px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          flex-shrink: 0;
          cursor: pointer;
          position: relative;
          transition: transform 0.3s, border-color 0.3s;
        }
        .project-card:hover { transform: scale(1.04); border-color: rgba(167,139,250,0.3); }
        .project-card img { width: 100%; height: 100%; object-fit: cover; }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(7,5,26,0.92) 0%, rgba(7,5,26,0.4) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 10px 12px;
        }
        .project-tag {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 3px;
        }
        .project-name {
          font-size: 0.78rem;
          font-weight: 600;
          color: #fff;
          line-height: 1.3;
        }
        .scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin-top: 3rem;
          color: rgba(255,255,255,0.2);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          animation: float 2.5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(167,139,250,0.6), transparent);
        }
      `}</style>

      <div className="hero-section">
        {/* Background */}
        <div className="grid-bg"></div>
        <div className="hero-orb" style={{ width: 500, height: 500, top: -150, left: "15%", background: "rgba(124,58,237,0.18)" }}></div>
        <div className="hero-orb" style={{ width: 400, height: 400, bottom: 0, right: "10%", background: "rgba(236,72,153,0.12)" }}></div>
        <div className="hero-orb" style={{ width: 300, height: 300, top: "30%", left: "5%", background: "rgba(96,165,250,0.08)" }}></div>

        {/* Badge */}
        <motion.div className="badge" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="badge-dot"></span>
          Available for opportunities · KIIT CSE · 2025
        </motion.div>

        {/* Title */}
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          Diptadeep Sinha
          <br />
          <span className="hero-gradient-text">builds systems</span>
          <br />
          that <span className="role-cycle" ref={roleRef}>scale</span>
        </motion.h1>

        {/* Sub */}
        <motion.p className="hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          B.Tech CSE @ KIIT · CGPA 9.51 · MERN Stack · 350+ DSA problems.
          Building real-time platforms, accessibility tools & backend systems that matter.
        </motion.p>

        {/* CTAs */}
        <motion.div className="hero-ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="https://github.com/Diptadeep-21" target="_blank" className="btn-ghost">GitHub ↗</a>
          <a href="mailto:sinhadiptadeep@gmail.com" className="btn-ghost">sinhadiptadeep@gmail.com</a>
        </motion.div>

        {/* Stats */}
        <motion.div className="stat-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
          {[["9.51", "CGPA"], ["350+", "DSA Solved"], ["5+", "Systems Built"], ["SIH 2025", "Finalist"]].map(([n, l]) => (
            <div key={l} className="stat-chip">
              <span className="stat-num">{n}</span>
              <span className="stat-label">{l}</span>
            </div>
          ))}
        </motion.div>

        {/* Project scroll */}
        <motion.div className="projects-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <div className="projects-track">
            {[...PROJECTS, ...PROJECTS].map((p, i) => (
              <div key={i} className="project-card" onClick={() => handleProjectClick(p.title)}>
                <img src={p.img} alt={p.title} />
                <div className="project-overlay">
                  <div className="project-tag">{p.tag}</div>
                  <div className="project-name">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          Scroll
        </div>
      </div>
    </>
  );
}