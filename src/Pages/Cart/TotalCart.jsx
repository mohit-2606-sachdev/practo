import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import RazorPayMethod from "../Common/RazorPayMethod";

const TotalCart = () => {
  const cartItems = useSelector((state) => state.AddToCartMedi.cart);
  const cartTotal = useSelector((state) => state.AddToCartMedi.total);

  const columns = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

  const showTotalPrice = cartItems.map((item, index) => {
    let obj = {
      key: index + 1,
      index: index + 1,
      name: item.name,
      qty: item.quantity,
      price: item.price,
    };

    return obj;
  });

  return (
    <div className="m-5 border rounded-lg">
      <div className="bg-blue-700 text-center text-white rounded-t-lg text-2xl p-4">
        Cart Total
      </div>
      <Table columns={columns} pagination={false} dataSource={showTotalPrice} />
      <div className="flex justify-end px-4 py-2 text-lg font-semibold">
        Total: {cartTotal}
      </div>
      <div className="rounded-b-lg">
        <RazorPayMethod totalAmount={cartTotal} />
      </div>
    </div>
  );
};

export default TotalCart;
