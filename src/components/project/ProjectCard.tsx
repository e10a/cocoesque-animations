import ProjectCardInner from "./ProjectCardInner";
import { Project as ProjectType } from "@/types/ContentfulData";
import { styled } from "@linaria/react";

const ProjectContainer = styled.div`
  border-radius: var(--space-2);
  display: flex;
  flex-direction: column;
  min-width: var(--space-64);
  overflow: clip;
  position: relative;
  width: var(--space-64);
  z-index: 1;

  > *:first-child {
    height: 300px;
  }

  &:has(> div:first-child) {
    border: 4px solid rgba(var(--rgb-fuchsia-500), 0.8);
  }

  &:has(> a:first-child) {
    box-shadow: 0 0 3px rgba(var(--rgb-black), 0.2);

    &:hover {
      box-shadow: 0 0 20px 10px rgba(var(--rgb-violet-500), 1);
      outline: 2px solid rgba(var(--rgb-fuchsia-500), 1);
    }
  }
`;

export default function ProjectCard({ project }: { project?: ProjectType }) {
  return (
    <>
      {!project && (
        <ProjectContainer>
          <ProjectCardInner />
        </ProjectContainer>
      )}

      {project?.fields && project?.fields.comingSoon && (
        <ProjectContainer data-view-timeline="coming_soon_projects">
          <div
            title={project?.fields.displayTitle}
            data-view-animate="coming_soon_projects"
          >
            <ProjectCardInner project={project} />
          </div>
        </ProjectContainer>
      )}

      {project?.fields &&
        !project?.fields.comingSoon &&
        project?.fields.externalLink && (
          <ProjectContainer>
            <a
              role="button"
              href={project?.fields.externalLink}
              target="_blank"
              title={project?.fields.displayTitle}
              rel="noreferrer"
            >
              <ProjectCardInner project={project} />
            </a>
          </ProjectContainer>
        )}
    </>
  );
}