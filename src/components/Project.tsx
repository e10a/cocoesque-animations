import { Project as ProjectType } from "@/types/ContentfulData";
import { styled } from "@linaria/react";

const Content = styled.div`
  padding: var(--space-4);
  min-height: var(--space-24);
  backdrop-blur: blur(12px);
  background-image: linear-gradient(to right bottom, rgba(79, 70, 229, 0.9), rgba(13, 148, 136, 0.4));
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  color: rgb(var(--rgb-white));
  text-align: left;
`;
const CompanyName = styled.p`
  font-size: var(--text-sm);
  font-weight: var(--text-thin);
  letter-spacing: 0.6px;
  line-height: 100%;
  text-transform: uppercase;
  margin: 0;
`;
const Title = styled.h3`
  font-size: var(--text-base);
  font-weight: var(--text-bold);
  letter-spacing: 0.8px;
  line-height: var(--space-4);
  text-transform: uppercase;
  margin: 0;
`;

export default function Project({ project }: { project: ProjectType }) {
  const {
    accentColor,
    comingSoon,
    company,
    coverImage,
    displayTitle,
    externalLink,
    slug,
  } = project.fields;

  const getProjectUrl = () => {
    const slugs = [slug];
    return `/${slugs.join("/")}`;
  };

  const handleClick = (event: React.MouseEvent) => {
    if (comingSoon) {
      event.preventDefault();
    }
  };

  return (
    <a
      role="button"
      className={`project-card group ${comingSoon ? "cursor-default" : "cursor-pointer"
        }`}
      href={externalLink || getProjectUrl()}
      target={externalLink ? "_blank" : ""}
      title={displayTitle}
      onClick={handleClick}
      rel="noreferrer"
    >
      <div
        className={`h-full w-full relative bg-gradient-to-br ${accentColor || "from-orange-500"
          } to-pink-500`}
      >
        {
          coverImage && <div
            className="absolute inset-0 z-0 bg-cover"
            style={{
              backgroundImage: `url(${coverImage.fields?.file?.url}) ||
                "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
              ) `,
            }}
          />
        }

        <div className="relative z-1 flex flex-col h-full">
          <div className="relative flex-1">
            {comingSoon && (
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/30 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300 ease-linear" />
            )}
          </div>

          {comingSoon && (
            <div className="shadow-md bg-gradient-to-r from-purple-500 to-pink-500 z-1 absolute top-0 left-0 mt-4 flex gap-2 py-2 px-2 items-center rounded-r-md">
              <div className="text-xs text-white font-bold uppercase tracking-wider leading-tight">
                Coming Soon!
              </div>
            </div>
          )}

          <Content>
            <Title>
              {displayTitle}
            </Title>
            <CompanyName>
              {company.fields?.name}
            </CompanyName>
          </Content>
        </div>
      </div>
    </a >
  );
};
