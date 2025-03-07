import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  //Event listener for addiing and removing fixed class to navbar
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav2");
    let sticky = navbar.offsetTop;

    if (window.scrollY > sticky) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });
  return (
    <div className="nav2">
      <nav className="navbar navbar-expand-lg navbar-warning bg">
        <div className="container-fluid">
          <h1 className="navbar-brand">
            Play<span className="grad">NFT</span>
          </h1>
          <button
            className="navbar-toggler bg hiddenonlap"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <Link to="/" className="nav-link active" aria-current="page">
                <li className="nav-item">Home</li>
              </Link>
              <Link to="/explore" className="nav-link">
                <li className="nav-item">Explore</li>
              </Link>
              <Link to="/marketplace" className="nav-link">
                <li className="nav-item">Marketplace</li>
              </Link>
              <Link to="/artist" className="nav-link">
                <li className="nav-item">Artist</li>
              </Link>
              <Link to="/news" className="nav-link">
                <li className="nav-item">News</li>
              </Link>
              <li className="nav-item">
                <input
                  type="search"
                  placeholder="🔍Search..."
                  className="nav-search hiddenonmobile box"
                ></input>
              </li>
              <li className="nav-item">
                <a className="btn hiddenonmobile navbar-btn">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
