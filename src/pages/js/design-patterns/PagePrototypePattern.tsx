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

interface Shape {
  type: string;
  color: string;
}

interface ShapePrototype {
  clone(): any;
  draw(): void;
}

export default function PagePrototypePattern() {
  // The prototype object with shared behavior
  const shapePrototype: Shape & ShapePrototype = {
    type: '',
    color: '',
    clone() {
      return Object.create(this);
    },
    draw() {
      console.log(`[shape: ${this.type}] | [color: ${this.color}]`);
    }
  };

  // create an instance of shapePrototype for circle
  const firstCircle = Object.create(shapePrototype);
  // customize the circle
  firstCircle.type = "circle";
  firstCircle.radius = 10;
  firstCircle.color = "red";

  // clone the previously created circle
  const greenCircle = firstCircle.clone();
  // and customize it
  greenCircle.color = "green";

  // Use the objects
  firstCircle.draw(); // [shape: circle] | [color: red]
  greenCircle.draw(); // [shape: circle] | [color: green]
  return (
    <>
      <PageLayout>
        <Outer data-view-timeline="above_the_fold">
          <Inner>
            <Header>
              <h1>PagePrototypePattern</h1>
            </Header>
          </Inner>

          <NavContainer>
            <Nav />
          </NavContainer>
        </Outer>
      </PageLayout >
    </>
  );
}
