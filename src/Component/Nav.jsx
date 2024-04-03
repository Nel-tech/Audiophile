import { Link } from "react-router-dom";
import { useState } from "react";
import Magnetic from "./Magnetic";
import "../Styles/tailwind.css";
import "../Styles/Style.scss";
import { useCart } from "./CartContext";
function Nav() {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
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
                    HeadPhones
                  </Link>
                </Magnetic>
              </div>

              <div>
                <Magnetic>
                  <Link to="/speakers" className="link">
                    Speaker
                  </Link>
                </Magnetic>
              </div>
              <div>
                <Magnetic>
                  <Link to="/earphones" className="link">
                    EarPhones
                  </Link>
                </Magnetic>
              </div>
              <img src="tablet/icon-close.svg" alt="" className="icon-close" />
            </div>
          </div>
          <div className="cart" onClick={toggleCart}>
            <div className="notf-cart">{cartItems.length}</div>
            <img
              src="/Assets/desktop/icon-cart.svg"
              alt=""
              className="img-cart"
            />
          </div>

          <div className="popup-page">
            {isCartOpen && (
              <div className="cart-dropdown  overall-popup">
                {cartItems.length === 0 ? (
                  <p>Cart is empty</p>
                ) : (
                  <ul>
                    {cartItems.map((item, index) => (
                      <li key={index}>
                        <img src={item.image} alt={item.name} />
                        <div>
                          <p style={{ color: "white" }}>{item.name}</p>
                          <p>{item.price}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
