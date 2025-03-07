import React from "react";
import "./Body.css";
import { FaVideo } from "react-icons/fa";
import rec from "../assets/rec.png";
const Body = () => {
  return (
    <div className="body">
      <div className="flex-container">
        <div className="flex-item">
          <div className="row">
            <h1>Discover, Collect and Sell Dope Art and NFTS</h1>
            <p>
              The worlds largest digital marketplace for crypto collection and
              non fungible token (NFTS)
            </p>
          </div>
          <div className="row2 flex">
            <div>
              {" "}
              <a className="btn  body-btn">Discover</a>
            </div>
            <div>
              <a className="btn  body-btn2 box">Create</a>
            </div>
            <div className="pbody">
              <p>
                <FaVideo className="iconb" /> Watch a video
              </p>
            </div>
          </div>
          <div className="row3 flex box2">
            <div className="">
              <p>27k +</p>
              <p>Art works</p>
            </div>
            <div className="">
              <p>20k +</p>
              <p>Auction</p>
            </div>
            <div className="">
              <p>7k +</p>
              <p>Artist</p>
            </div>
          </div>
          <div className="row4 flex">
            <div class="avatar-group">
              <img
                class="avatar"
                src="https://randomuser.me/api/portraits/women/5.jpg"
                alt="User 1"
              ></img>
              <img
                class="avatar"
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="User 2"
              ></img>
              <img
                class="avatar"
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="User 3"
              ></img>
              <img
                class="avatar"
                src="https://randomuser.me/api/portraits/men/4.jpg"
                alt="User 4"
              ></img>
            </div>
            <div>
              <p>40k +</p>
              <p>Active Users</p>
            </div>
          </div>
        </div>

        <div className="flex-item">
          <div className="square">
            <div className="squar">
              <div className="sqa">
                <img src={rec} alt="rec" className="imgbody"></img>
              </div>
              <div className="sqb flex">
                <div>
                  <p className="text-center p">
                    Ending inc<br></br>1hr 20m 30s
                  </p>
                  <a className="btn  body-btn">Place a bid</a>
                </div>
                <div>
                  <p className="text-center p">
                    Highest bid<br></br>32.4ETH
                  </p>
                  <a className="btn  body-btn">Purchased</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
