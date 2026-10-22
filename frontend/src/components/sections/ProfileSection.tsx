
import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";

export default function ProfileSection() {
  return (
    <SectionCard id="profile">
      <SectionTitle title="Profile" />
      <p className="section-description">
        안녕하세요.
      </p>
    </SectionCard>
  );
}
