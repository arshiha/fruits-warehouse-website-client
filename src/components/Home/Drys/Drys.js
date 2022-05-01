import React from "react";
import "./Drys.css";

import dryFruit1 from "../../../images/dryFruits/dryFruit1.webp";
import dryFruit2 from "../../../images/dryFruits/dryFruit2.jpg";
import dryFruit3 from "../../../images/dryFruits/dryFruit3.webp";
import dryFruit4 from "../../../images/dryFruits/dryFruit4.jpg";
import dryFruit5 from "../../../images/dryFruits/dryFruit5.webp";
import dryFruit6 from "../../../images/dryFruits/dryFruit6.jpg";
import Dry from "../Dry/Dry.js";

const drys = [
  { id: 1, name: "dry", img: dryFruit1 },
  { id: 2, name: "dry", img: dryFruit2 },
  { id: 3, name: "dry", img: dryFruit3 },
  { id: 4, name: "dry", img: dryFruit4 },
  { id: 5, name: "dry", img: dryFruit5 },
  { id: 6, name: "dry", img: dryFruit6 },
];

const Drys = () => {
  return (
    <div className="container">
      <h2 className="title-style">Our Drys Fruts</h2>
      <div className="row">
        {drys.map((dry) => (
          <Dry key={dry.id} dry={dry}></Dry>
        ))}
      </div>
    </div>
  );
};

export default Drys;
