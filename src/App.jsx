import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import Individuals from "./components/Individuals";
import Team from "./components/Team";
import Enterpise from "./components/Enterprise";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/individuals" element={<Individuals />} />
          <Route path="/team" element={<Team />} />
          <Route path="/enterprise" element={<Enterpise />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
