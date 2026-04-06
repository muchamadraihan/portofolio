import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-sm dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white shadow-lg shadow-slate-900/10">
            <span className="text-lg font-semibold">GG</span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] uppercase text-slate-900 dark:text-white">
              Golek Gawean
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Digital Product Studio
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
            About
          </a>
          <a href="#projects" className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
