import ProjectCard from "@/components/project/ProjectCard";
import Carousel from "@/components/Carousel";
import { Project as ProjectType, Projects } from "@/types/ContentfulData";
import { useEffect, useState } from "react";
import {styled} from  "@linaria/react";

const CarouselItem = styled.div`
  margin:var(--space-8) var(--space-2);
`;
// const ProjectCard = styled.div`
//   text-align: center;
//   border: 1px solid #e5e7eb;
//   border-radius: .5rem;
//   display: inline-flex;
//   height: 300px;
//   min-width: 15rem;
//   position: relative;
//   width: 15rem;
//   background-image: linear-gradient(to right bottom, rgba(79, 70, 229, 0.9), rgba(13, 148, 136, 0.4));
//   color: rgb(255 255 255);
// `;

export default function HomeProjectsActive({ projects }: Projects) {
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
