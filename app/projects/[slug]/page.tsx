import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { LucideIcon, Code2, ArrowLeft, Github, ExternalLink, Mail } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// Generate static params for all projects
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Get icon component helper - cast through unknown to avoid TS error
function getIcon(iconName: string): LucideIcon {
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    return icons[iconName] || Code2;
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const ProjectIcon = getIcon(project.projectIcon);

    return (
        <>
            <Navbar sectionColors={["var(--burgundy)", "var(--gold)"]} />

            <main className="case-study">
                {/* Hero Section */}
                <section className="case-study-hero">
                    <div className="case-study-hero-content">
                        <Link href="/#work" className="case-study-back">
                            <ArrowLeft size={20} />
                            <span>Back to Work</span>
                        </Link>

                        <span className="case-study-category">{project.category}</span>
                        <h1 className="case-study-title">{project.title}</h1>
                        <p className="case-study-description">{project.description}</p>

                        {/* Action Buttons */}
                        <div className="case-study-actions">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="case-study-btn primary"
                            >
                                <Github size={18} />
                                View on GitHub
                            </a>
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="case-study-btn secondary"
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="case-study-hero-image">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </section>

                {/* Project Details */}
                <section className="case-study-content">
                    {/* Overview */}
                    <div className="case-study-section">
                        <h2>Project Overview</h2>
                        <div className="case-study-overview">
                            {project.longDescription.split("\n\n").map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="case-study-section">
                        <h2>Technologies Used</h2>
                        <div className="case-study-tech-grid">
                            {project.technologies.map((tech, index) => {
                                const TechIcon = getIcon(tech.icon);
                                return (
                                    <div key={index} className="case-study-tech-item">
                                        <div className="case-study-tech-icon">
                                            <TechIcon className="w-6 h-6" />
                                        </div>
                                        <span>{tech.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Skills Demonstrated */}
                    <div className="case-study-section">
                        <h2>Skills Demonstrated</h2>
                        <div className="case-study-skills">
                            {project.skills.map((skill, index) => (
                                <span key={index} className="case-study-skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="case-study-cta">
                        <h3>Interested in this project?</h3>
                        <p>Check out the source code or get in touch to discuss similar work.</p>
                        <div className="case-study-actions">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="case-study-btn primary"
                            >
                                <Github size={18} />
                                View Source Code
                            </a>
                            <Link href="/#contact" className="case-study-btn secondary">
                                <Mail size={18} />
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
