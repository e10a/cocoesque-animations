import Project from "@/components/Project";
import Carousel from "@/components/Carousel";
import { Project as ProjectType, Projects } from "@/types/ContentfulData";

export default function HomeProjectsComingSoon({ projects }: Projects) {
  return (
    <Carousel
      infinite={false}
      centerMode={true}
      slidesToShow={1}
      initialSlide={2}
      totalSlides={projects.length}
    >
      {projects.map(
        (project: ProjectType) => (
          <div key={project.sys.id} className="mx-2 mb-8">
            <Project project={project} />
          </div>
        )
      )}
    </Carousel>
  );
};
