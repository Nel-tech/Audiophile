import Nav from "../Component/Nav";
import Magnetic from "./Magnetic";
import { Link } from "react-router-dom";
function Background() {
  return (
    <div className="home-background">
      <Nav />

      <div className=" background-text">
        <h1 className="text-primary pb-4"> NEW PRODUCT</h1>
        <h2 className="text-white text-6xl max-w-textWidth tracking-normal font-bold pb-4">
          XX99 MARK II HEADPHONES
        </h2>
        <p className="text-primary max-w-textWidth tracking-wider">
          Experince Natural, Lifelike Audio And Exceptional Build Quality Made
          For The Passionate Music Enthusiast.
        </p>

        <Magnetic>
          <Link to="/ProductPages/HeadPhones/xx99-mark-two-headphones.jsx">
            <button className="button mt-2">See Product</button>
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}

export default Background;
