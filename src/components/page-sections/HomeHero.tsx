import { styled } from "@linaria/react";

const Outer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(var(--color-white));
  text-align: center;
  gap: var(--space-3);
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90vw;
  margin: 0 auto;
  gap: var(--space-2);
  width: var(--screen-768);
`;
const Title = styled.h1`
  font-weight: var(--text-bold);
  margin: 0;
`;
const Subtitle = styled.h2`
  font-size: var(--text-sm);
  text-transform: uppercase;
  font-weight: var(--text-extrabold);
  letter-spacing: var(--space-half);
  opacity: 0.9;
  margin: 0;

  @media only screen and (width >=768px) {
    font-size: var(--text-lg);
  }
`;
const Tagline = styled.p`
  line-height: 160%;

  @media only screen and (width >=768px) {
    font-size: var(--text-2xl);
  }
`;
const CtaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-3);
  @media only screen and (width >=768px) {
    gap: var(--space-5);
  }
`;
const Cta = styled.a`
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (width >=768px) {
    font-size: var(--text-2xl);
    padding: var(--space-4) var(--space-5);
  }
`;

export default function HomeHero({
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
}) {
  return (
    <>
      <Outer id="hero-inner">
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Tagline>{tagline}</Tagline>
        </Header>

        <CtaWrapper data-animate="home_hero_buttons">
          {ctas.map((cta) => (
            <Cta
              className="button button-transparent-white"
              key={cta.sys.id}
              href={cta.fields.url}
            >
              {cta.fields.text}
            </Cta>
          ))}
        </CtaWrapper>
      </Outer>
    </>
  );
};
