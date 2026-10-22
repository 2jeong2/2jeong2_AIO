
import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";

export default function PublicationsSection() {
  return (
    <SectionCard id="publications">
      <SectionTitle title="Publications" />

      <div className="info-list">
        <div className="info-item">
          <h3>Publication 01</h3>
          <p>기술 문서 및 게시물 정보 예정</p>
        </div>
      </div>
    </SectionCard>
  );
}
