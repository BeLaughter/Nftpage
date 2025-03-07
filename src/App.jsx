import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Marketplace from "./Pages/Marketplace";
import Artist from "./Pages/Artist";
import News from "./Pages/News";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  // Initialize AOS
  useEffect(() => {
    Aos.init();
  }, []);
  // Function to scroll to top when button is clicked.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  //add/remove display class to btn when screen is scrolled to half vheight
  window.addEventListener("scroll", function () {
    let btntop = document.querySelector(".b2top");
    let scrollThreshold = btntop.offsetTop + window.innerHeight / 2; // 50vh below  position

    if (window.scrollY > scrollThreshold) {
      btntop.classList.add("display-btn");
    } else {
      btntop.classList.remove("display-btn");
    }
  });
  return (
    <div>
      <div className="b2top">
        <a href="#totop" onClick={scrollToTop}>
          ^
        </a>
      </div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/marketplace" element={<Marketplace />} />
        <Route exact path="/artist" element={<Artist />} />
        <Route exact path="/news" element={<News />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
