import { useEffect, useState } from "react";
import Nav from "@/components/navigation/Nav";
import PageLoader from "@/components/PageLoader";
import PageLayout from "@/components/layouts/PageLayout";
import ResumeExperiences from "@/components/resume/ResumeExperiences";
import { getResume } from "@/services/message.service";
import { Achievement, Resume, TechnicalSkill } from "@/types/ResumeData";
import { styled } from "@linaria/react";

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  box-shadow: 0 0 5px rgba(var(--rgb-gray-950), 0.4);
`;
const NavContainerInset = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.8;
  background-image: linear-gradient(
    var(--gradient-rb),
    var(--gradient-indigo-pink)
  );
`;
const Page = styled.div`
  background-color: rgb(var(--rgb-white));
  border-radius: var(--space);
  border: 1px solid rgb(var(--rgb-gray-300));
  box-shadow: 0 0 1px rgba(var(--rgb-gray-950), 0.2);
  color: rgb(51 65 85 / 1);
  color: rgb(71 85 105 / 1);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  line-height: 150%;
  margin: 0 auto;
  max-width: var(--space-960px);
  padding: var(--space-6);

  @media only screen and (width >=768px) {
    padding: var(--space-8);
  }

  h2 {
    font-size: var(--text-3xl);
    color: rgb(var(--rgb-black));

    + p {
      margin: var(--space-2) 0;
      font-size: var(--text-lg);
      line-height: 140%;
    }
  }

  h3 {
    border-bottom: 1px solid rgb(var(--rgb-gray-300));
    color: rgb(var(--rgb-gray-500));
    font-size: var(--text-base);
    font-weight: var(--text-bold);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: var(--space-4);

    + p {
      margin: calc(0px - var(--space)) 0 0;
    }
  }


  h4 {
    color: rgb(var(--rgb-black));
    font-size: var(--text-base);

    + p {
      margin: 0 0 var(--space-4);
      line-height: 140%;
    }
  }

  p {
    line-height: 180%;
    margin: 0;
  }
`;
const PageLayoutInner = styled.div`
    display: flex;
    flex: 1 1;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 640px;
    width: 100%;
    background-color: rgb(var(--rgb-gray-100));
    padding: var(--space-16) var(--space-4);

    @media only screen and (width >=768px) {
      padding: var(--space-24) var(--space-12);
    }
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
    <>
      <NavContainer>
        <NavContainerInset />
        <Nav />
      </NavContainer>

      <PageLayout>
        <PageLayoutInner>
          {isLoading && <PageLoader />}

          {!isLoading &&
            <section>
              <header>
                <h1 className="sr-only">Resume</h1>
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
                    <ResumeExperiences experiences={experiences}/>
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
        </PageLayoutInner>
      </PageLayout >
    </>
  );
};3