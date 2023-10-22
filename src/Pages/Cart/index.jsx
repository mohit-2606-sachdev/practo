import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import TotalCart from "./TotalCart";
import MedicineCartList from "./MedicineCartList";

const Cart = () => {
  const cartTotal = useSelector((state) => state.AddToCartMedi.total);

  useEffect(() => {
    if (cartTotal === 0) {
      Swal.fire({
        title: "Nothing To Order?",
        text: "Go Back to checkout Medicines",
        icon: "error",
        customClass: {
          confirmButton: "btn btn-danger text-light rounded",
        },
      }).then(() => {
        window.history.back();
      });
    }
  }, [cartTotal]);

  return (
    <div className="flex w-4/5 mx-auto">
      <div className="w-7/12">
        <MedicineCartList />
      </div>
      <div className="w-5/12">
        <TotalCart />
      </div>
    </div>
  );
};

export default Cart;
