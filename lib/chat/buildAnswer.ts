import { contactDetails, experiences, projectsData, skills } from "@/constants";
import { aboutParagraphs, resumeUrl } from "@/constants/about";
import { liveProjects } from "@/constants/liveProjects";
import { ChatAction, ChatAnswer, ChatOption } from "./types";

const MENU_OPTIONS: ChatOption[] = [
  { label: "Who is Brainard?", nodeId: "about" },
  { label: "What's his tech stack?", nodeId: "stack" },
  { label: "Where has he worked?", nodeId: "work" },
  { label: "What has he built?", nodeId: "built" },
  { label: "Can I see his live work?", nodeId: "live" },
  { label: "Is he available? How do I contact him?", nodeId: "contact" },
  { label: "Can I see his resume?", nodeId: "resume" },
];

const BACK_TO_MENU: ChatOption = { label: "↩ Back to menu", nodeId: "menu" };

const menu = (): ChatAnswer => ({
  paragraphs: ["What would you like to know about Brainard?"],
  actions: [],
  options: MENU_OPTIONS,
});

const about = (): ChatAnswer => ({
  paragraphs: aboutParagraphs,
  actions: [{ kind: "section", label: "Read more on the page", sectionId: "About" }],
  options: [BACK_TO_MENU],
});

const stack = (): ChatAnswer => ({
  paragraphs: [
    `He works with ${skills.map((skill) => skill.label).join(", ")}.`,
  ],
  actions: [{ kind: "section", label: "See the Skills section", sectionId: "Skills" }],
  options: [BACK_TO_MENU],
});

const work = (): ChatAnswer => ({
  paragraphs: [
    `He has ${experiences.length} roles on his portfolio. Pick one to hear more:`,
  ],
  actions: [],
  options: [
    ...experiences.map((job, index) => ({
      label: job.company,
      nodeId: `work:${index}`,
    })),
    BACK_TO_MENU,
  ],
});

const job = (index: number): ChatAnswer => {
  const { company, position, date, description, activities, technologies } =
    experiences[index];

  return {
    paragraphs: [
      `${position} at ${company} (${date}).`,
      description,
      ...activities,
      `Stack: ${technologies.map((tech) => tech.label).join(", ")}.`,
    ],
    actions: [
      { kind: "section", label: "See the Experience section", sectionId: "Experience" },
    ],
    options: [{ label: "↩ Other jobs", nodeId: "work" }, BACK_TO_MENU],
  };
};

const built = (): ChatAnswer => ({
  paragraphs: [
    "🟢 marks live production work. The rest are side projects. Pick one:",
  ],
  actions: [],
  options: [
    ...liveProjects.map((project, index) => ({
      label: `🟢 ${project.title}`,
      nodeId: `live:${index}`,
    })),
    ...projectsData.map((project, index) => ({
      label: project.title,
      nodeId: `project:${index}`,
    })),
    BACK_TO_MENU,
  ],
});

const OTHER_PROJECTS: ChatOption = { label: "↩ Other projects", nodeId: "built" };

const liveProject = (index: number): ChatAnswer => {
  const { title, role, summary, highlights, stack, url, linkLabel } =
    liveProjects[index];
  const actions: ChatAction[] = url
    ? [{ kind: "link", label: linkLabel ?? "Visit site", href: url }]
    : [];

  return {
    paragraphs: [
      `${title}: ${role}.`,
      summary,
      ...highlights,
      ...(stack.length > 0 ? [`Stack: ${stack.join(", ")}.`] : []),
      ...(url ? [] : ["It's under NDA, so there's no public link."]),
    ],
    actions: [
      ...actions,
      { kind: "section", label: "See Live Projects", sectionId: "LiveProjects" },
    ],
    options: [OTHER_PROJECTS, BACK_TO_MENU],
  };
};

const sideProject = (index: number): ChatAnswer => {
  const { title, description, technologies, github, link } = projectsData[index];
  const actions: ChatAction[] = [];
  if (link) actions.push({ kind: "link", label: "Open live demo", href: link });
  if (github) {
    actions.push({ kind: "link", label: "View code on GitHub", href: github });
  }

  return {
    paragraphs: [
      title,
      description.trim(),
      `Stack: ${technologies.map((tech) => tech.label).join(", ")}.`,
    ],
    actions: [
      ...actions,
      { kind: "section", label: "See Projects", sectionId: "Projects" },
    ],
    options: [OTHER_PROJECTS, BACK_TO_MENU],
  };
};

const contact = (): ChatAnswer => ({
  paragraphs: [
    "For work or availability questions, reach him directly:",
  ],
  actions: [
    ...contactDetails.map(
      (detail): ChatAction => ({ kind: "link", label: detail.label, href: detail.link })
    ),
    { kind: "section", label: "See the Contact section", sectionId: "Contact" },
  ],
  options: [BACK_TO_MENU],
});

const resume = (): ChatAnswer => ({
  paragraphs: ["Sure! His resume is on Google Drive:"],
  actions: [{ kind: "link", label: "Open resume", href: resumeUrl }],
  options: [BACK_TO_MENU],
});

const liveWork = (): ChatAnswer => ({
  paragraphs: [
    "Here's his live production work. Open a site, or pick one for details:",
  ],
  actions: [
    ...liveProjects.flatMap(({ title, url }): ChatAction[] =>
      url ? [{ kind: "link", label: title, href: url }] : []
    ),
    { kind: "section", label: "See Live Projects", sectionId: "LiveProjects" },
  ],
  options: [
    ...liveProjects.map((project, index) => ({
      label: project.title,
      nodeId: `live:${index}`,
    })),
    BACK_TO_MENU,
  ],
});

/** Parses ids like "work:2" into the list index, or null when out of range. */
const indexFrom = (nodeId: string, prefix: string, length: number) => {
  if (!nodeId.startsWith(`${prefix}:`)) return null;
  const index = Number(nodeId.slice(prefix.length + 1));
  return Number.isInteger(index) && index >= 0 && index < length ? index : null;
};

export const buildAnswer = (nodeId: string): ChatAnswer => {
  const jobIndex = indexFrom(nodeId, "work", experiences.length);
  if (jobIndex !== null) return job(jobIndex);
  const liveIndex = indexFrom(nodeId, "live", liveProjects.length);
  if (liveIndex !== null) return liveProject(liveIndex);
  const projectIndex = indexFrom(nodeId, "project", projectsData.length);
  if (projectIndex !== null) return sideProject(projectIndex);

  switch (nodeId) {
    case "about":
      return about();
    case "stack":
      return stack();
    case "work":
      return work();
    case "built":
      return built();
    case "live":
      return liveWork();
    case "contact":
      return contact();
    case "resume":
      return resume();
    default:
      return menu();
  }
};
