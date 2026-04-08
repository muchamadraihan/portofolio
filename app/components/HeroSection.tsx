import { MapPin, GraduationCap, ArrowRight, Mail, Code2, Layers, Database, Sparkles } from "lucide-react";
import { Button } from "./index";

const skills = [
  "Laravel", "PHP", "HTML", "CSS", "JavaScript",
  "React", "Next.js", "TypeScript", "Tailwind CSS", "MySQL",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 py-24 lg:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">

          {/* ── Left column ── */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Available for work
              </span>
            </div>

            {/* Heading */}
            <div className="animate-fade-up animate-delay-100 space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
                    Mochamad Raihan Mukhorobun
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-linear-to-r from-orange-400/60 to-transparent" />
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300">
                Full-Stack Web Developer
              </h2>
              <p className="max-w-xl text-base leading-7 text-slate-400">
                Membangun aplikasi web yang fungsional, elegan, dan production-ready. Dari desain UI hingga backend dan database.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 animate-fade-up animate-delay-200">
              <a
                href="/Resume Moch Raihan.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-orange-500 text-zinc-950 font-semibold px-6 py-3 text-sm shadow-lg shadow-amber-500/30 hover:shadow-orange-500/40 transition-all duration-200"
              >
                Download CV
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-semibold px-6 py-3 text-sm backdrop-blur-sm transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Hubungi Saya
              </a>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3 animate-fade-up animate-delay-300">
              <div className="flex items-center gap-3 rounded-2xl bg-zinc-900/80 border border-zinc-700/60 hover:border-amber-500/40 px-4 py-3.5 transition-all duration-200 group">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Sukoharjo</p>
                  <p className="text-xs text-slate-500">Jawa Tengah</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-zinc-900/80 border border-zinc-700/60 hover:border-amber-500/40 px-4 py-3.5 transition-all duration-200 group">
                <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">UMS</p>
                  <p className="text-xs text-slate-500">Informatika &apos;26</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right column — Skills card ── */}
          <div className="animate-slide-in-right">
            <div className="relative rounded-3xl border border-zinc-700/60 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur-sm overflow-hidden">
              {/* Card glow */}
              <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

              {/* Card header */}
              <div className="relative flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30">
                  <Code2 className="w-5 h-5 text-amber-400" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">Tech Stack</p>
                  <h3 className="text-lg font-bold text-white">Teknologi &amp; Tools</h3>
                </div>
              </div>

              <p className="relative text-sm text-slate-400 leading-6 mb-6">
                Stack yang saya kuasai untuk membangun aplikasi web modern, dari frontend hingga backend.
              </p>

              {/* Skill badges */}
              <div className="relative flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-amber-500/25 bg-amber-500/8 px-3 py-1.5 text-xs font-semibold text-amber-300 hover:border-amber-400/50 hover:bg-amber-500/15 hover:text-amber-200 transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Stats row */}
              <div className="relative grid grid-cols-3 gap-3 pt-6 border-t border-zinc-700/60">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <p className="text-xl font-bold text-white">10+</p>
                  <p className="text-xs text-slate-500 mt-0.5">Technologies</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <p className="text-xl font-bold text-white">3</p>
                  <p className="text-xs text-slate-500 mt-0.5">Projects</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Database className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <p className="text-xl font-bold text-white">Full</p>
                  <p className="text-xs text-slate-500 mt-0.5">Stack</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
