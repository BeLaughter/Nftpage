import React from "react";
import "./Seller.css";

const Seller = () => {
  return (
    <div className="seller">
      <h1 className="title text-center">Top Seller</h1>

      <div className="slider-wrapper">
        {/* First slider moving left */}
        <div className="auto-slider-container">
          <div className="auto-slider auto-slider-left">
            <div className="bat red"></div>
            <div className="bat blue"></div>
            <div className="bat green"></div>
            <div className="bat yellow"></div>
            {/* repeated for infinite feel */}
            <div className="bat red"></div>
            <div className="bat blue"></div>
            <div className="bat green"></div>
            <div className="bat yellow"></div>
          </div>
        </div>

        {/* Second slider moving right */}
        <div className="auto-slider-container">
          <div className="auto-slider auto-slider-right">
            <div className="bat purple"></div>
            <div className="bat orange"></div>
            <div className="bat pink"></div>
            <div className="bat cyan"></div>
            {/* repeated for infinite feel */}
            <div className="bat purple"></div>
            <div className="bat orange"></div>
            <div className="bat pink"></div>
            <div className="bat cyan"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
