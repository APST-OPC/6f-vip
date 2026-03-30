import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import LandingPage from "./page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
);
