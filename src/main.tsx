import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/contexts/theme-provider.tsx";
import "driver.js/dist/driver.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
