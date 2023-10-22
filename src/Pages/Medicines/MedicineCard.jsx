import React from "react";
import Counter from "./Counter";

const MedicineCard = ({ ele }) => {
  return (
    <div>
      <div className="flex flex-col p-2 hover:shadow-lg">
        <div className="border-b-2 pb-2 h-60">
          <img src={ele.image} alt={ele.name} />
        </div>
        <span className="mt-2">{ele.name}</span>
        <span className="mt-4 text-xl font-semibold me-1">Rs.{ele.price}</span>
        <div className="flex justify-between mt-3">
          <span className="w-6/12 border font-semibold text-center">
            {ele.ml_gm.toUpperCase()}
          </span>
          <span className="w-6/12 ms-1">
            <Counter item={ele} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MedicineCard;
