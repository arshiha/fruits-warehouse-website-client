import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pakage.css";

const Pakage = ({ pakage }) => {
  const { id, name, img, price, description, quantity, supplierName } = pakage;

  const navigate = useNavigate();
  const navigateToInventoryManagement = (id) => {
    navigate(`/pakage/${id}`);
  };

  return (
    <div className="pakage-products">
      <img className="img-size w-100" src={img} alt="" />
      <h3 className="name">{name}</h3>
      <p>{description}</p>
      <h5>SuplierName: {supplierName}</h5>
      <h6>Quantity: {quantity}</h6>
      <p>Price: {price}</p>
      <button
        onClick={() => navigateToInventoryManagement(id)}
        className="btn btn-success"
      >
        Update
      </button>
    </div>
  );
};

export default Pakage;
