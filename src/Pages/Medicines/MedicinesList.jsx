import React, { useEffect, useState } from "react";
import MedicineCard from "./MedicineCard";
import MedicineData from "../../Assets/Js/MedicineData";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MedicinesList = () => {
  const [medicines, setMedicines] = useState([]);
  const [showMedi, setShowMedi] = useState([]);
  const [category, setCategory] = useState("All");

  const searchValue = useSelector((state) => state.Search.medi);

  const filterList = [
    "All",
    "Family care",
    "Fitness & Wellness",
    "Skin Care",
    "Hair Care",
    "Lip care",
    "Sexual wellness",
    "Women's Care Baby care",
  ];

  useEffect(() => {
    searchedData();
  }, [searchValue]);

  const searchedData = () => {
    let filteredMedi = medicines.filter((ele) => {
      if (ele.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return ele;
      }
    });
    setShowMedi(filteredMedi);
  };

  const showFilterList = filterList.map((ele) => {
    return (
      <li key={ele} className="cursor-pointer" onClick={() => setCategory(ele)}>
        {ele}
      </li>
    );
  });

  useEffect(() => {
    getMedicineData();
  }, []);

  useEffect(() => {
    getFilterData();
  }, [category]);

  const getMedicineData = async () => {
    try {
      const response = await MedicineData;
      setMedicines(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilterData = () => {
    let filteredMedi = medicines.filter((ele) => {
      return ele.category === category;
    });
    setShowMedi(filteredMedi);
  };

  const showCards = searchValue
    ? showMedi.map((ele, index) => {
        return (
          <div key={index}>
            <MedicineCard ele={ele} />
          </div>
        );
      })
    : category == "All"
    ? medicines.map((ele, index) => {
        return (
          <div key={index}>
            <MedicineCard ele={ele} />
          </div>
        );
      })
    : showMedi.map((ele, index) => {
        return (
          <div key={index}>
            <MedicineCard ele={ele} />
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
              ? showMedi.length
              : category == "All"
              ? medicines.length
              : showMedi.length}
            )
          </span>
        </div>
        <div>
          <Link to="/cart">
            <span className="w-full border bg-blue-600 px-4 py-2 text-white hover:bg-blue-800">
              Add to Cart
            </span>
          </Link>
        </div>
      </div>

      {showCards.length ? (
        <div className="w-4/5 mx-auto grid grid-cols-4 gap-6 my-10">
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

export default MedicinesList;
