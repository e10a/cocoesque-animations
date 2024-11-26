import { Experience } from "@/types/ResumeData";
import { styled } from "@linaria/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  line-height: 120%;

  @media only screen and (width >=768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Title = styled.h4`
  margin-bottom: var(--space);
`;
const Years = styled.div`
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
const Company = styled.h5`
  font-size: var(--text-base);
  font-weight: normal;
  margin-top: var(--space);
  margin-bottom: var(--space-3);
`;
const ExperienceItems = styled.ul`
  margin: 0;
  padding-left: var(--space-4);
`;
const ExperienceItem = styled.li`
  line-height: 180%;
`;

export default function ResumeExperiences({ experiences }: { experiences: Experience[] }) {
  return (
    <Container>
      {experiences.map((experience: Experience) => (
        <section
          key={experience.id}
          className="self-stretch flex-col justify-start items-center gap-2 flex"
        >
          <div>
            <Header>
              <Title>
                {experience.title}
                {experience.is_remote && " (REMOTE)"}
              </Title>
              <Years>
                {experience.years}
              </Years>
            </Header>
            <Company>
              {experience.company}
              {" • "}
              {experience.location}
            </Company>
          </div>
          <ExperienceItems>
            {experience.items.map((item, index) => (
              <ExperienceItem key={`${index}-${item.length}`}>{item}</ExperienceItem>
            ))}
          </ExperienceItems>
        </section>
      ))}
    </Container>
  );
}