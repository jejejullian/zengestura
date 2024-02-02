import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import AbjadData from "./pages/AbjadData";
import AngkaData from "./pages/AngkaData";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/abjad" element={<AbjadData />} />
        <Route path="/angka" element={<AngkaData />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
