import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appointSergery } from "../../Features/Search/Search";
import Swal from "sweetalert2";
import { getName, getNumber } from "../../Features/Profile/Profile";
import { useNavigate } from "react-router-dom";

const AppoinmentBook = () => {
  const showAlignment = useSelector((state) => state.Search.surgery);
  const showName = useSelector((state) => state.Profile.name);
  const showNumber = useSelector((state) => state.Profile.number);
  const showEmail = useSelector((state) => state.Auth.email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!showEmail) {
      navigate("/auth");
      return;
    }

    Swal.fire({
      title: `Congratulations ${showName}`,
      text: `Your Appoinment For ${showAlignment} has been book, We will contact you soon on ${showNumber}`,
      icon: "success",
    }).then(() => {
      dispatch(appointSergery(""));
    });
  };

  return (
    <div className="w-8/12 mx-auto mt-24">
      <div className="">
        <div className="flex flex-col justify-between w-96 border p-4 ">
          <h4 className="text-center p-3 pt-0 text-xl font-semibold ">
            Book your consultation today
          </h4>
          <div>
            <div
              className={`p-4 border mb-5 mt-2 ${
                !showAlignment && "text-slate-400"
              } rounded-lg`}
            >
              {showAlignment.length ? showAlignment : "Select Ailment*"}
            </div>
            <input
              type="text"
              className="p-4 border w-full mb-5 rounded-lg outline-none"
              placeholder="Name*"
              name="name"
              value={showName}
              onChange={(e) => dispatch(getName(e.target.value))}
              id=""
            />
            <input
              type="number"
              className="p-4 border w-full mb-5 rounded-lg outline-none"
              placeholder="Contact Number*"
              name="number"
              value={showNumber}
              onChange={(e) => dispatch(getNumber(e.target.value))}
              id=""
            />
            <button
              className="p-3 border w-full text-xl font-semibold bg-blue-800 text-white rounded-lg"
              onClick={handleSubmit}
              disabled={
                !showName.length || !showAlignment.length || !showNumber.length
              }
            >
              {" "}
              Book Appoinment{" "}
            </button>
            <div className="text-center mt-2">
              <span className="text-xs text-center">
                By submitting the form, you agree to Practo's{" "}
                <span className="text-blue-600">T&C</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-96 mt-4">
          <hr className="w-5/12" />
          <span className="">OR</span>
          <hr className="w-5/12" />
        </div>
        <div className="p-4 border mt-4 text-center  mb-5 rounded-lg w-96 text-lg">
          Reach out to us on |{" "}
          <span className="text-blue-600">08045685554</span>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBook;
