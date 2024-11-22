import { Project } from "@/components/Project";
import { Carousel } from "@/components/Carousel";

export const HomeProjectsComingSoon = ({ projects = [] }) => {
  return (
    <Carousel
      infinite={false}
      centerMode={true}
      slidesToShow={1}
      initialSlide={2}
      totalSlides={projects.length}
    >
      {projects.map(
        (project: { sys: { id: string }; fields: Record<string, unknown> }) => (
          <div key={project.sys.id} className="mx-2 mb-8">
            <Project project={project.fields} />
          </div>
        )
      )}
    </Carousel>
  );
};
