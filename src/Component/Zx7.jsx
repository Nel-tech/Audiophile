import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";
function Zx7() {
  return (
    <div>
      <section>
        <div className="second-section">
          <div className="speaker-img">
            <div className="speaker-more">
              <h1>ZX7 SPEAKER</h1>

              <div className="btn-second">
                <Link to="/">
                  <Magnetic>
                    <Link to="/ProductPages/Speaker/zx7-speaker">
                      <button className="btn-random">SEE PRODUCT</button>
                    </Link>
                  </Magnetic>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Zx7;
