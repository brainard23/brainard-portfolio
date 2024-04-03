import { AlignCenter, Home, Moon, Sun } from "lucide-react";
import { ModeToggle } from "../ui/ModeToggle";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { headerLinks } from "@/constants";

const Header = () => {
  return (
    <>
      <div className="block fixed w-full ">
        <div className="wrapper flex justify-between w-full lg:w-[75vw] sm:w-[93vw] md:w-[90vw] mt-2">
          <div className="flex items-center">
            <ModeToggle />
          </div>
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <AlignCenter />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="h-screen flex-col py-6" >
                  {headerLinks.map((header, i) => (
                    <div className=" h-24 border-y-2 w-full flex justify-start items-center overflow-hidden">
                      <Link
                        href={`#${header.label}`}
                        className="relative text-lg py-8 pr-[66rem] pl-2 grid"
                      >
                        <div>{header.label}</div>
                        <div className="absolute left-48 mt-4 opacity-10">
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
