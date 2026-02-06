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
    <div 
      className="animate-fade-in-up" 
      style={{ animationDelay: `${i * 100}ms` }}
    >
      <Card className="glass border border-border/30 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
        <Dialog>
          <DialogTrigger className="w-full">
            <CardContent className="min-h-60 p-0 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute top-4 left-4 z-20 glass rounded-lg px-4 py-2">
                <p className="font-bold text-black text-lg">{title}</p>
              </div>
              
              <div className="w-full h-56 overflow-hidden">
                <Image
                  src={previewImage}
                  alt={title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </CardContent>
          </DialogTrigger>
          
          <DialogContent className="glass-strong max-w-4xl max-h-[90vh] overflow-y-auto border border-border/50">
            <div className="lg:flex sm:flex-row justify-between gap-6 items-start">
              <div className="flex justify-center w-full items-center">
                <Carousel
                  className="w-full"
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {projectImages.map((item, i) => (
                      <CarouselItem key={i}>
                        <div className="h-96 glass rounded-xl overflow-hidden">
                          <Image
                            className="object-cover w-full h-full"
                            src={item}
                            alt={title}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              
              <div className="flex-row w-full p-2">
                <div className="text-3xl font-bold gradient-text my-3">
                  {title}
                </div>
                <div className="text-sm border-b border-border/30 pb-4 leading-relaxed opacity-90">
                  {description}
                </div>
                
                <div className="mt-4">
                  <div className="text-lg font-semibold mb-3">
                    Technologies used:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((item, i) => (
                      <div 
                        key={i}
                        className="glass rounded-full px-3 py-2 flex gap-2 items-center hover-lift group/tech cursor-default border border-border/30"
                      >
                        <Image
                          src={item.icon}
                          alt={item.label}
                          width={16}
                          height={16}
                          className="group-hover/tech:scale-110 transition-transform duration-300"
                        />
                        <span className="text-xs font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <CardFooter className="border-t border-border/30 flex justify-end items-center p-4 bg-background/50">
          <div className="flex justify-end items-center w-full gap-3">
            <Link 
              href={github} 
              target="_blank"
              className="glass rounded-full p-2 hover-lift border border-border/30 hover:border-primary/50 transition-all duration-300 group/icon"
            >
              <Github className="w-5 h-5 group-hover/icon:scale-110 transition-transform duration-300" />
            </Link>
            <Link
              href={link}
              target="_blank"
              className={`glass rounded-full p-2 hover-lift border border-border/30 hover:border-primary/50 transition-all duration-300 group/icon ${
                !link.length && "opacity-50 pointer-events-none"
              }`}
            >
              <SquareArrowUpRightIcon className="w-5 h-5 group-hover/icon:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
