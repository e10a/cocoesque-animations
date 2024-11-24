import { styled } from "@linaria/react";
import { marked } from "marked";

const Content = styled.div`
  background-color: rgb(var(--rgb-white));
  border-radius: var(--space-2);
  color: rgb(var(--rgb-black));
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin: var(--space-10) auto 0;
  max-width: var(--screen-960);
  padding: var(--space-8) var(--space-8) var(--space-4) ;
  text-align: left;
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
    <section>
      <header>
        <h2>{about.displayTitle}</h2>
        <p>{about.displaySubTitle}</p>
      </header>
      <Content>
        {about.displayDescription && (
          <div
            dangerouslySetInnerHTML={{
              __html: marked.parse(about.displayDescription),
            }}
          ></div>
        )}
      </Content>
    </section>
  );
};
