import { StructuredData } from "@/components/seo/StructuredData";
import { AboutSection } from "@/components/sections/AboutSection";
import { EntrepreneurshipSection } from "@/components/sections/EntrepreneurshipSection";
import { ExperienceHighlightsSection } from "@/components/sections/ExperienceHighlightsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsHighlightsSection } from "@/components/sections/ProjectsHighlightsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { buildFAQSchema } from "@/seo/schema";

export default function HomeRoute() {
  return (
    <>
      <StructuredData schemas={[buildFAQSchema()]} />
      <HeroSection />
      <AboutSection />
      <ExperienceHighlightsSection />
      <ProjectsHighlightsSection />
      <EntrepreneurshipSection />
      <TechStackSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
