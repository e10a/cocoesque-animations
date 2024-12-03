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
  padding: 0 var(--space-4);
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
const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
`;
const SectionHeader = styled.header`
  margin-bottom: 16px;
  h3 {
    color: rgb(var(--color-gray-700));
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p { margin: 0; color: rgb(var(--color-gray-600));}
`;
const Target = styled.div`
  width: 10px;
  height: 80%;
  background: cornflowerblue;
  border-radius: 10px;
  margin: 20px 0;
  animation-name: one, two;
  animation-duration: 3s;
  animation-iteration-count: 3;
  animation-timing-function: linear;
  // animation-fill-mode: both;
  transform: rotate(25deg);

  @keyframes one {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(45deg);}
  }
  @keyframes two {
    0% { transform: rotate(90deg);}
    100% { transform: rotate(135deg);}
  }

  &#replace {
    animation-composition: replace; // this is the default value
  }

  &#add {
    animation-composition: add;
  }

  &#accumulate {
    animation-composition: accumulate;
  }
`;
const Section = styled.section`
  border: 1px solid rgb(var(--color-gray-500));
  border-radius: 10px;
  padding: 16px 24px 24px;
  background: rgb(var(--color-white, 0.8));
  color: rgb(var(--color-gray-800));
`;
const Container = styled.div`
  width: 230px;
  height: 200px;
  background: cyan;
  text-align: center;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function PageAnimations() {
  return (
    <>
      <PageLayout>
        <Outer data-view-timeline="above_the_fold">
          <Inner>
            <Header>
              <h1>CSS Animations - Composition Operations</h1>
            </Header>

            <div style={{ display: "flex", gap: "16px" }}>
              <Section>
                <SectionHeader>
                  <h3>Replace</h3>
                  <p>REPLACES underlying value w/ the effect value</p>
                </SectionHeader>

                <Container>
                  <Target id="replace" />
                </Container>
              </Section>

              <Section>
                <SectionHeader>
                  <h3>Add</h3>
                  <p>ADDS effect value to the underlying value</p>
                </SectionHeader>

                <Container>
                  <Target id="add" />
                </Container>
              </Section>

              <Section>
                <SectionHeader>
                  <h3>Accumulate</h3>
                  <p>COMBINES effect value w/ underlining value</p>
                </SectionHeader>

                <Container>
                  <Target id="accumulate" />
                </Container>
              </Section>
            </div>
          </Inner>

          <NavContainer>
            <Nav />
          </NavContainer>
        </Outer>
      </PageLayout >
    </>
  );
}
