import React, { useState } from "react";
import "./styles/App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "./components/Browse";
import Library from "./components/Library";
import MyList from "./components/MyList";

export default function App() {
  const [index, setIndex] = useState(null);
  const [myFav, setMyFav] = useState([]);

  function handleNextIndex(selectedIndex) {
    setIndex((prevIndex) =>
      prevIndex === selectedIndex ? null : selectedIndex
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home index={index} handleNextIndex={handleNextIndex} />}
        />
        <Route path="/browse" element={<Browse />} />
        <Route
          path="/library"
          element={<Library myFav={myFav} setMyFav={setMyFav} />}
        />
        <Route
          path="/mylist"
          element={<MyList myFav={myFav} setMyFav={setMyFav} />}
        />
      </Routes>
    </Router>
  );
}
