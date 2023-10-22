import React from "react";
import CardForMedicineCart from "./CardForMedicineCart";
import { useSelector } from "react-redux";

const MedicineCartList = () => {
  const cartItems = useSelector((state) => state.AddToCartMedi.cart);

  const showItems = cartItems.map((ele, index) => {
    return (
      <div key={index} className="mx-3">
        <CardForMedicineCart item={ele} />
      </div>
    );
  });

  return (
    <div className="border-r-2 h-screen overflow-y-auto cart_item py-5">
      {showItems}
    </div>
  );
};

export default MedicineCartList;
