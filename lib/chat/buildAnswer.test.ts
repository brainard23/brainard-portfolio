import { describe, expect, it } from "vitest";
import { buildAnswer } from "./buildAnswer";

const optionLabels = (nodeId: string) =>
  buildAnswer(nodeId).options.map((option) => option.label);

describe("buildAnswer", () => {
  it("menu offers the six starter questions", () => {
    expect(optionLabels("menu")).toEqual([
      "Who is Brainard?",
      "What's his tech stack?",
      "Where has he worked?",
      "What has he built?",
      "Is he available? How do I contact him?",
      "Can I see his resume?",
    ]);
  });

  it("about answers from the About section and links back to the menu", () => {
    const answer = buildAnswer("about");

    expect(answer.paragraphs.join(" ")).toContain(
      "over five years of hands-on experience"
    );
    expect(answer.actions).toContainEqual({
      kind: "section",
      label: "Read more on the page",
      sectionId: "About",
    });
    expect(answer.options).toEqual([{ label: "↩ Back to menu", nodeId: "menu" }]);
  });

  it("stack lists every skill from the Skills section", () => {
    const answer = buildAnswer("stack");
    const text = answer.paragraphs.join(" ");

    for (const skill of ["Typescript", "React", "Nextjs", "Laravel", "Supabase", "Tailwind"]) {
      expect(text).toContain(skill);
    }
    expect(answer.actions).toContainEqual({
      kind: "section",
      label: "See the Skills section",
      sectionId: "Skills",
    });
    expect(answer.options).toEqual([{ label: "↩ Back to menu", nodeId: "menu" }]);
  });

  it("work offers one button per job, newest first", () => {
    expect(optionLabels("work")).toEqual([
      "Community Platform (under NDA)",
      "Zen Companies Inc",
      "Fligno",
      "Obsidian Media",
      "Virtual Assistant",
      "↩ Back to menu",
    ]);
  });

  it("a job answer gives role, dates and stack, then offers other jobs", () => {
    const answer = buildAnswer("work:1");
    const text = answer.paragraphs.join(" ");

    expect(text).toContain("Senior Software Engineer at Zen Companies Inc");
    expect(text).toContain("February 2026 - July 2026");
    expect(answer.actions).toEqual([
      { kind: "section", label: "See the Experience section", sectionId: "Experience" },
    ]);
    expect(answer.options).toEqual([
      { label: "↩ Other jobs", nodeId: "work" },
      { label: "↩ Back to menu", nodeId: "menu" },
    ]);
  });

  it("built lists live projects first, then side projects", () => {
    expect(optionLabels("built")).toEqual([
      "🟢 Community Platform (NDA)",
      "🟢 Zen Marine Charter",
      "🟢 Sana All",
      "🟢 Green Life Clinics",
      "🟢 Pet Price",
      "🟢 Plan Desk One",
      "React DBMovie",
      "My Ride rental services",
      "ReGroup",
      "Food Delivery App",
      "POS Saas",
      "↩ Back to menu",
    ]);
  });

  it("a live project answer links to the live site", () => {
    const answer = buildAnswer("live:1");
    const text = answer.paragraphs.join(" ");

    expect(text).toContain("Zen Marine Charter");
    expect(text).toContain("Luxury yacht charter site in Destin, FL");
    expect(text).toContain("Stripe");
    expect(answer.actions).toEqual([
      { kind: "link", label: "Visit site", href: "https://www.zenmarinecharter.com" },
      { kind: "section", label: "See Live Projects", sectionId: "LiveProjects" },
    ]);
    expect(answer.options).toEqual([
      { label: "↩ Other projects", nodeId: "built" },
      { label: "↩ Back to menu", nodeId: "menu" },
    ]);
  });

  it("the NDA project has no link and says why", () => {
    const answer = buildAnswer("live:0");

    expect(answer.actions.filter((action) => action.kind === "link")).toEqual([]);
    expect(answer.paragraphs).toContain("It's under NDA, so there's no public link.");
  });

  it("no answer anywhere names the NDA client", () => {
    const visited = new Set<string>();
    const queue = ["menu"];
    while (queue.length > 0) {
      const nodeId = queue.shift()!;
      if (visited.has(nodeId)) continue;
      visited.add(nodeId);
      const answer = buildAnswer(nodeId);
      expect(JSON.stringify(answer).toLowerCase()).not.toContain("whodini");
      queue.push(...answer.options.map((option) => option.nodeId));
    }
    expect(visited.size).toBeGreaterThan(20);
  });

  it("a side project answer shows only the links it has", () => {
    const answer = buildAnswer("project:3");

    expect(answer.paragraphs[0]).toBe("Food Delivery App");
    expect(answer.actions).toEqual([
      {
        kind: "link",
        label: "View code on GitHub",
        href: "https://github.com/brainard23/delivery-express.git",
      },
      { kind: "section", label: "See Projects", sectionId: "Projects" },
    ]);
    expect(answer.options).toEqual([
      { label: "↩ Other projects", nodeId: "built" },
      { label: "↩ Back to menu", nodeId: "menu" },
    ]);
  });

  it("contact offers every contact method from the Contact section", () => {
    const answer = buildAnswer("contact");

    expect(answer.paragraphs.join(" ")).toContain("reach him directly");
    expect(answer.actions).toEqual([
      { kind: "link", label: "+63 924 1835 185", href: "tel:+639241835185" },
      {
        kind: "link",
        label: "Facebook/brainard.o.s",
        href: "https://www.facebook.com/brainard.o.s",
      },
      {
        kind: "link",
        label: "Linkedin",
        href: "https://www.linkedin.com/in/brainard-ordona-408935169/",
      },
      {
        kind: "link",
        label: "brainard.ordona09@gmail.com",
        href: "mailto:brainard.ordona09@gmail.com",
      },
      { kind: "section", label: "See the Contact section", sectionId: "Contact" },
    ]);
    expect(answer.options).toEqual([{ label: "↩ Back to menu", nodeId: "menu" }]);
  });

  it("resume links to the resume on Google Drive", () => {
    const answer = buildAnswer("resume");

    expect(answer.actions).toEqual([
      {
        kind: "link",
        label: "Open resume",
        href: "https://drive.google.com/file/d/1BMhpd4kQY1zGbVz-Cnf9acYhEIxt26Je/view?usp=sharing",
      },
    ]);
    expect(answer.options).toEqual([{ label: "↩ Back to menu", nodeId: "menu" }]);
  });

  it("an unknown or out-of-range id falls back to the menu", () => {
    expect(buildAnswer("work:99")).toEqual(buildAnswer("menu"));
    expect(buildAnswer("nope")).toEqual(buildAnswer("menu"));
  });
});
