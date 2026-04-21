import { motion } from "framer-motion";

import busImg from "../assets/bus.jpg";
import learnImg from "../assets/learning.jpg";
import hospitalImg from "../assets/hospital.jpg";

export default function Hero() {
  const projects = [
    {
      title: "Glide-Way",
      img: busImg,
    },
    {
      title: "Accessible Learning Platform",
      img: learnImg,
    },
    {
      title: "SmartClinic Queue",
      img: hospitalImg,
    },
    {
      title: "Network Intrusion Detection",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Restaurant Management System",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Soft Tunes",
      img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    },
  ];

  // 🔥 Scroll handler
  const handleProjectClick = (title) => {
    // Scroll to projects section first
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });

    // Then scroll to specific project card
    setTimeout(() => {
      const id = title.replace(/\s+/g, "-");
      const project = document.getElementById(id);
      project?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700 flex items-center justify-center p-6">

      {/* Glass Container */}
      <div className="w-full max-w-6xl bg-[#0b0b1a]/90 rounded-3xl p-10 shadow-2xl border border-white/10 relative overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 opacity-30 blur-3xl rounded-full"></div>

        {/* Hero Content */}
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi, I'm{" "}
            <span className="text-purple-400">Diptadeep Sinha</span>
            <br />
            Building scalable{" "}
            <span className="text-pink-400">full-stack systems</span>{" "}
            & solving real-world{" "}
            <span className="text-blue-400">problems</span>
          </motion.h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            B.Tech CSE @ KIIT (CGPA 9.51) • MERN Stack Developer • 200+ DSA problems solved.
            Passionate about building real-time platforms, accessibility tools, and scalable backend systems.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a href="#projects">
              <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full text-white shadow-lg">
                View Projects
              </button>
            </a>

            <a href="https://github.com/Diptadeep-21" target="_blank">
              <button className="px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white/10">
                GitHub
              </button>
            </a>
          </div>
        </div>

        {/* Project Cards */}
        <div className="mt-16 flex justify-center gap-6 flex-wrap">
          {projects.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleProjectClick(item.title)}
              className="cursor-pointer relative w-64 h-36 rounded-xl overflow-hidden shadow-lg border border-white/10 group"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white font-semibold text-center px-2">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Down */}
        <div className="flex justify-center mt-10">
          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center animate-bounce text-white">
            ↓
          </div>
        </div>
      </div>
    </div>
  );
}