import { useEffect, useState } from "react";
import { createClient } from "contentful";

// import { HomeBelowTheFold } from "./home-page-below-the-fold";
import { HomeHero } from "@/components/page-sections/HomeHero";
import { PageLayout } from "@/components/layouts/PageLayout";
import { NavDesktop } from "@/components/navigation/NavDesktop";
import { styled } from "@linaria/react";

const AboveTheFold = styled.div`
  min-height: 65vh;
  max-height: 100vh;
  padding: 8px 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right,
    rgb(99, 102, 241),
    rgb(168, 85, 247),
    rgb(236, 72, 153)
  );
`;

// background-color: rgba(var(--rgb-white), 0.5);
const NavDesktopContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
`;

interface ContentfulHeroData {
  sectionHero?: {
    fields: {
      ctas: any[];
    };
  };
}

export const PageHome = () => {
  const [data, setData] = useState<ContentfulHeroData>({});
  const [isLoading, setIsLoading] = useState(true);

  const client = createClient({
    space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID || "",
    accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN || "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "homepage",
          include: 2,
          limit: 1,
        });
        setData(response.items[0]?.fields as ContentfulHeroData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchData();
  }, [client, setData, setIsLoading]);

  return (
    <>
      <PageLayout>
        <div
          id="page-home"
        >
          <AboveTheFold data-timeline="above_the_fold">
            <HomeHero
              title="Ellen Shimada"
              subtitle="Software Engineer • UI/UX Design Lead"
              tagline="My specialty is to design and build engaging, high-quality digital experiences"
              ctas={data.sectionHero?.fields?.ctas || []}
            />
            <NavDesktopContainer>
              <NavDesktop />
            </NavDesktopContainer>
            <div id="projects" className="absolute bottom-0 -mb-8" />
          </AboveTheFold>

          {!isLoading && (
            <div
              id="below-the-fold"
              className="w-full text-center flex flex-col divide-y -mb-8 md:mb-0"
            >
              {/* <HomeBelowTheFold /> */}
            </div>
          )}
        </div>
      </PageLayout>
    </>
  );
};
