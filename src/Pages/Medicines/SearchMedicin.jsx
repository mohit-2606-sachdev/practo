import React from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { searchMedi } from "../../Features/Search/Search";

const SearchMedicin = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center w-4/5 mx-auto py-4">
      <div>
        <div className="border border-slate-300 flex items-center text-slate-500 p-2">
          <div className="">
            <BiSearch />
          </div>
          <input
            type="search"
            className="outline-none ms-2 w-96"
            placeholder="Search Medicine"
            onChange={(e) => dispatch(searchMedi(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchMedicin;
