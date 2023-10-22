import React from "react";
import Counter from "../Medicines/Counter";

const CardForMedicineCart = ({ item }) => {
  return (
    <div className="flex justify-between p-4 border-b-2 mx-5">
      <div className="flex justify-between w-9/12">
        <div className="w-3/12">
          <img src={item.image} alt="" />
        </div>
        <div className="flex flex-col w-6/12">
          <span className="font-semibold text-xl">{item.name}</span>
          <span>{item.category}</span>
          <span>{item.subcategory}</span>
        </div>
      </div>
      <div className="w-3/12 flex flex-col justify-between">
        <span className="mx-2 flex justify-end text-xl font-semibold">
          {item.price}
        </span>
        <Counter item={item} />
      </div>
    </div>
  );
};

export default CardForMedicineCart;
