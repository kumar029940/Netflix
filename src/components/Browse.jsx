import React from "react";
import "../styles/Browse.css";
import profile_1 from "../images/profile_1.jpg";
import profile_2 from "../images/profile_2.jpg";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";

function Browse() {
  return (
    <div className="All_things">
      <div>
        <h1 className="Iam">Who's watching?</h1>
      </div>
      <div className="All_Profiles">
      <Link to="/library">
        <ProfileCard src={profile_1} name={"kumar"} />
        </Link>
        
        <Link to="/library">
          <ProfileCard src={profile_2} name={"Riju"} />
        </Link>
      </div>
    </div>
  );
}

export default Browse;
