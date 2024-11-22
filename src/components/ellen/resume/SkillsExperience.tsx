interface Skill {
  id: string | number;
  title: string;
  skills: string;
}

export const SkillsExperience = ({ skills }: { skills: Skill[] }) => {
  return (
    <>
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="flex-col justify-start items-start gap-1.5 flex"
        >
          <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
            <h3 className="font-post-grotesk text-black font-bold tracking-tight">
              {skill.title}
            </h3>
          </div>
          <p className="self-stretch font-medium">{skill.skills}</p>
        </div>
      ))}
    </>
  );
};
