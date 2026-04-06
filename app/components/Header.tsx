import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-500/20 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
            <span className="text-lg font-semibold">GG</span>
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
