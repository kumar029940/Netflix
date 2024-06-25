import React, { useEffect, useState } from "react";
import "../styles/Library.css";
import NetflixSlider from "./NetflixSlider";
import { sectionList } from "../data2.js";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

function Library({ myFav, setMyFav }) {
  const [filterMovies, setFilterMovies] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const [sound, setSound] = useState(false);

  const fetchData = () => {
    setData(sectionList);
    setIndex(Math.floor(Math.random() * 5));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilterMovies(
      data.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  const handleSound = () => {
    setSound(!sound);
  };

  return (
    <div>
      <div className="align">
        <Navbar />
        <Navbar2 search={search} setSearch={setSearch} />
      </div>
      <div>
        {data.length > 0 && (
          <div>
            {sound === true ? (
              <video className="spider-man" autoPlay loop playsInline>
                <source src={data[index].trailer} type="video/mp4" />
              </video>
            ) : (
              <video className="spider-man" autoPlay loop muted playsInline>
                <source src={data[index].trailer} type="video/mp4" />
              </video>
            )}

            <div className="movable" onClick={handleSound}>
              {sound ? <VolumeUpIcon /> : <VolumeOffIcon />}
            </div>
          </div>
        )}
      </div>

      <div className="movies">
        <div className="shape">
          <div className="move">
            <h3>Movies Based on Books</h3>
          </div>
          <NetflixSlider
            sectionList={filterMovies.slice(0, 10)}
            myFav={myFav}
            setMyFav={setMyFav}
          />
          <div className="move">
            <h3>Thriller Movies</h3>
          </div>
          <NetflixSlider
            sectionList={filterMovies.slice(11, 20)}
            myFav={myFav}
            setMyFav={setMyFav}
          />
        </div>
      </div>
    </div>
  );
}

export default Library;
