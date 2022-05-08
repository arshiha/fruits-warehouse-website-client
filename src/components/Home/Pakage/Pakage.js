import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Pakage.css";

const Pakage = ({ pakage }) => {
  const { _id, name, img, price, description, quantity, supplierName } = pakage;

  // const navigate = useNavigate();
  // const navigateToInventoryManagement = (id) => {
  //   navigate(`/pakage/${id}`);
  // };

  return (
    <div className="pakage-products">
      <img className="img-size w-100" src={img} alt="" />
      <h3 className="name">{name}</h3>
      <p>{description}</p>
      <h5>SuplierName: {supplierName}</h5>
      <h6>Quantity: {quantity}</h6>
      <p>Price: {price}</p>
      <Link to={`/pakage/${_id}`}>
        <button className="btn btn-success">Update</button>
      </Link>
    </div>
  );
};

export default Pakage;
