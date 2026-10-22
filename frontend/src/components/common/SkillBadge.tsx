
interface SkillBadgeProps {
  name: string;
}

export default function SkillBadge({
  name,
}: SkillBadgeProps) {
  return <span className="skill-badge">{name}</span>;
}
