import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface Technology {
  label: string;
  icon: string;
}

interface ExperienceData {
  i: number;
  length: number;
  company: string;
  logo: string | StaticImageData;
  position: string;
  date: string;
  description: string;
  activities: String[];
  technologies: Technology[];
}

const ExperienceInfo = ({
  i,
  length,
  company,
  logo,
  position,
  date,
  description,
  activities,
  technologies,
}: ExperienceData) => {
  const [toggle, setToggle] = useState(new Array(length).fill(false));

  const onToggle = (i: number) => {
    const newToggleStates = [...toggle];
    newToggleStates[i] = !newToggleStates[i];
    setToggle(newToggleStates);
  };

  return (
    <>
      <div
        key={i}
        className={`flex ${
          i % 2 && "flex flex-row-reverse"
        } justify-center items-top text-wrap relative animate-fade-in-up`}
        style={{ animationDelay: `${i * 150}ms` }}
      >
        <span className="w-6 h-6 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 absolute top-0 rounded-full shadow-lg animate-pulse" />
        
        <div
          className={`w-1/2 h-1/2 ${
            i % 2
              ? "pl-6 mt-6 border-l-2 border-dotted border-border/30"
              : "p-2 border-r-2 mr-6 border-dotted border-border/30"
          } `}
        >
          <div className="glass rounded-xl p-6 hover-lift transition-all duration-300 border border-border/30">
            <div className="mb-3">
              <h3 className="text-xl font-bold gradient-text">{company}</h3>
              <p className="text-sm font-medium mt-1">{position}</p>
              <p className="text-xs italic opacity-70 mt-1">{date}</p>
            </div>
            
            <div className="my-3">
              <p className="text-sm leading-relaxed opacity-90">{description}</p>
            </div>
            
            <div
              className={`transition-all duration-800 ease-in-out overflow-hidden ${
                !toggle[i] 
                  ? "max-h-0 opacity-0" 
                  : "max-h-[2000px] opacity-100"
              }`}
            >
              <div 
                className={`transition-all duration-500 ease-out ${
                  !toggle[i] 
                    ? "transform -translate-y-4" 
                    : "transform translate-y-0"
                }`}
              >
                <div className="mb-4 mt-4">
                  <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                  <ul className="space-y-2">
                    {activities.map((act, i) => (
                      <li key={i} className="flex justify-start items-start gap-2">
                        <ChevronRight width={16} height={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm opacity-90">{act}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {technologies.map((tech, idx) => (
                      <div 
                        key={idx}
                        className="rounded-lg p-2 flex gap-2 items-center justify-start cursor-default"
                      >
                        <Image
                          width={20}
                          height={20}
                          src={tech.icon}
                          alt={tech.label}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className="text-xs font-medium">{tech.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Button
                onClick={() => onToggle(i)}
                className="glass rounded-3xl gap-2 h-12 text-sm border border-border/30 hover:border-primary/50 transition-all duration-300"
                variant="outline"
              >
                {!toggle[i] ? (
                  <>
                    <ChevronDown className="w-4 h-4" /> Show more
                  </>
                ) : (
                  <>
                    <ChevronUp className="w-4 h-4" /> Show less
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        <div
          className={`w-1/2 mt-6 ${i % 2 ? "flex justify-end pr-6" : "pl-6"}`}
        >
          <div className="">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image width={60} height={60} src={logo} alt={company} className="relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceInfo;
