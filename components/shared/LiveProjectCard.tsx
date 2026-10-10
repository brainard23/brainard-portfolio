import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { LiveProject } from "@/constants/liveProjects";

interface LiveProjectCardProps {
  project: LiveProject;
  i: number;
}

const LiveProjectCard = ({ project, i }: LiveProjectCardProps) => {
  const { title, role, summary, highlights, stack, url, linkLabel, image } =
    project;

  return (
    <article
      className="animate-fade-in-up glass rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 overflow-hidden group flex flex-col"
      style={{ animationDelay: `${i * 100}ms` }}
    >
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-48 overflow-hidden relative"
        aria-label={`${linkLabel}: ${title}`}
      >
        {image ? (
          <Image
            src={image}
            alt={`${title} live site`}
            className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-cyan-500/30">
            <span className="text-3xl font-bold gradient-text">{title}</span>
          </div>
        )}
        <span className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Live
        </span>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold gradient-text">{title}</h3>
        <p className="text-xs opacity-70 mt-1">{role}</p>
        <p className="text-sm leading-relaxed opacity-90 mt-3">{summary}</p>

        {highlights.length > 0 && (
          <ul className="space-y-1.5 mt-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs opacity-90">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full px-3 py-1 text-xs font-medium border border-border/30"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
        >
          {linkLabel}
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

export default LiveProjectCard;
