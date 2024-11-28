import Carousel from "@/components/Carousel.tsx";
import ProjectCard from "@/components/project/ProjectCard.tsx";
import { Project as ProjectType } from "@/types/ContentfulData.ts";
import {styled} from  "@linaria/react";

const CarouselItem = styled.div`
  margin:var(--space-8) var(--space-2);
`;

export default function ProjectCarousel({ isUpcoming, projects }: { isUpcoming: boolean; projects: ProjectType[] }) {
  if (!projects) return;

  return (
    <Carousel>
      {Object.values(projects).map(
        (project: ProjectType) => (
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
