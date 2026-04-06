export default function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] items-center">
          <div className="space-y-8">
            <div className="rounded-4xl bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 p-10 shadow-lg shadow-slate-900/5">
              <img
                src="/poto.png"
                alt="Foto diri"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-4xl font-semibold text-slate-950 dark:text-white text-center">About me</h3>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300 text-center">
                Saya seorang developer yang fokus pada desain yang elegan, kode yang bersih, dan performa tinggi. Saya membantu brand membangun aplikasi yang mudah digunakan dan siap produksi.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-4xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-lg shadow-slate-900/5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Keahlian</p>
              <h4 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">Solusi full-stack yang kuat</h4>
              <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
                <li>• Frontend modern dengan React/Next.js</li>
                <li>• Backend ringan dan API cepat</li>
                <li>• Fokus pada aksesibilitas dan performa</li>
              </ul>
            </div>

            <div className="rounded-4xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-lg shadow-slate-900/5">
              <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Klien</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">Startup</span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">Agency</span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">Personal brand</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
