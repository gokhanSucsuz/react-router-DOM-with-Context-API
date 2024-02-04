import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <SiteContextProvider>
          <App />
        </SiteContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter } from "react-router-dom";
import { SiteContextProvider } from "./context/SiteContext.jsx";
import { ThemeContextProvider } from "./context/ThemeContext.jsx";
