import "./Body.css";
import { FaVideo } from "react-icons/fa";
import rec from "../assets/rec.png";

const Body = () => {
  return (
    <div className="body">
      <div className="flex-container">
        <div
          className="flex-item"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          <div className="row">
            <h1 className="bodh1">
              Discover, Collect and Sell Dope Art and NFTS
            </h1>
            <p>
              The world's largest digital marketplace for crypto collection and
              non-fungible tokens (NFTs)
            </p>
          </div>
          <div
            className="row2 flex"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div>
              <a className="btn body-btn">Discover</a>
            </div>
            <div>
              <a className="btn body-btn2 box">Create</a>
            </div>
            <div className="pbody">
              <p>
                <FaVideo className="iconb" /> Watch a video
              </p>
            </div>
          </div>
          <div
            className="row3 flex box2"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div>
              <p>27k +</p>
              <p>Art works</p>
            </div>
            <div>
              <p>20k +</p>
              <p>Auction</p>
            </div>
            <div>
              <p>7k +</p>
              <p>Artist</p>
            </div>
          </div>
          <div
            className="row4 flex"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="avatar-group">
              <img
                className="avatar"
                src="https://randomuser.me/api/portraits/women/5.jpg"
                alt="User 1"
              />
              <img
                className="avatar"
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="User 2"
              />
              <img
                className="avatar"
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="User 3"
              />
              <img
                className="avatar"
                src="https://randomuser.me/api/portraits/men/4.jpg"
                alt="User 4"
              />
            </div>
            <div>
              <p>
                40k +<br />
                Active Users
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex-item"
          data-aos="flip-left"
          data-aos-duration="2500"
        >
          <div className="square">
            <div className="squar">
              <div className="sqa">
                <img src={rec} alt="rec" className="imgbody" />
              </div>
              <div className="sqb flex">
                <div>
                  <p className="text-center p">
                    Ending in
                    <br />
                    1hr 20m 30s
                  </p>
                  <a className="btn body-btn">Place a bid</a>
                </div>
                <div>
                  <p className="text-center p">
                    Highest bid
                    <br />
                    32.4ETH
                  </p>
                  <a className="btn body-btn">Purchased</a>
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
