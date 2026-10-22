
import MainLayout from "../components/layout/MainLayout";

import ProfileSection from "../components/sections/ProfileSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "../components/sections/SkillsSection";
import PublicationsSection from "../components/sections/PublicationsSection";
import ContactSection from "../components/sections/ContactSection";

export default function HomePage() {
  return (
    <MainLayout>
      <ProfileSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <PublicationsSection />
      <ContactSection />
    </MainLayout>
  );
}
