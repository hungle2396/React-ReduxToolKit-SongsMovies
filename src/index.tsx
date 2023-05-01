import "bulma/css/bulma.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./store";

const el = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(el);

root.render(<App />);