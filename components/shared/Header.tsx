"use client";

import { AlignCenter } from "lucide-react";
import { ModeToggle } from "../ui/ModeToggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { headerLinks } from "@/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in-down ${
          scrolled 
            ? "glass-strong shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="wrapper flex justify-between w-full lg:w-[98vw] sm:w-[93vw] md:w-[90vw] py-4">
          <div className="flex items-center ml-2">
            <ModeToggle />
          </div>
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="hover-lift hover:border-primary transition-all duration-300"
                >
                  <AlignCenter className="transition-transform duration-300 hover:rotate-90" />
                </Button>
              </SheetTrigger>
              <SheetContent className="glass-strong border-l border-border/50">
                <div className="h-screen flex-col py-6">
                  {headerLinks.map((header, i) => (
                    <div 
                      key={i}
                      className="h-24 border-y-2 border-border/30 w-full flex justify-start items-center overflow-hidden group hover:border-primary/50 transition-all duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <Link
                        href={`#${header.label}`}
                        className="relative text-lg py-8 pr-[66rem] pl-2 grid group-hover:pl-4 transition-all duration-300"
                      >
                        <div className="font-medium group-hover:gradient-text transition-all duration-300">
                          {header.label}
                        </div>
                        <div className="absolute left-48 mt-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                          {header.icon}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
