import HeroSection from "./components/hero_section/HeroSection";
import Navbar from "./components/navbar/Navbar";
import AboutSection from "./components/about_section/AboutSection";
import ProjectsSection from "./components/project_section/ProjectsSection";
import DigitalPresenceSection from "./components/digital_presence/DigitalPresenceSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col relative z-10 h-screen-safe md:h-screen md:overflow-hidden">
      <Navbar />

      {/* Mobile: natural scroll (content height). md+: full-viewport snap scroll */}
      <div
        className="w-full overflow-y-auto scroll-smooth md:h-[calc(100vh-3rem)] md:snap-y md:snap-mandatory"
        style={{ marginTop: 'var(--navbar-h)' }}
      >

        {/* ── Hero ── */}
        <div className="
          w-full max-w-container-max mx-auto
          px-margin-mobile md:px-margin-desktop
          flex items-center justify-center
          py-6 sm:py-8
          md:py-0 md:h-[calc(100vh-3rem)] md:snap-start md:snap-always
        ">
          <HeroSection />
        </div>

        {/* ── About ── */}
        <div className="
          w-full max-w-container-max mx-auto
          px-margin-mobile md:px-margin-desktop
          flex items-start md:items-center justify-center
          py-5 sm:py-6
          md:py-0 md:h-[calc(100vh-3rem)] md:snap-start md:snap-always
        ">
          <AboutSection />
        </div>

        {/* ── Projects ── */}
        <div className="
          w-full max-w-container-max mx-auto
          px-margin-mobile md:px-margin-desktop
          flex items-start md:items-center justify-center
          py-5 sm:py-6
          md:py-0 md:h-[calc(100vh-3rem)] md:snap-start md:snap-always
        ">
          <ProjectsSection />
        </div>

        {/* ── Digital Presence + Footer ── */}
        <div className="
          w-full flex flex-col
          md:h-[calc(100vh-3rem)] md:snap-start md:snap-always
        ">
          <div className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-center py-4 md:py-0">
            <DigitalPresenceSection />
          </div>
          <div className="footer-wrapper w-full">
            <Footer />
          </div>
        </div>

      </div>
    </main>
  );
}
