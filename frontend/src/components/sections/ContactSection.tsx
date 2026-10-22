
import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";

export default function ContactSection() {
  return (
    <SectionCard id="contact">
      <SectionTitle title="Contact" />

      <p className="section-description">
        이메일 및 GitHub 링크가 들어갈 영역입니다.
      </p>
    </SectionCard>
  );
}
