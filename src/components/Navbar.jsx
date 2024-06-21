import React, { useState } from 'react'
import { Link } from "react-router-dom";
import netflix_icon from "../images/netflix_icon.png";
import "../styles/Library.css";

function Navbar() {

  return (
    <div>
        <div className="first_one">
          <img className="netflix_image" src={netflix_icon} alt="netflix" />
          <Link className = 'o' to = '/library'>
          <h4>Home</h4>
          </Link>
          <h4>TV Shows</h4>
          <h4>Movies</h4>
          <h4>New & Popular</h4>
          <Link className = 'o' to="/mylist">
            <h4>My List</h4>
          </Link>
          <h4>Browse by Languages</h4>
        </div>
      
    </div>
  )
}

export default Navbar
