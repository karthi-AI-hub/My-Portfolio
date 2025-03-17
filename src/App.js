import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

import "./styles/global.css";
import "./styles/Navbar.css";
import "./styles/Footer.css";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
