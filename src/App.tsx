import { Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Provider as ResponsiveProvider } from "@/context/ResponsiveContext.tsx";
import { lazy } from "react";

const PageHome = lazy(() => import("@/pages/PageHome.tsx"));
const PageResume = lazy(() => import("@/pages/PageResume.tsx"));
const DevTools = lazy(() => import("@/components/DevTools.tsx"));

function App() {
  return (
    <>
      <ResponsiveProvider>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/resume" element={<PageResume />} />
        </Routes>
        {import.meta.env.VITE_APP_ENV !== "production" && <DevTools />}
      </ResponsiveProvider>
      <Analytics />
    </>
  );
}

export default App;
