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

interface PaymentDetails {
  amount: number;
  name?: string;
  fullName?: string;

}

export default function PageAdapterPattern() {
  class OldAPI {
    processPayment(details: PaymentDetails) {
      return `Processing payment of ${details.amount} for ${details.name}`;
    }
  }

  class NewAPI {
    executePayment(details: PaymentDetails) {
      return {
        status: "success",
        message: `Paid ${details.amount} for ${details.fullName}`
      };
    }
  }

  class PaymentAdapter {
    private paymentAPI: OldAPI | NewAPI;

    constructor(paymentAPI: OldAPI | NewAPI) {
      this.paymentAPI = paymentAPI;
    }

    processPayment(details: PaymentDetails) {
      if (this.paymentAPI instanceof OldAPI) {
        return this.paymentAPI.processPayment(details);
      } else if (this.paymentAPI instanceof NewAPI) {
        const adaptedDetails = {
          fullName: details.name,
          amount: details.amount
        };
        const result = this.paymentAPI.executePayment(adaptedDetails);
        return result.message;
      }
      return 'Invalid payment API';
    }
  }

  // Old API
  const oldAPI = new OldAPI();
  const oldAdapter = new PaymentAdapter(oldAPI);
  console.log(oldAdapter.processPayment({ name: "Alice", amount: 100 }));
  // "Processing payment of 100 for Alice"

  // New API
  const newAPI = new NewAPI();
  const newAdapter = new PaymentAdapter(newAPI);
  console.log(newAdapter.processPayment({ name: "Bob", amount: 200 }));
  // "Paid 200 for Bob"


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
