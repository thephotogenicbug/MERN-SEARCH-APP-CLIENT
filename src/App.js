import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/Course/Courses";
import CourseDetails from "./components/Course/CourseDetails";
import LoginSignup from "./components/LoginSignup/LoginSignup";


function App() {


  return (
    <BrowserRouter>
      {/* {isAuthenticated && <UserOption user={user} />} */}
      <Routes>
        <Route exact path="/" element={<LoginSignup />} />
        <Route exact path="/course" element={<Courses />} />
        <Route exact path="/course/:id" element={<CourseDetails />} />
        {/* <Route exact path="/coursesearch" element={<CourseSearch />} />
        <Route path="/coursesearch/:keyword" element={<CourseSearch />} />
        <Route exact path="/search" element={<Search />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
