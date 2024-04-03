import Image from "next/image";
import { skills } from "@/constants";

const Skills = () => {
  return (
    <>
      <section
        id="Skills"
        className="flex-row justify-center items-center w-full"
      >
        <div className="lg:mx-36 md:mx-36 lg:flex flex-row justify-center items-center text-wrap mt-5 p-6">
          <div className="w-full flex-row items-center justify-center gap-2">
            <h1 className="text-4xl font-semibold my-6">
              Skills<span className="text-blue-700">.</span>
            </h1>
            <div className="w-full h-auto ">
              <p className="my-6">Technologies and tools</p>
              <ul className="grid grid-cols-2 gap-2 lg:grid-cols-8 lg:gap-4 sm:grid sm:grid-cols-2 sm:gap-2">
                {skills.map((skill, i) => (
                  <li key={i} className="dark:bg-gray-900 bg-gray-200 rounded-lg p-1 flex-row justify-center items-center min-w-24 min-h-24 mb-1">
                    <div className="w-full flex justify-center items-center mt-1 min-h-16">
                      <Image
                        src={skill.image}
                        alt={skill.label}
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="w-full flex justify-center items-center text-sm my-1">
                      <p className=" text-xs">{skill.label}</p>
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
