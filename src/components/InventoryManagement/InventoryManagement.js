import React from "react";
import { useParams } from "react-router-dom";

const InventoryManagement = () => {
  const { pakageId } = useParams();
  return (
    <div>
      <h2>welcome to inventory management: {pakageId}</h2>
    </div>
  );
};

export default InventoryManagement;
