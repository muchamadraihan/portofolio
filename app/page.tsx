import { Header, Footer, HeroSection, AboutSection, ProjectsSection, ContactSection } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-linear-to-b from-slate-50 via-white to-slate-100 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      <main className="flex-1">
        <HeroSection />

        <AboutSection />

        <ProjectsSection />

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
