import React from "react";
import ReactDOM from 'react-dom/client'; // ✅ correct import for React 18+
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ✅ New way to render in React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
