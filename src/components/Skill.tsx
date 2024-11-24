import { styled } from "@linaria/react";

const Outer = styled.div`
  backdrop-filter: blur(5px);
  background-color: rgba(var(--rgb-white), 0.3);
  border-radius: var(--space-3);
  box-shadow: 0 0 0 2px rgba(var(--rgb-black), 0.05);
  display: flex;
  flex-direction: column;
  gap: var(--space);
  padding: var(--space-4);
  width: 100%;
`;
const Inner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;
const Image = styled.img`
  height: var(--space-20);
  width: auto;
`;
const Name = styled.div`
  font-weight: bold;
  line-height: 1.25;
`;

interface SkillProps {
  skill: {
    image?: {
      fields?: {
        file?: {
          url?: string;
        };
      };
    };
    longName?: string;
  };
}

export const Skill = ({ skill }: SkillProps) => {
  return (
    <Outer>
      <Inner>
        {skill?.image && (
          <Image src={skill?.image?.fields?.file?.url} alt={skill?.longName} />
        )}
        <Name>{skill.longName}</Name>
      </Inner>
    </Outer>
  );
};
