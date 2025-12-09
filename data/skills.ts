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
    title: "Proficient",
    description: "Core technologies I work with confidently and regularly.",
    categoryIcon: "Flame",
    skills: [
      { name: "Python", icon: "Code2" },
      { name: "HTML/CSS", icon: "FileCode" },
      { name: "JavaScript", icon: "FileJson" },
      { name: "SQL", icon: "Database" },
      { name: "Git/GitHub", icon: "GitBranch" },
      { name: "Linux", icon: "Terminal" },
    ],
  },
  {
    title: "Comfortable",
    description: "Frameworks and tools I've used in production projects.",
    categoryIcon: "Wrench",
    skills: [
      { name: "Node.js", icon: "Server" },
      { name: "Java", icon: "Coffee" },
      { name: "C", icon: "Binary" },
      { name: "PHP", icon: "Globe" },
      { name: "MySQL", icon: "Database" },
      { name: "MS SQL Server", icon: "DatabaseZap" },
      { name: "Flask", icon: "Flask" },
      { name: "Express", icon: "Zap" },
      { name: "Docker", icon: "Container" },
      { name: "React", icon: "Atom" },
    ],
  },
  {
    title: "Learning",
    description: "Technologies I'm actively developing expertise in.",
    categoryIcon: "GraduationCap",
    skills: [
      { name: "C#", icon: "Hash" },
      { name: "Unity", icon: "Box" },
      { name: "AR/VR", icon: "Glasses" },
    ],
  },
  {
    title: "Tools",
    description: "Development environments and utilities I use daily.",
    categoryIcon: "Hammer",
    skills: [
      { name: "VS Code", icon: "Code" },
      { name: "Neovim", icon: "FileCode2" },
      { name: "Android Studio", icon: "Smartphone" },
      { name: "NetBeans", icon: "AppWindow" },
      { name: "Figma", icon: "Figma" },
      { name: "Chart.js", icon: "BarChart3" },
      { name: "jQuery", icon: "Braces" },
    ],
  },
];
