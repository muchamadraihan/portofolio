import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition mb-8"
        >
          <span>←</span>
          <span>Kembali ke beranda</span>
        </Link>

        {/* Page header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400 font-semibold">Semua proyek</p>
          <h1 className="mt-3 text-5xl font-bold text-white">Project Portfolio</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Koleksi lengkap project yang telah saya kerjakan, mulai dari web application, sistem manajemen, hingga platform digital.
          </p>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <article className="group rounded-3xl border-2 border-amber-500/30 bg-zinc-900 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-amber-500/20 hover:border-amber-500/50 transition-all duration-300 cursor-pointer">

                {/* Foto project — full width, tidak terpotong */}
                {project.image ? (
                  <div className="w-full bg-zinc-950/80 border-b border-amber-500/20">
                    <img
                      src={project.image}
                      alt={`Screenshot ${project.title}`}
                      className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full h-56 bg-linear-to-br from-amber-950 via-orange-900/50 to-amber-950" />
                )}

                {/* Content */}
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-zinc-950 bg-amber-400 rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm text-slate-500">{project.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-slate-300 leading-relaxed line-clamp-3 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-amber-950/50 text-amber-300 rounded-full border border-amber-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
