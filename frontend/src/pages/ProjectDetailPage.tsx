
import { Link, useParams } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import SectionCard from "../components/common/SectionCard";
import SectionTitle from "../components/common/SectionTitle";
import SkillBadge from "../components/common/SkillBadge";

import { projects } from "../data/projects";

export default function ProjectDetailPage() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <MainLayout>
        <SectionCard>
          <SectionTitle title="Project Not Found" />
          <Link to="/projects">← Projects</Link>
        </SectionCard>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <SectionCard>
        <Link to="/projects" className="page-back">
          ← Projects
        </Link>

        <SectionTitle title={project.title} />

        <p className="section-description">
          {project.description}
        </p>

        <div className="skill-list">
          {project.technologies.map((tech) => (
            <SkillBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="info-item" style={{ marginTop: 24 }}>
          <h3>Project Overview</h3>
          <p>프로젝트 상세 내용 예정</p>
        </div>
      </SectionCard>
    </MainLayout>
  );
}
