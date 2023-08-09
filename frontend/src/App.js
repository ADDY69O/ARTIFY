import React, { useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  const circleRef = useRef(null);

  const handleMove = (event) => {
    const circle = circleRef.current;
    if (circle) {
      const circleRect = circle.getBoundingClientRect();

      const circleCenterX = circleRect.left + circleRect.width / 2;
      const circleCenterY = circleRect.top + circleRect.height / 2;

      const offsetX = event.clientX - circleCenterX;
      const offsetY = event.clientY - circleCenterY;

      circle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
  };

  return (
    <>
      <div className="mini" onMouseMove={handleMove} ref={circleRef}></div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/:id" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
