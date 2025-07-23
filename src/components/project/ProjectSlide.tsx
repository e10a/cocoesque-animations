import { Project } from "@/types/ContentfulData.ts";
import { styled } from "@linaria/react";

const Outer = styled.article`
  position: relative;
  z-index: 1;

  border: 1px solid white;

  height: 100%;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: ${(props) =>
    props.color
      ? `linear-gradient(var(--gradient-rb), var(${props.color}))`
      : "none"};
`;
const Image = styled.div`
  background-size: cover;
  inset: 0;
  position: absolute;
  z-index: 0;
  mask-image: radial-gradient(ellipse 100% 200%, black, transparent);
  mask-repeat: no-repeat;
  mask-position: center bottom;
`;
const Contents = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space);
  margin-bottom: 120px;
  background: white;
  padding: var(--space-5);
  box-shadow: 0 0 0 4px black;
  width: var(--space-128);

  > * {
    margin: 0;
  }
`;
const Button = styled.a`
  display: inline-flex;
  width: var(--space-64);
  margin: 0 auto;
`;

export default function ProjectSlide({ project }: { project: Project }) {
  const {
    company,
    coverImage,
    slideImage,
    displayTitle,
    externalLink,
    accentColor,
  } = project.fields;

  const imageUrl = slideImage
    ? slideImage?.fields?.file?.url
    : coverImage?.fields?.file?.url;

  const companyName = company.fields?.name;

  return (
    <Outer title={displayTitle} itemProp="project" color={accentColor}>
      {imageUrl && <Image style={{ backgroundImage: `url(${imageUrl})` }} />}

      <Contents>
        <header>
          <h3>{displayTitle}</h3>
          <p>{companyName}</p>
        </header>

        <Button
          href={externalLink}
          target="_blank"
          rel="noreferrer"
          className="button button-transparent-dark"
        >
          View Project
        </Button>
      </Contents>
    </Outer>
  );
}
