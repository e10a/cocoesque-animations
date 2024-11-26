import { useEffect, useState } from "react";
import Nav from "@/components/navigation/Nav";
import PageLoader from "@/components/PageLoader";
import PageLayout from "@/components/layouts/PageLayout";
import ResumeExperiences from "@/components/resume/ResumeExperiences";
import { getResume } from "@/services/message.service";
import { Achievement, Resume, TechnicalSkill } from "@/types/ResumeData";
import { styled } from "@linaria/react";

const Page = styled.div`
        --tw-border-opacity: 1;
        --tw-bg-opacity: 1;
        --tw-text-opacity: 1;
        background-color: rgb(255 255 255 / var(--tw-bg-opacity));
        border-color: rgb(209 213 219 / var(--tw-border-opacity));
        border-radius: .125rem;
        border-width: 1px;
        color: rgb(51 65 85 / var(--tw-text-opacity));
        color: rgb(71 85 105 / var(--tw-text-opacity));
        display: flex
;
        flex-direction: column;
        font-family: var(--font-secondary);
        font-family: Inter, ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        font-size: 1rem;
        gap: 1.5rem;
        line-height: 1.5rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 960px;
        padding: 30px;
`;


export default function PageResume() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Resume>({
    full_name: "",
    tag_line: "",
    about: "",
    contact: { phone_number: "", email_address: "" },
    experiences: [],
    education: { college: "", degree: "" },
    skills: {
      linked_in_skills: [],
      experience_skills: [],
      technical_skills: []
    },
    achievements: [],
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    let isMounted = true;

    const getData = async () => {
      const { data, error } = await getResume();

      if (!isMounted) {
        return;
      }
      if (error) {
        throw new Error(error);
      }

      if (data) {
        console.log("data", data);
      }

      setData(data);
      setIsLoading(false);

      return;
    };

    getData();

    return () => {
      isMounted = false;
    };
  }, []);

  const {
    full_name,
    tag_line,
    about,
    experiences,
    education,
    skills,
    achievements,
  } = data;

  return (
    <PageLayout>
      {isLoading && <PageLoader />}

      {!isLoading &&
        <section>
          <header>
            <h1>Resume</h1>
          </header>

          <div>
            <Page>
              <header className="flex flex-col gap-1">
                <h2>{full_name}</h2>
                <p className="tagline">{tag_line}</p>
              </header>
              <section id="summary">
                <h3>Summary</h3>
                <p>{about}</p>
              </section>
              <section id="experience">
                <h3>Experience</h3>
                {<ResumeExperiences experiences={experiences}></ResumeExperiences>}
              </section>
              <section id="education">
                <h3>Education</h3>
                <div className="self-stretch flex-col justify-start items-start flex">
                  <h4 className="w-full flex">{education.college}</h4>
                  <p>{education.degree}</p>
                </div>
              </section>
              <section id="skills">
                <h3>Skills</h3>
                <div className="self-stretch flex-col justify-start items-start flex gap-2">
                  {skills.technical_skills.map((skill: TechnicalSkill) => (
                    <div key={skill.id}>
                      <h4 className="w-full flex">{skill.title}:</h4>
                      <p>{skill.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section id="achievements">
                <h3>Key Achievements</h3>
                <div className="self-stretch flex-col justify-start items-start flex gap-2">
                  {achievements.map((achievement: Achievement) => (
                    <div key={achievement.id}>
                      <h4 className="w-full flex">{achievement.title}:</h4>
                      <p>{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section id="resume">
                <a
                  className="button button--primary button--compact text-white flex justify-center"
                  href="https://jrynlppcbsquzh8t.public.blob.vercel-storage.com/resume-qSy38nTK7Byo0y1piEQ7DBGpnKjWws.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Full Resume
                </a>
              </section>
            </Page>
          </div>
        </section>
      }
    </PageLayout >
  );
};
