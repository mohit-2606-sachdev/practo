import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Features/Auth/Auth";

const Navbar = () => {
  const logo = (
    <svg
      width="100"
      height="23"
      viewBox="0 0 516 118"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Practo</title>
      <desc>Practo Logo</desc>
      <g fill="none" fill-rule="evenodd">
        <path
          d="M39.818 57.187c0-10.969-8.892-19.863-19.864-19.863-10.974 0-19.87 8.894-19.87 19.863 0 10.972 8.896 19.865 19.87 19.865 10.972 0 19.864-8.893 19.864-19.865M515.805 57.187c0-10.969-8.895-19.863-19.866-19.863-10.97 0-19.865 8.894-19.865 19.863 0 10.972 8.895 19.865 19.865 19.865 10.971 0 19.866-8.893 19.866-19.865"
          fill="#2CB7DF"
        />
        <path
          d="M304.963 75.017c-9.653 0-17.479-7.115-17.479-17.83 0-10.715 7.826-17.826 17.479-17.826 6.215 0 11.59 2.909 14.82 8.007l16.158-11.607c-6.793-9.824-18.132-16.263-30.978-16.263-20.793 0-37.65 16.858-37.65 37.657 0 20.795 16.857 37.655 37.65 37.655 12.341 0 23.371-5.494 31.789-17.059l-16.324-11.303c-3.432 5.077-8.707 8.569-15.465 8.569M220.438 75.017c-9.656 0-17.484-7.115-17.484-17.83 0-10.715 7.828-17.826 17.484-17.826 9.654 0 17.481 7.164 17.481 17.826 0 10.664-7.827 17.83-17.481 17.83zm17.869-47.207c-5.015-4.757-11.705-8.312-21.091-8.312-17.872 0-34.435 15.062-34.435 37.657 0 22.592 16.406 37.655 34.435 37.655 8.693 0 15.325-3.383 20.341-8.317v6.192h20.173V21.659h-19.423v6.151zM153.617 29.934v-8.275h-19.443v71.026h20.159V58.999c0-14.15 7.857-17.992 16.578-17.992 2.141 0 4.428.142 6.859.711V21.659c-1.431-.43-3.575-.715-5.719-.715-5.716 0-13.939 1.876-18.434 8.99M363.979.938h-20.172v69.273c0 14.146 8.634 23.03 25.728 23.03 6.852 0 13.262-1.003 17.52-2.136V73.052c-3.951 1.135-8.354 1.992-13.815 1.992-5.631 0-9.261-1.574-9.261-7.43V39.361h23.417V21.554h-23.417V.938M430.061 75.017c-9.657 0-17.485-7.115-17.485-17.83 0-10.715 7.828-17.826 17.485-17.826 9.652 0 17.48 7.164 17.48 17.826 0 10.664-7.828 17.83-17.48 17.83zm0-55.519c-20.797 0-37.653 16.858-37.653 37.657 0 20.795 16.856 37.655 37.653 37.655 20.794 0 37.654-16.86 37.654-37.655 0-20.799-16.86-37.657-37.654-37.657zM86.934 75.017c-9.657 0-17.484-7.166-17.484-17.83 0-10.662 7.827-17.826 17.484-17.826 9.653 0 17.481 7.111 17.481 17.826s-7.828 17.83-17.481 17.83zm3.222-55.519c-9.389 0-16.078 3.555-21.094 8.312v-6.151h-19.42v96.28h20.173l-.002-31.446c5.018 4.934 11.649 8.317 20.343 8.317 18.027 0 34.435-15.063 34.435-37.655 0-22.595-16.566-37.657-34.435-37.657z"
          fill="#263077"
        />
      </g>
    </svg>
  );

  const email = useSelector((state) => state.Auth.email);
  const dispatch = useDispatch();

  return (
    <div className="border-b-2 border-slate-200">
      <div className="flex justify-between py-5 w-11/12 mx-auto ">
        <div className="flex gap-5">
          <div className="mt-1 px-8">
            <Link to="/">{logo}</Link>
          </div>
          <div>
            <ul className="flex gap-7 font-semibold">
              <li>
                <Link to="/doctor">Find Doctors</Link>
              </li>
              <li>
                <Link to="/medi">Medicines</Link>
              </li>
              <li>
                <Link to="/labtest">Lab Tests</Link>
              </li>
              <li>
                <Link to="/surgerie">Surgeries</Link>
              </li>
            </ul>
          </div>
        </div>
        {email ? (
          <div>
            <button
              disabled={true}
              className=" text-sm text-slate-400 hover:text-blue-400"
            >
              {email}
            </button>
            <button
              onClick={() => dispatch(logout())}
              className="border ms-4 text-sm px-3 py-1 rounded-sm border-slate-400 text-slate-400 hover:border-blue-400 hover:text-blue-400"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to="/auth">
              <button className="border text-sm px-3 py-1 rounded-sm border-slate-400 text-slate-400 hover:border-blue-400 hover:text-blue-400">
                Login / Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
