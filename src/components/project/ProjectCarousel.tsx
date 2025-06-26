import { lazy } from "react";
import { Project } from "@/types/ContentfulData.ts";
import { styled } from  "@linaria/react";

const Carousel = lazy(() => import("@/components/Carousel.tsx"));
const ProjectCard = lazy(() => import("@/components/project/ProjectCard.tsx"));

const CarouselItem = styled.div`
  margin:var(--space-8) var(--space-2);
`;

export default function ProjectCarousel({ isUpcoming, projects }: { isUpcoming: boolean; projects: Project[] }) {
  if (!projects) return;

  return (
    <Carousel>
      {Object.values(projects).map(
        (project: Project) => (
          <CarouselItem key={project.sys.id}>
            <ProjectCard isUpcoming={isUpcoming} project={project} />
          </CarouselItem>
        )
      )}

      <CarouselItem>
        <ProjectCard isUpcoming={isUpcoming} />
      </CarouselItem>
    </Carousel>
  );
};
