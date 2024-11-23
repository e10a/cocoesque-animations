import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { css } from "@linaria/core";
import { colors } from "@/linaria/colors";
import "@/index.css";

css`
  :global() {
    :root {
      ${colors}
    }
  }
`;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
