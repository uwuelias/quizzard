import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/*
It listens to URL changes (like when users click links or use the browser back/forward buttons).
It updates your React app’s displayed components without causing a full page reload.
Keeps the URL in the address bar clean and user-friendly (no hash # symbols).
Lets you define different components to render on different URLs (routes).
*/}
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
