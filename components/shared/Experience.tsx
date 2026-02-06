"use client";

import React from "react";

import { experiences } from "@/constants";
import ExperienceInfo from "./ExperienceInfo";
const Experience = () => {
  return (
    <>
      <section
        id="Experience"
        className="relative flex-row justify-center items-center w-full py-20"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        
        <div className="relative z-10 lg:mx-36 md:mx-36 lg:flex flex-row justify-center items-center text-wrap mt-5 p-6">
          <div className="w-full flex-row items-center justify-center gap-2 ">
            <h1 className="text-4xl md:text-5xl font-bold my-6 animate-fade-in-up">
              Experience<span className="gradient-text">.</span>
            </h1>
            {experiences.map((experience, i) => (
              <ExperienceInfo
                i={i}
                logo={experience.logo}
                length={experiences.length}
                company={experience.company}
                position={experience.position}
                date={experience.date}
                description={experience.description}
                activities={experience.activities}
                technologies={experience.technologies}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
