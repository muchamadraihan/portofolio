import Link from "next/link";
import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-black dark:text-white hover:opacity-70 mb-8"
        >
          <span>←</span>
          <span>Kembali ke beranda</span>
        </Link>

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Semua proyek</p>
          <h1 className="mt-3 text-5xl font-bold text-slate-950 dark:text-white">
            Project Portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
            Koleksi lengkap project yang telah saya kerjakan, mulai dari web application, sistem manajemen, hingga platform digital.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <article className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-sm transition hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-black rounded-full dark:bg-white dark:text-black">
                        {project.category}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {project.date}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-950 dark:text-white mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-48 h-32 md:h-auto rounded-lg bg-linear-to-br from-slate-200 via-slate-300 to-slate-400 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 shrink-0" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
