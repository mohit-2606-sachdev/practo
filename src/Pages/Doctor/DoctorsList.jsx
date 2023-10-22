import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DoctorsData from "../../Assets/Js/DoctorsData";
import DoctorCard from "./DoctorCard";
import Map from "./Map";
import { useLocation } from "react-router-dom";

const DoctorsList = () => {
  const [category, setCategory] = useState("All");
  const searchValue = useSelector((state) => state.Search.doctor);
  const [showDoc, setShowDoc] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [locationArr, setLocationArr] = useState([]);

  const location = useLocation();

  useEffect(() => {
    let value = location.state;
    if (value) {
      setCategory(value);
    }
  }, []);

  const filterList = [
    "All",
    "Dentist",
    "Gynecologist/Obstetrician",
    "Dietitian/Nutrition",
    "Physiotherapist",
    "General surgeon",
    "Orthopedist",
    "General physician",
    "Pediatrician",
    "Gastroenterologist",
  ];

  const showFilterList = filterList.map((ele) => {
    return (
      <span
        key={ele}
        className={`cursor-pointer ${
          ele == category ? "text-blue-500" : null
        } font-semibold`}
        onClick={() => setCategory(ele)}
      >
        {ele}
      </span>
    );
  });

  useEffect(() => {
    searchedData();
    handleLocation(showDoc);
  }, [searchValue]);

  const searchedData = () => {
    let filteredDoc = doctors.filter((ele) => {
      if (ele.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return ele;
      }
    });
    setShowDoc(filteredDoc);
  };

  useEffect(() => {
    getDoctorData();
    handleLocation(doctors);
  }, []);

  useEffect(() => {
    getFilterData();
    handleLocation(showDoc);
  }, [category]);

  const getDoctorData = () => {
    try {
      const response = DoctorsData;
      setDoctors(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getFilterData = () => {
    let filteredDoc = doctors.filter((ele) => {
      return ele.department === category;
    });
    setShowDoc(filteredDoc);
  };

  const showCards = searchValue
    ? showDoc.map((ele, index) => {
        return (
          <div key={index}>
            <DoctorCard ele={ele} />
          </div>
        );
      })
    : category == "All"
    ? doctors.map((ele, index) => {
        return (
          <div key={index}>
            <DoctorCard ele={ele} />
          </div>
        );
      })
    : showDoc.map((ele, index) => {
        return (
          <div key={index}>
            <DoctorCard ele={ele} />
          </div>
        );
      });

  const handleLocation = (ele) => {
    setLocationArr([]);
    ele.map((item) => {
      let obj = {
        lat: item.location.coordinates[0],
        lng: item.location.coordinates[1],
      };

      setLocationArr((pre) => {
        return [...pre, obj];
      });
    });
  };

  return (
    <div>
      <div className="border p-4">
        <div className="w-4/5 mx-auto flex justify-between">
          {showFilterList}
        </div>
      </div>
      <div className="w-4/5 flex mx-auto">
        <div className="w-7/12 list border-r-2 overflow-y-auto h-[520px]">
          {showCards}
        </div>

        <div className="w-5/12 p-5">
          <Map location={locationArr} />
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
