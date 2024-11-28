import PageHome from "@/pages/PageHome.tsx";
import PageResume from "@/pages/PageResume.tsx";
import { Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Provider as ResponsiveProvider } from "@/context/ResponsiveContext.tsx";
import { lazy } from "react";

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
