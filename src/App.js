import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About.js";
import Home from "./components/Home/Home/Home.js";
import InventoryManagement from "./components/InventoryManagement/InventoryManagement.js";
import Login from "./components/Login/Login.js";
import Footer from "./components/Shared/Footer/Footer.js";
import Header from "./components/Shared/Navber/Header.js";
import NotFoundPage from "./components/Shared/NotFoundPage/NotFoundPage.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/pakage/:pakageId"
          element={<InventoryManagement></InventoryManagement>}
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
