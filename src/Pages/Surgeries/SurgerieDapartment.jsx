import { Modal } from "antd";
import React, { useState } from "react";
import { appointSergery } from "../../Features/Search/Search";
import { useDispatch } from "react-redux";

const SurgerieDapartment = () => {
  const data = [
    {
      name: "General Surgery",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/7LtGC6lIDqJiNhoAIE2xNC/1ffc26aae2e50642e661f08fd6944c20/shutterstock_1290596902_1__1_.png?w=160&h=180",
      types: [
        {
          name: "Gallstone",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/7z9NVpLnqKxQKb7WXg7YHY/327a4e9b9dae151b0a728d89df58dba9/Gall-stones_1.webp?w=112&h=112",
        },
        {
          name: "Hernia Treatment",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/4MAcEA0Cz3k9mZnS5ego91/8a804348cbea017254a1e3446cba10e1/Hernia.webp?w=112&h=112",
        },
        {
          name: "Lipoma Removal",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/7mxcjRD6bu1wIRguNL1eFe/bb2720a58d89242c0ee93f5fcb5c2640/Lipoma-removal.webp?w=112&h=112",
        },
        {
          name: "Circumcision",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/22oYBv0FAeYQiPGdXW7sYE/75a2e9c2abd99b76ce82248bef4a40f5/Circumcision_1.webp?w=112&h=112",
        },
        {
          name: "Varicose Veins",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/5PIxwAjx6tqIT9HtP4bz7s/51769592d54a1c7e96717be6f458f13e/Varicose-vein.webp?w=112&h=112",
        },
        {
          name: "Sebaceous cyst",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/7c0MCeBBJjAnXvC0aVjERo/3e0b9d3c437a644d094649e4887263af/Sebaceous-Cyst.webp?w=112&h=112",
        },
        {
          name: "Varicocele",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/c5brUyXQo2cOx6LUI7lrR/759b631b312efe6bfd145605dbfa85ca/Varicocele.webp?w=112&h=112",
        },
        {
          name: "Hydrocele",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/2n8RiOJSylBWB2SN23lqCz/844e1a6bf66954e85c7f5a6d84a3f558/Hydrocele.webp?w=112&h=112",
        },
        {
          name: "Appendectomy",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/6ajmByzeWz42QUhxDz4S7j/0a8f347c0eeabb938e7e6fd667743006/Gall_stones.png?w=112&h=112",
        },
      ],
    },
    {
      name: "Proctology",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/6gA5BgNsLuWHsvazAK0INw/e56ec45f2cb280513cde42f701f8fc4c/140818535_m_1__1_.png?w=160&h=180",
      types: [
        {
          name: "Anal Fissure",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/62iYvUOS7HcIZ2agTa4y4p/62567921fe51a2e752423657e2d63b9f/Anal_Fistulaa.webp?w=112&h=112",
        },
        {
          name: "Anal Fistula",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/62iYvUOS7HcIZ2agTa4y4p/62567921fe51a2e752423657e2d63b9f/Anal_Fistulaa.webp?w=112&h=112",
        },
        {
          name: "Piles",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/3Le0YfXevQpqYFtvRZ1fBr/6d86f7bbcca555ed4a89a9e3f339a99c/Non-surgical_Piles.webp?w=112&h=112",
        },
        {
          name: "Pilonidal Sinus",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/1NyUkEBGrw5Yb6ExYBLaj1/6b00ddb59690df574c6948cd7fd61c64/Pilonidal_sinus.webp?w=112&h=112",
        },
        {
          name: "Perianal Abscess",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/1UppuunxrEgxdTTFvRU6on/0fda62fef0eb0ada7363963882666657/Perianal_Abscess.webp?w=112&h=112",
        },
      ],
    },
    {
      name: "Ophthamology",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/7hPNzNbyJx2hxpDWuNN3iW/c178d01b48313b0ff2a61868bf55137d/img_Ophthalmologist_specialists.png?w=160&h=180",
      types: [
        {
          name: "Cataract",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/6aZT99IFOsh4OpFAksjes1/bd47eb4fc5bfe9f2b5b381818fb11143/Cataract_20_1_.webp?w=112&h=112",
        },
        {
          name: "Lasik",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/3c1JbZjmHnUZX1O8DPkgwH/6031b41b749a3e420dd43d2d3db97ad2/Lasik.webp?w=112&h=112",
        },
        {
          name: "Glaucoma",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/15k6dxccU73gVRzeJxj8Ht/b2d751d45d4ee68c784d5d83770136d2/Glaucoma.webp?w=112&h=112",
        },
        {
          name: "Squinteye",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/2Bbt9YsUeR8tBSbCixZxnI/8762e7f0b409a6a42598b896b750ae79/Squint_Eye.webp?w=112&h=112",
        },
      ],
    },
    {
      name: "Urology",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/5M5Ka21ADZfZ7tcwzC3Ql5/7cf514af5fbedb1709d9ecf061128864/img_Urologist_symptom.png?w=160&h=180",
      types: [
        {
          name: "Kidney Stone",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/3eEa1FqZiLplzeGXCa7CAb/433388a7b09bd775d545873ca8cad14f/Kidney_stone.webp?w=112&h=112",
        },
        {
          name: "Renal cyst",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/5jlQZPwqfGLXrCJ0iAuJWq/63e6a252cb295a1c4196bf4ed305bd36/Renal_cyst.webp?w=112&h=112",
        },
        {
          name: "Urethroplasty",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/2PDYMc35XHtArT6dDoSXYI/e98707cd9f7d2227832979b29b2bcf9c/Urethroplasty.webp?w=112&h=112",
        },
        {
          name: "TURP",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/y9dp6vGfl8CKhAMUNfi8e/5b868a0f0ccfe1e23e5a3ff63451fc21/turp.webp?w=112&h=112",
        },
        {
          name: "Cystolitholapaxy",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/5P08LEqdyPhHKpFhn99JtJ/8ebb59482ed294cee821058cfd3a7043/Cystolitholapaxy.png?w=112&h=112",
        },
        {
          name: "Kidney Biopsy",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/46UyziBG5bfYCXd8Ys6CJ0/3e517af4154d7621469d94ce43c4224e/Kidney_Biopsy.png?w=112&h=112",
        },
        {
          name: "CRRT",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/2hChUXJhgMqIhImV0SHZwO/f5ad211b5775bd234212d5599bb78fa9/CRRT.png?w=112&h=112",
        },
        {
          name: "Ureteroscopy",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/5eUx6RKdHPm5RszF1YmvSP/4b5a064df844472aa9778a86685de6e1/Ureteroscopy.png?w=112&h=112",
        },
        {
          name: "Percutaneous Nephrolithotomy(PCNL)",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/7Gv0cBTVWEpAYXhHbmisqV/d31c1a3a4a94994b761064c60115a8fb/Percutaneous_Nephrolithotomy_PCNL_.png?w=112&h=112",
        },
        {
          name: "Dialysis",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/18aVlhaVAfV8q4cau6rlGN/69186be29ee4d78d32cf324287654dc3/Dialysis.png?w=112&h=112",
        },
        {
          name: "ESWL",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/35ivXmK3mbSBaM02OxJrpd/63642ef5a609a8c7da1ae1af57c033aa/ESWL.png?w=112&h=112",
        },
        {
          name: "Lithotripsy",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/1esgsmtkSrk2uMvpwkhKal/0b26a701d867dcc636dc796fb062a1e8/Lithotripsy.png?w=112&h=112",
        },
      ],
    },
    {
      name: "Cosmetic",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/2LczN0O77AQ1cvic0VuFfz/93124d9ca04b5780a1e91c37e84f1b73/Cosmetic_Slug_Contentfull.svg?w=160&h=180",
      types: [
        {
          name: "Rhinoplasty",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/SNdaUg9QRshkU1CltUN78/b1e7162ec0c6bab2b494eb077584b2ba/Rhinoplasty.webp?w=112&h=112",
        },
        {
          name: "Breast Reduction/ Augmentation",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/2zRkzNDLd8oYcUvop0Xi7R/0887b66f9c8098d740c0625cba83f11b/augmentation.webp?w=112&h=112",
        },
        {
          name: "Breast Lift",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/70FLoNlAi6z7vaOYBtlpgZ/5f114cabcc671f13d5941e3f96d35dd7/Breast_lift.webp?w=112&h=112",
        },
        {
          name: "Liposuction",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/64yDBInMhU5goJY0ffCiwn/4a8976c76139c8186c5ad2f0d4b75c5c/Liposuction.webp?w=112&h=112",
        },
        {
          name: "Gynaecomastia",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/3LVlKYQOI35riYmRGKx4Kg/ceeb80487def1c51d36f516d20c09722/Breast_Removal_-_Mastectomy.webp?w=112&h=112",
        },
        {
          name: "Lump in Breast",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/czmI2JgIcbfw6RqLj787q/33447a210ae0f6b41d39f96c3a0ae450/Breast-Lump.webp?w=112&h=112",
        },
      ],
    },
    {
      name: "Orthopedics",
      image:
        "https://images.ctfassets.net/a5lr4xmo2i3k/3pyQOnPQqHrXGVsvgaA52M/6a7272d884e404c49787f47654f1c688/orthopedics.png?w=160&h=180",
      types: [
        {
          name: "Knee Replacement",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/4iG06IWGyfn5XwWiEAhxKi/2fd1dacf77d8e13c96698555cdae8276/Total_Knee_Replacement.png?w=112&h=112",
        },
        {
          name: "Arthroscopy",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/4iG06IWGyfn5XwWiEAhxKi/2fd1dacf77d8e13c96698555cdae8276/Total_Knee_Replacement.png?w=112&h=112",
        },
        {
          name: "Carpal Tunnel Syndrome",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/76ZfKaPFzPhQvaLkmXHLg6/2c269450e32b8dce450d65b0e4994e26/Carpal_Tunnel_Syndrome.png?w=112&h=112",
        },
        {
          name: "Lumbar Laminectomy",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/6mtk6NbXaACHD2glGVh25C/b8c89b0df25410714f263d496bd97134/Lumbar_Laminectomy.png?w=112&h=112",
        },
        {
          name: "ACL Repair",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/6mUb1AfaFN8DNN2NwJN7Xn/a942f89d68ccffcfc83bbc71cc8c87a3/Orthopedics.png?w=112&h=112",
        },
        {
          name: "Microdiscectomy",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/zO0JtgUYLOiPfSC1c3gHZ/9d8f53ad6d89a2f8c4fe0ca1cfceb3e2/Microdiscectomy.png?w=112&h=112",
        },
        {
          name: "Knee Arthroscopy",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/2hDEJUnbFubGHUZqFcayFt/54fa4b21025151a056cead7079fc7842/Knee_Arthroscopy.png?w=112&h=112",
        },
        {
          name: "Shoulder Arthroscopy",
          image:
            "https://images.ctfassets.net/a5lr4xmo2i3k/5ka7iQODqRza93lsFMjJl7/c429c6a06eb76dc32564890031a03ae1/Shoulder_Arthroscopy.png?w=112&h=112",
        },
      ],
    },
  ];

  const [ailments, setAilments] = useState([]);
  const [modalName, setModalName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showDepartments = data.map((ele, index) => {
    return (
      <div
        key={index}
        onClick={() => handleOnDepartmentClick(ele)}
        className="flex flex-col cursor-pointer"
      >
        <div className="">
          <img
            src={ele.image}
            alt={ele.name}
            className="rounded-lg h-48 mx-auto"
          />
        </div>
        <div className="p-2 px-5">
          <span className=" font-semibold">{ele.name}</span>
          <br />
          <span>{ele.types.length} ailments</span>
        </div>
      </div>
    );
  });

  const handleDataModalShow = (items) => {
    let newValues = items.map((ele, index) => {
      return (
        <div
          key={index}
          onClick={() => handleOnClickAliment(ele.name)}
          className="flex flex-col items-center text-center cursor-pointer"
        >
          <img src={ele.image} alt={ele.name} className="w-16 mx-auto" />
          <span>{ele.name}</span>
        </div>
      );
    });

    setAilments(newValues);
  };

  const handleOnDepartmentClick = (ele) => {
    setModalName(ele.name);
    handleDataModalShow(ele.types);
    setModalOpen(true);
  };

  const handleOnClickAliment = (item) => {
    dispatch(appointSergery(item));
    setModalOpen(false);
  };

  return (
    <div className="mb-20">
      <h4 className="text-lg font-semibold mt-10 mb-8 ms-5">Our Departments</h4>
      <div className="grid grid-cols-3 gap-10">{showDepartments}</div>
      <Modal
        title={`Select ${modalName} Ailments`}
        open={isModalOpen}
        onCancel={() => setModalOpen(false)}
        footer={false}
      >
        <div className="grid grid-cols-4 gap-10 my-10">{ailments}</div>
      </Modal>
    </div>
  );
};

export default SurgerieDapartment;
