import { Route, Routes } from "react-router-dom";
import PageHome from "@/pages/PageHome.tsx";
import PageResume from "@/pages/PageResume.tsx";
import { Analytics } from "@vercel/analytics/react";
import DevTools from "@/components/DevTools.tsx";
import { Provider as ResponsiveProvider } from "@/context/ResponsiveContext.tsx";

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
