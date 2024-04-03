"use client";

import React from "react";

import { experiences } from "@/constants";
import ExperienceInfo from "./ExperienceInfo";
const Experience = () => {
  return (
    <>
      <section
        id="Experience"
        className="flex-row justify-center items-center w-full"
      >
        <div className="lg:mx-36 md:mx-36 lg:flex flex-row justify-center items-center text-wrap mt-5 p-6">
          <div className="w-full flex-row items-center justify-center gap-2 ">
            <h1 className="text-4xl font-semibold my-6">
              Experience<span className="text-blue-700">.</span>
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
