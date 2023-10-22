import React from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { searchTest } from "../../Features/Search/Search";

const SearchTest = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center w-4/5 mx-auto py-4">
        <div>
          <div className="border border-slate-300 flex items-center text-slate-500 p-2">
            <div className="">
              <BiSearch />
            </div>
            <input
              type="search"
              className="outline-none ms-2 w-96"
              placeholder="Search Lab Test"
              onChange={(e) => dispatch(searchTest(e.target.value))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTest;
