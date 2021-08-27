import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { Footer } from "./components/Footer";
ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <Footer />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
