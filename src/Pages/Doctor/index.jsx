import React from "react";
import SearchDoctor from "../Common/SearchDoctor";
import DoctorsList from "./DoctorsList";

const Doctor = () => {
  return (
    <div>
      <SearchDoctor />
      <DoctorsList />
    </div>
  );
};

export default Doctor;
