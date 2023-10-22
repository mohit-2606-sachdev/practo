import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartByDepartment from "./CartByDepartment";

const CustomNextButton = (props) => {
  return (
    <button
      className="custom-next-button rounded-full border shadow-md px-4 py-2 absolute top-24 right-0 bg-white z-10"
      onClick={props.onClick}
    >
      &gt;
    </button>
  );
};

const CustomPrevButton = (props) => {
  return (
    <button
      className="custom-prev-button rounded-full border shadow-md px-4 py-2 absolute top-24 left-0 bg-white z-10"
      onClick={props.onClick}
    >
      &lt;
    </button>
  );
};

const ListByDepartment = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
  };

  const listElement = [
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
      name: "Dentist",
      description: "Teething troubles? Schedule a dental checkup",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
      name: "Gynecologist/Obstetrician",
      description:
        "Explore for women's health, pregnancy and infertility treatments",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
      name: "Dietitian/Nutrition",
      description:
        "Get guidance on eating right, weight management and sports nutrition",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
      name: "Physiotherapist",
      description:
        "pulled a muscle? Get it treated by a trained physiotherapist",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg",
      name: "General surgeon",
      description: "Need to get operated? Find the right surgeon",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg",
      name: "Orthopedist",
      description: "For Bone and joints issues, spinal injuries and more",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg",
      name: "General physician",
      description: "Find the right family doctor in your neighborhood",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg",
      name: "Pediatrician",
      description: "Child Specialists and Doctors for infant",
    },
    {
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg",
      name: "Gastroenterologist",
      description:
        "Explore for issues related to digestive system, liver and pancreas",
    },
  ];

  const showElements = listElement.map((ele) => {
    return (
      <div key={ele.name}>
        <CartByDepartment ele={ele} />
      </div>
    );
  });

  return (
    <div className="w-4/5 mx-auto pb-14">
      <div>
        <h3 className="text-2xl font-semibold">
          Book an appoinment for an in-clinic consultation
        </h3>
        <p className="text-md tracking-tight">
          Find experienced doctors across all specialties
        </p>
      </div>
      <div>
        <Slider {...settings}>{showElements}</Slider>
      </div>
    </div>
  );
};

export default ListByDepartment;
