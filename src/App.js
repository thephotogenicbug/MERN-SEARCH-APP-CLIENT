import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Bar from './components/Header/Bar';
import Search from './components/Home/Search';


function App() {
  return (
    <BrowserRouter>
          <Bar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
