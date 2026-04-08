import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-3xl overflow-hidden shadow-lg shadow-amber-600/30">
            <img src="/fotowisuda.jpeg" alt="Mochamad Raihan" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] uppercase text-white">
              Mochamad Raihan Mukhorobun
            </p>
            <p className="text-xs text-slate-400">
              Digital Product Studio
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm font-medium text-slate-300 transition hover:text-white">
            About
          </a>
          <a href="#projects" className="text-sm font-medium text-slate-300 transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-300 transition hover:text-white">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
