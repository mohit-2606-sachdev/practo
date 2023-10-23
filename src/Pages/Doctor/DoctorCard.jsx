import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ ele }) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center border-b py-5 mx-5">
      <div>
        {ele.gender === "Male" ? (
          <img
            src="https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg?w=768"
            alt="Male"
            className="w-40"
          />
        ) : (
          <img
            src="https://thumbs.dreamstime.com/z/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg?w=768"
            alt="Female"
            className="w-40"
          />
        )}
      </div>
      <div>
        <div className="text-xl font-semibold mb-1">Dr. {ele.name}</div>
        <div className="text-slate-500 mb-1">{ele.department}</div>
        <div className="text-slate-800 mb-1">
          {ele.experience} years of experience over all
        </div>
        <div className="text-slate-800">
          Rs.{ele.fees} Consultation fees at clinic
        </div>
      </div>
      <div>
        <button
          className="text-blue-700 border px-2 py-1 border-blue-700 rounded-sm ms-20 mt-16"
          onClick={() => navigate(`/profile/${ele._id}`)}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
