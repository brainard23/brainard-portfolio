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
        } justify-center items-top text-wrap relative`}
      >
        <span className="w-6 h-6 bg-blue-500 absolute top-0 rounded-full" />
        <div
          className={`w-1/2 h-1/2 ${
            i % 2
              ? "pl-6 mt-6 border-l-2 border-dotted"
              : "p-2 border-r-2 border-dotted"
          } `}
        >
          <div className="mb-2">
            <h3 className="text-lg font-semibold">{company}</h3>
            <p className="text-xs">{position}</p>
            <p className="text-xs italic">{date}</p>
          </div>
          <div className="my-2 mb-3">
            <p className="text-xs lg:text-sm sm:text-lg">{description}</p>
          </div>
          <div
            className={`max-h-34 transition-max-height ease-in duration-1000 ${
              !toggle[i] ? "max-h-0 overflow-y-hidden" : ""
            }`}
          >
            <div className="mb-3">
              <h3 className="text-lg font-semibold">Duties</h3>
              <ul className="list-disc text-sm">
                {activities.map((act, i) => (
                  <li key={i} className="flex justify-start items-center gap-2">
                    <ChevronRight width={10} className="text-blue-500" />
                    <p className="text-xs">{act}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-5 xl:grid-cols-5 gap-2 items-center">
                {technologies.map((tech) => (
                  <div className="flex gap-1 text-xs justify-center items-center">
                    <Image
                      width={25}
                      height={25}
                      src={tech.icon}
                      alt={tech.label}
                    />
                    {tech.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="">
            <Button
              onClick={() => onToggle(i)}
              className="dark:bg-gray-900 dark:text-white text-black bg-gray-200 rounded-3xl gap-2 h-12 text-sm mt-2"
            >
              {!toggle[i] ? (
                <>
                  <ChevronDown /> Show more
                </>
              ) : (
                <>
                  <ChevronUp /> Show less
                </>
              )}
            </Button>
          </div>
        </div>
        <div
          className={`w-1/2 mt-6  ${i % 2 ? " flex justify-end pr-6" : "pl-6"}`}
        >
          <div>
            <Image width={60} height={60} src={logo} alt={company} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceInfo;
