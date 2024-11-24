import { styled } from "@linaria/react";
import { marked } from "marked";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h2`
  margin: 0;
`;
const Content = styled.div`
  background-color: rgb(var(--rgb-white));
  color: rgb(var(--rgb-black));
  padding: var(--space-2) var(--space-8);
  border-radius: var(--space-2);
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin: var(--space-4) auto 0;
  max-width: var(--screen-960);
  width: 80%;
`;

export const HomeAbout = ({
  about,
}: {
  about: {
    displayTitle: string;
    displaySubTitle: string;
    displayDescription: string;
  };
}) => {
  return (
    <>
      <Header>
        <Title>{about.displayTitle}</Title>
        <p>{about.displaySubTitle}</p>
      </Header>
      <Content>
        {about.displayDescription && (
          <div
            dangerouslySetInnerHTML={{
              __html: marked.parse(about.displayDescription),
            }}
          ></div>
        )}
      </Content>
    </>
  );
};
