import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition mb-8"
        >
          <span>←</span>
          <span>Kembali ke beranda</span>
        </Link>

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-400">Semua proyek</p>
          <h1 className="mt-3 text-5xl font-bold text-white">
            Project Portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Koleksi lengkap project yang telah saya kerjakan, mulai dari web application, sistem manajemen, hingga platform digital.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <article className="rounded-2xl border border-amber-500/30 bg-zinc-900 p-8 shadow-sm transition hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1 cursor-pointer">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-amber-600 rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-slate-400">
                        {project.date}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-slate-300 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-amber-950/50 text-amber-300 rounded-full border border-amber-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-48 h-32 md:h-auto rounded-lg bg-linear-to-br from-amber-900 via-amber-800 to-amber-900 shrink-0" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
