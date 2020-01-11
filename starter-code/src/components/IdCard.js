import React from "react";
import '../styles/IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="card">
      <div className="imgCard">
        <img src={picture} alt="icon"></img>
      </div>
      <div className="InfoCard">
        <p>
          <span>First name: </span> {firstName}
        </p>
        <p>
          <span>Last name: </span> {lastName}
        </p>
        <p>
          <span>Gender: </span> {gender}
        </p>
        <p>
          <span>Height: </span> {height}
        </p>
        <p>
          <span>Birth: </span> {birth}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
