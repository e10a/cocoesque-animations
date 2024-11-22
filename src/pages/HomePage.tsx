import { useEffect, useState } from "react";
import { createClient } from "contentful";

// import { HomeBelowTheFold } from "./home-page-below-the-fold";
import { HomeHero } from "@/components/page-sections/HomeHero";
import { PageLayoutHome } from "@/components/layouts/PageLayoutHome";
import { TimelineTracker } from "@/components/tools/TimelineTracker";

export const HomePage = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>({}); // Changed type to any and initial value to empty object
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
        setData(response.items[0]?.fields);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      }
    };

    fetchData();
  }, [client, setData, setIsLoading]);

  return (
    <>
      <PageLayoutHome>
        <div className="flex flex-col justify-center items-center text-center gap-8 768:gap-20">
          <div
            id="above-the-fold"
            className="min-h-[65vh] max-h-100vh py-8 768:py-20 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center"
          >
            <HomeHero
              title="Ellen Shimada"
              subtitle="Software Engineer • UI/UX Design Lead"
              tagline="My specialty is to design and build engaging, high-quality digital experiences"
              ctas={data.sectionHero?.fields?.ctas || []}
            />
          </div>
          {!isLoading && (
            <div
              id="below-the-fold"
              className="w-full text-center flex flex-col divide-y -mb-8 md:mb-0"
            >
              {/* <HomeBelowTheFold /> */}
            </div>
          )}
        </div>
        <div
          id="helper"
          data-env={import.meta.env.VITE_APP_VERCEL_ENV}
          className="fixed bottom-0 right-0"
        >
          <div className=" bg-white/80 rounded-tl-sm border border-zinc-200 p-2 text-xs">
            <TimelineTracker />
          </div>
        </div>
      </PageLayoutHome>
      <section className="wireframe-page neo font-aa">
        <div className="article-wrap">
          <article
            aria-label="determined by content"
            className="type-a1 wf-layout hero-ac"
          >
            <div className="root-element color-scheme-a light-theme">
              <div
                className="bg-img"
                style={{
                  backgroundImage:
                    "url('https://outlyne.io/assets/jpg/coffee-hero-n.jpg')",
                }}
              ></div>
              <div className="root-element-inner">
                <div className="wf-full-screen-grid">
                  <div className="wf-text-wrap">
                    <h6 className="wf">Professional Partnership</h6>
                    <h3 className="wf">
                      Our wholesale team is dedicated to helping coffee programs
                      across the US to stand out and tell their stories.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="article-wrap">
          <article
            aria-label="determined by content"
            className="type-a1 wf-layout layout-bb"
          >
            <div className="root-element color-scheme-b light-theme">
              <div className="root-element-inner">
                <div className="wf-wrapper-flex">
                  <div className="wf-grid">
                    <figure className="img-grid aa">
                      <img
                        alt="Cup of coffee on a saucer"
                        className="wf"
                        src="https://outlyne.io/assets/jpg/coffee-portrait-a.jpg"
                      />
                      <figcaption className="wf">
                        <h6 className="wf">Single Origin</h6>
                        <p className="wf">Ethiopia Sironko</p>
                      </figcaption>
                    </figure>
                    <figure className="img-grid bb">
                      <img
                        alt="Milk pouring into a glass of cold brew"
                        className="wf"
                        src="https://outlyne.io/assets/jpg/coffee-portrait-b.jpg"
                      />
                      <figcaption className="wf">
                        <h6 className="wf">Single Origin</h6>
                        <p className="wf">Ethiopia Sironko</p>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="wf-layout-content">
                    <h6 className="wf">New Arrivals</h6>
                    <h4 className="wf">Freshest of the Fresh</h4>
                    <p className="wf">
                      Featuring the freshest in our beautiful range of seasonal
                      coffees sourced throughout the year.
                    </p>
                    <div className="btn-wrap">
                      <button className="wf">Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="article-wrap">
          <article
            aria-label="determined by content"
            className="type-a1 wf-layout layout-dd"
          >
            <div className="root-element content-bleed color-scheme-c light-theme">
              <div className="root-element-inner">
                <div className="wf-container bg-color full-height grid-auto">
                  <div className="wf-container text-align">
                    <h6 className="wf">Let color be your guide</h6>
                    <h2 className="wf">Taste by Color</h2>
                    <h6 className="wf">Explore the coffee spectrum</h6>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="article-wrap">
          <article
            aria-label="determined by content"
            className="type-a1 wf-layout layout-ee"
          >
            <div className="root-element color-scheme-d light-theme">
              <div className="root-element-inner">
                <div className="wf-flex-container ">
                  <div className="wf-main-text-wrap">
                    <h5 className="wf">Ceremony Grammed</h5>
                    <p className="wf">
                      Follow along for new events, products and more.
                    </p>
                  </div>
                  <div className="gram-grid">
                    <img
                      alt=""
                      className="insta-img"
                      src="https://outlyne.io/assets/jpg/coffee-portrait-c.jpg"
                    />
                    <img
                      alt=""
                      className="insta-img"
                      src="https://outlyne.io/assets/jpg/coffee-c.jpg"
                    />
                    <img
                      alt=""
                      className="insta-img"
                      src="https://outlyne.io/assets/jpg/coffee-d.jpg"
                    />
                    <img
                      alt=""
                      className="insta-img"
                      src="https://outlyne.io/assets/jpg/coffee-e.jpg"
                    />
                    <img
                      alt=""
                      className="insta-img"
                      src="https://outlyne.io/assets/jpg/coffee-f.jpg"
                    />
                    <img
                      alt=""
                      className="insta-img"
                      src="https://outlyne.io/assets/jpg/coffee-g.jpg"
                    />
                    <img
                      alt=""
                      className="insta-img"
                      src="https://outlyne.io/assets/jpg/coffee-h.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="article-wrap">
          <article
            aria-label="determined by content"
            className="type-a1 wf-layout footer-aa"
          >
            <div className="root-element color-scheme-e light-theme">
              <div className="root-element-inner footer-flex">
                <div className="footer-grid">
                  <div className="wf-container">
                    <h6 className="wf">Shop</h6>
                    <ul className="wf small-text">
                      <li>
                        <a href=".">Coffee</a>
                      </li>
                      <li>
                        <a href=".">Gear</a>
                      </li>
                      <li>
                        <a href=".">Subscriptions</a>
                      </li>
                      <li>
                        <a href=".">Taste by Color</a>
                      </li>
                    </ul>
                  </div>
                  <div className="wf-container">
                    <h6 className="wf">Wholesale</h6>
                    <ul className="wf small-text">
                      <li>
                        <a href=".">Become a Wholesale Partner</a>
                      </li>
                      <li>
                        <a href=".">Cold Brew</a>
                      </li>
                      <li>
                        <a href=".">Tech Services</a>
                      </li>
                    </ul>
                  </div>
                  <div className="wf-container">
                    <h6 className="wf">About</h6>
                    <ul className="wf small-text">
                      <li>
                        <a href=".">The Company</a>
                      </li>
                      <li>
                        <a href=".">Community</a>
                      </li>
                      <li>
                        <a href=".">Contact Us</a>
                      </li>
                      <li>
                        <a href=".">Jobs</a>
                      </li>
                      <li>
                        <a href=".">FAQ</a>
                      </li>
                      <li>
                        <a href=".">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="wf-container">
                    <h6 className="wf">Locations</h6>
                    <ul className="wf small-text">
                      <li>
                        <a href=".">Bethesda</a>
                      </li>
                      <li>
                        <a href=".">Cross St Market</a>
                      </li>
                      <li>
                        <a href=".">Harbor Point</a>
                      </li>
                      <li>
                        <a href=".">Mt. Vernon</a>
                      </li>
                      <li>
                        <a href=".">Riva</a>
                      </li>
                      <li>
                        <a href=".">The Roastery</a>
                      </li>
                    </ul>
                  </div>
                  <div className="wf-social-wrap">
                    <h6 className="wf">Gift Cards</h6>
                    <p className="wf small-text">Give a Gift Today</p>
                    <h6 className="wf">Social Media</h6>
                    <p className="wf small-text">Follow Ceremony</p>
                    <ul className="social-icons wf small-text">
                      <li>
                        <button className="social-icon instagram-icon"></button>
                      </li>
                      <li>
                        <button className="social-icon instagram-icon"></button>
                      </li>
                      <li>
                        <button className="social-icon instagram-icon"></button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
