export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/10 border-b border-white/10 z-50 px-8 py-4 flex justify-between">
      <h1 className="font-bold text-xl">Diptadeep</h1>
      <div className="space-x-6 hidden md:block">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#stats">Stats</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}