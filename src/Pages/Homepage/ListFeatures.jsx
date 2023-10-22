import React from "react";
import CardForFeatures from "./CardForFeatures";

const ListFeatures = () => {
  const listElement = [
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png",
      heading: "Find Doctors Near You",
      description: "Confirmed appoinments",
      url: "/doctor",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png",
      heading: "Medicines",
      description: "Essentials at your doorstep",
      url: "/medi",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png",
      heading: "Lab Tests",
      description: "Sample pickup at your home",
      url: "labtest",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png",
      heading: "Surgeries",
      description: "Safe and trusted surgery centers",
      url: "surgerie",
    },
  ];

  const showElement = listElement.map((ele) => {
    return (
      <div key={ele.heading}>
        <CardForFeatures ele={ele} />
      </div>
    );
  });

  return (
    <div className="w-4/5 mx-auto grid grid-cols-4 gap-16 p-10">
      {showElement}
    </div>
  );
};

export default ListFeatures;
