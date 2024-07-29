import React, { useState } from 'react'
import '../styles/MyList.css'
import "../styles/NetflixSlider.css";
import AddIcon from "@mui/icons-material/Add";
import '../styles/Extend.css'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

function Extend({myFav, setMyFav, id, title, image, all, trailer}) {

const [hoveredImageId, setHoveredImageId] = useState(null);
const [glimpse, setGlimpse] = useState(null)
const [sound, setSound] = useState(false)

  const handleSound = () => {
   setSound(!sound)
  }

  const handleMouseEnter = (movieId, movieTrailer) => {
    setHoveredImageId(movieId);
    setGlimpse(movieTrailer)
  };

  const handleMouseLeave = () => {
    setHoveredImageId(null);
    setGlimpse(null)
  };

  const handleMyList = (movie) => {
    const isPresent = myFav.find((item) => item.id === movie.id);
    let updatedFavList;
    if (isPresent)
      updatedFavList = myFav.filter((item) => item.id !== movie.id);
      else updatedFavList = [...myFav, movie];
    setMyFav(updatedFavList);
  };

  return (
      <div 
      className="slider-item"
      onMouseEnter={() => handleMouseEnter(id, trailer)}
      onMouseLeave={handleMouseLeave}
      >
      <img src={image} alt={title} />
                {hoveredImageId === id && (
                  <>
                      <button
                        onClick={() => handleMyList(all)}
                        className="add"
                      >
                        {myFav.find((item) => item.id === id) ? (
                          '-'
                        ) : (
                          <AddIcon />           
                        )}
                      </button>
                       <div onClick = {handleSound} className = 'sound2'>
                         {sound ? <VolumeUpIcon/> : <VolumeOffIcon/>}
                        </div>
                         {sound === true ? (<video className="hb" autoPlay loop playsInline>
                         <source src={glimpse} type="video/mp4" />
                         </video>): (
                         <video className="hb" autoPlay loop muted playsInline>
                          <source src={glimpse} type="video/mp4" />
                        </video>
                      )}
                    </>
                    )}
        </div>
  )
}

export default Extend
