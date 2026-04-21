export default function Stats() {
  return (
    <section id="stats" className="bg-[#0b0b1a] py-28 px-6 text-white">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Coding <span className="text-purple-400">Activity</span>
        </h2>

        <p className="text-gray-500 mb-12">
          Consistency in problem solving and development
        </p>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* GitHub */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
            <h3 className="mb-4 text-lg font-semibold text-purple-400">
              GitHub Stats
            </h3>

            <img
              src="https://github-readme-stats.vercel.app/api?username=Diptadeep-21&theme=tokyonight"
              className="mx-auto"
            />
          </div>

          {/* LeetCode */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg">
            <h3 className="mb-4 text-lg font-semibold text-yellow-400">
              LeetCode Stats
            </h3>

            <img
              src="https://leetcard.jacoblin.cool/Diptadeep_Sinha?theme=dark&font=Baloo"
              className="mx-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}