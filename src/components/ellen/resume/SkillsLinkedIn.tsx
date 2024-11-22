import { SkillLevel } from "./SkillLevel";

interface Skill {
  id: string | number;
  level: number;
  name: string;
}

export const SkillsLinkedIn = ({ skills }: { skills: Skill[] }) => {
  return (
    <div className="self-stretch p-2.5 bg-slate-50 rounded-lg flex-col justify-start items-start gap-2.5 flex">
      <div className="flex-col justify-start items-start gap-2.5 flex">
        <div className="flex-col justify-start items-start gap-1 flex">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="self-stretch justify-start items-center gap-2.5 inline-flex"
            >
              <SkillLevel level={skill.level} />
              <p className="grow shrink basis-0 tracking-tight">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
