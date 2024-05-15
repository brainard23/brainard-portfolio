"use client";

import RoundedText from "@/components/ui/RoundedText";
import { Button } from "@/components/ui/button";
import { extraInfo } from "@/constants";
import { Contact, FileText } from "lucide-react";
import Image from "next/image";
import myPic from "../../public/assets/me.png";
import Link from "next/link";

function Home() {

  return (
    <>
      {" "}
      <section
        id="Home"
        className="flex-row justify-center items-center w-full"
      >
        <div className="flex justify-center items-center w-full mt-8 my-2">
          <RoundedText label="Hello!👋 My name is Brainard " />
        </div>
        <div className="lg:mx-36 md:mx-36 lg:flex-row md:flex-row justify-center items-center text-wrap mt-5 p-6">
          <div className="w-full flex justify-center items-center">
            <Image
              src={myPic}
              alt="Brainard Ordona Software Engineer"
              className="flex justify-center items-center md:w-52 md:h-52 m-4 w-44"
            />
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="px-6 md:p-0 md:text-7xl font-semibold text-4xl text-pretty">
              Experience{" "}
              <span className="text-blue-700">
                Full-Stack Software Engineer
              </span>
              .
            </div>
          </div>
        </div>
        <div className="lg:mx-36 md:mx-36 flex justify-center items-center text-wrap p-6">
          {extraInfo.map((info, i) => (
            <div
              key={i}
              className={`lg:flex mx-2 p-4 text-center justify-center ${
                i === 1 ? "border-x-2 border-dashed px-6" : ""
              }`}
            >
              <RoundedText label={info.label1} />
              <div className="flex justify-center items-center m-2 text-wrap text-xs">
                {info.label2}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:mx-36 md:mx-36 flex justify-center items-center text-wrap p-6">
          <div className="flex gap-4 items-center">
            <Button
              className="dark:bg-white rounded-3xl gap-2 h-16 text-lg"
              size={"lg"}
              asChild
            >
              <Link
               href="https://drive.google.com/file/d/1LXsvR6qwetRchhPCCEpmkrCy59Gel57o/view?usp=drive_link"
               target="_blank"
              >
                <FileText />
                Resume
              </Link>
            </Button>

            <Link
              className="dark:bg-gray-900 dark:text-white text-black bg-gray-200 rounded-3xl gap-2 h-16 text-lg w-44 flex justify-center items-center"
              href={'#Contact'}
            >
              <Contact />
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
