import Nav from "../../Component/Nav";
import Magnetic from "../../Component/Magnetic";
import Data from "../../data.json";
import { Link } from "react-router-dom";
import "../../Styles/tailwind.css";
import "../../Styles/Style.scss";
import "../../Styles/Product.scss";
import Footer from "../../Component/Footer";
import IncandDec from "../../Component/IncandDec";

function xx59HeadPhones() {
  const { count, dec, inc} = IncandDec();
  const headphoneIds = [2];
  return (
    <div>
      <div className="background">
        <Nav />
        <h1>XX59 HEADPHONES</h1>
      </div>

      <div>
        {Data.filter((item) => headphoneIds.includes(item.id)).map((val) => (
          <section key={val.id}>
            <div className="container">
              <div className="flex-product">
                <div>
                  <h1>NEW PRODUCT</h1>
                  <h2>{val.new}</h2>
                  <h3>{val.name}</h3>
                  <p>{val.description}</p>
                  <h4>{val.price}</h4>

                  <div className="flex-btn">
                    <div className="padd">
                      <button className="minus" onClick={dec}>
                        -
                      </button>
                      <p className="content">{count}</p>
                      <button className="plus" onClick={inc}>
                        +
                      </button>
                    </div>
                    <div>
                      <Magnetic>
                        <button className="cart-btn ">ADD TO CART</button>
                      </Magnetic>
                    </div>
                  </div>
                </div>

                <div>
                  <img src={val.image.desktop} alt="" className="product-img" />
                </div>
              </div>

              <div className="container features-container ">
                <h4 className="">FEATURES</h4>
                <div className="">
                  <p>{val.features}</p>
                </div>
              </div>

              <div className="product-details">
                <div>
                  <h5
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bolder",
                      marginTop: "1rem",
                    }}
                  >
                    IN THE BOX
                  </h5>
                </div>
                <ul>
                  {val.includes.map((include, index) => (
                    <div key={index}>
                      <li
                        style={{
                          color: "#d87d4a",
                          paddingTop: ".9rem",
                          paddingBottom: ".8rem",
                        }}
                      >{`${include.quantity} x`}</li>
                    </div>
                  ))}
                </ul>

                <ul>
                  {val.includes.map((include, index) => (
                    <div key={index}>
                      <li
                        style={{
                          textAlign: "right",
                          paddingTop: ".9rem",
                          paddingBottom: ".8rem",
                        }}
                      >{`${include.item}`}</li>
                    </div>
                  ))}
                </ul>
              </div>

              <div className="gallery-images">
                <div>
                  <div>
                    <img
                      src={val.gallery.first.desktop}
                      alt=""
                      className="first-desktop"
                    />
                  </div>

                  <div style={{ paddingTop: "2rem" }}>
                    <img
                      src={val.gallery.second.desktop}
                      alt=""
                      className="second-desktop"
                    />
                  </div>
                </div>

                <div>
                  <img
                    src={val.gallery.third.desktop}
                    alt=""
                    className="third-desktop"
                  />
                </div>
              </div>

              <div
                style={{
                  marginTop: "5rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  textAlign: "center",
                }}
              >
                <h5
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    fontSize: "1.6rem",
                  }}
                >
                  YOU MAY ALSO LIKE
                </h5>

                <div className="mx-auto text-center">
                  <div className="recommend-products">
                    {val.others.map((other, index) => (
                      <div key={index}>
                        <img src={other.image.desktop} alt="" />
                        <h5>{other.name}</h5>

                        <div className="recommend-btn">
                          <Magnetic>
                            <Link to={`/others/xx59/${other.slug}`}>
                              <button className="like-btn ">See Product</button>
                            </Link>
                          </Magnetic>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
export default xx59HeadPhones;
