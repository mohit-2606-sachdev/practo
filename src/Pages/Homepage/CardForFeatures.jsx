import React from "react";
import { Link } from "react-router-dom";

const CardForFeatures = ({ ele }) => {
  return (
    <Link to={ele.url}>
      <div className=" border flex flex-col rounded-xl shadow-lg">
        <div className="bg-blue-200 w-full h-56 rounded-t-xl p-5 pb-0 flex">
          <img src={ele.image} alt={ele.heading} className=" mx-auto" />
        </div>
        <div className="p-5">
          <div className="text-xl tracking-tight font-semibold">
            {ele.heading}
          </div>
          <div className="text-sm">{ele.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardForFeatures;
