
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card"
    >
      <div className="project-thumbnail">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            loading="lazy"
          />
        ) : (
          <span>✦</span>
        )}
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}
