import { styled } from "@linaria/react";
import { Skill as SkillType } from "@/types/ContentfulData.ts";

const Outer = styled.div`
  backdrop-filter: blur(5px);
  background-color: rgba(var(--color-white) / 0.3);
  border-radius: var(--space-3);
  box-shadow: 0 0 0 2px rgba(var(--color-black) / 0.05);
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

export default function Skill({ fields }: SkillType) {
  return (
    <Outer>
      <Inner>
        {fields.image && (
          <Image src={fields.image?.fields?.file?.url} alt={fields.longName} />
        )}
        <Name>{fields.longName}</Name>
      </Inner>
    </Outer>
  );
};
