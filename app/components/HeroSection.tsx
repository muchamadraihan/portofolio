import { Button } from "./index";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_36%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-emerald-600 to-emerald-500 text-white px-4 py-2 text-sm font-semibold shadow-lg shadow-emerald-500/30 animate-fade-up">
              Build modern web experiences
            </span>
            <div className="animate-fade-up animate-delay-100">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-400">Mochamad Raihan</span> Mukhorobun
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Saya seorang Web Developer, yang membangun berberagam aplikasi berbasis website yang fungsional dan menarik.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-200">
              <Button variant="primary" size="large" href="/Resume Moch Raihan.pdf" target="_blank">
                Lihat Portofolio
              </Button>
              <Button variant="outline" size="large">
                Hubungi Saya
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl bg-zinc-900 border-2 border-emerald-500/30 p-6 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all animate-fade-up animate-delay-300 flex flex-col items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm font-semibold text-white text-center">Surakarta</p>
                <p className="text-xs text-slate-400 text-center mt-1">Jawa Tengah</p>
              </div>
              <div className="rounded-2xl bg-zinc-900 border-2 border-emerald-500/30 p-6 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all animate-fade-up animate-delay-300 flex flex-col items-center justify-center">
                <svg className="w-8 h-8 text-emerald-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" />
                </svg>
                <p className="text-sm font-semibold text-white text-center">UMS</p>
                <p className="text-xs text-slate-400 text-center mt-1">Informatika '26</p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl bg-linear-to-br from-emerald-700 via-emerald-600 to-emerald-800 p-8 shadow-2xl shadow-emerald-600/30 text-white animate-slide-in-right hover:shadow-emerald-600/50 transition-all">
            <div className="h-full rounded-[1.75rem] border border-white/10 bg-emerald-950/80 p-8 flex flex-col justify-between backdrop-blur">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Keahlian Saya</p>
                <h2 className="mt-4 text-3xl font-semibold">Teknologi & Tools</h2>
                <p className="mt-3 text-emerald-100">
                  Stack lengkap yang saya kuasai untuk membangun aplikasi web modern dan berkualitas tinggi.
                </p>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/50 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/30 transition-colors">Laravel</span>
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/50 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/30 transition-colors">PHP</span>
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/50 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/30 transition-colors">HTML</span>
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/50 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/30 transition-colors">CSS</span>
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/50 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/30 transition-colors">JavaScript</span>
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/50 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/30 transition-colors">React</span>
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/50 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/30 transition-colors">Next.js</span>
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/50 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/30 transition-colors">TypeScript</span>
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/50 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/30 transition-colors">Tailwind CSS</span>
                  <span className="rounded-full bg-emerald-400/20 border border-emerald-400/50 px-3 py-1.5 text-xs font-semibold text-emerald-200 hover:bg-emerald-400/30 transition-colors">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
