import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "./components/Browse";
import Library from "./components/Library";

export default function App() {
  const [index, setIndex] = useState(null);

  function handleNextIndex(selectedIndex) {
    setIndex((prevIndex) =>
      prevIndex === selectedIndex ? null : selectedIndex
    );
  }

 return (
  <Router>
    <Routes>
      <Route
      path = '/'
      element = {
        <Home index = {index} handleNextIndex = {handleNextIndex} />
      }
      />
      <Route
      path = '/browse'
      element = {
        <Browse />
      }
      />
      <Route
      path = '/library'
      element = {
        <Library />
      }
      />
    </Routes>
  </Router>
 )

}
