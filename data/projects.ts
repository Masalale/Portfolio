export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "NYC Urban Mobility Data Explorer",
    description:
      "Full-stack application analyzing 1.4M+ NYC taxi trip records with REST API, normalized database design, and interactive visualizations.",
    technologies: ["Python", "Flask", "SQLite", "JavaScript"],
    github: "https://github.com/Masalale/urban_mobility_data_explorer",
  },
  {
    title: "Mobile Money Transaction Processor",
    description:
      "Enterprise web app processing mobile money SMS data with ETL pipeline, REST API, and analytics dashboard.",
    technologies: ["Python", "Flask", "SQLite"],
    github: "https://github.com/Masalale/group_3_project",
  },
  {
    title: "Quick Open Vote System",
    description:
      "Production-ready voting system with email-based and casual-based voting modes, real-time results, and comprehensive admin dashboard.",
    technologies: ["Node.js", "Express", "SQLite", "React"],
    github: "https://github.com/MichaelAngelo-11/Quick-Open-Vote-system",
  },
  {
    title: "Recipe Finder CLI Application",
    description:
      "CLI tool for discovering recipes based on available ingredients and cuisine preferences with API integration and containerized deployment",
    technologies: ["Python", "Docker", "Spoonacular API"],
    github: "https://github.com/Masalale/recipe_finder",
  },
  {
    title: "The Braniacs Community Website",
    description:
      "Responsive website for youth empowerment initiative focused on job creation through art and culture.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Masalale/the_braniacs",
    live: "https://the-braniacs.vercel.app/",
  },
  {
    title: "Student Assignment Reminder System",
    description:
      "Automated CLI application that alerts students about upcoming assignment deadlines.",
    technologies: ["Bash", "Python"],
    github: "https://github.com/Masalale/submission_reminder_app_masalale",
  },
];
