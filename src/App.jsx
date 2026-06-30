import { useEffect } from "react";
import Navbar from "./components/shared/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Timeline from "./components/Timeline/Timeline";
import AIPlayground from "./components/AIPlayground/AIPlayground";
import Contact from "./components/Contact/Contact";
import Footer from "./components/shared/Footer";
import ScrollProgress from "./components/shared/ScrollProgress";
import CustomCursor from "./components/shared/CustomCursor";
import FloatingCV from "./components/shared/FloatingCV";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <FloatingCV />
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <TechStack />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Timeline />
        <div className="section-divider" />
        <AIPlayground />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}