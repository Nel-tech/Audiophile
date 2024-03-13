import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";
function Section() {
  return (
    <div>
      <div>
        <section className="category">
          <div className="container-products">
            <div className="products1">
              <img
                src="/Assets/desktop/image-category-thumbnail-headphones.png"
                alt=""
                className="cont-img"
              />

              <h1>HEADPHONE</h1>
              <Magnetic>
                <Link to="/">
                  <p className="link-text">SHOP </p>
                </Link>
              </Magnetic>
            </div>

            <div className="products1">
              <img
                src="/Assets/desktop/image-category-thumbnail-speakers.png"
                alt=""
                className="cont-img"
              />

              <h1>SPEAKERS</h1>
              <Magnetic>
                <Link to="/">
                  <p className="link-text">SHOP </p>
                </Link>
              </Magnetic>
            </div>

            <div className="products1">
              <img
                src="/Assets/desktop/image-category-thumbnail-earphones.png"
                alt=""
                className="cont-img"
              />

              <h1>EARPHONES</h1>
              <Magnetic>
                <Link to="/">
                  <p className="link-text">SHOP </p>
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Section;
