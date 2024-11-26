import Carousel from "@/components/Carousel";
import ProjectCard from "@/components/project/ProjectCard";
import { Project as ProjectType, Projects } from "@/types/ContentfulData";
import { useEffect, useState } from "react";
import {styled} from  "@linaria/react";

const CarouselItem = styled.div`
  margin:var(--space-8) var(--space-2);
`;

export default function ProjectCarousel({ projects }: Projects) {
  if (!projects) return;

  const [hideControls, setHideControls] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setHideControls(window.innerWidth >= 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Carousel
      infinite={false}
      centerMode={true}
      slidesToShow={1}
      initialSlide={2}
      totalSlides={projects.length}
      hideControls={hideControls}
    >
      {projects.map(
        (project: ProjectType) => (
          <CarouselItem key={project.sys.id}>
            <ProjectCard project={project} />
          </CarouselItem>
        )
      )}

      <CarouselItem>
        <ProjectCard />
      </CarouselItem>
    </Carousel>
  );
};
