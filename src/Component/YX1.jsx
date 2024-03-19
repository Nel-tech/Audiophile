import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";

function Zx9() {
  return (
    <div>
      <section>
        <div className="product-flex">
          <div className="first-product">
            <img
              src="/Assets/home/desktop/image-earphones-yx1.jpg"
              alt=""
              className="img-ear"
            />
          </div>

          <div className="second-product">
            <h1>YX1 EARPHONE</h1>

            <div className="btn-second">
              <Magnetic>
                <Link to="/ProductPages/Earphones/yx1-earphones">
                  <button className="btn-random">SEE PRODUCT</button>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Zx9;
