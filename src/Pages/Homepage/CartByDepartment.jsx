import React from "react";
import { useNavigate } from "react-router-dom";

const CartByDepartment = ({ ele }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col p-4 cursor-pointer"
      onClick={() => navigate(`/doctor`, { state: ele.name })}
    >
      <div>
        <img src={ele.image} alt={ele.name} className="rounded-md" />
      </div>
      <div className="text-lg font-semibold mt-2">{ele.name}</div>
      <div className="text-sm tracking-tight">{ele.description}</div>
    </div>
  );
};

export default CartByDepartment;
