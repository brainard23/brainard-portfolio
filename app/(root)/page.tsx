import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Experience from "@/components/shared/Experience";
import Home from "@/components/shared/Home";
import LiveProjects from "@/components/shared/LiveProjects";
import Projects from "@/components/shared/Projects";
import Skills from "@/components/shared/Skills";

export default function RootLayout() {
  return (
    <div className="flex flex-col w-full">
      <Home />
      <About />
      <Skills />
      <Experience />
      <LiveProjects />
      <Projects />
      <Contact />
    </div>
  );
}
