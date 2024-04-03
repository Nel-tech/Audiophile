import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./Styles/tailwind.css";
import "./Styles/Style.scss";
import { CartProvider } from "./Component/CartContext";
// import OtherProduct1 from "./others/xx99MarkII/xx59-headphones";
// import OtherProduct2 from "./others/xx99MarkII/xx99-mark-one-headphones";
// import OtherProduct3 from "./others/xx99MarkII/zx9-speaker";
import LinkHeader from "./ProductPages/HeadPhones/xx99-mark-two-headphones";
import ZX9HOMESECTION from "./ProductPages/Speaker/zx9-speaker";
import ZX7HOMESECTION from "./ProductPages/Speaker/zx7-speaker";
import YX1HOMESECTION from "./ProductPages/Earphones/yx1-earphones";
import HeadPhones from "./Pages/HeadPhones/HeadPhones";
import Speakers from "./Pages/Speakers/Speakers";
import Earphones from "./Pages/Earphones/Earphones";
import Xx59HeadPhones from "./ProductPages/HeadPhones/xx59-headphones";
import XX99HeadPhones from "./ProductPages/HeadPhones/xx99-mark-one-headphones";
import XX99MarkTwo from "./ProductPages/HeadPhones/xx99-mark-two-headphones";
import ZX7Speaker from "./ProductPages/Speaker/zx7-speaker";
import ZX9Speaker from "./ProductPages/Speaker/zx9-speaker";
import YX1 from "./ProductPages/Earphones/yx1-earphones";
import RecommendXX9ONE from "./others/xx59/xx99-mark-one-headphones";
import RecommendXX9TWO from "./others/xx59/xx99-mark-two-headphones";
import RecommendZX9SPEAKER from "./others/xx59/zx9-speaker";

import RecommendXX59 from "./others/xx99Mark1/xx59-headphones";
import RecommendXX9TWOMARK1 from "./others/xx99Mark1/xx99-mark-two-headphones";
import RecommendZX9SPEAKERMARK1 from "./others/xx99Mark1/zx9-speaker";

import RecommendMARKIIXX59 from "./others/xx99MarkII/xx59-headphones";
import RecommendXX9MARKII from "./others/xx99MarkII/xx99-mark-one-headphones";
import RecommendZX9SPEAKERMARKII from "./others/xx99MarkII/zx9-speaker";

import RecommendZX7XX59 from "./others/zx7/xx59-headphones";
import RecommendZX7XX9MARKII from "./others/zx7/xx99-mark-one-headphones";
import RecommendZX7SPEAKERMARKII from "./others/zx7/zx9-speaker";

import RecommendZX9MARK from "./others/zx9/xx59-headphones";
import RecommendZX9 from "./others/zx9/xx99-mark-one-headphones";
import RecommendZX9ZX7 from "./others/zx9/zx7-speaker";

import Recommendyx1 from "./others/yx1/xx59-headphones";
import RecommendXX99 from "./others/yx1/xx99-mark-one-headphones";
import RecommendZX9YX1 from "./others/yx1/zx9-speaker";
const App = () => {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<HeadPhones />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />

          <Route
            path="/ProductPages/HeadPhones/xx99-mark-two-headphones.jsx"
            element={<LinkHeader />}
          />

          <Route
            path="/ProductPages/Speaker/zx9-speaker"
            element={<ZX9HOMESECTION />}
          />

          <Route
            path="/ProductPages/Speaker/zx7-speaker"
            element={<ZX7HOMESECTION />}
          />

          <Route
            path="/ProductPages/Earphones/yx1-earphones"
            element={<YX1HOMESECTION />}
          />

          <Route
            path="/ProductPages/HeadPhones/xx59-headphones"
            element={<Xx59HeadPhones />}
          />

          <Route
            path="/ProductPages/HeadPhones/xx99-mark-one-headphones"
            element={<XX99HeadPhones />}
          />

          <Route
            path="/ProductPages/HeadPhones/xx99-mark-two-headphones"
            element={<XX99MarkTwo />}
          />

          <Route
            path="/ProductPages/Speaker/zx7-speaker"
            element={<ZX7Speaker />}
          />

          <Route
            path="/ProductPages/Speaker/zx9-speaker"
            element={<ZX9Speaker />}
          />

          <Route
            path="/ProductPages/Earphones/yx1-earphones"
            element={<YX1 />}
          />

          <Route
            path="/others/xx59/xx99-mark-one-headphones"
            element={<RecommendXX9ONE />}
          />

          <Route
            path="/others/xx59/xx99-mark-two-headphones"
            element={<RecommendXX9TWO />}
          />

          <Route
            path="/others/xx59/zx9-speaker"
            element={<RecommendZX9SPEAKER />}
          />

          <Route
            path="/others/xx99Mark1/xx59-headphones"
            element={<RecommendXX59 />}
          />

          <Route
            path="/others/xx99Mark1/xx99-mark-two-headphones"
            element={<RecommendXX9TWOMARK1 />}
          />

          <Route
            path="/others/xx99Mark1/zx9-speaker"
            element={<RecommendZX9SPEAKERMARK1 />}
          />

          <Route
            path="/others/xx99MarkII/xx59-headphones"
            element={<RecommendMARKIIXX59 />}
          />

          <Route
            path="/others/xx99MarkII/xx99-mark-one-headphones"
            element={<RecommendXX9MARKII />}
          />

          <Route
            path="/others/xx99MarkII/zx9-speaker"
            element={<RecommendZX9SPEAKERMARKII />}
          />

          <Route
            path="/others/zx7/xx59-headphones"
            element={<RecommendZX7XX59 />}
          />

          <Route
            path="/others/zx7/xx99-mark-one-headphones"
            element={<RecommendZX7XX9MARKII />}
          />

          <Route
            path="/others/zx7/zx9-speaker"
            element={<RecommendZX7SPEAKERMARKII />}
          />

          <Route
            path="/others/zx9/xx59-headphones"
            element={<RecommendZX9MARK />}
          />

          <Route
            path="/others/zx9/xx99-mark-one-headphones"
            element={<RecommendZX9 />}
          />

          <Route path="/others/zx9/zx7-speaker" element={<RecommendZX9ZX7 />} />

          <Route
            path="/others/yx1/xx59-headphones"
            element={<Recommendyx1 />}
          />

          <Route
            path="/others/yx1/xx99-mark-one-headphones"
            element={<RecommendXX99 />}
          />

          <Route path="/others/yx1/zx9-speaker" element={<RecommendZX9YX1 />} />

          {/* <Route
          path="/others/xx99MarkII/xx59-headphones"
          element={<OtherProduct1 />}
        />

        <Route
          path="/others/xx99MarkII/xx99-mark-one-headphones.jsx"
          element={<OtherProduct2 />}
        />

        <Route path="/others/xx99MarkII/zx9-speaker.jsx" element={<OtherProduct3 />} /> */}
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
