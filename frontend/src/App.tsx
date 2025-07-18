import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderFrame } from "./components/HeaderFrame";

export default function App() {
  return (
    <Router>
      <HeaderFrame />
    </Router>
  );
}