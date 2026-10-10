import { liveProjects } from "@/constants/liveProjects";
import LiveProjectCard from "./LiveProjectCard";

const LiveProjects = () => {
  return (
    <section
      id="LiveProjects"
      className="relative flex-row justify-center items-center w-full py-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="relative z-10 lg:mx-36 md:mx-36 mt-5 p-6">
        <h1 className="text-4xl md:text-5xl font-bold my-6 animate-fade-in-up">
          Live Projects<span className="gradient-text">.</span>
        </h1>
        <p className="mb-8 text-lg opacity-80 animate-fade-in-up delay-100">
          Production work for clients and teams, live and in use today.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {liveProjects.map((project, i) => (
            <LiveProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveProjects;
