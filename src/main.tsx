import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HumburgerContextProvider } from "./components/menu/context/HumburgerContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <HumburgerContextProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </HumburgerContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
