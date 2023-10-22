import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-blue-800 py-5">
      <div></div>
      <div className="flex justify-center items-center flex-col">
        <img
          src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg"
          alt=""
          className="w-64 py-3"
        />

        <p className="text-white py-5">
          Copyright © 2017, Practo. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
