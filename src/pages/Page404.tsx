import Nav from "@/components/navigation/Nav.tsx";
import PageLayout from "@/components/layouts/PageLayout.tsx";
import { styled } from "@linaria/react";

const Outer = styled.div`
  flex: 1 1 0%;
  align-items: start;
  color: rgb(var(--color-white));
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: var(--space-32) 0;
  text-align: left;
  background-image: linear-gradient(
    var(--gradient-rb),
    var(--gradient-indigo-pink)
  );

  @media only screen and (width >= 768px) {
    padding: var(--space-20) 0 var(--space-20);
  }
`;
const Inner = styled.section`
  max-width: var(--space-960px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`;
const Header = styled.header`
  h1 {
  }
  p {
    margin: 0;
    font-size: var(--text-lg);
  }
`;
const SectionHeader = styled.h3`
  margin-bottom: var(--space-4);
`;
const ButtonContainer = styled.div`
  display: flex;
  gap: var(--space-4);
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
`;

export default function Page404() {
  return (
    <>
      <PageLayout>
        <Outer data-view-timeline="above_the_fold">
          <Inner>
            <Header>
              <h1>Oh no!</h1>
              <p>Couldn't find what you were looking for...</p>
            </Header>

            <section>
              <SectionHeader>Anything I can help you with? Let me know!</SectionHeader>

              <ButtonContainer>
                <a
                  href="/#contact"
                  className="button button-transparent-white button-xl"
                >
                  Contact Me
                </a>
              </ButtonContainer>
            </section>

            <section>
              <SectionHeader>Here's a couple of places to explore</SectionHeader>

              <ButtonContainer>
                <a
                  href="/#projects"
                  className="button button-transparent-white button-xl"
                >
                  Projects
                </a>
                <a
                  href="/#resume"
                  className="button button-transparent-white button-xl"
                >
                  Resume
                </a>
              </ButtonContainer>
            </section>

            <section>
              <SectionHeader>Or... just take me home!</SectionHeader>

              <ButtonContainer>
                <a
                  href="/"
                  className="button button-transparent-white button-xl"
                >
                  Go Back Home
                </a>
              </ButtonContainer>
            </section>
          </Inner>

          <NavContainer>
            <Nav />
          </NavContainer>
        </Outer>
      </PageLayout >
    </>
  );
}
