import Background from "../../Component/Background";
import ShopSection from "../../Component/ShopSection";
import Section from "../../Component/Section";
import Zx7 from "../../Component/Zx7";
import Zx9 from "../../Component/Zx9";
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
        <Zx9 />
      </div>
    </div>
  );
}

export default Home;
