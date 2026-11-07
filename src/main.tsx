import React from "react";
import ReactDOM from "react-dom/client";

// Fontsource — self-hosted fonts (DESIGN.md § 3)
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/dm-sans/400.css";

// Global styles (tokens → global)
import "./styles/global.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
