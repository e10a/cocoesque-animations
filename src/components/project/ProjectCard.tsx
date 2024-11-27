import ProjectCardContents from "./ProjectCardContents";
import { Project as ProjectType } from "@/types/ContentfulData";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const projectStyles = css`
  justify-content: end;
  background-image: linear-gradient(
    to right bottom,
    rgb(6 182 212),
    rgb(236 72 153)
  );
`;
const placeholderStyles = css`
  justify-content: center;
  background-image: linear-gradient(
    to right bottom,
    rgba(79 70 229 / 0.9),
    rgba(13 148 136 / 0.4)
  );
`;

const ProjectCardOuter = styled.div`
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

  &:has(> a:first-child) {
    box-shadow: 0 0 3px rgb(var(--color-black) / 0.2);

    &:hover {
      box-shadow: 0 0 20px 10px rgb(var(--color-violet-500) / 1);
      outline: 2px solid rgb(var(--color-fuchsia-500) / 1);
    }
  }
`;
const ProjectCardInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
`;

export default function ProjectCard({ isUpcoming, project }: { isUpcoming: boolean; project?: ProjectType }) {
  return (
    <>
      {!project && (
        <ProjectCardOuter>
          <ProjectCardInner className={placeholderStyles}>
            <ProjectCardContents isUpcoming={isUpcoming} />
          </ProjectCardInner>
        </ProjectCardOuter>
      )}

      {project?.fields && project?.fields.comingSoon && (
        <ProjectCardOuter>
          <div title={project?.fields.displayTitle}>
            <ProjectCardInner className={projectStyles}>
              <ProjectCardContents isUpcoming={isUpcoming} project={project} />
            </ProjectCardInner>
          </div>
        </ProjectCardOuter>
      )}

      {project?.fields &&
        !project?.fields.comingSoon &&
        project?.fields.externalLink && (
          <ProjectCardOuter>
            <a
              role="button"
              href={project?.fields.externalLink}
              target="_blank"
              title={project?.fields.displayTitle}
              rel="noreferrer"
            >
              <ProjectCardInner className={projectStyles}>
                <ProjectCardContents isUpcoming={isUpcoming} project={project} />
              </ProjectCardInner>
            </a>
          </ProjectCardOuter>
        )}
    </>
  );
}
