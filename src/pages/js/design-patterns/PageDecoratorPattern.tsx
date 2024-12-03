import Nav from "@/components/navigation/Nav.tsx";
import PageLayout from "@/components/layouts/PageLayout.tsx";
import { useEffect } from "react";
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

export default function PageDecoratorPattern() {

  useEffect(() => {

    // Decorator to add caching
    class MyDecorator {
      private api: MyAPI;
      private cache: string | null;

      constructor(api: MyAPI) {
        this.api = api;
        this.cache = null;
      }

      doSomething() {
        if (this.cache) {
          console.log("[2.0 MyDecorator]                <-- console.log from MyDecorator.doSomething(...)");

          return `[2.1 MyDecorator] { ${this.cache} } <-- returned    from MyDecorator.doSomething(...)`;
        }

        this.cache = this.api.doSomething();

        return this.cache;
      }
    }

    class MyAPI {
      doSomething() {
        console.log("[1.0 MyAPI]  <-- console.log from MyAPI.doSomething(...)");

        return "[1.1 MyAPI]  <-- returned    from MyAPI.doSomething(...)";
      }
    }

    const api = new MyAPI();

    const cachedAPI = new MyDecorator(api);

    console.log(cachedAPI.doSomething());
    // [1.0 MyAPI]  <-- console.log from MyAPI.doSomething(...)
    // [1.1 MyAPI]  <-- returned from MyAPI.doSomething(...)

    console.log(cachedAPI.doSomething());
    // [2.0 MyDecorator]                <-- console.log from MyDecorator.doSomething(...)
    // [2.1 MyDecorator] { [1.1 MyAPI]  <-- returned from MyAPI.doSomething(...) } <-- returned from MyDecorator.doSomething(...)
    console.log('=====================');

    // In other words, if you're using an API and do not want to change the core logic of it
    // You can define a decorator with the logic you want to execute by wrapping the instance
    // of that API with your decorator like:
    // const instanceOfAPI = new SomeAPI();
    // const withMyDecorator = new MyDecorator(instanceOfAPI);
    // withMyDecorator.doSomething(); <-- runs doSomething(..) from SomeAPI
    // withMyDecorator.doSomething(); <-- runs doSomething(..) defined by your decorator
  }, []);

  return (
    <>
      <PageLayout>
        <Outer data-view-timeline="above_the_fold">
          <Inner>
            <Header>
              <h1>PageDecoratorPattern</h1>
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
