import ProjectBanner from "./ProjectBanner";
import { Project as ProjectType } from "@/types/ContentfulData";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const projectCss = css`
    display: inline-flex;
    height: 300px;
    min-width: var(--space-64);
    position: relative;
    width: var(--space-64);

    > div {
      background-color: rgb(203 213 225 / 1);
      box-shadow: 0 0 3px rgba(var(--rgb-gray-950), 0.2);
      border: 2px solid rgba(var(--rgb-fuchsia-500), 0.8);
      border-radius: var(--space-2);
      overflow: clip;
    }
`;

const ActiveProject = styled.a`
  cursor: pointer;

  &:hover {
    > div {
      box-shadow: 0 0 25px 5px rgba(var(--rgb-violet-500), 1);
      border: 2px solid rgba(var(--rgb-fuchsia-500), 1);
    }
  }
`;
const ComingSoonProject = styled.div`
  cursor: default;
`;
const ProjectOuter = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-image: linear-gradient(to right bottom, rgb(6, 182, 212), rgb(236, 72, 153));
`;
const ProjectImage = styled.div`
  background-size: cover;
  inset: 0;
  position: absolute;
  z-index: 0;
`;
const ProjectInner = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ProjectContent = styled.div`
  padding: var(--space-4);
  min-height: var(--space-24);
  backdrop-blur: blur(12px);
  background-image: linear-gradient(to right bottom, rgba(79, 70, 229, 0.9), rgba(13, 148, 136, 0.4));
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  color: rgb(var(--rgb-white));
  text-align: left;
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

export default function Project({ project }: { project: ProjectType }) {
  if (!project?.fields) return;

  const {
    comingSoon,
    company,
    coverImage,
    displayTitle,
    externalLink,
    slug,
  } = project.fields;

  const placeholderImageUrl = "";
  const coverImageUrl = coverImage?.fields?.file?.url;
  const companyName = company.fields?.name;

  const getProjectUrl = () => {
    const slugs = [slug];
    return `/${slugs.join("/")}`;
  };

  const handleClick = (event: React.MouseEvent) => {
    if (comingSoon) {
      event.preventDefault();
    }
  };

  const ProjectMain = () => {
    return (
      <>
        <ProjectOuter>
          <ProjectImage style={{ backgroundImage: `url(${coverImageUrl || placeholderImageUrl})` }} />

          <ProjectInner>
            <div style={{ position: "relative", flex: "1 1" }}>
              {comingSoon &&
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/30 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300 ease-linear" />
              }
            </div>

            {comingSoon && <ProjectBanner />}

            <ProjectContent>
              <h3>{displayTitle}</h3>
              <p>{companyName}</p>
            </ProjectContent>
          </ProjectInner>
        </ProjectOuter>
      </>
    );
  };

  return (
    <>
      {comingSoon &&
        <div style={{ margin: "var(--space-8) var(--space-2)", width: "100%", display: "inline-block" }}>
          <ComingSoonProject title={displayTitle} className={projectCss}>
            <ProjectMain />
          </ComingSoonProject>
        </div>
      }

      {!comingSoon &&
        <div style={{ margin: "var(--space-8) var(--space-2)", width: "100%", display: "inline-block" }}>
          <ActiveProject
            className={projectCss}
            role="button"
            href={externalLink || getProjectUrl()}
            target={externalLink ? "_blank" : ""}
            title={displayTitle}
            onClick={handleClick}
            rel="noreferrer"
          >
            <ProjectMain />
          </ActiveProject>
        </div>
      }
    </>
  );
};
