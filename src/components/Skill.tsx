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
    <div className="skill-card">
      <div className="flex flex-col items-center gap-4 pb-1">
        {skill?.image && (
          <img
            className="h-20 w-auto"
            src={skill?.image?.fields?.file?.url}
            alt={skill?.longName}
          />
        )}
        <div className="font-bold leading-tight">{skill.longName}</div>
      </div>
    </div>
  );
};
