import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";
import "../Styles/tailwind.css";
import "../Styles/Style.scss";

function Nav() {
  return (
    <div>
      <div className="navbar container ">
        <nav className="nav">
          <div className="logo">
            <img src="/Assets/desktop/logo.svg" alt="" className="img.logo" />
          </div>
          <div className="navlink">
            <div className="nav-list flex gap-10 text-white">
              <div>
                <Magnetic>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </Magnetic>
              </div>

              <div>
                <Magnetic>
                  <Link to="/headphones" className="link">
                    HeadPones
                  </Link>
                </Magnetic>
              </div>

              <div>
                <Magnetic>
                  <Link to="/speaker" className="link">
                    Speaker
                  </Link>
                </Magnetic>
              </div>
              <div>
                <Magnetic>
                  <Link to="/EarPhones" className="link">
                    EarPhones
                  </Link>
                </Magnetic>
              </div>
              <img src="tablet/icon-close.svg" alt="" className="icon-close" />
            </div>
          </div>
          <div className="cart">
            {/* <div className="notf-cart">0</div> */}
            <img
              src="/Assets/desktop/icon-cart.svg"
              alt=""
              className="img-cart"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
