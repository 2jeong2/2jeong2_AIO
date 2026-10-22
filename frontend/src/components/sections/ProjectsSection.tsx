
import { Link } from "react-router-dom";

import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";

import { projects } from "../../data/projects";

export default function ProjectsSection() {
  return (
    <SectionCard id="projects">
      <SectionTitle title="Projects" />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

      <p style={{ marginTop: 20 }}>
        <Link to="/projects">View All Projects →</Link>
      </p>
    </SectionCard>
  );
}
