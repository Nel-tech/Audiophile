import Data from "../../data.json";

import Nav from "../../Component/Nav";

import "../../Styles/Product.scss";
import ShopSection from "../../Component/ShopSection";
import TopFooter from "../../Component/TopFooter";
import Footer from "../../Component/Footer";
import Magnetic from "../../Component/Magnetic";

function Earphones() {
  const EarphoneIds = [1];

  return (
    <div>
      <div className="background">
        <Nav />
        <h1>SPEAKERS</h1>
      </div>

      <div className="headphones-product">
        {Data.filter((item) => EarphoneIds.includes(item.id)).map((val) => (
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
                    <button className="check-product mt-2">See Product</button>
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

export default Earphones;
