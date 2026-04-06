import { Mail, MessageCircle, MapPin, ArrowUpRight, Send, ExternalLink } from "lucide-react";

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
    value: "Surakarta, Jawa Tengah",
    href: null,
  },
];

const socials = [
  { label: "GitHub",   username: "@raihan-dev",   href: "#" },
  { label: "LinkedIn", username: "Mochamad Raihan", href: "#" },
  { label: "Twitter",  username: "@raihan_dev",    href: "#" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-28 relative">
      <div className="mx-auto max-w-6xl relative">

        {/* Section header */}
        <div className="text-center mb-16 animate-fade-down">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            <Send className="w-3 h-3" />
            Get in touch
          </span>
          <h3 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Mari <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-emerald-300">bekerja sama</span>
          </h3>
          <p className="mt-5 max-w-xl mx-auto text-base leading-7 text-slate-400">
            Punya proyek menarik? Saya siap membantu mewujudkan ide Anda menjadi produk digital yang luar biasa.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] animate-fade-up animate-delay-100">

          {/* Contact info card */}
          <div className="rounded-3xl border border-zinc-700/60 bg-zinc-900/80 p-8 shadow-xl backdrop-blur-sm overflow-hidden relative group hover:border-emerald-500/40 transition-all duration-300">
            <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-emerald-500/8 blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                <Mail className="w-5 h-5 text-emerald-400" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold">Kontak</p>
                <h4 className="text-lg font-bold text-white">Informasi kontak</h4>
              </div>
            </div>

            <div className="space-y-3">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="group/item">
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-700/50 bg-zinc-800/40 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200"
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                        <Icon className="w-4 h-4 text-emerald-400" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-500 font-medium">{label}</p>
                        <p className="text-sm font-semibold text-white truncate">{value}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover/item:text-emerald-400 transition-colors shrink-0" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-700/50 bg-zinc-800/40">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                        <Icon className="w-4 h-4 text-emerald-400" />
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
            <div className="rounded-3xl border border-zinc-700/60 bg-zinc-900/80 p-8 shadow-xl backdrop-blur-sm overflow-hidden relative hover:border-emerald-500/40 transition-all duration-300 flex-1">
              <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-emerald-500/8 blur-3xl pointer-events-none" />

              <p className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-bold mb-2">Sosial Media</p>
              <h4 className="text-lg font-bold text-white mb-6">Temukan saya di</h4>

              <div className="space-y-3">
                {socials.map(({ label, username, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-700/50 bg-zinc-800/40 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200 group/social"
                  >
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                      <ExternalLink className="w-4 h-4 text-emerald-400" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="text-xs text-slate-500">{username}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover/social:text-emerald-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="rounded-3xl border border-emerald-500/30 bg-linear-to-br from-emerald-950/60 to-zinc-900/80 p-8 shadow-xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_60%)] pointer-events-none" />
              <p className="relative text-sm font-semibold text-emerald-300 mb-2">Siap memulai?</p>
              <h4 className="relative text-xl font-bold text-white mb-4">Kirim pesan sekarang</h4>
              <a
                href="mailto:muchraihan76@gmail.com"
                className="relative inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-5 py-2.5 text-sm shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Kirim Email
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}