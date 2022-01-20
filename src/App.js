import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Bar from "./components/Header/Bar";
import Courses from "./components/Course/Courses";
import CourseDetails from "./components/Course/CourseDetails";
import Search from "./components/Course/Search";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/course" element={<Courses />} />
        <Route exact path="/course/:id" element={<CourseDetails />} />
        <Route path="/:keyword" element={<Courses />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
