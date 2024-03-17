import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./Styles/tailwind.css";
import "./Styles/Style.scss";
import HeadPhones from "./Pages/HeadPhones/HeadPhones";
import Speakers from "./Pages/Speakers/Speakers";
import Earphones from "./Pages/Earphones/Earphones";
import XX59HeadPhones from "./ProductPages/HeadPhones/xx59-headphones";
import XX99HeadPhones from "./ProductPages/HeadPhones/xx99-mark-one-headphones";
import XX99MarkTwo from "./ProductPages/HeadPhones/xx99-mark-two-headphones";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
      
        <Route path="/ProductPages/HeadPhones/xx59-headphones" element={<XX59HeadPhones />} />
        
        <Route path="/ProductPages/HeadPhones/xx99-mark-one-headphones" element={<XX99HeadPhones />} />

        <Route path="/ProductPages/HeadPhones/xx99-mark-two-headphones" element={<XX99MarkTwo />} />
      </Routes>
    </Router>
  );
};

export default App;
