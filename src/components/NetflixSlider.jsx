import { useState } from "react";
import "../styles/NetflixSlider.css";
import Extend from "./Extend";


export default function NetflixSlider({ sectionList, myFav, setMyFav }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
              {sectionList.length > 0 && (
                sectionList.map((movie) => (
                  <div key = {movie.id} className="slider-item">
                  <Extend
                  myFav = {myFav} 
                  setMyFav = {setMyFav} 
                  id = {movie.id} 
                  image = {movie.image}
                  title = {movie.title}
                  all = {movie}
                  trailer = {movie.trailer}
                  />
                  </div>
                ))
              )}
            </div>
          </div>
          <button className={`slider-button right`} onClick={slideRight}>
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
}
