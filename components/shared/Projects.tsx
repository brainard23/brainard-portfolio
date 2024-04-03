import { projectsData } from "@/constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <section
        id="Projects"
        className="flex-row justify-center items-center w-full"
      >
        <div className="lg:mx-36 md:mx-36 lg:flex flex-row justify-center items-center text-wrap mt-5 p-6 ">
          <div className="w-full flex-row items-center justify-center gap-2 ">
            <h1 className="text-4xl font-semibold my-6">
              Projects<span className="text-blue-700">.</span>
            </h1>
            <div className="lg:grid grid-cols-2 sm:flex-row gap-2">
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
