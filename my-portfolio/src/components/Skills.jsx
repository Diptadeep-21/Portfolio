import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
      ],
    },
    {
      title: "Full Stack",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express", icon: "devicon-express-original" },
        { name: "Spring Boot", icon: "devicon-spring-plain colored" },
        { name: "Laravel", icon: "devicon-laravel-plain colored" },
      ],
    },
    {
      title: "Databases",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
      ],
    },
    {
      title: "Core CS",
      color: "from-orange-500 to-yellow-500",
      skills: [
        { name: "DSA", icon: "devicon-codeforces-plain" },
        { name: "OS", icon: "devicon-linux-plain" },
        { name: "DBMS", icon: "devicon-docker-plain" },
        { name: "CN", icon: "devicon-networkx-plain" },
      ],
    },
    {
      title: "Tools",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "REST API", icon: "devicon-fastapi-plain colored" },
        { name: "JWT", icon: "devicon-json-plain" },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-[#0b0b1a] py-28 px-6 text-white relative">

      {/* Devicon CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      {/* Glow */}
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold">
            My <span className="text-purple-400">Skillset</span>
          </h2>
          <p className="text-gray-500 mt-3">
            Technologies and concepts I use to build scalable systems
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* Title */}
              <div className={`text-lg font-semibold mb-4 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                {group.title}
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-4">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-lg px-3 py-2 hover:bg-purple-500 transition"
                  >
                    <i className={`${skill.icon} text-xl`}></i>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Highlight */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-purple-600 to-pink-500 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h3 className="text-xl font-semibold">
            Strong foundation in problem-solving & system design
          </h3>
          <p className="text-sm mt-2 opacity-90">
            Solved 200+ DSA problems and built multiple real-world applications focusing on scalability and performance.
          </p>
        </motion.div>

      </div>
    </section>
  );
}