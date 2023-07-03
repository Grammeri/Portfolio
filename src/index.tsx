import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "dotenv/config"; // Import dotenv/config

import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as Element | DocumentFragment
); // Use type assertion to resolve the type error
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
