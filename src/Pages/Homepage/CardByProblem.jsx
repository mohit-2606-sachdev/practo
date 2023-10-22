import React from "react";
import { useNavigate } from "react-router-dom";

const CardByProblem = ({ ele }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col text-center p-8 cursor-pointer"
      onClick={() => navigate("/doctor", { state: ele.department })}
    >
      <div>
        <img
          className="rounded-full w-32 mx-auto"
          src={ele.image}
          alt={ele.name}
        />
      </div>
      <span className="text-sm font-semibold px-4 mt-3">{ele.name}</span>
      <span className="mt-2 text-sm">CONSULT NOW</span>
    </div>
  );
};

export default CardByProblem;
