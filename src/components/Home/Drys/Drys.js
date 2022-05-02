import React from "react";
import "./Drys.css";

import dryFruit1 from "../../../images/dryFruits/dryFruit1.png";
import dryFruit2 from "../../../images/dryFruits/dryFruit2.jpg";
import dryFruit3 from "../../../images/dryFruits/dryFruit3.webp";
import dryFruit4 from "../../../images/dryFruits/dryFruit4.jpg";
import dryFruit5 from "../../../images/dryFruits/dryFruit5.webp";
import dryFruit6 from "../../../images/dryFruits/dryFruit6.jpg";
import Dry from "../Dry/Dry.js";

const drys = [
  { id: 1, name: "Kaju", img: dryFruit1 },
  { id: 2, name: "Dry Angur", img: dryFruit2 },
  { id: 3, name: "Dry Cheery", img: dryFruit3 },
  { id: 4, name: "Dry Khejur", img: dryFruit4 },
  { id: 5, name: "Dry Orange", img: dryFruit5 },
  { id: 6, name: "Dry Banana", img: dryFruit6 },
];

const Drys = () => {
  return (
    <div id="dryFruits" className="container">
      <h2 className="title-style">Our Dry Fruts</h2>
      <div className="row">
        {drys.map((dry) => (
          <Dry key={dry.id} dry={dry}></Dry>
        ))}
      </div>
    </div>
  );
};

export default Drys;
