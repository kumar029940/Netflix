import React, { useEffect, useState, useRef } from "react";
import netflix_icon from "../images/netflix_icon.png";
import "../styles/Library.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import profile_1 from "../images/profile_2.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NetflixSlider from "./NetflixSlider";
import { sectionList } from "../data2.js";
import clip from '../images/clip2.mp4';
import { Link } from "react-router-dom";

function Library() {
  const [expand, setExpand] = useState(false);
  const [search, setSearch] = useState("");
  const [filterMovies, setFilterMovies] = useState([]);
  const [data, setData] = useState([]);

  const handleExpand = () => {
    setExpand(true);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const fetchData = () => {
    setData(sectionList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilterMovies(
      data.filter((movie) =>
        movie.title?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

 

  return (
    <div>
      <div className="align">
        <div className="first_one">
          <img className="netflix_image" src={netflix_icon} alt="netflix" />
          <h4>Home</h4>
          <h4>TV Shows</h4>
          <h4>Movies</h4>
          <h4>New & Popular</h4>
          <Link to = 'mylist'>
          <h4>My List</h4>
          </Link>
          <h4>Browse by Languages</h4>
        </div>
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
      <div>
        <video
          className="spider-man"
          autoPlay
          loop
          playsInline
        >
          <source src={clip} type="video/mp4" />
        </video>
      </div>

      <div className="movies">
        <div className="shape">
          <div className="move">
            <h3>Movies Based on Books</h3>
          </div>
          <NetflixSlider sectionList={filterMovies.slice(0, 10)} />
          <div className="move">
            <h3>Thriller Movies</h3>
          </div>
          <NetflixSlider sectionList={filterMovies.slice(11, 20)} />
        </div>
      </div>
    </div>
  );
}

export default Library;
