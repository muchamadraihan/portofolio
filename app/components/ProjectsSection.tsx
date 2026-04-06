import { Button } from "./index";

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Featured projects</p>
            <h3 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">Project showcase</h3>
          </div>
          <Button variant="outline" size="medium">
            Lihat semua proyek
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[...Array(4)].map((_, index) => (
            <article
              key={index}
              className="rounded-4xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-52 rounded-3xl bg-linear-to-br from-slate-200 via-slate-300 to-slate-400 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 mb-6" />
              <h4 className="text-2xl font-semibold text-slate-950 dark:text-white">Project {index + 1}</h4>
              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Proyek ini menonjolkan desain modern, performa cepat, dan pengalaman pengguna yang halus.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">Next.js</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">TypeScript</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">Tailwind</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
