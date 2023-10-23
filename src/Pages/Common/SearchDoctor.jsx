import React from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { searchDoctor } from "../../Features/Search/Search";
import { useNavigate } from "react-router-dom";

const SearchDoctor = () => {
  const discount =
    "https://www.practostatic.com/subscriptions/images/plus-tag.png";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center w-4/5 mx-auto py-4">
      <div>
        <div className="border border-slate-300 flex items-center text-slate-500 p-2">
          <div className="">
            <BiSearch />
          </div>
          <input
            type="search"
            className="outline-none ms-2 w-96"
            placeholder="Search Doctor"
            onChange={(e) => dispatch(searchDoctor(e.target.value))}
            onFocus={() => navigate("/doctor")}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <img src={discount} alt="discount" className="w-2/4" />
      </div>
    </div>
  );
};

export default SearchDoctor;
