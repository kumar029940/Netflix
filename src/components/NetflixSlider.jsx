import { useState } from "react";
import { sectionList } from "../data2.js";
import '../styles/NetflixSlider.css'


export default function NetflixSlider() {
   const [currentIndex, setCurrentIndex] = useState(0)

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
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <button 
          className={`slider-button left ${canSlideLeft ? '' : 'disabled'}`}
          onClick={slideLeft}
          disabled={!canSlideLeft}
        >
          &#60;
        </button>
        <div className="slider">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
          >
            {sectionList.map((movie, index) => (
              <div key={index} className="slider-item">
                <img src={movie.image} alt={movie.title} />
                <div className="movie-title">{movie.title}</div>
              </div>
            ))}
          </div>
        </div>
        <button 
          className={`slider-button right ${canSlideRight ? '' : 'disabled'}`}
          onClick={slideRight}
          disabled={!canSlideRight}
        >
          &#62;
        </button>
      </div>
    </div>
  );

}