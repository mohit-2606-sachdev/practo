import { Carousel } from "antd";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const Comments = () => {
  return (
    <div className="w-4/5 mx-auto pt-10 pb-14">
      <div className="w-full text-center">
        <h3 className="text-3xl font-bold">What our users have to say</h3>
        <div className="mt-7">
          <Carousel autoplay>
            <div>
              <div className="text-center flex justify-center">
                <p className="text-2xl w-2/4">
                  Very helpful. Far easier than doing same things on computer.
                  Allows quick and easy search with speedy booking. Even
                  maintains history of doctors visited.
                </p>
              </div>
              <div className="w-full flex justify-center">
                <div className="flex mt-5 align-middle">
                  <div className="text-xl">
                    <RxAvatar />
                  </div>
                  <div className="ms-2 font-bold">Amit Sharma</div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center flex justify-center">
                <p className="text-2xl w-2/4">
                  Very easy to book,maintain history. Hassle free from older
                  versions of booking appointment via telephone.. Thanks Practo
                  for making it simple.
                </p>
              </div>
              <div className="w-full flex justify-center">
                <div className="flex mt-5 align-middle">
                  <div className="text-xl">
                    <RxAvatar />
                  </div>
                  <div className="ms-2 font-bold">Jyothi Bhatia</div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-center flex justify-center">
                <p className="text-2xl w-2/4">
                  Very good app. Well thought out about
                  booking/rescheduling/canceling an appointment. Also, Doctor's
                  feedback mechanism is good and describes all the basics in a
                  good way
                </p>
              </div>
              <div className="w-full flex justify-center">
                <div className="flex mt-5 align-middle">
                  <div className="text-xl ">
                    <RxAvatar />
                  </div>
                  <div className="ms-2 font-bold">Avinash Kumar</div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Comments;
