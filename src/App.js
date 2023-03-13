import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Page/About/About";
import Home from "./Page/Home/Home";
import Logement from "./Page/Logement/Logement";
import Error from "./Page/Error/Error";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
