import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/Course/Courses";
import CourseDetails from "./components/Course/CourseDetails";
import Search from "./components/Course/Search";
import LoginSignup from "./components/LoginSignup/LoginSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginSignup />} />
        <Route exact path="/course" element={<Courses />} />
        <Route exact path="/course/:id" element={<CourseDetails />} />
        <Route path="/:keyword" element={<Courses />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
