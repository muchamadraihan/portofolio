export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />
      <div className="mx-auto max-w-6xl relative">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] items-center">
          <div className="space-y-8">
            <div className="rounded-4xl bg-zinc-900 border-2 border-emerald-500/30 p-10 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all animate-slide-in-left">
              <img
                src="/fotowisuda.jpeg"
                alt="Foto diri"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg ring-4 ring-emerald-400/30 hover:ring-emerald-400/50 transition-all"
              />
              <h3 className="text-4xl font-semibold text-white text-center">About me</h3>
              <p className="mt-6 text-lg leading-8 text-slate-300 text-center">
                Saya seorang WEB developer yang fokus pada desain yang elegan, kode yang bersih, dan performa tinggi. Saya membantu brand membangun aplikasi yang mudah digunakan dan siap produksi.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-4xl border-2 border-emerald-500/30 bg-zinc-900 p-8 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all animate-fade-up animate-delay-100">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Keahlian</p>
              <h4 className="mt-4 text-2xl font-semibold text-white">Solusi <span className="text-emerald-400">full-stack</span> yang kuat</h4>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Frontend modern dengan React/Next.js</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Backend ringan dan API cepat</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Fokus pada aksesibilitas dan performa</li>
              </ul>
            </div>

            <div className="rounded-4xl border-2 border-emerald-500/30 bg-zinc-900 p-8 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all animate-fade-up animate-delay-200">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Klien</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-emerald-950/50 border border-emerald-700 px-4 py-2 text-sm text-emerald-300 font-medium">Startup</span>
                <span className="rounded-full bg-emerald-950/50 border border-emerald-700 px-4 py-2 text-sm text-emerald-300 font-medium">Agency</span>
                <span className="rounded-full bg-emerald-950/50 border border-emerald-700 px-4 py-2 text-sm text-emerald-300 font-medium">Personal brand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
