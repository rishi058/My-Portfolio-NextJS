import HeroSection from "./components/hero_section/HeroSection";
import Navbar from "./components/navbar/Navbar";
import AboutSection from "./components/about_section/AboutSection";
import ProjectsSection from "./components/project_section/ProjectsSection";
import DigitalPresenceSection from "./components/digital_presence/DigitalPresenceSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden flex-col text-on-background relative z-10">
      <Navbar />
      <div
        className="w-full h-[calc(100vh-3rem)] mt-12 overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        <div className="snap-start snap-always h-[calc(100vh-3rem)] w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-center">
          <HeroSection />
        </div>
        <div className="snap-start snap-always h-[calc(100vh-3rem)] w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-center">
          <AboutSection />
        </div>
        <div className="snap-start snap-always h-[calc(100vh-3rem)] w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-center">
          <ProjectsSection />
        </div>
        <div className="snap-start snap-always h-[calc(100vh-3rem)] w-full flex flex-col">
          <div className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-center">
            <DigitalPresenceSection />
          </div>
          <div className="w-full bg-surface">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
