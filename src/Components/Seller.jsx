import React from "react";
import "./Seller.css";
import Sellercard from "./Sellercard";
const Seller = () => {
  return (
    <div className="seller">
      <h1
        className="title text-center"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        Top Seller
      </h1>

      <div className="slider-wrapper">
        {/* First slider moving left */}
        <div className="auto-slider-container">
          <div className="auto-slider auto-slider-left">
            <div className="bat red d-flex justify-content-center align-items-center">
              <Sellercard
                img="https://randomuser.me/api/portraits/men/2.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat blue d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/women/5.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat green d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/women/3.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat yellow d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/men/4.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            {/* repeated for infinite feel */}
            <div className="bat red d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/men/2.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat blue d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/women/5.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat green d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/women/3.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat yellow d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/men/4.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
          </div>
        </div>

        {/* Second slider moving right */}
        <div className="auto-slider-container">
          <div className="auto-slider auto-slider-right">
            <div className="bat purple d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/men/2.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat orange d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/women/5.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat pink d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/women/3.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat cyan d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/men/4.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            {/* repeated for infinite feel */}
            <div className="bat purple d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/men/2.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat orange d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/women/5.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat pink d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/women/3.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
            <div className="bat cyan d-flex justify-content-center align-items-center">
              {" "}
              <Sellercard
                img="https://randomuser.me/api/portraits/men/4.jpg"
                text="James Burbon"
                text2="33ETH"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
