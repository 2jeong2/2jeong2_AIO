
import { Link } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import SectionCard from "../components/common/SectionCard";
import SectionTitle from "../components/common/SectionTitle";
import ProjectCard from "../components/common/ProjectCard";

import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <MainLayout>
      <SectionCard>
        <Link to="/" className="page-back">
          ← Home
        </Link>

        <SectionTitle title="All Projects" />

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </SectionCard>
    </MainLayout>
  );
}
