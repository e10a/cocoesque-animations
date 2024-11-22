/* eslint-disable react-hooks/exhaustive-deps */
import { FadeIn } from "@/animations/FadeIn";
import { ScrollSlideY } from "@/animations/ScrollSlideY";
import { useEffect, useRef, useState } from "react";
import { Skill } from "@/components/Skill";

export const HomeSkills = ({ skills }: { skills: any[] }) => {
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

  const columnConfig = {
    0: {
      yStartPositionPercentage: -25,
      yEndPositionPercentage: 0,
    },
    1: {
      yStartPositionPercentage: -50,
      yEndPositionPercentage: 0,
    },
  };

  const renderColumn = (index: number) => {
    const itemStartPosition = index * itemsPerCol;
    const itemEndPosition = itemStartPosition + itemsPerCol;
    const keyValue = (index % 2) as 0 | 1;
    const config = columnConfig[keyValue];

    return (
      <ScrollSlideY
        startScroll="top 90%"
        endScroll="bottom 0%"
        yStartPositionPercentage={config.yStartPositionPercentage}
        yEndPositionPercentage={config.yEndPositionPercentage}
        triggerElement={containerRef.current}
        transformOrigin="center"
      >
        <div className="grid gap-4">
          <div style={{ height: keyValue ? 25 : 50 }} className="skill-card" />
          {skills.slice(itemStartPosition, itemEndPosition).map((skill) => (
            <Skill key={skill.sys.id} skill={skill.fields} />
          ))}
          {skills.slice(itemStartPosition, itemEndPosition).map((skill) => (
            <Skill key={skill.sys.id} skill={skill.fields} />
          ))}
          <div style={{ height: keyValue ? 25 : 50 }} className="skill-card" />
        </div>
      </ScrollSlideY>
    );
  };

  return (
    <section className="section-w-full">
      <div className="mt-16 flex flex-col gap-1">
        <h2>Skills</h2>
        <p>What&apos;s in my tool belt</p>
      </div>
      <div
        data-cols={numberOfCols}
        data-items={itemsPerCol}
        className="bg-gradient-to-br from-indigo-500 to-teal-500 text-white py-8 h-[400px] overflow-hidden shadow-inner"
        ref={containerRef}
      >
        <FadeIn startOpacity={0.6}>
          <div className="max-w-[1440px] mx-auto flex iitems-center justify-center">
            <div className="inline-flex gap-4">
              {skills &&
                Array(numberOfCols)
                  .fill(undefined)
                  .map((_, i) => (
                    <div key={`column-${i}`} className="flex-1">
                      {renderColumn(i)}
                    </div>
                  ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
