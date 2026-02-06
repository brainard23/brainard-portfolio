import Image from "next/image";
import { skills } from "@/constants";

const Skills = () => {
  return (
    <>
      <section
        id="Skills"
        className="relative flex-row justify-center items-center w-full py-20"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
        
        <div className="relative z-10 lg:mx-36 md:mx-36 lg:flex flex-row justify-center items-center text-wrap mt-5 p-6">
          <div className="w-full flex-row items-center justify-center gap-2">
            <h1 className="text-4xl md:text-5xl font-bold my-6 animate-fade-in-up">
              Skills<span className="gradient-text">.</span>
            </h1>
            <div className="w-full h-auto">
              <p className="my-6 text-lg opacity-80 animate-fade-in-up delay-100">
                Technologies and tools
              </p>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8 lg:gap-4">
                {skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="glass rounded-xl p-4 flex-row justify-center items-center min-w-24 min-h-24 mb-1 hover-lift group cursor-pointer relative overflow-hidden transition-all duration-300"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {/* Gradient border on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
                    
                    <div className="relative w-full flex justify-center items-center mt-1 min-h-16 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={skill.image}
                        alt={skill.label}
                        width={40}
                        height={40}
                        className="drop-shadow-lg"
                      />
                    </div>
                    <div className="relative w-full flex justify-center items-center text-sm my-1">
                      <p className="text-xs font-medium group-hover:gradient-text transition-all duration-300">
                        {skill.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
