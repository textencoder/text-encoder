import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lab from "./routes/Lab/Lab.jsx";
import Home from "./routes/Home/Home.jsx";
import "./styles/global.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab" element={<Lab />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
