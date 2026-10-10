import wordpress from "../public/assets/wordpress.svg";
import javascript from "../public/assets/javascript.svg";
import next from "../public/assets/nextjs.svg";
import react from "../public/assets/react.svg";
import html from "../public/assets/html.svg";
import css from "../public/assets/css.svg";
import php from "../public/assets/php.svg";
import shopify from "../public/assets/shopify.svg";
import vite from "../public/assets/vite.svg";
import laravel from "../public/assets/laravel.png";
import github from "../public/assets/git.svg";
import supabase from "../public/assets/supabase.png";
import gitlab from "../public/assets/gitlab.svg";
import vscode from "../public/assets/vscode.svg";
import tailwind from "../public/assets/tailwind.svg";
import bootstrap from "../public/assets/bootstrap.svg";
import nodejs from "../public/assets/node.svg";
import mysql from "../public/assets/mysql.svg";
import typescript from "../public/assets/typescript.svg";
import mongodb from "../public/assets/mongodb.svg";
import fligno from "../public/assets/fligno.png";
import obsidian from "../public/assets/obsidian.jpg";
import VA from "../public/assets/VA.png";
import dbmovie from "../public/assets/projects/moviedb.png";
import dbmovie2 from "../public/assets/projects/moviedb2.png";
import dbmovie3 from "../public/assets/projects/moviedb3.png";
import rental from "../public/assets/projects/rental.png";
import rental2 from "../public/assets/projects/rental2.png";
import rental3 from "../public/assets/projects/rental3.png";
import delivery from "../public/assets/projects/delivery.png";
import delivery2 from "../public/assets/projects/delivery2.png";
import delivery3 from "../public/assets/projects/delivery3.png";
import delivery4 from "../public/assets/projects/delivery4.png";
import event1 from "../public/assets/projects/event1.png";
import event2 from "../public/assets/projects/event2.png";
import event3 from "../public/assets/projects/event3.png";
import saas1 from "../public/assets/projects/saas1.png";
import saas2 from "../public/assets/projects/saas2.png";
import saas3 from "../public/assets/projects/saas3.png";
import smartphone from "../public/assets/smartphone.svg";
import facebook from "../public/assets/facebook.svg";
import linkedin from "../public/assets/linkedin.svg";
import gmail from "../public/assets/gmail.svg";
import zen from "../public/assets/zen.svg";
import community from "../public/assets/community.svg";
import { BrainCircuit, Contact, FolderArchive, Globe, Home, ScrollText, User } from "lucide-react";
import { StaticImageData } from "next/image";

export const headerLinks = [
  {
    label: "Home",
    icon: <Home className="h-24" width={200} />,
  },
  {
    label: "About",
    icon: <User className="h-24" width={200} />,
  },
  {
    label: "Skills",
    icon: <BrainCircuit className="h-24" width={200} />,
  },

  {
    label: "Experience",
    icon: <ScrollText className="h-24" width={200} />,
  },
  {
    label: "Live Projects",
    icon: <Globe className="h-24" width={200} />,
  },
  {
    label: "Projects",
    icon: <FolderArchive className="h-24" width={200} />,
  },
  {
    label: "Contact",
    icon: <Contact className="h-24" width={200} />,
  },
];

export const extraInfo = [
  {
    label1: "+5",
    label2: "Years of experience",
  },
  {
    label1: "300k",
    label2: "Lines of code written",
  },
  {
    label1: "10k",
    label2: "Cups of coffee consumed",
  },
];

