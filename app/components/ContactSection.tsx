import { Mail, MessageCircle, MapPin, ArrowUpRight, Send } from "lucide-react";

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "muchraihan76@gmail.com",
    href: "mailto:muchraihan76@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 895 1655 6760",
    href: "https://wa.me/6289516556760",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Sukoharjo, Jawa Tengah",
    href: null,
  },
];

const socials = [
  { icon: IconInstagram, label: "Instagram", username: "@re.rehan_",    href: "https://www.instagram.com/re.rehann_/" },
  { icon: IconLinkedIn,  label: "LinkedIn",  username: "Mochamad Raihan", href: "https://www.linkedin.com/in/mochamadraihanm" },
  { icon: IconGitHub,    label: "GitHub",    username: "@mochamadraihan",     href: "https://github.com/muchamadraihan" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 relative">
      <div className="mx-auto max-w-6xl relative">

        {/* Section header */}
        <div className="text-center mb-16 animate-fade-down">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <Send className="w-3 h-3" />
            Get in touch
          </span>
          <h3 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Mari <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">bekerja sama</span>
          </h3>
          <p className="mt-5 max-w-xl mx-auto text-base leading-7 text-slate-400">
            Punya proyek menarik? Saya siap membantu mewujudkan ide Anda menjadi produk digital yang luar biasa.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] animate-fade-up animate-delay-100">

          {/* Contact info card */}
          <div className="rounded-3xl border border-zinc-700/60 bg-zinc-900/80 p-8 shadow-xl backdrop-blur-sm overflow-hidden relative group hover:border-amber-500/40 transition-all duration-300">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30">
                <Mail className="w-5 h-5 text-amber-400" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">Kontak</p>
                <h4 className="text-lg font-bold text-white">Informasi kontak</h4>
              </div>
            </div>

            <div className="space-y-3">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="group/item">
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-700/50 bg-zinc-800/40 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-200"
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
                        <Icon className="w-4 h-4 text-amber-400" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-500 font-medium">{label}</p>
                        <p className="text-sm font-semibold text-white truncate">{value}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover/item:text-amber-400 transition-colors shrink-0" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-700/50 bg-zinc-800/40">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
                        <Icon className="w-4 h-4 text-amber-400" />
                      </span>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">{label}</p>
                        <p className="text-sm font-semibold text-white">{value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social + CTA card */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-zinc-700/60 bg-zinc-900/80 p-8 shadow-xl backdrop-blur-sm overflow-hidden relative hover:border-amber-500/40 transition-all duration-300 flex-1">
              <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-amber-500/8 blur-3xl pointer-events-none" />

              <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-2">Sosial Media</p>
              <h4 className="text-lg font-bold text-white mb-6">Temukan saya di</h4>

              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, username, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-700/50 bg-zinc-800/40 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all duration-200 group/social"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 shrink-0">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="text-xs text-slate-500">{username}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover/social:text-amber-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}