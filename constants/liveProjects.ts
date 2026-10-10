import { StaticImageData } from "next/image";
import whodini from "../public/assets/projects/live-whodini.jpg";
import zenMarine from "../public/assets/projects/live-zenmarine.jpg";
import sanaAll from "../public/assets/projects/live-sanaall.jpg";
import greenLife from "../public/assets/projects/live-greenlife.jpg";
import planDesk from "../public/assets/projects/live-plandesk.jpg";

export interface LiveProject {
  title: string;
  role: string;
  summary: string;
  highlights: string[];
  stack: string[];
  url: string;
  linkLabel: string;
  image?: StaticImageData;
}

export const liveProjects: LiveProject[] = [
  {
    title: "Whodini",
    role: "Full Stack Developer · 2026 – Present",
    summary:
      "A platform that connects people to communities, spanning personal profiles, business collaboration and freelance opportunities in one social graph.",
    highlights: [
      "Own features end to end, from data model to shipped UI",
      "Profile, discovery and collaboration flows for members, businesses and freelancers",
    ],
    stack: ["React", "Vite", "TypeScript", "Laravel", "REST API"],
    url: "https://www.whodini.io",
    linkLabel: "Visit site",
    image: whodini,
  },
  {
    title: "Zen Marine Charter",
    role: "Senior Software Engineer · Zen Companies · 2026",
    summary:
      "Luxury yacht charter site in Destin, FL with a guided multi-step booking builder for charters and add-on experiences.",
    highlights: [
      "Server-authoritative pricing engine on Stripe Checkout, guarded by automated tests",
      "Admin area for bookings, charters and team members with branded transactional email",
    ],
    stack: ["React", "TypeScript", "Supabase", "Stripe", "Tailwind"],
    url: "https://www.zenmarinecharter.com",
    linkLabel: "Visit site",
    image: zenMarine,
  },
  {
    title: "Sana All",
    role: "Full Stack Developer · Fligno · 2023",
    summary:
      "Live-event ticketing app for high-profile shows in the Philippines and Australia, with $1M+ USD in ticket sales.",
    highlights: [
      "Ticket selection, purchase and QR code issuance flows",
      "Organizer and admin dashboards, payment integration and role-based access",
    ],
    stack: ["React Native", "React", "Laravel", "MySQL"],
    url: "https://apps.apple.com/us/app/sana-all/id6456751289",
    linkLabel: "View on App Store",
    image: sanaAll,
  },
  {
    title: "Green Life Clinics",
    role: "Full Stack Developer · Fligno",
    summary:
      "Alternative medical clinics and dispensaries across Australia, with online booking and telehealth.",
    highlights: ["Joined an active build and delivered full-stack features"],
    stack: ["React", "Laravel"],
    url: "https://greenlifeclinics.com.au",
    linkLabel: "Visit site",
    image: greenLife,
  },
  {
    title: "Pet Price",
    role: "Full Stack Developer",
    summary: "Live production site for an Australian client.",
    highlights: [],
    stack: [],
    url: "https://petprice.com.au",
    linkLabel: "Visit site",
  },
  {
    title: "Plan Desk One",
    role: "Full Stack Developer · 2026",
    summary:
      "Project management SaaS for architecture and construction firms, covering projects, proposals, sheets and team workflows in one platform.",
    highlights: [
      "Supabase Postgres with row-level security, auth, storage and edge functions",
      "React + TypeScript front end with automated tests",
    ],
    stack: ["React", "Vite", "TypeScript", "Supabase", "Tailwind"],
    url: "https://plandesk1.com",
    linkLabel: "Visit site",
    image: planDesk,
  },
];
