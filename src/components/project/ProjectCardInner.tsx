import ProjectBanner from "./ProjectBanner";
import { Project } from "@/types/ContentfulData";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const projectStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: end;
  position: relative;
  width: 100%;
`;

const PlaceholderOuter = styled.div`
  background-image: linear-gradient(
    to right bottom,
    rgba(79 70 229 / 0.9),
    rgba(13 148 136 / 0.4)
  );
`;
const ProjectOuter = styled.div`
  background-image: linear-gradient(
    to right bottom,
    rgb(6 182 212),
    rgb(236 72 153)
  );
`;
const ProjectImage = styled.div`
  background-size: cover;
  inset: 0;
  position: absolute;
  z-index: 0;
`;
const ProjectContent = styled.div`
  backdrop-blur: blur(12px);
  background-image: linear-gradient(
    to right bottom,
    rgba(79 70 229 / 0.9),
    rgba(13 148 136 / 0.4)
  );
  color: rgb(var(--color-white));
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  min-height: var(--space-24);
  padding: var(--space-4);
  position: relative;
  text-align: left;
  z-index: 1;

  h3 {
    font-size: var(--text-base);
    font-weight: var(--text-bold);
    letter-spacing: 0.8px;
    line-height: 120%;
    text-transform: uppercase;
    margin: 0;
  }

  p {
    font-size: var(--text-xs);
    font-weight: var(--text-thin);
    letter-spacing: 0.6px;
    line-height: 100%;
    text-transform: uppercase;
    margin: 0;
  }
`;

const Placeholder = () => {
  return (
    <PlaceholderOuter className={projectStyles}>
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
    </PlaceholderOuter>
  );
}

export default function ProjectCardInner({ project }: { project?: Project }) {
  if (!project?.fields) return (<Placeholder />);

  const { comingSoon, company, coverImage, displayTitle } = project.fields;

  const coverImageUrl = coverImage.fields?.file?.url;
  const companyName = company.fields?.name;

  return (
    <ProjectOuter className={projectStyles}>
      {coverImageUrl && (
        <ProjectImage style={{ backgroundImage: `url(${coverImageUrl})` }} />
      )}

      {comingSoon && (
        <>
          <div data-group-child="coming_soon_projects" />
          <ProjectBanner />
        </>
      )}

      <ProjectContent>
        <h3>{displayTitle}</h3>
        <p>{companyName}</p>
      </ProjectContent>
    </ProjectOuter>
  );
}
