import Link from "next/link";
import { Button } from "./index";
import { projects } from "@/app/data/projects";

export default function ProjectsSection() {
  const displayedProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="px-6 py-20 relative">
      <div className="mx-auto max-w-6xl relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12 animate-fade-down">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-400 font-semibold">Featured projects</p>
            <h3 className="mt-3 text-4xl font-bold text-white">Project showcase</h3>
          </div>
          <Button variant="outline" size="medium" href="/projects" className="border-amber-500 text-amber-400 hover:bg-amber-950/30">
            Lihat semua proyek →
          </Button>
        </div>

        <div className="mt-10 flex flex-col gap-6">

          {/* ── Featured card – full width top ── */}
          <Link href={`/projects/${displayedProjects[0].id}`}>
            <article className="rounded-4xl border-2 border-amber-500/30 bg-zinc-900 p-8 shadow-sm hover:shadow-amber-500/20 hover:border-amber-500/50 transition-all cursor-pointer animate-fade-up">
              {displayedProjects[0].image ? (
                <img
                  src={displayedProjects[0].image}
                  alt={displayedProjects[0].title}
                  className="w-full h-auto rounded-3xl mb-6"
                />
              ) : (
                <div className="w-full aspect-video rounded-3xl bg-linear-to-br from-amber-950 via-orange-900/50 to-amber-950 mb-6" />
              )}
              <span className="text-xs uppercase tracking-widest text-amber-400/70 font-semibold mb-2 block">Featured</span>
              <h4 className="text-2xl font-bold text-white">{displayedProjects[0].title}</h4>
              <p className="text-sm font-semibold text-amber-400 mt-1 mb-3">{displayedProjects[0].category}</p>
              <p className="text-slate-300 leading-6">{displayedProjects[0].description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {displayedProjects[0].technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-amber-950/50 px-3 py-1 text-sm text-amber-300 border border-amber-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Link>

          {/* ── Card 2 & 3 – side by side below ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedProjects.slice(1).map((project, i) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <article className={`rounded-4xl border-2 border-amber-500/30 bg-zinc-900 p-6 shadow-sm hover:shadow-amber-500/20 hover:border-amber-500/50 transition-all cursor-pointer h-full animate-fade-up ${i === 0 ? 'animate-delay-100' : 'animate-delay-200'}`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto rounded-2xl mb-5"
                    />
                  ) : (
                    <div className="w-full aspect-video rounded-2xl bg-linear-to-br from-amber-950 via-orange-900/50 to-amber-950 mb-5" />
                  )}
                  <h4 className="text-xl font-bold text-white">{project.title}</h4>
                  <p className="text-sm font-semibold text-amber-400 mt-1 mb-2">{project.category}</p>
                  <p className="text-sm text-slate-300 leading-6">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-amber-950/50 px-3 py-1 text-xs text-amber-300 border border-amber-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
