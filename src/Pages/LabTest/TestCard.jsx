import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCartTest,
  removeToCartTest,
} from "../../Features/AddToCartTest/AddToCartTest";

const TestCard = ({ ele }) => {
  const [isAdded, setAdded] = useState(false);
  const dispatch = useDispatch();

  const handleAdd = (ele) => {
    setAdded(!isAdded);
    dispatch(addToCartTest(ele));
  };

  const handleRemove = (ele) => {
    setAdded(!isAdded);
    dispatch(removeToCartTest(ele));
  };

  return (
    <div>
      <div className="flex flex-col justify-between border p-2 h-32">
        <span className="font-semibold">{ele.testName}</span>
        <span className="text-xs text-slate-400">{ele.description}</span>
        <span>Rs.{ele.price}</span>
      </div>
      {isAdded ? (
        <button
          onClick={() => handleRemove(ele)}
          className="w-full border border-t-0 text-slate-500"
        >
          Remove
        </button>
      ) : (
        <button
          className="w-full border border-t-0 text-blue-500"
          onClick={() => handleAdd(ele)}
        >
          Add
        </button>
      )}
    </div>
  );
};

export default TestCard;
