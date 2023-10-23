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
  }, [location.state]);

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
          ele === category ? "text-blue-500" : null
        } font-semibold`}
        onClick={() => setCategory(ele)}
      >
        {ele}
      </span>
    );
  });

  useEffect(() => {
    let filteredDoc = doctors.filter((ele) => {
      return ele.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setShowDoc(filteredDoc);
    handleLocation(filteredDoc);
  }, [searchValue, doctors]);

  useEffect(() => {
    try {
      const response = DoctorsData;
      setDoctors(response);
      handleLocation(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    let filteredDoc = doctors.filter((ele) => {
      return ele.department === category;
    });
    setShowDoc(filteredDoc);
    handleLocation(filteredDoc);
  }, [category, doctors]);

  const showCards = searchValue
    ? showDoc.map((ele, index) => {
        return (
          <div key={index}>
            <DoctorCard ele={ele} />
          </div>
        );
      })
    : category === "All"
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
    let value = ele.map((item) => {
      let obj = {
        lat: item.location.coordinates[0],
        lng: item.location.coordinates[1],
      };
      return obj;
    });
    setLocationArr(value);
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
