import { Header, Footer, HeroSection, AboutSection, ProjectsSection, ContactSection } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-white">
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
