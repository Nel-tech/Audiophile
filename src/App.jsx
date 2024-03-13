import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./Styles/tailwind.css";
import "./Styles/Style.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
