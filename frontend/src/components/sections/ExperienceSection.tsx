
import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";

export default function ExperienceSection() {
  return (
    <SectionCard id="experience">
      <SectionTitle title="Experience" />

      <div className="info-list">
        <div className="info-item">
          <h3>Experience 01</h3>
          <p>경력 및 활동 내용 예정</p>
        </div>
      </div>
    </SectionCard>
  );
}
