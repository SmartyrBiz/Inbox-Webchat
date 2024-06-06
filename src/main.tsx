import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const renderWebChat = (element: HTMLElement) => {
  const root = ReactDOM.createRoot(element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

export { renderWebChat };
