import React, { useEffect, useState } from "react";
import Pakage from "../Pakage/Pakage.js";
import "./Pakages.css";

const Pakages = () => {
  const [pakages, setPakages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/fruits")
      .then((res) => res.json())
      .then((data) => setPakages(data));
  }, []);

  return (
    <div id="products" className="container">
      <div className="row">
        <h1 className="title">Our Products</h1>
        <div className="products">
          {pakages.map((pakage) => (
            <Pakage key={pakage._id} pakage={pakage}></Pakage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pakages;
