import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./Styles/tailwind.css";
import "./Styles/Style.scss";
import HeadPhones from "./Pages/HeadPhones/HeadPhones";
import Speakers from "./Pages/Speakers/Speakers";
import Earphones from "./Pages/Earphones/Earphones";
import ProductPage from "./ProductPages/HeadPhones/xx59-headphones"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/headphones" element={<HeadPhones />}></Route>
        <Route path="/speakers" element={<Speakers />}></Route>
        <Route path="/earphones" element={<Earphones />}></Route>
        <Route path="/ProductPages/HeadPhones/:slug" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
