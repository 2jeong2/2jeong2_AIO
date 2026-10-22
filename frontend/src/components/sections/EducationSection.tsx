
import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";

export default function EducationSection() {
  return (
    <SectionCard id="education">
      <SectionTitle title="Education" />

      <div className="info-list">
        <div className="info-item">
          <h3>Education 01</h3>
          <p>교육 및 학력 정보 예정</p>
        </div>
      </div>
    </SectionCard>
  );
}
