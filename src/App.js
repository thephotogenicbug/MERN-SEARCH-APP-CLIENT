import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Bar from './components/Header/Bar';
import Courses from './components/Course/Courses';
import CourseDetails from './components/Course/CourseDetails';
import Search from './components/Course/Search';


function App() {
  return (
    <BrowserRouter>
      <Bar />
      <Routes>
        <Route exact path="/" element={<Courses />} />
        <Route exact path="/course/:id" element={<CourseDetails />} />
        {/* <Route exact path="/courses" element={<Courses />} /> */}
        <Route path="/:keyword" element={<Courses />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
