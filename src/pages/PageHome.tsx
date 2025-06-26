import HomeHero from "@/components/page-sections/HomeHero.tsx";
import Nav from "@/components/navigation/Nav.tsx";
import PageLayout from "@/components/layouts/PageLayout.tsx";
import { lazy, useEffect, useState } from "react";
import { createClient } from "contentful";
import { styled } from "@linaria/react";

const HomeBelowTheFold = lazy(() => import("@/components/page-sections/HomeBelowTheFold.tsx"));

const AboveTheFold = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 90vh;
  min-height: 90vh;
  padding: var(--space-32) 0;
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

export default function PageHome() {
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
          <AboveTheFold data-view-timeline="above_the_fold">
            <HomeHero
              title="Ellen Kohler"
              subtitle="UX Engineer • Web Technologist"
              tagline="My specialty is to design and build engaging, high-quality digital experiences"
              ctas={data.sectionHero?.fields?.ctas || []}
            />

            <NavContainer>
              <Nav />
            </NavContainer>
          </AboveTheFold>

          {!isLoading && (
            <div id="below-the-fold">
              <HomeBelowTheFold />
            </div>
          )}
        </div>
      </PageLayout>
    </>
  );
}
