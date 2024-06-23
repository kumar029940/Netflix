import React, { useState } from "react";

const ProfileCard = ({ src, name }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className={`large ${hover ? "larger1" : ""}`}
        src={src}
        alt="profile"
      />
      <div className={`name ${hover ? "name1" : ""}`}>{name}</div>
    </div>
  );
};

export default ProfileCard;
