"use client";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Github, SquareArrowUpRightIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

interface Technology {
  label: string;
  icon: string;
}

interface ProjectTypes {
  i: number;
  previewImage: string | StaticImageData;
  title: string;
  description: string;
  technologies: Technology[];
  projectImages: StaticImageData[];
  github: string;
  link: string;
  plugins?: EmblaPluginType[];
}

const ProjectCard = ({
  i,
  previewImage,
  title,
  description,
  technologies,
  projectImages,
  github,
  link,
  plugins,
}: ProjectTypes) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, plugins);

  return (
    <div>
      <Card key={i} className="flex-row justify-center  items-center mb-2">
        <Dialog>
          <DialogTrigger className="">
            <CardContent className="min-h-52 p-2 hover:opacity-75 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 flex justify-center items-center ">
              <div className="w-full overflow-clip object-cover" style={{ height: 200 }}>
                <Image
                  src={previewImage}
                  alt={title}
                  className="object-cover"
                />
              </div>
            </CardContent>
          </DialogTrigger>
          <DialogContent>
            <div className="lg:flex sm:flex-row justify-between gap-2 items-center">
              <div className="flex justify-center w-full items-center ">
                <Carousel
                  className="w-full"
                  plugins={[
                    Autoplay({
                      delay: 2000,
                    }),
                  ]}
                >
                  <CarouselContent className="">
                    {projectImages.map((item, i) => (
                      <CarouselItem key={i}>
                        <div className="flex items-center justify-center">
                          <Image
                            className=" object-coverflex justify-center items-center"
                            src={item}
                            alt={title}
                            height={300}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
              <div className="flex-row w-full h-ful p-2 h-full ">
                <div className="text-2xl font-semibold tracking-wide my-2">
                  {title}
                </div>
                <div className="text-sm border-b-4 pb-4">{description}</div>
                <div>
                  <div className="text-lg tracking-wide my-2">
                    Technologies used:
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-5 gap-2 ">
                    {technologies.map((item, i) => (
                      <div className="flex gap-1" key={i}>
                        <Image
                          src={item.icon}
                          alt={item.label}
                          className="w-3"
                        />
                        <p>{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <CardFooter className="border-t-2 flex justify-end items-center p-2">
          <div className="flex justify-end items-center w-full gap-2 ">
            <Link href={github} target="_blank">
              <Github />
            </Link>{" "}
            <Link
              href={link}
              target="_blank"
              className={`${
                !link.length && "text-gray-500 pointer-events-none"
              }`}
            >
              <SquareArrowUpRightIcon />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
