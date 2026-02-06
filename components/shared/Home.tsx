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
      <section
        id="Home"
        className="relative flex-row justify-center items-center w-full min-h-screen overflow-hidden"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-300" />
        
        <div className="relative z-10">
      <div className="flex justify-center items-center w-full pt-32 my-2 animate-fade-in-down">
<RoundedText
  label={
    <>
      Hello!{" "}
      <span className="animate-wave">
        👋
      </span>{" "}
      My name is Brainard
    </>
  }
/>

</div>

          
          <div className="lg:mx-36 md:mx-36 lg:flex-row md:flex-row justify-center items-center text-wrap mt-5 p-6">
            <div className="w-full flex justify-center items-center animate-fade-in-up delay-200">
              <div className="relative">
                <Image
                  src={myPic}
                  alt="Brainard Ordona Software Engineer"
                  className="relative flex justify-center items-center md:w-52 md:h-52 m-4 w-44 animate-float rounded-full border-4 border-white/10"
                />
              </div>
            </div>
            
            <div className="w-full flex justify-center items-center animate-fade-in-up delay-300">
              <div className="px-6 md:p-0 text-responsive-xl font-bold text-pretty text-center md:text-left">
                Experience{" "}
                <span className="gradient-text">
                  Full-Stack Software Engineer
                </span>
                .
              </div>
            </div>
          </div>
          
          <div className="lg:mx-36 md:mx-36 flex justify-center items-center text-wrap p-6 animate-fade-in-up delay-400">
            {extraInfo.map((info, i) => (
              <div
                key={i}
                className={`lg:flex mx-2 p-4 text-center justify-center hover-lift rounded-xl transition-all duration-300 ${
                  i === 1 ? "border-x-2 border-dashed border-border/30 px-6" : ""
                }`}
                style={{ animationDelay: `${500 + i * 100}ms` }}
              >
                <RoundedText label={info.label1} />
                <div className="flex justify-center items-center m-2 text-wrap text-xs opacity-80">
                  {info.label2}
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:mx-36 md:mx-36 flex justify-center items-center text-wrap p-6 mb-10 animate-fade-in-up delay-500">
            <div className="flex gap-4 items-center flex-wrap justify-center">
              <Button
                className="relative overflow-hidden group rounded-3xl gap-2 h-16 text-lg px-8 hover-lift"
                size={"lg"}
                asChild
              >
                <Link
                  href="https://drive.google.com/file/d/1QU_gOWjlV_16SLWmBacJYktMEy2kFGDn/view?usp=sharing"
                  target="_blank"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <FileText className="relative z-10" />
                  <span className="relative z-10">Resume</span>
                </Link>
              </Button>

              <Link
                className="relative overflow-hidden group glass hover-lift rounded-3xl gap-2 h-16 text-lg w-44 flex justify-center items-center border border-border/50 hover:border-primary/50 transition-all duration-300"
                href={'#Contact'}
              >
                <Contact />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
