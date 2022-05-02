import React from "react";
import Drys from "../Drys/Drys.js";
import Others from "../Others/Others.js";
import Pakages from "../Pakages/Pakages.js";
import Banner from "./Banner/Banner.js";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Pakages></Pakages>
      <Drys></Drys>
      <Others></Others>
    </div>
  );
};

export default Home;
