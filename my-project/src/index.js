import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyMap from "./Components/myMap";
import reportWebVitals from "./reportWebVitals";
import "leaflet/dist/leaflet.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <MyMap />
  </React.StrictMode>
);

reportWebVitals();
