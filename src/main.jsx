import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles/globalStyles.js";

import { Home } from "./pages/Home/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>
);
