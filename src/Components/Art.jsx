import "./Art.css";
import Artcard from "./Artcard";
import fr1 from "../assets/fr1.png";
import fr2 from "../assets/fr2.png";
import fr4 from "../assets/fr4.png";
import fr5 from "../assets/fr5.png";
import fr6 from "../assets/fr6.png";

const Art = () => {
  return (
    <div className="art">
      <h1
        className="text-center title"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        Explore Artworks
      </h1>
      <div className="artbox">
        <div className="flex-container">
          <Artcard img={fr1} text="Abstract" anc="30 Items" />
          <Artcard img={fr2} text="3D Arts" anc="45 Items" />
          <Artcard img={fr5} text="Modern Arts" anc="59 Items" />
        </div>
        <div className="flex-container">
          <Artcard img={fr4} text="Game" anc="25 Items" />
          <Artcard img={fr5} text="Graffiti" anc="36 Items" />
          <Artcard img={fr6} text="Watercolor" anc="zoom-in-down" />
        </div>
      </div>
    </div>
  );
};

export default Art;
