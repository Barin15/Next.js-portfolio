import type { Metadata } from "next";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/app/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of digital design and development projects by Alex Morgan.",
};

export default function ProjectsPage() {
  return (
    <main className="page-main">
      <section className="container page-heading">
        <p className="eyebrow">Selected work · 2025—26</p>
        <h1>Good ideas,<br /><span>made real.</span></h1>
        <p className="page-lede">
          A few collaborations built around thoughtful design, useful technology,
          and people doing things a little differently.
        </p>
      </section>
      <section className="container projects-page" aria-label="Selected projects">
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
