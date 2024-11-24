import { useEffect, useState } from "react";
import { Project } from "@/components/Project";
import { Carousel } from "@/components/Carousel";
import { Projects } from "@/types/ContentfulData";

export const HomeProjectsActive = ({ projects }: Projects) => {
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
        (project: { sys: { id: string }; fields: Record<string, unknown> }) => (
          <div key={project.sys.id} className="my-8 mx-2">
            <Project project={project.fields} />
          </div>
        )
      )}
      <div className="my-8 mx-2">
        <div className="project-card bg-gradient-to-br from-indigo-600/90 to-teal-600/40 text-white">
          <div className="flex-1 flex flex-col gap-4 p-4 justify-center">
            <div className="flex flex-col gap-2">
              <div className="font-bold leading-tight">What&apos;s Next?</div>
              <a
                className="button button-transparent-white button-sm"
                href="#projects-coming-soon"
              >
                View Upcoming Projects
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="leading-tight">
                Let&apos;s build something together!
              </div>
              <a
                className="button button-transparent-white button-sm"
                href="#contact"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
