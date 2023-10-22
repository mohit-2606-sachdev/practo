import { Modal } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getName, getNumber } from "../../Features/Profile/Profile";
import { clearCart } from "../../Features/AddToCartMedi/AddToCartMedi";
import { clearCartTest } from "../../Features/AddToCartTest/AddToCartTest";

const RazorPayMethod = ({ totalAmount }) => {
  const showEmail = useSelector((state) => state.Auth.email);
  const showNumber = useSelector((state) => state.Profile.number);
  const showName = useSelector((state) => state.Profile.name);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const openRazorpayWindow = async (amount) => {
    if (!showEmail.length) {
      navigate("/auth");
      return;
    }

    if (!showNumber.length) {
      showModal();
      return;
    }

    const options = {
      key: "rzp_test_L5xt4eSGmwgh6B",
      amount: amount * 100,
      name: "Practo",
      description: "Doctor Appoinment",
      handler: function (response) {
        dispatch(clearCart());
        dispatch(clearCartTest());
      },
      prefill: {
        name: showName,
        email: showEmail,
        contact: showNumber,
      },
    };

    const paymentWindow = new window.Razorpay(options);
    paymentWindow.open();
  };

  return (
    <>
      <button
        onClick={() => {
          openRazorpayWindow(totalAmount);
        }}
        className="w-full py-1 rounded-b-lg bg-blue-700 hover:bg-blue-900 text-lg text-white cursor-pointer"
      >
        Pay now
      </button>
      <Modal
        title="Profile Details"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <div className="flex flex-col justify-between p-4 ">
          <div>
            <input
              type="text"
              className="p-4 border w-full mb-5 rounded-lg outline-none"
              placeholder="Name*"
              name="name"
              value={showName}
              onChange={(e) => dispatch(getName(e.target.value))}
              id=""
            />
            <input
              type="number"
              className="p-4 border w-full mb-5 rounded-lg outline-none"
              placeholder="Contact Number*"
              name="number"
              value={showNumber}
              onChange={(e) => dispatch(getNumber(e.target.value))}
              id=""
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RazorPayMethod;
