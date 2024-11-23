import { FadeIn } from "@/animations/FadeIn";
import { TypeEffect } from "@/animations/TypeEffect";
import { WaveEffect } from "@/animations/WaveEffect";
import { styled } from "@linaria/react";

const Outer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(var(--rgb-white));
  text-align: center;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
  gap: var(--space-4);
  border: 1px solid yellow;
  width: var(--screen-768);
`;
const Title = styled.h1`
  font-size: var(--text-5xl);
  margin: 0;
`;
const Subtitle = styled.h2`
  font-size: var(--text-2xl);
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.05em;
  opacity: 0.9;
`;
const Tagline = styled.p`
  font-size: var(--text-2xl);
  position: relative;
`;
const TaglineInvisible = styled.p`
  visibility: hidden;
  position: relative;
  z-index: -1;
`;
const TaglineVisible = styled.p`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;

export const HomeHero = ({
  title,
  subtitle,
  tagline,
  ctas = [],
}: {
  title: string;
  subtitle: string;
  tagline: string;
  ctas: {
    sys: {
      id: string;
    };
    fields: {
      url: string;
      text: string;
    };
  }[];
}) => {
  const handleClick = (
    cta: { fields: { url: string } },
    event: React.MouseEvent
  ) => {
    const { url } = cta.fields;

    if (url.startsWith("#")) {
      event.preventDefault();

      const target = document.querySelector(url);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };
  return (
    <>
      <Outer id="hero-inner">
        <FadeIn>
          <Header>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Tagline>
              <TaglineInvisible>{tagline}</TaglineInvisible>
              <TaglineVisible>
                <TypeEffect showCursor text={tagline} />
              </TaglineVisible>
            </Tagline>
          </Header>
        </FadeIn>
        <div className="flex flex-wrap justify-center gap-2 768:gap-5">
          {Boolean(ctas.length) && (
            <WaveEffect delay={0.4}>
              {ctas.map((cta) => (
                <a
                  key={cta.sys.id}
                  className="button button-transparent-white 768:button-2xl"
                  href={cta.fields.url}
                  onClick={(event) => handleClick(cta, event)}
                >
                  {cta.fields.text}
                </a>
              ))}
            </WaveEffect>
          )}
        </div>
      </Outer>
    </>
  );
};
