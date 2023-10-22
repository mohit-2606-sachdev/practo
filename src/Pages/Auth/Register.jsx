import React, { useState } from "react";
import { authentication } from "../../config/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const poster = "https://accounts.practo.com/static/images/illustration.png";

  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCred((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async () => {
    createUserWithEmailAndPassword(authentication, cred.email, cred.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (user) {
          Swal.fire({
            title: "Registered Successfully",
            text: "Now Login to continue",
            icon: "success",
          });

          setCred({
            email: "",
            password: "",
          });
        }
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="">
      <div className="w-4/5 mx-auto flex">
        <div className="w-6/12">
          <img src={poster} alt="poster" />
        </div>
        <div className="w-6/12 mt-16">
          <div className="border w-9/12 mx-auto">
            <div className="p-2 text-xl font-semibold border-b-2 text-center">
              Join Practo
            </div>

            <div className="flex flex-col p-3">
              <label className="mt-3" htmlFor="">
                Email
              </label>
              <input
                type="email"
                className="border outline-none p-2 focus:border-blue-400 mt-1"
                placeholder="Email"
                name="email"
                onChange={(e) => handleChange(e)}
                id=""
              />
              <label className="mt-3" htmlFor="">
                Password
              </label>
              <input
                type="password"
                className="border outline-none p-2 focus:border-blue-400 mt-1"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
                id=""
              />
            </div>

            <button
              className={`w-full mt-3 p-1 bg-blue-700 text-lg ${
                !cred.email || !cred.password
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }  text-white`}
              onClick={handleSubmit}
              disabled={!cred.email || !cred.password}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
