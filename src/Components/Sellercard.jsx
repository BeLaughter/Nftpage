import React from "react";
import "./Seller.css";
const Sellercard = (props) => {
  return (
    <div className="sellcard flex">
      <div>
        <img className="avatar" src={props.img} alt="User" />
      </div>
      <div className="sellertext">
        <h7>{props.text}</h7>
        <p>{props.text2}</p>
      </div>
    </div>
  );
};

export default Sellercard;
