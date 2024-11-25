import { useEffect, useRef, useState } from "react";
import { Skill } from "@/components/Skill";
import { styled } from "@linaria/react";
import { Skills as SkillsType } from "@/types/ContentfulData";

const SkillsContainer = styled.div`
  background-image: linear-gradient(
    var(--gradient-br),
    var(--gradient-indigo-teal)
  );
  color: rgb(var(--rgb-white));
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  overflow: clip;
  position: relative;
  max-height: 400px;
`;
const ColumnOuter = styled.div`
  position: relative;
  flex: 1 1 0%;
  max-width: var(--space-40);
  min-width: var(--space-32);
`;
const ColumnInner = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  justify-content: center;
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

export default function HomeSkills({ skills }: SkillsType) {
  const containerRef = useRef(null);

  const gridConfig = {
    320: { columns: 3 },
    480: { columns: 3 },
    768: { columns: 4 },
    1024: { columns: 5 },
    1280: { columns: 6 },
    1440: { columns: 7 },
    1536: { columns: 8 },
  };

  const getGridConfig = () => {
    const key = Object.keys(gridConfig).find(
      (key) => window.innerWidth < Number(key)
    );
    return gridConfig[(key ? Number(key) : 1536) as keyof typeof gridConfig];
  };

  const [numberOfColumns, setNumberOfColumns] = useState(
    getGridConfig().columns
  );

  const itemsPerCol = Math.floor(skills?.length / numberOfColumns);

  useEffect(() => {
    const handleResize = () => {
      setNumberOfColumns(getGridConfig().columns);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SkillsContainer
      data-animate="skills_container"
      data-timeline="skills_container"
      data-cols={numberOfColumns}
      data-items={itemsPerCol}
      ref={containerRef}
    >
      <ShadowTop />

      {skills &&
        Array(numberOfColumns)
          .fill([])
          .map((_, index) => {
            const columnNumber = index + 1;
            const startPosition = index * itemsPerCol;
            const endPosition = startPosition + itemsPerCol;
            const nthValue = index % 2 as 0 ? "even" : "odd";
            const iterations = [1, 2];
            const slicedSkills = skills.slice(startPosition, endPosition);

            return (
              <ColumnOuter
                key={`column-${columnNumber}`}
                data-col={`${columnNumber} of ${numberOfColumns}`}
              >
                <ColumnInner data-animate={`column_inner_${nthValue}`}>
                  {
                    iterations.map((iteration: number) =>
                      slicedSkills
                        .map((skill) => <Skill key={`${iteration}-${skill.sys.id}`} {...skill} />)
                    )
                  }
                </ColumnInner>
              </ColumnOuter>
            )
          })}

      <ShadowBottom />
    </SkillsContainer>
  );
};
