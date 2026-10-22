
import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";
import SkillBadge from "../common/SkillBadge";

const skills = [
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "Docker",
  "AWS",
];

export default function SkillsSection() {
  return (
    <SectionCard id="skills">
      <SectionTitle title="Skills" />

      <div className="skill-list">
        {skills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>
    </SectionCard>
  );
}
