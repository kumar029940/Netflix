import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import profile_1 from "../images/profile_2.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../styles/Library.css";


function Navbar2({search, setSearch}) {

const [expand, setExpand] = useState(false);

const handleExpand = () => {
    setExpand(true);
};

const handleSearch = (e) => {
    setSearch(e.target.value);
};

  return (
    <div>
      <div className="second_one">
          <div className="search-container">
            <SearchIcon onClick={handleExpand} className="toggle-icon" />
            <input
              className={`search-input ${expand ? "expanded" : ""}`}
              type="text"
              placeholder="Titles, people, genres"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <h4>Children</h4>
          <NotificationsNoneOutlinedIcon className="search" />
          <div className="hence">
            <img className="face" src={profile_1} alt="profile_1" />
            <ArrowDropDownIcon className="search" />
          </div>
        </div>
    </div>
  )
}

export default Navbar2
