import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About.js";
import Home from "./components/Home/Home/Home.js";
import Footer from "./components/Shared/Footer/Footer.js";
import Header from "./components/Shared/Navber/Header.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
