import { useEffect, useState } from "react";
import Nav from "@/components/navigation/Nav.tsx";
import PageLoader from "@/components/PageLoader.tsx";
import PageLayout from "@/components/layouts/PageLayout.tsx";
import ResumeExperiences from "@/components/resume/ResumeExperiences.tsx";
import { getResume } from "@/services/message.service.js";
import { Achievement, Resume, TechnicalSkill } from "@/types/ResumeData.ts";
import { styled } from "@linaria/react";

const externalLinks = [
  {
    path: "https://github.com/e10a",
    label: "GitHub",
    target: "_blank",
    icon: "GitHub",
  },
  {
    path: "https://www.linkedin.com/in/ellen-s",
    label: "LinkedIn",
    target: "_blank",
    icon: "LinkedIn",
  },
];
const LinksElement = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
  row-gap: 0.5rem;
`;
const LinkElement = styled.a`
  display: flex;
  column-gap: 1.125rem;
  justify-content: flex-end;
  align-items: center;
  background: white;
  border-radius: 0.25rem;
  padding: 0.2rem 0.5rem;
  opacity: 0.8;
  position: relative;
  transition: opacity 300ms ease;
  border: 1px solid rgba(var(--color-indigo-500) / 1);

  &:hover {
    opacity: 1;
  }

  &:before {
    position: absolute;
    left: 0;
    z-index: 0;
    display: block;
    content: "";
    background: rgba(var(--color-indigo-700) / 1);
    height: 100%;
    width: auto;
    aspect-ratio: 1/1;
    border-radius: 0.25rem;
  }

  &:after {
    position: absolute;
    left: 0;
    margin-left: 0.625rem;
    z-index: 1;
    display: block;
    content: "";
    background: white;
    height: 0.625rem;
    width: 0.625rem;
  }

  > * {
    position: relative;
    z-index: 3;
    color: rgba(var(--color-indigo-700) / 1);
    font-weight: bold;

    &:last-child {
      color: rgba(var(--color-indigo-500) / 1);
    }
  }
`;
interface LinkType {
  path: string;
  label: string;
  target: string;
  icon: string;
}
const Link = (link: LinkType) => {
  return (
    <LinkElement
      href={link.path}
      target={link.target}
      rel={link.target ? "noopener noreferrer" : ""}
      title={link.path}
    >
      <>
        {!link.icon && link.label}

        {link.icon == "GitHub" && (
          <>
            <svg
              aria-hidden="true"
              height="14"
              viewBox="0 0 16 16"
              version="1.1"
              width="14"
              data-view-component="true"
              className="octicon octicon-mark-github"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style={{ fill: "currentColor" }}
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
              ></path>
            </svg>

            <span>e10a</span>
          </>
        )}

        {link.icon == "LinkedIn" && (
          <>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              x="0"
              y="0"
              preserveAspectRatio="xMinYMin meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g style={{ fill: "currentColor" }} className="solid-icon">
                <rect
                  x="-0.003"
                  style={{ fill: "none" }}
                  width="24"
                  height="24"
                ></rect>
                <path d="M20,2h-16c-1.1,0-2,0.9-2,2v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2zM8,19h-3v-9h3V19zM6.5,8.8C5.5,8.8,4.7,8,4.7,7s0.8-1.8,1.8-1.8S8.3,6,8.3,7S7.5,8.8,6.5,8.8zM19,19h-3v-4c0-1.4-0.6-2-1.5-2c-1.1,0-1.5,0.8-1.5,2.2V19h-3v-9h2.9v1.1c0.5-0.7,1.4-1.3,2.6-1.3c2.3,0,3.5,1.1,3.5,3.7V19z"></path>
              </g>
            </svg>
            <span>ellen-s</span>
          </>
        )}
      </>
    </LinkElement>
  );
};
const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  box-shadow: 0 0 5px rgba(var(--color-gray-950) / 0.4);
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
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  > div {
    display: flex;

    &:first-child {
      justify-content: start;
      align-items: center;
      font-size: 1.875rem;
      column-gap: 0.625rem;
      row-gap: 0;

      > * {
        margin: 0;
      }
    }
  }
`;
const Page = styled.section`
  background-color: rgb(var(--color-white));
  border-radius: var(--space);
  border: 1px solid rgb(var(--color-gray-300));
  box-shadow: 0 0 1px rgba(var(--color-gray-950) / 0.2);
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
    color: rgb(var(--color-black));

    + p {
      margin: var(--space-2) 0;
      font-size: var(--text-lg);
      line-height: 140%;
    }
  }

  h3 {
    border-bottom: 1px solid rgb(var(--color-gray-300));
    color: rgb(var(--color-gray-500));
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
    color: rgb(var(--color-black));
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
  background-color: rgb(var(--color-gray-100));
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
      technical_skills: [],
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

          {!isLoading && (
            <>
              <header>
                <h1 className="sr-only">Resume</h1>
              </header>

              <Page>
                <Header className="flex flex-col gap-1">
                  <div className="flex">
                    <h2>{full_name}</h2> <span>|</span>{" "}
                    <span className="tagline">{tag_line}</span>
                  </div>

                  <LinksElement>
                    {externalLinks.map((link: LinkType) => (
                      <Link key={Math.random()} {...link} />
                    ))}
                  </LinksElement>
                </Header>

                <section id="summary">
                  <h3>Summary</h3>
                  <p>{about}</p>
                </section>

                <section id="experience">
                  <h3>Experience</h3>
                  <ResumeExperiences experiences={experiences} />
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
              </Page>
            </>
          )}
        </PageLayoutInner>
      </PageLayout>
    </>
  );
}
