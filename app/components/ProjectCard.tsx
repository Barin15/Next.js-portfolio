import Image from "next/image";
import type { Project } from "@/app/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image
          className="project-image"
          src={project.image}
          alt={project.imageAlt}
          width={800}
          height={620}
          sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
      </div>
      <div className="project-card-content">
        <div>
          <h3>{project.name}</h3>
          <p>{project.type} <span aria-hidden="true">·</span> {project.year}</p>
        </div>
        <span className="project-number">0{index + 1}</span>
      </div>
    </article>
  );
}
