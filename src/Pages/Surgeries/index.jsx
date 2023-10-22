import React from "react";
import PopularSergeries from "./PopularSergeries";
import SurgerieDapartment from "./SurgerieDapartment";
import AppoinmentBook from "./AppoinmentBook";

const Surgeries = () => {
  return (
    <div className="">
      <div className="w-4/5 mx-auto flex">
        <div className="w-7/12">
          <PopularSergeries />
          <SurgerieDapartment />
        </div>
        <div className="w-5/12">
          <AppoinmentBook />
        </div>
      </div>
    </div>
  );
};

export default Surgeries;
