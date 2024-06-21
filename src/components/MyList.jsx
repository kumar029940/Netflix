import React from "react";
import Navbar from "./Navbar";
import '../styles/MyList.css'


function MyList({ myFav, setMyFav }) {

  return (
    <div>
      <Navbar/>
      {myFav.length > 0 ? (
        <div className = 'collection'>
          {myFav.map((collection) => {
            return (
              <div key={collection.id}>
                <img src={collection.image} alt={collection.title} />
              </div>
            );
          })}
        </div>
      ) : (
        <>Your List is Empty</>
      )}
    </div>
  );
}

export default MyList;
