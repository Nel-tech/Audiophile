import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";

function Section() {
  return (
    <div>
      <div>
        <section>
          <div className="big-image">
            <main>
              <div className="container-img"></div>
              <div className="more">
                <h1>
                  ZX9 <br />
                  SPEAKER
                </h1>

                <p>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>

                <div className="btn-see">
                  <Magnetic>
                    <Link to="/ProductPages/Speaker/zx9-speaker">
                      <button className="btn">SEE PRODUCT</button>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </main>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Section;
