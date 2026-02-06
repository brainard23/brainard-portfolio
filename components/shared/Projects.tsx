import { projectsData } from "@/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <section
        id="Projects"
        className="relative flex-row justify-center items-center w-full py-20"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        
        <div className="relative z-10 lg:mx-36 md:mx-36 lg:flex flex-row justify-center items-center text-wrap mt-5 p-6 ">
          <div className="w-full flex-row items-center justify-center gap-2 ">
            <h1 className="text-4xl md:text-5xl font-bold my-6 animate-fade-in-up">
              Projects<span className="gradient-text">.</span>
            </h1>
            <div className="lg:grid grid-cols-2 sm:flex-row gap-4">
              {projectsData.map((project, i) => (
                <ProjectCard 
                i={i}
                previewImage={project.previewImage}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                projectImages={project.projectImages}
                github={project.github}
                link={project.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
