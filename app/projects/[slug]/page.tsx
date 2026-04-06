import { projects } from "@/app/data/projects";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white">404</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Project tidak ditemukan</p>
          <Link href="/" className="mt-4 inline-block text-black dark:text-white hover:underline">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-4xl mx-auto px-6 py-12 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-black dark:text-white hover:opacity-70 mb-8"
        >
          <span>←</span>
          <span>Kembali ke Projects</span>
        </Link>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-black rounded-full dark:bg-white dark:text-black mb-4">
              {project.category}
            </span>
            <h1 className="text-5xl font-bold text-slate-950 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 mb-8">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {project.longDescription.split("\n").map((line, idx) => {
                if (line.startsWith("##")) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-slate-950 dark:text-white mt-6 mb-4">
                      {line.replace("## ", "")}
                    </h2>
                  );
                }
                if (line.startsWith("- **")) {
                  return (
                    <li key={idx} className="ml-4 text-slate-700 dark:text-slate-300">
                      <strong>{line.split("**")[1]}</strong> - {line.split("** - ")[1]}
                    </li>
                  );
                }
                if (line.startsWith("1.") || line.startsWith("2.") || line.startsWith("3.") || line.startsWith("4.") || line.startsWith("5.")) {
                  return (
                    <li key={idx} className="ml-4 text-slate-700 dark:text-slate-300">
                      {line.substring(3)}
                    </li>
                  );
                }
                if (line.trim() === "") {
                  return null;
                }
                return (
                  <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-4">
                Teknologi Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-white dark:bg-slate-800 rounded text-slate-900 dark:text-slate-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-4">
                Informasi Proyek
              </h3>
              <dl className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <div>
                  <dt className="font-semibold">Kategori:</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Tahun Selesai:</dt>
                  <dd>{project.date}</dd>
                </div>
              </dl>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
