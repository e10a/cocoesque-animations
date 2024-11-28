import { Experience } from "@/types/ContentfulData.ts";

export const Experiences = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="self-stretch flex-col justify-start items-center gap-5 flex">
      {experiences.map((experience) => (
        <div
          key={experience.id}
          className="self-stretch flex-col justify-start items-center gap-2 flex"
        >
          <div className="self-stretch flex-col justify-start items-start flex">
            <h4 className="w-full">
              <div>
                {experience.title}
                {experience.is_remote && " (REMOTE)"}
              </div>
              <div className="my-2 960:my-0 960:text-right uppercase leading-tight tracking-wide">
                {experience.years}
              </div>
            </h4>
            <h5 className="">
              {experience.company}
              {" • "}
              {experience.location}
            </h5>
          </div>
          <ul className="self-stretch list-disc pl-5 flex flex-col gap-1">
            {experience.items.map((item, index) => (
              <li key={`${index}-${item.length}`}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
