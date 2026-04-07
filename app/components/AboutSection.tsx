import { Zap, Target, Rocket, Building2, UserCircle2, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 relative">
      <div className="mx-auto max-w-6xl relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] items-stretch">
          <div className="rounded-4xl bg-zinc-900 border-2 border-amber-500/30 p-10 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:border-amber-500/50 transition-all duration-300 animate-slide-in-left flex flex-col">
            <div className="flex flex-col items-center flex-1">
              <div className="relative mb-6">
                <img
                  src="/fotowisuda.jpeg"
                  alt="Foto diri"
                  className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg ring-4 ring-amber-500/40 hover:ring-amber-400/60 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-amber-400/20" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center">About Me</h3>
              <div className="mt-2 h-1 w-16 bg-linear-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0" />
              <p className="mt-6 text-sm leading-6 text-slate-300 text-center">
                Web Developer yang fokus pada desain elegan, kode bersih, dan performa tinggi. Membantu brand membangun aplikasi yang user-friendly dan production-ready.
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-300 text-center">
                Fresh Graduate dari Universitas Muhammadiyah Surakarta (Teknik Informatika, 2026) dengan pengalaman membangun website untuk berbagai klien.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-4xl border-2 border-amber-500/30 bg-zinc-900 p-6 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:border-amber-500/50 transition-all duration-300 animate-fade-up animate-delay-100">
              <div className="flex items-center gap-3 mb-1">
                <Zap className="w-4 h-4 text-amber-400" />
                <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-bold">Keahlian</p>
              </div>
              <h4 className="mt-2 text-xl font-bold text-white">Solusi <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">Full-Stack</span></h4>
              <p className="mt-1 text-sm text-slate-400">Teknologi dan tools yang saya kuasai:</p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 w-4 h-4 text-amber-400" />
                  <span className="text-slate-300 text-sm font-medium">Frontend modern dengan React/Next.js</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 w-4 h-4 text-amber-400" />
                  <span className="text-slate-300 text-sm font-medium">Backend dengan Laravel, PHP, MySQL</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 w-4 h-4 text-amber-400" />
                  <span className="text-slate-300 text-sm font-medium">API cepat dan database optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 w-4 h-4 text-amber-400" />
                  <span className="text-slate-300 text-sm font-medium">Fokus pada aksesibilitas &amp; performa tinggi</span>
                </li>
              </ul>
            </div>

            <div className="rounded-4xl border-2 border-amber-500/30 bg-zinc-900 p-6 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:border-amber-500/50 transition-all duration-300 animate-fade-up animate-delay-200">
              <div className="flex items-center gap-3 mb-1">
                <Target className="w-4 h-4 text-amber-400" />
                <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-bold">Klien &amp; Portofolio</p>
              </div>
              <h4 className="mt-2 text-base font-bold text-white mb-3">Tipe klien yang saya layani</h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-amber-500/5 border border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all duration-300 text-center">
                  <Rocket className="w-5 h-5 text-amber-400" />
                  <p className="font-semibold text-amber-300 text-sm">Startup</p>
                  <p className="text-xs text-slate-400">MVP dan produk awal</p>
                </div>
                <div className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-amber-500/5 border border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all duration-300 text-center">
                  <Building2 className="w-5 h-5 text-amber-400" />
                  <p className="font-semibold text-amber-300 text-sm">Agency</p>
                  <p className="text-xs text-slate-400">Web design dan development</p>
                </div>
                <div className="flex flex-col items-center gap-1 p-3 rounded-2xl bg-amber-500/5 border border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-500/40 transition-all duration-300 text-center">
                  <UserCircle2 className="w-5 h-5 text-amber-400" />
                  <p className="font-semibold text-amber-300 text-sm">Personal Brand</p>
                  <p className="text-xs text-slate-400">Portfolio &amp; personal website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
