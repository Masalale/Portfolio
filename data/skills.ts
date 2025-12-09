export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Proficient",
    description: "Core technologies I work with confidently and regularly.",
    skills: ["Python", "HTML/CSS", "JavaScript", "SQL", "Git/GitHub", "Linux Systems"],
  },
  {
    title: "Comfortable",
    description: "Frameworks and tools I've used in production projects.",
    skills: [
      "Node.js",
      "Java",
      "C",
      "PHP",
      "MySQL",
      "MS SQL Server",
      "Flask",
      "Express",
      "Docker",
      "React",
    ],
  },
  {
    title: "Learning",
    description: "Technologies I'm actively developing expertise in.",
    skills: ["C#", "Unity", "AR/VR Development"],
  },
  {
    title: "Tools",
    description: "Development environments and utilities I use daily.",
    skills: [
      "VS Code",
      "Neovim",
      "Android Studio",
      "NetBeans",
      "Figma",
      "Chart.js",
      "jQuery",
    ],
  },
];
