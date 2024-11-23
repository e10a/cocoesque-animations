import { Route, Routes } from "react-router-dom";
import { TimelineTracker } from "@/components/tools/TimelineTracker";
import { PageHome } from "@/pages/PageHome";
import { styled } from "@linaria/react";
import { Analytics } from "@vercel/analytics/react";

const HelperContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  text-align: right;
  background-color: var(--rose-500);
  border-top-left-radius: 0.25rem;
  border: 1px solid var(--zinc-200);
  padding: 0.5rem;
  font-size: 0.875rem;
  z-index: 1000;
`;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageHome />} />
      </Routes>
      <HelperContainer data-env={import.meta.env.VITE_APP_VERCEL_ENV}>
        <TimelineTracker />
      </HelperContainer>
      <Analytics />
    </>
  );
}

export default App;
