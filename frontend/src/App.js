import React, { useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
import { useDispatch } from "react-redux";
import { loadUser } from "./Redux/Actions/User";
import MyPosts from "./components/MyPosts";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/posts/:id" element={<MyPosts />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
