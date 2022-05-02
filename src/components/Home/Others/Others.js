import React from "react";
import "./Others.css";

import otherFruits1 from "../../../images/otherFruits/otherFruits1.jpg";
import otherFruits2 from "../../../images/otherFruits/otherFruits2.jpg";
import otherFruits3 from "../../../images/otherFruits/otherFruits3.jpg";
import otherFruits4 from "../../../images/otherFruits/otherFruits4.jpg";
import otherFruits5 from "../../../images/otherFruits/otherFruits5.webp";
import otherFruits6 from "../../../images/otherFruits/otherFruits6.webp";

import Other from "../Other/Other.js";

const others = [
  { id: 1, name: "Lychee", img: otherFruits1 },
  { id: 2, name: "Mango", img: otherFruits2 },
  { id: 3, name: "Dragon", img: otherFruits3 },
  { id: 4, name: "Watermelon", img: otherFruits4 },
  { id: 5, name: "Pineapple", img: otherFruits5 },
  { id: 6, name: "Banana", img: otherFruits6 },
];

const Others = () => {
  return (
    <div className="container">
      <h2 className="title-style">Our Others Fruts</h2>
      <div className="row">
        {others.map((other) => (
          <Other key={other.id} other={other}></Other>
        ))}
      </div>
    </div>
  );
};

export default Others;
