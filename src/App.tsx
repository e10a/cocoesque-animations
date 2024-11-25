import { Route, Routes } from "react-router-dom";
import { PageHome } from "@/pages/PageHome";
import { Analytics } from "@vercel/analytics/react";
import { Provider as ResponsiveProvider } from "@/context/ResponsiveContext";
import DevTools from "@/components/DevTools";

function App() {
  return (
    <>
      <ResponsiveProvider>
        <Routes>
          <Route path="/" element={<PageHome />} />
        </Routes>
        {import.meta.env.VITE_APP_ENV !== "production" && <DevTools />}
      </ResponsiveProvider>
      <Analytics />
    </>
  );
}

export default App;
