export interface Technology {
  name: string;
  icon: string; // Lucide icon name
}

export interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  github: string;
  live?: string;
  projectIcon: string;
}

export const projects: Project[] = [
  {
    title: "NYC Urban Mobility Data Explorer",
    description:
      "Full-stack application analyzing 1.4M+ NYC taxi trip records with REST API, normalized database design, and interactive visualizations.",
    projectIcon: "MapPin",
    technologies: [
      { name: "Python", icon: "Code2" },
      { name: "Flask", icon: "Flask" },
      { name: "SQLite", icon: "Database" },
      { name: "JavaScript", icon: "FileJson" },
    ],
    github: "https://github.com/Masalale/urban_mobility_data_explorer",
  },
  {
    title: "Mobile Money Transaction Processor",
    description:
      "Enterprise web app processing mobile money SMS data with ETL pipeline, REST API, and analytics dashboard.",
    projectIcon: "Wallet",
    technologies: [
      { name: "Python", icon: "Code2" },
      { name: "Flask", icon: "Flask" },
      { name: "SQLite", icon: "Database" },
    ],
    github: "https://github.com/Masalale/group_3_project",
  },
  {
    title: "Quick Open Vote System",
    description:
      "Production-ready voting system with email-based and casual-based voting modes, real-time results, and comprehensive admin dashboard.",
    projectIcon: "Vote",
    technologies: [
      { name: "Node.js", icon: "Server" },
      { name: "Express", icon: "Zap" },
      { name: "SQLite", icon: "Database" },
      { name: "React", icon: "Atom" },
    ],
    github: "https://github.com/MichaelAngelo-11/Quick-Open-Vote-system",
  },
  {
    title: "Recipe Finder CLI Application",
    description:
      "CLI tool for discovering recipes based on available ingredients and cuisine preferences with API integration and containerized deployment",
    projectIcon: "ChefHat",
    technologies: [
      { name: "Python", icon: "Code2" },
      { name: "Docker", icon: "Container" },
      { name: "API", icon: "Cloud" },
    ],
    github: "https://github.com/Masalale/recipe_finder",
  },
  {
    title: "The Braniacs Community Website",
    description:
      "Responsive website for youth empowerment initiative focused on job creation through art and culture.",
    projectIcon: "Users",
    technologies: [
      { name: "HTML", icon: "FileCode" },
      { name: "CSS", icon: "Palette" },
      { name: "JavaScript", icon: "FileJson" },
      { name: "Tailwind", icon: "Wind" },
    ],
    github: "https://github.com/Masalale/the_braniacs",
    live: "https://the-braniacs.vercel.app/",
  },
  {
    title: "Student Assignment Reminder System",
    description:
      "Automated CLI application that alerts students about upcoming assignment deadlines.",
    projectIcon: "Bell",
    technologies: [
      { name: "Bash", icon: "Terminal" },
      { name: "Python", icon: "Code2" },
    ],
    github: "https://github.com/Masalale/submission_reminder_app_masalale",
  },
];
