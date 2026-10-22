
import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";

export default function AboutSection() {
  return (
    <SectionCard id="about">
      <SectionTitle title="About Me" />

      <p className="section-description">
        자기소개 및 관심 분야를 작성할 영역입니다.
      </p>
    </SectionCard>
  );
}
