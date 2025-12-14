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
  image: string;
  technologies: Technology[];
  skills: string[]; // Skills demonstrated in this project
  github: string;
  live?: string;
  projectIcon: string;
}

export const projects: Project[] = [
  {
    title: "NYC Urban Mobility Data Explorer",
    slug: "nyc-urban-mobility",
    description:
      "Full-stack application analyzing 1.4M+ NYC taxi trip records with REST API, normalized database design, and interactive visualizations.",
    longDescription: `A comprehensive data analysis platform that processes over 1.4 million NYC taxi trip records. The application features a Flask-based REST API with normalized SQLite database design, implementing efficient query patterns for real-time data exploration.

Key features include interactive map visualizations, statistical dashboards, and filtering capabilities for temporal and spatial analysis. The project demonstrates proficiency in ETL pipelines, database optimization, and creating intuitive data exploration interfaces.`,
    category: "Full-Stack",
    image: "/projects/nyc-urban-mobility.png",
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
    image: "/projects/mobile-money.png",
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
    image: "/projects/voting-system.png",
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
    title: "Recipe Finder CLI Application",
    slug: "recipe-finder",
    description:
      "CLI tool for discovering recipes based on available ingredients and cuisine preferences with API integration and containerized deployment.",
    longDescription: `A command-line application that helps users discover recipes based on available ingredients and cuisine preferences. The tool integrates with external recipe APIs to fetch and display relevant recipes with detailed instructions.

The project is containerized using Docker for consistent deployment across environments. It demonstrates proficiency in CLI application design, third-party API integration, and container orchestration.`,
    category: "Backend",
    image: "/projects/recipe-finder.png",
    projectIcon: "ChefHat",
    technologies: [
      { name: "Python", icon: "Code2" },
      { name: "Docker", icon: "Container" },
      { name: "API", icon: "Cloud" },
    ],
    skills: ["Backend Development", "API Integration", "Docker", "CLI Development"],
    github: "https://github.com/Masalale/recipe_finder",
  },
  {
    title: "The Braniacs Community Website",
    slug: "braniacs-website",
    description:
      "Responsive website for youth empowerment initiative focused on job creation through art and culture.",
    longDescription: `A fully responsive community website for The Braniacs, a youth empowerment initiative focused on job creation and community development through art and culture. The site features modern design principles, mobile-first approach, and accessibility considerations.

Built with Tailwind CSS for styling, the project showcases frontend development skills including responsive layouts, interactive components, and deployment to production hosting.`,
    category: "Frontend",
    image: "/projects/braniacs-website.png",
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
  {
    title: "Student Assignment Reminder System",
    slug: "assignment-reminder",
    description:
      "Automated CLI application that alerts students about upcoming assignment deadlines.",
    longDescription: `An automated notification system designed to help students track and manage assignment deadlines. The application runs as a background service, monitoring deadline dates and sending alerts via system notifications.

Built with Bash scripting and Python, this project demonstrates skills in system automation, scheduled tasks, and creating developer productivity tools.`,
    category: "DevOps",
    image: "/projects/assignment-reminder.png",
    projectIcon: "Bell",
    technologies: [
      { name: "Bash", icon: "Terminal" },
      { name: "Python", icon: "Code2" },
    ],
    skills: ["DevOps", "Automation", "Scripting", "System Integration"],
    github: "https://github.com/Masalale/submission_reminder_app_masalale",
  },
];
