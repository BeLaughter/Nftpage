import React from "react";
import "./Art.css";
const Artcard = (props) => {
  return (
    <div className="artcard" data-aos="flip-left" data-aos-duration="2500">
      <div className="artimg">
        <img src={props.img} alt="ar image" className="art-img"></img>
      </div>
      <div className="flex bum">
        <p className="artp"> {props.text} </p>
        <a className="btn  art-btn2 boxs">{props.anc}</a>
      </div>
    </div>
  );
};

export default Artcard;
