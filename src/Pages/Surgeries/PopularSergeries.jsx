import React from "react";
import { useDispatch } from "react-redux";
import { appointSergery } from "../../Features/Search/Search";

const PopularSergeries = () => {
  const data = [
    {
      name: "Piles",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/3Le0YfXevQpqYFtvRZ1fBr/6d86f7bbcca555ed4a89a9e3f339a99c/Non-surgical_Piles.webp?w=112&h=112",
    },
    {
      name: "Hernia Treatment",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/4MAcEA0Cz3k9mZnS5ego91/8a804348cbea017254a1e3446cba10e1/Hernia.webp?w=112&h=112",
    },
    {
      name: "Kidney Stone",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/3eEa1FqZiLplzeGXCa7CAb/433388a7b09bd775d545873ca8cad14f/Kidney_stone.webp?w=112&h=112",
    },
    {
      name: "Cataract",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/6aZT99IFOsh4OpFAksjes1/bd47eb4fc5bfe9f2b5b381818fb11143/Cataract_20_1_.webp?w=112&h=112",
    },
    {
      name: "Circumcision",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/22oYBv0FAeYQiPGdXW7sYE/75a2e9c2abd99b76ce82248bef4a40f5/Circumcision_1.webp?w=112&h=112",
    },
    {
      name: "Lasik",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/3c1JbZjmHnUZX1O8DPkgwH/6031b41b749a3e420dd43d2d3db97ad2/Lasik.webp?w=112&h=112",
    },
    {
      name: "Varicose Veins",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/5PIxwAjx6tqIT9HtP4bz7s/51769592d54a1c7e96717be6f458f13e/Varicose-vein.webp?w=112&h=112",
    },
    {
      name: "Gallstone",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/7z9NVpLnqKxQKb7WXg7YHY/327a4e9b9dae151b0a728d89df58dba9/Gall-stones_1.webp?w=112&h=112",
    },
    {
      name: "Anal Fistula",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/62iYvUOS7HcIZ2agTa4y4p/62567921fe51a2e752423657e2d63b9f/Anal_Fistulaa.webp?w=112&h=112",
    },
    {
      name: "Gynaecomastia",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/3LVlKYQOI35riYmRGKx4Kg/ceeb80487def1c51d36f516d20c09722/Breast_Removal_-_Mastectomy.webp?w=112&h=112",
    },
    {
      name: "Anal Fissure",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/62iYvUOS7HcIZ2agTa4y4p/62567921fe51a2e752423657e2d63b9f/Anal_Fistulaa.webp?w=112&h=112",
    },
    {
      name: "Lipoma Removal",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/7mxcjRD6bu1wIRguNL1eFe/bb2720a58d89242c0ee93f5fcb5c2640/Lipoma-removal.webp?w=112&h=112",
    },
    {
      name: "Sebaceous cyst",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/7c0MCeBBJjAnXvC0aVjERo/3e0b9d3c437a644d094649e4887263af/Sebaceous-Cyst.webp?w=112&h=112",
    },
    {
      name: "Pilonidal Sinus",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/1NyUkEBGrw5Yb6ExYBLaj1/6b00ddb59690df574c6948cd7fd61c64/Pilonidal_sinus.webp?w=112&h=112",
    },
    {
      name: "Lump in Breast",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/czmI2JgIcbfw6RqLj787q/33447a210ae0f6b41d39f96c3a0ae450/Breast-Lump.webp?w=112&h=112",
    },
    {
      name: "TURP",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/y9dp6vGfl8CKhAMUNfi8e/5b868a0f0ccfe1e23e5a3ff63451fc21/turp.webp?w=112&h=112",
    },
    {
      name: "Hydrocele",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/2n8RiOJSylBWB2SN23lqCz/844e1a6bf66954e85c7f5a6d84a3f558/Hydrocele.webp?w=112&h=112",
    },
    {
      name: "Knee Replacement",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/4iG06IWGyfn5XwWiEAhxKi/2fd1dacf77d8e13c96698555cdae8276/Total_Knee_Replacement.png?w=112&h=112",
    },
    {
      name: "Hair Transplant",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/1frXX9AwzBZFHZDGMKqqA1/47685bd931c887efceab97ec3f253122/Hair_transplant.png?w=112&h=112",
    },
  ];

  const dispatch = useDispatch();

  const showPopularSergeries = data.map((ele, index) => {
    return (
      <div
        key={index}
        onClick={() => dispatch(appointSergery(ele.name))}
        className="flex flex-col items-center text-center cursor-pointer"
      >
        <img src={ele.image} alt={ele.name} className="w-16 mx-auto" />
        <span>{ele.name}</span>
      </div>
    );
  });

  return (
    <div>
      <h3 className="text-xl my-8 font-semibold">
        We are experts in Surgical solutions for 50+ ailments.
      </h3>
      <div className="border p-5 rounded-lg">
        <h4 className="text-lg font-semibold mb-10">Popular Surgeries</h4>
        <div className="grid grid-cols-5 gap-10">{showPopularSergeries}</div>
      </div>
    </div>
  );
};

export default PopularSergeries;
