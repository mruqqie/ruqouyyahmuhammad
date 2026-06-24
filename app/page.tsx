import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      <Navigation />
      <Hero />
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <About />
      </div>
      <div style={{ borderTop: "1px solid var(--border)" }}>
        <Experience />
      </div>
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
