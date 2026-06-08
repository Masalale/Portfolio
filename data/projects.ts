import type { StaticImageData } from "next/image";
import nycImage from "@/public/projects/nyc-urban-mobility.png";
import mobileMoneyImage from "@/public/projects/mobile-money.png";
import votingSystemImage from "@/public/projects/voting-system.png";
import braniacsImage from "@/public/projects/braniacs-website.png";

// Placeholder — replace with actual screenshots
const nalaImage = "/projects/braniacs-website.png";
const momentumImage = "/projects/braniacs-website.png";

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: "Full-Stack" | "Frontend" | "Backend" | "DevOps";
  image: string | StaticImageData;
  technologies: Technology[];
  skills: string[];
  github: string;
  live?: string;
  projectIcon: string;
}

export const projects: Project[] = [
  {
    title: "Natures Lather (NALA) E-Commerce",
    slug: "nala-ecommerce",
    description:
      "Full e-commerce website for a local organic soap business with Convex backend, real-time order management, and WhatsApp integration.",
    longDescription: `A complete e-commerce platform built for a local organic soap business. Features a Convex real-time backend for inventory and order management, responsive product browsing, cart functionality, and automated WhatsApp order notifications that send formatted order details directly to the business owner.

Built with Next.js and Tailwind CSS for a polished mobile-first shopping experience. The Convex backend provides real-time data synchronization and serverless order processing without traditional API infrastructure.`,
    category: "Full-Stack",
    image: nalaImage,
    projectIcon: "ShoppingCart",
    technologies: [
      { name: "Next.js", icon: "Layers" },
      { name: "TypeScript", icon: "FileJson" },
      { name: "Tailwind", icon: "Wind" },
      { name: "Convex", icon: "Database" },
    ],
    skills: ["Frontend Development", "Backend Development", "E-Commerce", "Real-time Systems"],
    github: "https://github.com/Masalale/nala",
    live: "https://nalather.vercel.app",
  },
  {
    title: "Momentum Collective Corporate Site",
    slug: "momentum-collective",
    description:
      "8-page corporate marketing site built with Astro, GSAP animations, and Lenis smooth scrolling — deployed live.",
    longDescription: `A modern corporate marketing website for Momentum Collective, replacing an outdated codebase. Built with Astro for zero-JS-by-default performance, enhanced with GSAP for scroll-triggered animations and Lenis for buttery smooth scrolling.

The 8-page site features a polished dark theme, animated page transitions, responsive layouts, and optimized asset loading. Migrated the business from a legacy site to a high-performance static build deployed on Vercel.`,
    category: "Frontend",
    image: momentumImage,
    projectIcon: "Building2",
    technologies: [
      { name: "Astro", icon: "Rocket" },
      { name: "GSAP", icon: "Zap" },
      { name: "Lenis", icon: "Move" },
      { name: "Tailwind", icon: "Wind" },
    ],
    skills: ["Frontend Development", "Animation", "Performance Optimization", "UI/UX"],
    github: "",
    live: "https://momentumcollective.info",
  },
  {
    title: "NYC Urban Mobility Data Explorer",
    slug: "nyc-urban-mobility",
    description:
      "Full-stack application analyzing 1.4M+ NYC taxi trip records with REST API, normalized database design, and interactive visualizations.",
    longDescription: `A comprehensive data analysis platform that processes over 1.4 million NYC taxi trip records. The application features a Flask-based REST API with normalized SQLite database design, implementing efficient query patterns for real-time data exploration.

Key features include interactive map visualizations, statistical dashboards, and filtering capabilities for temporal and spatial analysis. The project demonstrates proficiency in ETL pipelines, database optimization, and creating intuitive data exploration interfaces.`,
    category: "Full-Stack",
    image: nycImage,
    projectIcon: "MapPin",
    technologies: [
      { name: "Python", icon: "Code2" },
      { name: "Flask", icon: "Flask" },
      { name: "SQLite", icon: "Database" },
      { name: "JavaScript", icon: "FileJson" },
    ],
    skills: ["Backend Development", "Database Design", "Data Visualization", "REST API Development"],
    github: "https://github.com/Masalale/urban_mobility_data_explorer",
  },
  {
    title: "Mobile Money Transaction Processor",
    slug: "mobile-money",
    description:
      "Enterprise web app processing mobile money SMS data with ETL pipeline, REST API, and analytics dashboard.",
    longDescription: `An enterprise-grade application designed to process and analyze mobile money transaction data extracted from SMS messages. The system implements a robust ETL pipeline that parses unstructured SMS data into structured transaction records.

Features include automated data extraction, transaction categorization, spending analytics, and a responsive dashboard for financial insights. The project showcases skills in data engineering, financial technology, and building scalable web applications.`,
    category: "Full-Stack",
    image: mobileMoneyImage,
    projectIcon: "Wallet",
    technologies: [
      { name: "Python", icon: "Code2" },
      { name: "Flask", icon: "Flask" },
      { name: "SQLite", icon: "Database" },
    ],
    skills: ["Backend Development", "ETL Pipeline", "Data Processing", "FinTech Development"],
    github: "https://github.com/Masalale/group_3_project",
  },
  {
    title: "Quick Open Vote System",
    slug: "voting-system",
    description:
      "Production-ready voting system with email-based and casual voting modes, real-time results, and comprehensive admin dashboard.",
    longDescription: `A robust, production-ready electronic voting platform supporting multiple voting modes including authenticated email-based voting and casual polling. The system features real-time vote counting, fraud prevention measures, and a comprehensive administrative dashboard.

Built with React frontend and Node.js/Express backend, the application demonstrates full-stack development capabilities, user authentication systems, and real-time data synchronization across clients.`,
    category: "Full-Stack",
    image: votingSystemImage,
    projectIcon: "Vote",
    technologies: [
      { name: "Node.js", icon: "Server" },
      { name: "Express", icon: "Zap" },
      { name: "SQLite", icon: "Database" },
      { name: "React", icon: "Atom" },
    ],
    skills: ["Frontend Development", "Backend Development", "User Authentication", "Real-time Systems"],
    github: "https://github.com/MichaelAngelo-11/Quick-Open-Vote-system",
  },
  {
    title: "The Braniacs Community Website",
    slug: "braniacs-website",
    description:
      "Responsive website for youth empowerment initiative focused on job creation through art and culture.",
    longDescription: `A fully responsive community website for The Braniacs, a youth empowerment initiative focused on job creation and community development through art and culture. The site features modern design principles, mobile-first approach, and accessibility considerations.

Built with Tailwind CSS for styling, the project showcases frontend development skills including responsive layouts, interactive components, and deployment to production hosting.`,
    category: "Frontend",
    image: braniacsImage,
    projectIcon: "Users",
    technologies: [
      { name: "HTML", icon: "FileCode" },
      { name: "CSS", icon: "Palette" },
      { name: "JavaScript", icon: "FileJson" },
      { name: "Tailwind", icon: "Wind" },
    ],
    skills: ["Frontend Development", "Responsive Design", "UI/UX", "CSS Architecture"],
    github: "https://github.com/Masalale/the_braniacs",
    live: "https://the-braniacs.vercel.app/",
  },
];
