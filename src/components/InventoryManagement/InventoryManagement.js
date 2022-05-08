import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./InventoryManagement.css";

const InventoryManagement = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/fruit/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h2>welcome to inventory management: {id}</h2>
      <div>
        <p className="font-bold">
          <span style={{ color: "#64B9B4" }}>ID:</span> {user._id}
        </p>
        <img src={user.img} alt="" />
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-xl">Price: ${user.price}</p>
        <p className="text-sm">{user.description}</p>
        <p className="text-xl">Supplier Name: {user.supplier}</p>
        <p className="text-xl">Quantity: {user.quantity}</p>
        {/* <p className="text-xl"> {user.supplier}</p> */}
      </div>
      <div className="btn-btn">
        <Link to="/checkout">
          <button className="btn btn-success">Click Here</button>
        </Link>
      </div>
    </div>
  );
};

export default InventoryManagement;
