import React from "react";
import "./Pakage.css";

const Pakage = ({ pakage }) => {
  const { name, img, price, description, quantity, supplierName } = pakage;
  return (
    <div className="pakage-products">
      <img className="img-size w-100" src={img} alt="" />
      <h3 className="name">{name}</h3>
      <p>{description}</p>
      <h5>SuplierName: {supplierName}</h5>
      <h6>Quantity: {quantity}</h6>
      <p>Price: {price}</p>
      <button className="btn btn-success">Update</button>
    </div>
  );
};

export default Pakage;
