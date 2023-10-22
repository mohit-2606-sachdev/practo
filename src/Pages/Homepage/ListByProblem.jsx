import React from "react";
import CardByProblem from "./CardByProblem";
import { Link } from "react-router-dom";

const ListByProblem = () => {
  const elementList = [
    {
      image:
        "https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png",
      name: "Periods doubts or Pregnancy",
      department: "Gynecologist/Obstetrician",
    },
    {
      image:
        "https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png",
      name: "Acne, pimple or skin issues",
      department: "General surgeon",
    },
    {
      image:
        "https://www.practo.com/consult/static/images/top-speciality-sexology.svg",
      name: "Performance issues in bed",
      department: "General physician",
    },
    {
      image:
        "https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png",
      name: "Cold, cough or fever",
      department: "Dietitian/Nutrition",
    },
    {
      image:
        "https://www.practo.com/consult/static/images/top-speciality-pediatric.svg",
      name: "Child not feeling well",
      department: "Pediatrician",
    },
    {
      image:
        "https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png",
      name: "Depression or anxiety",
      department: "Dentist",
    },
  ];

  const showElements = elementList.map((ele) => {
    return (
      <div key={ele.name}>
        <CardByProblem ele={ele} />
      </div>
    );
  });

  return (
    <div className="w-4/5 mx-auto py-7">
      <div className="flex justify-between">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">
            Consult top doctors online for any health concern
          </h3>
          <p className="text-sm">
            Private online consultations with verified doctors in all
            specialists
          </p>
        </div>
        <div className="">
          <Link to={"/doctor"}>
            <button className="text-blue-300 border rounded-md border-blue-300 px-4 py-2 mt-1 ">
              View All Specialities
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-3 ">{showElements}</div>
    </div>
  );
};

export default ListByProblem;
