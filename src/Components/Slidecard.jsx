import React from "react";
import "./Slide.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaQuoteLeft,
} from "react-icons/fa";
const Slidecard = (props) => {
  return (
    <div className="slidecard">
      <div className="slideimg">
        <img src={props.img} className="slide-img" alt="slides"></img>
      </div>
      <div className="slidetext flex">
        <div className="slidep">
          <p>{props.text}</p>
          <p>{props.text2}</p>
        </div>
        <div>
          <a className="btn  body-btn2 box">{props.anc}</a>
          <p className="p10 slidep">
            <FaHeart className="icons blk" /> {props.text3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slidecard;
