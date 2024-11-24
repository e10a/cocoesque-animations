import { useEffect, useRef, useState } from "react";
import { Skill } from "@/components/Skill";
import { styled } from "@linaria/react";
import { Skills as SkillsType } from "@/types/ContentfulData";

const Content = styled.div`
  background-image: linear-gradient(
    var(--gradient-br),
    var(--gradient-indigo-teal)
  );
  box-shadow: inset 0 0 0 1px rgba(var(--rgb-white), 0.2);
  color: rgb(var(--rgb-white));
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  height: 400px;
  margin-top: var(--space-10);
  overflow: hidden;
  padding: var(--space-8) 0;
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
    <section>
      <header>
        <h2>Skills</h2>
        <p>What&apos;s in my tool belt</p>
      </header>
      <Content
        data-cols={numberOfCols}
        data-items={itemsPerCol}
        ref={containerRef}
      >
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
      </Content>
    </section>
  );
};
