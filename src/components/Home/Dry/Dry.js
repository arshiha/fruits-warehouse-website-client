import React from "react";
import "./Dry.css";

const Dry = ({ dry }) => {
  const { name, img } = dry;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div class="card" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-success">
            Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dry;
