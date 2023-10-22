import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DoctorsData from "../../Assets/Js/DoctorsData";
import CommonQuestions from "./CommonQuestions";
import Swal from "sweetalert2";
import RazorPayMethod from "../Common/RazorPayMethod";

const ProfileSection = () => {
  const [data, setData] = useState([]);
  const [confirmBooking, setConfirmBooking] = useState(false);

  const { id } = useParams();

  const timing = [
    "7-8 (AM)",
    "8-9 (AM)",
    "9-10 (AM)",
    "10-11 (AM)",
    "4-5 (PM)",
    "5-6 (PM)",
    "6-7 (PM)",
  ];

  const handleBooking = (time) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to book appointment of Dr.${data.name} in between ${time}`,
      icon: "question",
      customClass: {
        confirmButton: "btn btn-danger text-light rounded",
      },
    }).then(() => {
      setConfirmBooking(true);
    });
  };

  const showTiming = timing.map((ele, index) => {
    return (
      <button
        key={index}
        className="bg-white border-green-500 border text-green-700"
        onClick={() => handleBooking(ele)}
      >
        {ele}
      </button>
    );
  });

  useEffect(() => {
    console.log(id);
    try {
      const response = DoctorsData;
      let value = response.filter((ele) => {
        if (ele._id === id) {
          return ele;
        }
        return;
      });

      setData(value[0]);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <div className="bg-slate-100 p-4">
      <div className="w-4/5 flex justify-between mx-auto">
        <div className="w-8/12">
          <div className="flex bg-white p-4">
            <div className="">
              {data.gender == "Male" ? (
                <img
                  src="https://thumbs.dreamstime.com/z/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg?w=768"
                  alt="Male"
                  className="w-80"
                />
              ) : (
                <img
                  src="https://thumbs.dreamstime.com/z/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg?w=768"
                  alt="Female"
                  className="w-80"
                />
              )}
            </div>
            <div className="flex flex-col p-4">
              <span className="text-2xl text-blue-500">Dr.{data.name}</span>
              <span className="my-1">MBBS</span>
              <span className="my-1">{data.department}</span>
              <span className="my-1">
                {data.experience} year of overall experience
              </span>
              <span className="my-1 text-sm text-slate-400">
                Dr.{data.name} is Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Nobis illo, porro alias suscipit expedita
                quasi corporis dicta possimus corrupti nemo quos voluptas minus
                sit error.
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-between p-4 bg-white mt-4">
              <div className="p-4">
                <div>Mon-Sat</div>
                <div>07:00AM-11:00AM & 04:00PM-07:00PM</div>
              </div>
              <div className="p-4">Rs.{data.fees}</div>
            </div>
          </div>
          <div>
            <CommonQuestions data={data} />
          </div>
        </div>
        <div className="border w-4/12 ms-3 bg-white p-4 h-[300px]">
          <div className="text-center text-xl text-blue-500">
            Book Appoinment
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10">{showTiming}</div>
          {confirmBooking && (
            <div className="mt-10">
              <RazorPayMethod totalAmount={data.fees} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
