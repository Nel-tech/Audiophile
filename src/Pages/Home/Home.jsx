import Background from "../../Component/Background";
import ShopSection from "../../Component/ShopSection";
import Section from "../../Component/Section";
import Zx7 from "../../Component/Zx7";
import YX1 from "../../Component/YX1";
import TopFooter from "../../Component/TopFooter";
import Footer from "../../Component/Footer";
function Home() {
  return (
    <div>
      <div>
        <Background />
      </div>
      <div>
        <ShopSection />
      </div>

      <div>
        <Section />
      </div>

      <div>
        <Zx7 />
      </div>

      <div>
        <YX1 />
      </div>

      <div>
        <TopFooter/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
