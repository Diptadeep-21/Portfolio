import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0b0b1a] py-20 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-purple-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            id={p.title.replace(/\s+/g, "-")}  // 🔥 unique id
            key={i}
            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl"
          >
            <div className="h-40 rounded-lg mb-4 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-400 mt-2">{p.description}</p>

            <div className="mt-3 text-sm text-purple-400">
              {p.tech}
            </div>

            <a href={p.github} className="text-blue-400 mt-3 block">
              View Code →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}