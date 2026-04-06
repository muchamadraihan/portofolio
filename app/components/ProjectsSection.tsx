import Link from "next/link";
import { Button } from "./index";
import { projects } from "@/app/data/projects";

export default function ProjectsSection() {
  const displayedProjects = [...projects, ...projects] // Duplicate projects to show 4 items
    .slice(0, 4);

  return (
    <section id="projects" className="px-6 pb-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none" />
      <div className="mx-auto max-w-6xl relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12 animate-fade-down">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-400 font-semibold">Featured projects</p>
            <h3 className="mt-3 text-4xl font-bold text-white">Project showcase</h3>
          </div>
          <Button variant="outline" size="medium" href="/projects" className="border-emerald-500 text-emerald-400 hover:bg-emerald-950/30">
            Lihat semua proyek →
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {displayedProjects.map((project, index) => (
            <Link key={`${project.id}-${index}`} href={`/projects/${project.id}`}>
              <article className={`rounded-4xl border-2 border-emerald-500/30 bg-zinc-900 p-8 shadow-sm hover:shadow-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-pointer h-full animate-fade-up ${index === 1 || index === 3 ? 'animate-delay-100' : index === 2 || index === 4 ? 'animate-delay-200' : 'animate-delay-300'}`}>
                <div className="h-52 rounded-3xl bg-linear-to-br from-emerald-900 via-emerald-800 to-emerald-900 mb-6 hover:shadow-lg hover:shadow-emerald-500/20 transition-all" />
                <h4 className="text-2xl font-semibold text-white">{project.title}</h4>
                <p className="text-sm font-semibold text-emerald-400 mt-2 mb-2">{project.category}</p>
                <p className="mt-3 text-slate-300">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-400">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-emerald-950/50 px-3 py-1 text-emerald-300 border border-emerald-700/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
