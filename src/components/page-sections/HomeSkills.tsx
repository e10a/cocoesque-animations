import { useEffect, useRef, useState } from "react";
import { Skill } from "@/components/Skill";
import { styled } from "@linaria/react";
import { Skills as SkillsType } from "@/types/ContentfulData";

const Content = styled.div`
  background-image: linear-gradient(
    var(--gradient-br),
    var(--gradient-indigo-teal)
  );
  color: rgb(var(--rgb-white));
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  overflow: hidden;
  position: relative;
  max-height: 400px;
`;
const Skills = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex: 1 1 0%;
  gap: var(--space-3);
  justify-content: center;
  max-width: var(--space-40);
  min-width: var(--space-32);
`;
const ShadowTop = styled.div`
  box-shadow: rgba(var(--rgb-black), 0.8) 0 0 var(--space-2) var(--space);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;
const ShadowBottom = styled.div`
  box-shadow: rgba(var(--rgb-black), 0.15) 0 0 var(--space-2) var(--space);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export const HomeSkills = ({ skills }: SkillsType) => {
  const containerRef = useRef(null);
  const gridConfig = {
    320: { numberOfCols: 3, numberOfRows: 2 },
    480: { numberOfCols: 3, numberOfRows: 2 },
    768: { numberOfCols: 4, numberOfRows: 1 },
    1024: { numberOfCols: 5, numberOfRows: 1 },
    1280: { numberOfCols: 6, numberOfRows: 1 },
    1440: { numberOfCols: 7, numberOfRows: 1 },
    1536: { numberOfCols: 8, numberOfRows: 1 },
  };
  const getGridConfig = () => {
    const key = Object.keys(gridConfig).find(
      (key) => window.innerWidth < Number(key)
    );
    return gridConfig[(key ? Number(key) : 1536) as keyof typeof gridConfig];
  };

  const [numberOfCols, setNumberOfCols] = useState(
    getGridConfig().numberOfCols
  );

  const itemsPerCol = Math.floor(skills?.length / numberOfCols);

  useEffect(() => {
    const handleResize = () => {
      setNumberOfCols(getGridConfig().numberOfCols);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderColumn = (index: number) => {
    const itemStartPosition = index * itemsPerCol;
    const itemEndPosition = itemStartPosition + itemsPerCol;

    return skills
      .slice(itemStartPosition, itemEndPosition)
      .map((skill) => <Skill key={skill.sys.id} {...skill} />);
  };

  return (
    <Content
      data-animate="skills_container"
      data-cols={numberOfCols}
      data-items={itemsPerCol}
      ref={containerRef}
    >
      <ShadowTop />
      {skills &&
        Array(numberOfCols)
          .fill(undefined)
          .map((_, i) => (
            <Skills
              key={`column-${i + 1}`}
              className={`column-${i + 1}`}
              style={{
                transform: `translateY(${((i % 2) as 0 | 1) ? 0 : 5}%)`,
              }}
            >
              {renderColumn(i)}
            </Skills>
          ))}
      <ShadowBottom />
    </Content>
  );
};
