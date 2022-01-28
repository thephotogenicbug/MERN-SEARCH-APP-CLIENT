import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/Course/Courses";
import CourseDetails from "./components/Course/CourseDetails";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";


function App() {


  return (
    <BrowserRouter>
      {/* {isAuthenticated && <UserOption user={user} />} */}
      <Routes>
        <Route exact path="/" element={<LoginSignup />} />
        <Route exact path="/course" element={<Courses />} />
        <Route exact path="/course/:id" element={<CourseDetails />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
