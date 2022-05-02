import React from "react";
import "./Dry.css";

const Dry = ({ dry }) => {
  const { name, img, price, suplierName, quantity } = dry;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div class="card" style={{ width: "18rem" }}>
        <div className="img-style">
          <img src={img} class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <h3 class="card-title">{name}</h3>

          <p class="card-text">
            Our warehouses fruits fresh and healty.no unhealty chemical.its good
            for health.
          </p>
          <h6>SuplierName: Rufaid Hasan Labib{suplierName}</h6>
          <h6>Quantity: 1Kg{quantity}</h6>
          <p>Price: 350{price}</p>
          <button className="btn btn-success">Update</button>
        </div>
      </div>
    </div>
  );
};

export default Dry;
