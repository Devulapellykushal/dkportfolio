import { StructuredData } from "@/components/seo/StructuredData";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { buildProjectsCollectionSchema } from "@/seo/schema";

export default function ProjectsRoute() {
  return (
    <>
      <StructuredData schemas={[buildProjectsCollectionSchema()]} />
      <ProjectsSection />
    </>
  );
}
