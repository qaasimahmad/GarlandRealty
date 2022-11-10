import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { OverlayProvider } from "./hooks/context/OverlayContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <OverlayProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OverlayProvider>
  </React.StrictMode>
);
