import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </React.StrictMode>
);
