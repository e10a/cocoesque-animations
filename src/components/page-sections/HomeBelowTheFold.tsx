/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { ContactForm } from "@/components/forms/ContactForm";
import { HomeProjects } from "@/components/page-sections/HomeProjects";
import { HomeSkills } from "@/components/page-sections/HomeSkills";
import { HomeAbout } from "@/components/page-sections/HomeAbout";
import { PageLoader } from "@/components/PageLoader";
import { styled } from "@linaria/react";

const Outer = styled.div`
  text-align: center;
`;
const ProjectsSection = styled.section`
  padding: var(--space-10) 0;
`;
const SkillsSection = styled.section`
  padding: var(--space-10) 0;
  background-image: linear-gradient(
    var(--gradient-x),
    var(--gradient-indigo-teal)
  );
  color: rgb(var(--rgb-white));
`;
const AboutSection = styled.section`
  padding: var(--space-10) 0;
  background-image: linear-gradient(
    var(--gradient-x),
    var(--gradient-indigo-teal)
  );
  color: rgb(var(--rgb-white));
`;
const ThanksSection = styled.section`
  padding: var(--space-10) 0;
  background-image: linear-gradient(
    var(--gradient-rb),
    var(--gradient-indigo-pink)
  );
  color: rgb(var(--rgb-white));
`;
const BorderDivider = styled.div`
  border-top: var(--space) solid rgb(var(--rgb-white));
`;
const PageLoaderContainer = styled.div`
  padding: var(--space-8) 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--space-32);
`;

interface Project {
  fields: {
    hide: boolean;
    comingSoon: boolean;
    // Add other project fields here if needed
  };
}

interface ContentfulData {
  projects?: Array<Project>;
  skills?: Array<{ fields: { category: string[] } }>;
  about?: Array<{ fields: {
    displayTitle: string;
    displaySubTitle: string;
    displayDescription: string;
  } }>;
}

export const HomeBelowTheFold = () => {
  const [data, setData] = useState<ContentfulData>({});
  const [isLoading, setIsLoading] = useState(true);

  const client = createClient({
    space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID || "",
    accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN || "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          "sys.id[in]": ["4dlGbXqDjK9JILF5pmMNEp"],
          include: 2,
          limit: 1,
        });

        if (response.items[0]) {
          setData(response.items[0].fields as ContentfulData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchData();
  }, []);

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

  const { skills, projects, about } = data;

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
            <HomeProjects
              projects={
                projects?.filter((project) => !project.fields.hide) || []
              }
            />
          </ProjectsSection>

          <SkillsSection>
            <HomeSkills
              skills={
                skills?.filter(
                  (skill) => skill.fields.category[0] === "Tools & Technologies"
                ) ?? []
              }
            />
          </SkillsSection>

          <AboutSection>
            {about?.[0]?.fields && <HomeAbout about={about[0].fields} />}
          </AboutSection>

          <BorderDivider />

          <ThanksSection id="contact">
            <div>
              <h2>Thanks for stopping by!</h2>
              <p>Send me a message, I&apos;d love to hear from you :)</p>
            </div>
            <ContactForm />
          </ThanksSection>
        </>
      )}
    </Outer>
  );
};
