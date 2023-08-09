import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // disini saya menggunakan react router dom agar mempermudah untuk berpindah halaman nantinya dari Home ke Login
  <Router>
    <App />
  </Router>
);
