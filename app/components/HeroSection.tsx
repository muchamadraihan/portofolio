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
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                Hi, I&apos;m a Developer <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-400">creating polished</span> digital products.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Saya membuat aplikasi web yang cepat, responsif, dan mudah digunakan menggunakan Next.js, TypeScript, dan Tailwind CSS.
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-3xl bg-linear-to-br from-white/95 to-white/85 dark:from-slate-900/90 dark:to-slate-900/70 border-2 border-emerald-500/30 dark:border-emerald-500/20 p-5 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all animate-fade-up animate-delay-300">
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">24+</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Proyek selesai</p>
              </div>
              <div className="rounded-3xl bg-linear-to-br from-white/95 to-white/85 dark:from-slate-900/90 dark:to-slate-900/70 border-2 border-emerald-500/30 dark:border-emerald-500/20 p-5 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all animate-fade-up animate-delay-300">
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">6</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Klien aktif</p>
              </div>
              <div className="rounded-3xl bg-linear-to-br from-white/95 to-white/85 dark:from-slate-900/90 dark:to-slate-900/70 border-2 border-emerald-500/30 dark:border-emerald-500/20 p-5 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all animate-fade-up animate-delay-300">
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">4+</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Tahun pengalaman</p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl bg-linear-to-br from-emerald-700 via-emerald-600 to-emerald-800 p-8 shadow-2xl shadow-emerald-600/30 text-white animate-slide-in-right hover:shadow-emerald-600/50 transition-all">
            <div className="h-full rounded-[1.75rem] border border-white/10 bg-emerald-950/80 p-8 flex flex-col justify-between backdrop-blur">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Featured project</p>
                <h2 className="mt-4 text-3xl font-semibold">Portofolio UI Redesign</h2>
                <p className="mt-3 text-emerald-100">
                  Sebuah landing page modern dengan visual yang bersih, tipografi kuat, dan interaksi yang halus.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                <div className="rounded-3xl bg-white/5 hover:bg-white/10 transition-all p-4 text-sm text-emerald-100 border border-white/10">
                  Tech stack: Next.js · TypeScript · Tailwind CSS
                </div>
                <div className="rounded-3xl bg-white/5 hover:bg-white/10 transition-all p-4 text-sm text-emerald-100 border border-white/10">
                  Outcome: UX terfokus, UI profesional, performa lancar.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
