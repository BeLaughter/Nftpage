import React from "react";
import "./Footer.css";
import { FaDiscord, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer">
      <div className="fit">
        <h1 className="text">
          Join Us to Create Sell and Collect NFTs Digital Arts
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <a className="btn foot-btn">Join Community</a>
        </div>
      </div>
      <div className="fet flex-container">
        <div className="flex-item1">
          <h1 className="navnd">
            Play<span className="grad">NFT</span>
          </h1>
          <p>
            The world’s largest Digital Marketplace for crypto collection and
            non fungible tokens (NFTs) buy, sell and discover exclusive digital
            assets
          </p>
          <div className="flex">
            <FaXTwitter className="icon blk" />
            <FaInstagram className="icon blk" />
            <FaFacebookF className="icon blk" />
            <FaDiscord className="icon blk" />
          </div>
        </div>
        <div className="flex-item2 flex-container">
          <div className="hiddenonlap">
            <input
              type="search"
              placeholder="🔍Search..."
              className="ft-search  box"
            ></input>
            <a className="btn  ftbar-btn">Register</a>
          </div>
          <ul>
            <li>
              <h4 className="blu">Explore</h4>
            </li>
            <li>
              <p>Art</p>
            </li>
            <li>
              <p>Photography</p>
            </li>
            <li>
              <p>Music</p>
            </li>
            <li>
              <p>Games</p>
            </li>
          </ul>
          <ul>
            <li>
              <h4 className="blu">My Accounts</h4>
            </li>
            <li>
              <p>My Profile</p>
            </li>
            <li>
              <p>My Collection</p>
            </li>
            <li>
              <p>My Favourite</p>
            </li>
            <li>
              <p>My Account Settings</p>
            </li>
          </ul>
          <ul>
            <li>
              <h4 className="blu">Resources</h4>
            </li>
            <li>
              <p>Help Center</p>
            </li>
            <li>
              <p>Partners</p>
            </li>
            <li>
              <p>Suggestions</p>
            </li>
            <li>
              <p>Newsletters</p>
            </li>
          </ul>
          <ul>
            <li>
              <h4 className="blu">Company</h4>
            </li>
            <li>
              <p>About</p>
            </li>
            <li>
              <p>Career</p>
            </li>
            <li>
              <p>Ranking</p>
            </li>
            <li>
              <p>Activity</p>
            </li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <h5 className="text-center">
        © 2025{" "}
        <span className="navnd2">
          Play<span className="grad">NFT</span>.
        </span>
        All Rights Reserved.Designed by BLACKFIRE
      </h5>
    </div>
  );
};

export default Footer;
