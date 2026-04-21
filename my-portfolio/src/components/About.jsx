import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#0b0b1a] text-white py-28 px-6 relative">

      {/* Background Glow */}
      <div className="absolute top-10 left-1/3 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Beyond code — how I think and build
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE — STORY */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold mb-5 leading-snug">
              I don’t just build apps — I build{" "}
              <span className="text-purple-400">systems that solve real problems</span>
            </h3>

            <p className="text-gray-400 leading-relaxed">
              I’m <span className="text-white font-medium">Diptadeep Sinha</span>, a Computer Science student at KIIT with a CGPA of{" "}
              <span className="text-purple-400 font-medium">9.51</span>.
              <br /><br />
              My work focuses on building scalable, real-world systems — from real-time platforms to accessibility-driven applications.  
              I enjoy breaking down complex problems and turning them into efficient, production-ready solutions.
              <br /><br />
              Alongside development, I’ve solved{" "}
              <span className="text-pink-400 font-medium">200+ DSA problems</span>, which helps me write optimized and reliable code.
            </p>

            {/* Philosophy */}
            <div className="mt-6 p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg">
              <p className="text-gray-300 text-sm italic">
                “I focus on building systems that are not just functional,
                but scalable, efficient, and meaningful in real-world scenarios.”
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE — ELITE METRICS + ACHIEVEMENTS */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >

            {/* CGPA Highlight */}
            <div className="col-span-2 bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-2xl text-center shadow-lg">
              <h3 className="text-4xl font-bold">9.51</h3>
              <p className="text-sm mt-2">Current CGPA (KIIT)</p>
            </div>

            {/* DSA */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-blue-400">200+</h3>
              <p className="text-sm mt-2 text-gray-400">DSA Problems</p>
            </div>

            {/* Projects */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
              <h3 className="text-3xl font-bold text-green-400">5+</h3>
              <p className="text-sm mt-2 text-gray-400">Systems Built</p>
            </div>

            {/* Achievement */}
            <div className="col-span-2 bg-white/5 border border-white/10 p-6 rounded-2xl">
              <p className="text-gray-300 text-sm leading-relaxed">
                🏆 Selected among top teams in{" "}
                <span className="text-purple-400">Smart India Hackathon 2025</span>,  
                where I contributed to building an AI-based space debris prediction system.
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}