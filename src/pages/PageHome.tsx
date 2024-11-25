import { useEffect, useState } from "react";
import { createClient } from "contentful";
import { HomeBelowTheFold } from "@/components/page-sections/HomeBelowTheFold";
import { HomeHero } from "@/components/page-sections/HomeHero";
import { PageLayout } from "@/components/layouts/PageLayout";
import { Nav } from "@/components/navigation/Nav";
import { styled } from "@linaria/react";
import LocationMarker from "@/components/LocationMarker";

const AboveTheFold = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  min-height: 65vh;
  padding: var(--space-8) 0 var(--space-8);
  width: 100%;
  background-image: linear-gradient(
    var(--gradient-rb),
    var(--gradient-indigo-pink)
  );

  @media only screen and (width >= 768px) {
    padding: var(--space-20) 0 var(--space-20);
  }
`;
const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
`;

interface ContentfulData {
  sectionHero?: {
    fields: {
      ctas: any[];
    };
  };
}

export const PageHome = () => {
  const [data, setData] = useState<ContentfulData>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const client = createClient({
      space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_ID || "",
      accessToken: import.meta.env.VITE_APP_CONTENTFUL_ACCESS_TOKEN || "",
    });

    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "homepage",
          include: 2,
          limit: 1,
        });
        setData(response.items[0]?.fields as ContentfulData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchData();
  }, [setData, setIsLoading]);

  return (
    <>
      <PageLayout>
        <div id="page-home">
          <AboveTheFold data-timeline="above_the_fold" data-location-marker-parent>
            <HomeHero
              title="Ellen Shimada"
              subtitle="Software Engineer • UI/UX Design Lead"
              tagline="My specialty is to design and build engaging, high-quality digital experiences"
              ctas={data.sectionHero?.fields?.ctas || []}
            />

            <NavContainer>
              <Nav />
            </NavContainer>

            <LocationMarker id="projects" style={{ marginBottom: "calc(0px - var(--space-8))"}} />
          </AboveTheFold>

          {!isLoading &&
            <div id="below-the-fold">
              <HomeBelowTheFold />
            </div>
          }
        </div>
      </PageLayout>
    </>
  );
};
