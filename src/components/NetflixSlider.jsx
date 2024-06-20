import { useState } from "react";
import "../styles/NetflixSlider.css";
import AddIcon from '@mui/icons-material/Add';
import MyList from "./MyList";

export default function NetflixSlider({ sectionList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [myList, setMyList] = useState({});
  const [hoveredImageId, setHoveredImageId] = useState(null);

  const slidesToShow = 5;
  const totalSlides = sectionList.length;
  const canSlideLeft = currentIndex > 0;
  const canSlideRight = currentIndex < totalSlides - slidesToShow;

  const slideLeft = () => {
    if (canSlideLeft) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideRight = () => {
    if (canSlideRight) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handleMouseEnter = (movieId) => {
    setHoveredImageId(movieId);
  };

  const handleMouseLeave = () => {
    setHoveredImageId(null);
  };

  const handleMyList = (ID) => {
    setMyList((myprevList) => {
      const myNewList = {...myprevList}
      if(myNewList[ID]){
        delete myNewList[ID]
      }else{
        myNewList[ID] = {myFavouriteList : 1}
      }
      return myNewList
    })
  }

  return (
    <div>
      <div className="slider-container">
      <div className="slider-wrapper">
        <button
          className={`slider-button left ${canSlideLeft ? "" : "disabled"}`}
          onClick={slideLeft}
          disabled={!canSlideLeft}
        >
          &#60;
        </button>
        <div className="slider">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {sectionList && sectionList.length > 0 ? (
              sectionList.map((movie) => (
                <div
                  key={movie.id}
                  className="slider-item"
                  onMouseEnter={() => handleMouseEnter(movie.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={movie.image} alt={movie.title} />
                  {hoveredImageId === movie.id && (
                    <button onClick = {() => handleMyList(movie.id)} className="add"><AddIcon /></button>
                  )}
                </div>
              ))
            ) : (
              <div className="no-movies">No movies found</div>
            )}
          </div>
        </div>
        <button
          className={`slider-button right`}
          onClick={slideRight}
        >
          &#62;
        </button>
      </div>
    </div>
    </div>
  );
}
