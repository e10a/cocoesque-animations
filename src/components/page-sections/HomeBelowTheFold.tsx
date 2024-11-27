import HomeAbout from "@/components/page-sections/HomeAbout";
import HomeGetInTouch from "@/components/page-sections/HomeGetInTouch";
import HomeSkills from "@/components/page-sections/HomeSkills";
import LocationMarker from "@/components/LocationMarker";
import PageLoader from "@/components/PageLoader";
import ProjectCarousel from "@/components/project/ProjectCarousel";
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { styled } from "@linaria/react";
import { About, ContentfulData, Project, Skill } from "@/types/ContentfulData";

const Outer = styled.div`
  text-align: center;
`;
const GetInTouchSection = styled.section`
  padding: var(--space-10) 0;
  background-image: linear-gradient(
    var(--gradient-rb),
    var(--gradient-indigo-pink)
  );
  color: rgb(var(--rgb-white));
`;
const ProjectsSection = styled.section`
  padding: var(--space-10) 0;
`;
const SkillsSection = styled.section`
  padding: var(--space-10) 0 0;
  background-image: linear-gradient(
    var(--gradient-x),
    var(--gradient-indigo-teal)
  );
  color: rgb(var(--rgb-white));
`;
const AboutSection = styled.section`
  padding: var(--space-10) var(--space-4);
  background-image: linear-gradient(
    var(--gradient-x),
    var(--gradient-indigo-teal)
  );
  color: rgb(var(--rgb-white));
`;
const PageLoaderContainer = styled.div`
  padding: var(--space-8) 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--space-32);
`;

export default function HomeBelowTheFold() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ContentfulData>({
    projects: [],
    skills: [],
    about: {
      fields: {
        displayTitle: "",
        displaySubTitle: "",
        displayDescription: "",
      },
    },
  });

  useEffect(() => {
    const client = createClient({
      space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID || "",
      accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN || "",
    });

    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          "sys.id[in]": ["4dlGbXqDjK9JILF5pmMNEp"],
          include: 2,
          limit: 1,
        });

        const fields = response?.items[0]?.fields;

        if (fields) {
          const typedData: ContentfulData = {
            projects: (fields?.projects || []) as unknown as Project[],
            skills: (fields?.skills || []) as unknown as Skill[],
            about: fields?.about as unknown as About,
          };
          setData(typedData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchData();
  }, [setData, setIsLoading]);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash.startsWith("#")) {
      const target = document.querySelector(hash);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [data]);

  const { about, projects, skills } = data;

  const visibleProjects = projects.filter(project => !project.fields.hide);

  return (
    <Outer>
      {isLoading ||
        (!data && (
          <PageLoaderContainer>
            <PageLoader />
          </PageLoaderContainer>
        ))}

      {!isLoading && (
        <>
          <ProjectsSection>
            <section>
              <header>
                <h2>Projects</h2>
                <p>What&apos;s been keeping me busy</p>
              </header>

              <ProjectCarousel projects={visibleProjects.filter(
                (project) => !project.fields.comingSoon
              )} />
            </section>
          </ProjectsSection>

          <ProjectsSection>
            <section>
              <header>
                <h2>Coming Soon</h2>
                <p>Presentation for these projects are in the works. Stay tuned!</p>
              </header>

              <ProjectCarousel projects={visibleProjects.filter(
                (project) => project.fields.comingSoon
              )} />
            </section>
          </ProjectsSection>

          <SkillsSection>
            <section>
              <header style={{ marginBottom: "var(--space-10)" }}>
                <h2>Skills</h2>
                <p>What&apos;s in my tool belt</p>
              </header>

              <div data-view-animate="home_section_contents">
                <HomeSkills
                  skills={
                    skills.filter(
                      (skill: Skill) =>
                        skill.fields.category[0] === "Tools & Technologies"
                    ) ?? []
                  }
                />
              </div>
            </section>
          </SkillsSection>

          <GetInTouchSection data-location-marker-parent>
            <LocationMarker id="contact" style={{ marginTop: "calc(0px - var(--space-8))", top: 0 }} />

            <header style={{ marginBottom: "var(--space-10)" }}>
              <h2>Get in Touch</h2>
              <p>Let&apos;s build something beautiful!</p>
            </header>
            <HomeGetInTouch />
          </GetInTouchSection>

          <AboutSection>
            {about && <HomeAbout about={about.fields} />}
          </AboutSection>
        </>
      )}
    </Outer>
  );
};
