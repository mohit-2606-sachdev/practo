import React from "react";

const DownloadApp = () => {
  const doctorImage =
    "https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png";

  return (
    <div className="bg-slate-100 py-20">
      <div className="flex justify-between w-7/12 mx-auto">
        <div className="w-6/12">
          <img src={doctorImage} alt="doctorImage" className="h-96 mx-auto" />
        </div>
        <div className="flex flex-col w-6/12 p-4">
          <h3 className="text-3xl">Download the Practo app</h3>
          <p className="text-sm my-5">
            Access video consultation with India’s top doctors on the Practo
            app. Connect with doctors online, available 24/7, from the comfort
            of your home.
          </p>

          <div>
            <p className="text-lg mt-8">Get the link to download the app</p>
            <div className="flex items-center my-2">
              <div className="border ">
                <span className="border-r p-3">+91</span>
                <input
                  type="number"
                  className="bg-transparent m-3 outline-none"
                  placeholder="Enter Phone Number"
                />
              </div>
              <div>
                <button className="ms-1 bg-blue-400 rounded-md px-2 py-3 text-white">
                  Send SMS
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="w-[135px]">
              <img
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/google_play.png"
                alt=""
              />
            </button>
            <button className="w-[120px]">
              <img
                src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/apple_store.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
