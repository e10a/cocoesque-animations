import { Route, Routes } from "react-router-dom";
import { TimelineTracker } from "@/components/tools/TimelineTracker";
import { PageHome } from "@/pages/PageHome";
import { styled } from "@linaria/react";
import { Analytics } from "@vercel/analytics/react";
import { Provider as ResponsiveProvider } from "@/context/ResponsiveContext";
import Responsive from "@/components/tools/Responsive";

const HelperContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  text-align: right;
  border-top-left-radius: 0.25rem;
  font-size: var(--text-xxs);
  z-index: 1000;
  backdrop-filter: blur(5px);
  background-color: rgba(var(--rgb-gray-500), 0.8);
  font-family: var(--font-mono);
`;

function App() {
  return (
    <>
      <ResponsiveProvider>
        <Routes>
          <Route path="/" element={<PageHome />} />
        </Routes>
        <HelperContainer data-env={import.meta.env.VITE_APP_VERCEL_ENV}>
          <Responsive />
          <TimelineTracker />
        </HelperContainer>
      </ResponsiveProvider>
      <Analytics />
    </>
  );
}

export default App;
