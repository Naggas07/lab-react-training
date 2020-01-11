import React from "react";
import "../styles/CreditCard.css";

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => {
  const imageCard = type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";

  return (
    <div className="creditCard" style={{ background: `${bgColor}` }}>
      <div className="cardLogo">
        <img src={imageCard} alt={type}></img>
      </div>
      <div className="creditNumber" style={{color : `${color}`}}>
        ···· ···· ···· {number.substring(12, 16)}
      </div>
      <div className="cardItems" style={{color : `${color}`}}>
        <div className="cardInfo" >
          <p>Experies {`${expirationMonth}/${expirationYear}    ${bank}`}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
