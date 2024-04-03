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
import pos from "../public/assets/projects/pos.png";
import pos2 from "../public/assets/projects/pos2.png";
import smartphone from "../public/assets/smartphone.svg";
import facebook from "../public/assets/facebook.svg";
import linkedin from "../public/assets/linkedin.svg";
import gmail from "../public/assets/gmail.svg";
import { BrainCircuit, Contact, FolderArchive, Home, ScrollText, User } from "lucide-react";

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
    label1: "+2",
    label2: "Years of experience",
  },
  {
    label1: "100k",
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
    label: "React",
    image: react,
  },
];
export const experiences = [
  {
    company: "Fligno",
    position: "Associate Software Engineer",
    date: "March 1, 2022 - Present",
    description:
      "Fligno is a tech company in the Philippines and most of its clients are from Australia. In this company I have learned a lot in programming, this is where I started my journey as a Software Engineer. I was a front end developer at first and then started working in the front end as soon as I learned back end. This is where I showcase my skills in programming and proved my skills in completting my task and work effectively with a team.",

    activities: [
      "Write clean, efficient, and maintainable code according to industry best practices and coding standards.",
      "Identify and fix bugs and issues through debugging and troubleshooting techniques.",
      "Collaborate with other team members to ensure effective teamwork and project success.",
      "Use version control systems to manage and track changes to the software codebase.",
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
    position: "Content Analyst | Product Analyst | Web Developer",
    date: "January 2021 - October 2022",
    description:
      "Obsidean Medai is a company in Denmark that provides products reviews to its viewers. They mainly used Wordpress to publish their articles about the products pros and cons, trending products and top products in the market. I was a product analyst at first and then I offer my service to build the content using Elementor and fixing some minor error in the front end",

    activities: [
      "Collect and analyze product-related data, such as sales figures, customer feedback, and market trends.",
      "Review and enhance product descriptions, titles, images, and other content elements to improve search engine visibility.",
      "Analyze the performance of product content.",
      "Fix bugs found in WordPress to ensure the page readability and visual.",
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
    logo: obsidian,
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
    projectImages: [dbmovie, dbmovie2, dbmovie3],
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
    link: "",
    projectImages: [rental, rental2, rental3],
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
    projectImages: [delivery, delivery2, delivery3, delivery4],
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
    title: "Inventory Management System",
    description:
      "This app aims to handle inventory. Able to do barcode scanning to get information of the product in the system and can create new products and store it to the system. It also has POS system that can calculate all the purchase, total sales and inventory. This project is still work on progress.",
    previewImage: pos,
    github: "https://github.com/brainard23/pos-web.git",
    link: "",
    projectImages: [pos, pos2],
    technologies: [
      {
        label: "React",
        icon: react,
      },
      {
        label: "Vite",
        icon: vite,
      },
      {
        label: "Laravel",
        icon: laravel,
      },
      {
        label: "JavaScript",
        icon: javascript,
      },
      {
        label: "Php",
        icon: php,
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
    label: "63+ 916 654 3866",
    link: "tel:63+9166543866",
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