export const skills = [
  {
    label: "Javascript",
    image: javascript,
  },
  {
    label: "Css",
    image: css,
  },
  {
    label: "Html",
    image: html,
  },
  {
    label: "Php",
    image: php,
  },
  {
    label: "Typescript",
    image: typescript,
  },
  {
    label: "Wordpress",
    image: wordpress,
  },
  {
    label: "Shopify",
    image: shopify,
  },
  {
    label: "React",
    image: react,
  },
  {
    label: "Nextjs",
    image: next,
  },
  {
    label: "Vite",
    image: vite,
  },
  {
    label: "Laravel",
    image: laravel,
  },
  {
    label: "Git",
    image: github,
  },
  {
    label: "Gitlab",
    image: gitlab,
  },
  {
    label: "VS Code",
    image: vscode,
  },
  {
    label: "Tailwind",
    image: tailwind,
  },
  {
    label: "Bootstrap",
    image: bootstrap,
  },
  {
    label: "MySql",
    image: mysql,
  },
  {
    label: "MongoDb",
    image: mongodb,
  },
  {
    label: "Node.js",
    image: nodejs,
  },
  {
    label: "Supabase",
    image: supabase,
  },
];
export const experiences = [
  {
    company: "Community Platform (under NDA)",
    position: "Full Stack Software Engineer",
    date: "February 2026 - Present",
    description:
      "Full-stack developer on a platform that connects people to communities, spanning personal profiles, business collaboration, and freelance opportunities in one social graph.",

    activities: [
      "Own features end to end across a React and Vite front end and a Laravel REST API, from data model to shipped UI.",
      "Design profile, discovery, and collaboration flows so members, businesses, and freelancers share one connective experience.",
    ],

    technologies: [
      {
        icon: react,
        label: "React",
      },
      {
        icon: vite,
        label: "Vite",
      },
      {
        icon: laravel,
        label: "Laravel",
      },
      {
        icon: php,
        label: "Php",
      },
    ],
    logo: community,
  },
  {
    company: "Zen Companies Inc",
    position: "Senior Software Engineer",
    date: "February 2026 - July 2026",
    description:
      "Led end-to-end development of a multi-tenant SaaS platform, covering Supabase schema, row-level security, role-based JWT auth, and the React/TypeScript UI, shipped to production inside five months.",

    activities: [
      "Architected a server-authoritative pricing engine on Stripe Checkout, guarded by automated tests that eliminated client/server price drift.",
      "Set and enforced coding standards across a team of 5 and reviewed every pull request, mentoring junior engineers on architecture decisions.",
      "Built and maintained CI/CD pipelines (automated builds, type-checks, tests, deploys) and resolved production deployment failures.",
    ],

    technologies: [
      {
        icon: react,
        label: "React",
      },
      {
        icon: typescript,
        label: "Typescript",
      },
      {
        icon: supabase,
        label: "Supabase",
      },
      {
        icon: tailwind,
        label: "Tailwind",
      },
    ],
    logo: zen,
  },
  {
    company: "Fligno",
    position: "Software Engineer",
    date: "March 1, 2022 - November 15, 2025",
    description:
      "Built the ticket purchase flow for a live-event ticketing platform in the Philippines and Australia: dynamic per-event pricing, seat selection, payment integration and QR issuance, serving thousands of buyers per show and $1M+ USD in ticket sales.",

    activities: [
      "Designed the per-event pricing and configuration model so organizers could launch a new concert without engineering involvement, pricing and structuring each show differently on one codebase.",
      "Shipped organizer and admin dashboards with real-time sales data, customer management, role-based access and reporting.",
      "Delivered React + Vite SPAs and Laravel REST APIs, plus cross-platform React Native apps served from the same API surface.",
      "Owned production debugging across web and mobile releases, from API latency under launch-day load to release-blocking crashes; supported shows for Eraserheads, Moira and Gary Valenciano.",
    ],

    technologies: [
      {
        icon: php,
        label: "Php",
      },
      {
        icon: react,
        label: "React",
      },
      {
        icon: laravel,
        label: "Laravel",
      },
      {
        icon: vite,
        label: "Vite",
      },
    ],
    logo: fligno,
  },
  {
    company: "Obsidian Media",
    position: "Web Developer & Product Analyst",
    date: "January 2021 - March 2022",
    description:
      "Obsidean Medai is a company in Denmark that provides products reviews to its viewers. They mainly used Wordpress to publish their articles about the products pros and cons, trending products and top products in the market. I was a product analyst at first and then I offer my service to build the content using Elementor and fixing some minor error in the front end",

    activities: [
      "Resolved WordPress defects affecting UX and page performance across a live product catalogue.",
      "Improved SEO and product-page conversion using traffic and product data analysis.",
      "Customized Elementor and Gutenberg themes so a non-technical content team could ship pages unaided.",
    ],

    technologies: [
      {
        icon: php,
        label: "Php",
      },
      {
        icon: wordpress,
        label: "Wordpress",
      },
      {
        icon: html,
        label: "Html",
      },
      {
        icon: css,
        label: "Css",
      },
    ],
    logo: obsidian,
  },
  {
    company: "Virtual Assistant",
    position: "All around VA",
    date: "January 2018 - January 2021",
    description:
      "I was a Virtual Assistant for Shopify, Amazon, Ebay, and WordPress. I do all the task that what my client needs. from being a Tech Support, Store management, and web developer. Learning new thinks whats make a VA fun because it improves my skills and utilize it immediately. ",

    activities: [
      "Store management, order fulfillment, and customer service",
      "Video, and photo editing",
      "Building website using Shopify or wordpress",
    ],

    technologies: [
      {
        icon: shopify,
        label: "Shopify",
      },
      {
        icon: wordpress,
        label: "Wordpress",
      },
      {
        icon: html,
        label: "Html",
      },
      {
        icon: css,
        label: "Css",
      },
      {
        icon: php,
        label: "Php",
      },
      {
        icon: javascript,
        label: "Javascript",
      },
    ],
    logo: VA,
  },
];

