import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeToCart,
} from "../../Features/AddToCartMedi/AddToCartMedi";

function Counter({ item }) {
  const [add, setAdd] = useState(true);
  const [count, setCount] = useState(0);
  const cartItems = useSelector((state) => state.AddToCartMedi.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const foundItem = cartItems.find((ele) => ele.name === item.name);
    if (foundItem) {
      setCount(foundItem.quantity);
      setAdd(false);
    }
  }, [cartItems, item]);

  const countplus = () => {
    dispatch(addToCart(item));
    setCount(count + 1);
  };

  const change = () => {
    dispatch(addToCart(item));
    setAdd(false);
    setCount(count + 1);
  };

  const countsub = () => {
    if (count > 0) {
      dispatch(removeToCart(item));
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (count < 1) {
      setAdd(true);
    }
  }, [count]);

  return (
    <div className="">
      {add && count === 0 ? (
        <button
          className="w-full border border-blue-400 text-blue-400 hover:border-blue-800 hover:text-blue-800"
          onClick={change}
        >
          ADD
        </button>
      ) : (
        <div className="flex">
          <button
            type="button"
            onClick={countplus}
            className="w-4/12 bg-blue-400 bg-blue text-white hover:bg-blue-800"
          >
            +
          </button>
          <span
            type="button"
            className="w-4/12 text-center border-t-2 border-b-2"
          >
            {item.quantity ? item.quantity : count}
          </span>
          <button
            type="button"
            onClick={countsub}
            className="w-4/12 bg-blue-400 bg-blue text-white hover:bg-blue-800"
          >
            -
          </button>
        </div>
      )}
    </div>
  );
}

export default Counter;
