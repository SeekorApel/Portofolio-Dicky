import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 selection:bg-orange-500 selection:text-white">
      {/* Floating Pill Navigation */}
      <Navbar />

      <main className="relative z-10 flex flex-col">
        {/* Hero & About Me (Crisp Light) */}
        <Hero />

        {/* Technical Skills (Deep Black Geometric Grid with White Feature Cards) */}
        <Skills />

        {/* Working Experience (Clean Off-White) */}
        <Experience />

        {/* Featured Projects (Crisp Light with Circular Orange Arrows) */}
        <Projects />

        {/* Contact Section (Deep Black Geometric Grid) */}
        <Contact />
      </main>

      {/* Footer (Deep Black Geometric Grid) */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}