export const projectsData = [
  {
    title: "React DBMovie",
    description:
      "React project using dbmovie api and styled components. The objective of this project is to show latest movies and cast information to its viewers.",
    previewImage: dbmovie,
    github: "https://github.com/brainard23/moviedb.git",
    link: "https://myreactdbmovie.netlify.app/",
    projectImages: [dbmovie, dbmovie2, dbmovie3] as StaticImageData[],
    technologies: [
      {
        label: "React",
        icon: react,
      },
      {
        label: "HTML",
        icon: html,
      },
      {
        label: "CSS",
        icon: css,
      },
      {
        label: "Javascript",
        icon: javascript,
      },
    ],
  },
  {
    title: "My Ride rental services",
    description:
      "Build using Next js and mongodb as the database. This project aims its clients to advertise its cars for rentals. It is still work in progress project and I will finish this as soos as possible.",
    previewImage: rental3,
    github: "https://github.com/brainard23/airbnb.git",
    link: "https://myride-five.vercel.app/",
    projectImages: [rental, rental2, rental3] as StaticImageData[],
    technologies: [
      {
        label: "Nextjs",
        icon: next,
      },
      {
        label: "Typescript",
        icon: typescript,
      },
      {
        label: "Tailwind",
        icon: tailwind,
      },
      {
        label: "MongoDB",
        icon: mongodb,
      },
      {
        label: "Nodejs",
        icon: nodejs,
      },
    ],
  },
  {
    title: "ReGroup",
    description:
      "Build using Next js and mongodb as the database. This project creates events for meetups, tournament, live events, and etc",
    previewImage: event1,
    github: "https://github.com/brainard23/event.git",
    link: "https://event-alpha-umber.vercel.app/",
    projectImages: [event1, event2, event3] as StaticImageData[],
    technologies: [
      {
        label: "Nextjs",
        icon: next,
      },
      {
        label: "Typescript",
        icon: typescript,
      },
      {
        label: "Tailwind",
        icon: tailwind,
      },
      {
        label: "MongoDB",
        icon: mongodb,
      },
      {
        label: "Nodejs",
        icon: nodejs,
      },
    ],
  },
  {
    title: "Food Delivery App",
    description:
      "Food Delivery App that uses React native and sanity to handle the back end. ",
    previewImage: delivery,
    github: "https://github.com/brainard23/delivery-express.git",
    link: "",
    projectImages: [delivery, delivery2, delivery3, delivery4] as StaticImageData[],
    technologies: [
      {
        label: "React Native",
        icon: react,
      },
      {
        label: "JavaScript",
        icon: javascript,
      },
      {
        label: "Tailwind",
        icon: tailwind,
      },
    ],
  },
   {
    title: "POS Saas",
    description:
      "POS Saas is a web application that allows users to manage their inventory and sales. It also has a POS system that can calculate all the purchase, total sales and inventory. It's in production and accepting clients.",
    previewImage: saas1,
    github: "",
    link: "https://pos-saas-weld.vercel.app",
    projectImages: [saas1, saas2, saas3],
    technologies: [
      {
        label: "Nextjs",
        icon: next,
      },
      {
      label: "Supabase",
        icon: supabase,
      },
      {
        label: "JavaScript",
        icon: javascript,
      },
      {
        label: "Tailwind",
        icon: tailwind,
      },
    ],
  },
];

export const contactDetails = [
  {
    label: "+63 924 1835 185",
    link: "tel:+639241835185",
    icon: smartphone,
  },
  {
    link: "https://www.facebook.com/brainard.o.s",
    label: "Facebook/brainard.o.s",
    icon: facebook,
  },
  {
    link: "https://www.linkedin.com/in/brainard-ordona-408935169/",
    label: "Linkedin",
    icon: linkedin,
  },
  {
    link: "mailto:brainard.ordona09@gmail.com",
    label: "brainard.ordona09@gmail.com",
    icon: gmail,
  },
];
