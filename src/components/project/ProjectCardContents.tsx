import { lazy } from "react";
import { Project } from "@/types/ContentfulData.ts";
import { styled } from "@linaria/react";

const ProjectBanner = lazy(() => import("@/components/project/ProjectBanner.tsx"));

const ProjectImage = styled.div`
  background-size: cover;
  inset: 0;
  position: absolute;
  z-index: 0;
`;
const ProjectContent = styled.div`
  backdrop-filter: blur(12px);
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
const PlaceholderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  color: rgb(var(--color-white));
`;
const PlaceholderTitle = styled.h3`
  font-weight: var(--text-bold);
  line-height: 110%;
  color: rgb(var(--color-white));
`;
const PlaceholderButtonTitle = styled.h4`
  font-size: var(--text-base);
  font-weight: var(--text-bold);
  line-height: 130%;
  margin-top: var(--space-8);
`;

const Placeholder = ({ isUpcoming }: { isUpcoming: boolean }) => {
  const buttons = [
    {
      title: "",
      text: isUpcoming ? "View Available Projects" : "View Upcoming Projects",
      url: isUpcoming ? "/#projects" : "/#projects-coming-soon",
    },
    {
      title: "Let's build something together!",
      text: "Contact Me",
      url: "/#contact",
    },
  ];

  return (
    <>
      <PlaceholderTitle>What&apos;s Next?</PlaceholderTitle>

      {buttons.map(button =>(
        <PlaceholderSection key={Math.random()}>
          {button.title &&
          <PlaceholderButtonTitle>{button.title}</PlaceholderButtonTitle>}

          <a
            className="button button-transparent-white button-sm"
            href={button.url}
            style={{ width: "100%" }}
          >
            {button.text}
          </a>
        </PlaceholderSection>
      ))}
    </>
  );
};

export default function ProjectCardContents({
  isUpcoming,
  project,
}: {
  isUpcoming: boolean;
  project?: Project;
}) {
  if (!project) return <Placeholder isUpcoming={isUpcoming} />;

  const { comingSoon, company, coverImage, displayTitle } = project.fields;

  const coverImageUrl = coverImage.fields?.file?.url;
  const companyName = company.fields?.name;

  return (
    <>
      {coverImageUrl && (
        <ProjectImage style={{ backgroundImage: `url(${coverImageUrl})` }} />
      )}

      {comingSoon && (
        <>
          <div
            data-group-child="coming_soon_projects"
            data-view-animate="home-coming-soon-projects"
          />
          <ProjectBanner />
        </>
      )}

      <ProjectContent>
        <h3>{displayTitle}</h3>
        <p>{companyName}</p>
      </ProjectContent>
    </>
  );
}
