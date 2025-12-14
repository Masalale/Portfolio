import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: string; // Lucide icon name
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
  categoryIcon: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces",
    categoryIcon: "Monitor",
    skills: [
      { name: "React", icon: "Atom" },
      { name: "JavaScript", icon: "FileJson" },
      { name: "HTML/CSS", icon: "FileCode" },
      { name: "Tailwind CSS", icon: "Wind" },
      { name: "Next.js", icon: "Layers" },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust server-side applications and APIs",
    categoryIcon: "Server",
    skills: [
      { name: "Python", icon: "Code2" },
      { name: "Node.js", icon: "Server" },
      { name: "Flask", icon: "Flask" },
      { name: "Express", icon: "Zap" },
      { name: "Java", icon: "Coffee" },
    ],
  },
  {
    title: "Database & APIs",
    description: "Designing data architecture and integrations",
    categoryIcon: "Database",
    skills: [
      { name: "MySQL", icon: "Database" },
      { name: "SQLite", icon: "Database" },
      { name: "MS SQL Server", icon: "DatabaseZap" },
      { name: "REST APIs", icon: "Cloud" },
      { name: "SQL", icon: "FileSpreadsheet" },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Streamlining development and deployment workflows",
    categoryIcon: "Settings",
    skills: [
      { name: "Docker", icon: "Container" },
      { name: "Git/GitHub", icon: "GitBranch" },
      { name: "Linux", icon: "Terminal" },
      { name: "VS Code", icon: "Code" },
      { name: "Figma", icon: "Figma" },
    ],
  },
];

