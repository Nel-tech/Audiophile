import Data from "../../data.json";
import Nav from "../../Component/Nav";
import { Link } from "react-router-dom";
import "../../Styles/Product.scss";
import ShopSection from "../../Component/ShopSection";
import TopFooter from "../../Component/TopFooter";
import Footer from "../../Component/Footer";
import Magnetic from "../../Component/Magnetic";

function HeadPhones() {
  const headphoneIds = [2, 3, 4];

  return (
    <div>
      <div className="background">
        <Nav />
        <h1>HEADPHONES</h1>
      </div>

      <div className="headphones-product">
        {Data.filter((item) => headphoneIds.includes(item.id)).map((val) => (
          <section key={val.id}>
            <div className="container">
              <div className="flex-product">
                <div>
                  <img
                    src={val.categoryImage.desktop}
                    alt=""
                    className="headphones-img"
                  />
                </div>

                <div>
                  <h1>NEW PRODUCT</h1>
                  <h2>{val.new}</h2>
                  <h3>{val.name}</h3>
                  <p>{val.description}</p>

                  <Magnetic>
                    <Link to={`/ProductPages/HeadPhones/${val.slug}`}>
                      <button className="check-product mt-2">
                        See Product
                      </button>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div>
        <ShopSection />
      </div>

      <div style={{ marginTop: "20rem" }}>
        <TopFooter />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HeadPhones;
