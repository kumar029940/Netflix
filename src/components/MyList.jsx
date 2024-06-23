import React from "react";
import Navbar from "./Navbar";
import '../styles/MyList.css'
import "../styles/NetflixSlider.css";
import Extend from "./Extend";


function MyList({ myFav, setMyFav }) {
  
  return (
    <div>
      <Navbar/>
      {myFav.length > 0 && (
        <div className = 'collection'>
          {myFav.map((collection) => {
            return (
              <div key = {collection.id} className="slider-item">
              <Extend 
              myFav = {myFav} 
              setMyFav = {setMyFav} 
              id = {collection.id} 
              image = {collection.image}
              title = {collection.title}
              all = {collection}
              />
              </div>
            );
          })}
        </div>
      ) }
    </div>
  );
}

export default MyList;
