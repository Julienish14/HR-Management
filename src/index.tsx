import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import AppRoutes from "./Routes/Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

//console.log(searchCompanies("tsla"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);
