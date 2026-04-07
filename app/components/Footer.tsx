export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/60 overflow-hidden">
      {/* Glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-amber-500/8 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-14">

        {/* Top row */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              
              <div>
                <p className="text-sm font-bold tracking-wide text-white">Mochamad Raihan</p>
                <p className="text-xs text-slate-500">Full-Stack Web Developer</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-6">
              Membangun aplikasi web yang fungsional, elegan, dan production-ready. Terbuka untuk proyek freelance dan kolaborasi.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-4">Navigasi</p>
              <ul className="space-y-2.5">
                {[
                  { label: "About",    href: "#about" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact",  href: "#contact" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-4">Kontak</p>
              <ul className="space-y-2.5">
                {[
                  { label: "Email",    href: "mailto:muchraihan76@gmail.com" },
                  { label: "GitHub",   href: "#" },
                  { label: "LinkedIn", href: "#" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-slate-400 hover:text-amber-400 transition-colors duration-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 mb-6 h-px bg-linear-to-r from-transparent via-zinc-700/60 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            &copy; 2026 <span className="text-amber-400/80">Mochamad Raihan Mukhorobun</span>. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
