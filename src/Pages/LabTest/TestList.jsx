import React, { useEffect, useState } from "react";
import LabTestData from "../../Assets/Js/LabTestData";
import { useSelector } from "react-redux";
import TestCard from "./TestCard";
import RazorPayMethod from "../Common/RazorPayMethod";

const TestList = () => {
  const [tests, setTest] = useState([]);
  const [showTest, setShowTest] = useState([]);
  const [category, setCategory] = useState("All");
  const [showCart, setShowCart] = useState(false);
  const [cartData, setCartData] = useState([]);

  const searchValue = useSelector((state) => state.Search.labTest);
  const testCartList = useSelector((state) => state.AddToCartTest.cart);
  const total = useSelector((state) => state.AddToCartTest.total);

  useEffect(() => {
    let data = testCartList.map((ele, index) => {
      return (
        <div key={index}>
          <div className="w-10/12 mx-auto border-b-2 pb-4">
            <div className="flex justify-between my-3">
              <span className="font-semibold">{ele.testName}</span>
              <span>Rs.{ele.price}</span>
            </div>
            <div className="my-3">
              <span>
                <img
                  src="https://prod-dx.s3.amazonaws.com/dx/labs/Practo_Labs.png"
                  alt=""
                  className="w-12 inline-block me-2"
                />
              </span>
              <span>By Practo Labs</span>
            </div>
            <div className="text-sm">E-Reports on same day</div>
          </div>
        </div>
      );
    });

    setCartData(data);
  }, [testCartList]);

  const filterList = [
    "All",
    "Hematology",
    "Cardiology",
    "Endocrinology",
    "Nephrology",
    "Gastroenterology",
    "Allergy & Immunology",
    "Radiology",
  ];

  useEffect(() => {
    let filteredTest = tests.filter((ele) => {
      return ele.testName.toLowerCase().includes(searchValue.toLowerCase());
    });
    setShowTest(filteredTest);
  }, [searchValue, tests]);

  const showFilterList = filterList.map((ele) => {
    return (
      <li
        key={ele}
        className={`cursor-pointer ${
          ele === category ? "text-blue-400" : null
        }`}
        onClick={() => setCategory(ele)}
      >
        {ele}
      </li>
    );
  });

  useEffect(() => {
    getTestData();
  }, []);

  useEffect(() => {
    let filteredTest = tests.filter((ele) => {
      return ele.category === category;
    });
    setShowTest(filteredTest);
  }, [category, tests]);

  const getTestData = () => {
    try {
      const response = LabTestData;
      setTest(response);
    } catch (error) {
      console.log(error);
    }
  };

  const showCards = searchValue
    ? showTest.map((ele, index) => {
        return (
          <div key={index}>
            <TestCard ele={ele} />
          </div>
        );
      })
    : category === "All"
    ? tests.map((ele, index) => {
        return (
          <div key={index}>
            <TestCard ele={ele} />
          </div>
        );
      })
    : showTest.map((ele, index) => {
        return (
          <div key={index}>
            <TestCard ele={ele} />
          </div>
        );
      });

  return (
    <div>
      <div className="border">
        <ul className="w-4/5 flex mx-auto font-semibold justify-between my-5 ">
          {showFilterList}
        </ul>
      </div>
      <div className="w-4/5 mx-auto my-5 mb flex justify-between items-center">
        <div>
          <span className="text-5xl">{category}</span>{" "}
          <span className="text-md">
            (
            {searchValue
              ? showTest.length
              : category === "All"
              ? tests.length
              : showTest.length}
            )
          </span>
        </div>
        <div>
          <span
            className="w-full border bg-blue-600 px-4 py-2 text-white hover:bg-blue-800 cursor-pointer"
            onClick={() => setShowCart(!showCart)}
          >
            Cart
          </span>
        </div>
      </div>
      {showCart && (
        <div className="relative w-4/5 mx-auto">
          <div className="w-72 absolute right-0 z-99 border bg-white">
            <div className="border-b-2 text-xl p-3">
              Your Cart{" "}
              <span className="text-xs">{testCartList.length} Tests</span>
            </div>
            {cartData}
            {testCartList.length ? (
              <div className="w-10/12 mx-auto">
                <div className="text-end my-2">Pickup Charge: 175</div>
                <hr />
                <div className="text-end mt-2">total: Rs.{total}</div>
              </div>
            ) : null}
            <div className="p-2">
              <RazorPayMethod totalAmount={total} />
            </div>
          </div>
        </div>
      )}

      {showCards.length ? (
        <div className="w-4/5 mx-auto grid grid-cols-5 gap-6 my-10">
          {showCards}
        </div>
      ) : (
        <div className="text-center w-full text-xl font-semibold py-5">
          No Data Avilable
        </div>
      )}
    </div>
  );
};

export default TestList;
