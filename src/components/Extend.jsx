import React, { useState } from 'react'
import '../styles/MyList.css'
import "../styles/NetflixSlider.css";
import AddIcon from "@mui/icons-material/Add";


function Extend({myFav, setMyFav, id, title, image, all}) {

const [hoveredImageId, setHoveredImageId] = useState(null);

  const handleMouseEnter = (movieId) => {
    setHoveredImageId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredImageId(null);
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
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
              >
                <img src={image} alt={title} />
                {hoveredImageId === id && (
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
                    )}
        </div>
  )
}

export default Extend
