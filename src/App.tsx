import { Route, Routes } from "react-router-dom";
import PageHome from "@/pages/PageHome";
import PageResume from "@/pages/PageResume";
import { Analytics } from "@vercel/analytics/react";
import DevTools from "@/components/DevTools";
import { Provider as ResponsiveProvider } from "@/context/ResponsiveContext";

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
