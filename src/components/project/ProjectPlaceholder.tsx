import { styled } from "@linaria/react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  color: rgb(var(--color-white));
`;
const Title = styled.h3`
  font-weight: var(--text-bold);
  line-height: 110%
`;

export default function ProjectPlaceholder() {
  return (
    <>
      <Section>
        <Title>What&apos;s Next?</Title>
        <a
          className="button button-transparent-white button-sm"
          href="#projects-coming-soon"
        >
          View Upcoming Projects
        </a>
      </Section>

      <Section>
        <Title>Let&apos;s build something together!</Title>
        <a
          className="button button-transparent-white button-sm"
          href="#contact"
        >
          Get in Touch
        </a>
      </Section>
    </>
  );
}
