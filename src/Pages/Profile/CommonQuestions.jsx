import React from "react";

const CommonQuestions = ({ data }) => {
  return (
    <div className="bg-white mt-4">
      <div className="p-4 border-b-2 font-semibold text-lg">
        Common questions & answers
      </div>
      <div className="p-4 border-b-2">
        <div className="font-semibold">
          Q: Where does Dr. {data.name} practice?
        </div>
        <div>
          A: Dr. {data.name} practices at Uro Gynae Health Clinic - Rewa.
        </div>
      </div>
      <div className="p-4 border-b-2">
        <div className="font-semibold">
          Q: What is Dr. {data.name} education qualification?
        </div>
        <div>
          A: Dr. {data.name} has the following qualifications - MBBS,{" "}
          {data.department}.
        </div>
      </div>
      <div className="p-4 border-b-2">
        <div className="font-semibold">
          Q: What does Dr. {data.name} specialises in ?
        </div>
        <div>
          A: Dr. {data.name} specialises as {data.department}.
        </div>
      </div>
      <div className="p-4 border-b-2">
        <div className="font-semibold">
          Q: How many years of experience does Dr. {data.name} have?
        </div>
        <div>
          A: Dr. Megha Gupta has an overall experience of {data.experience}{" "}
          years.
        </div>
      </div>
      <div className="p-4 border-b-2">
        <div className="font-semibold">Q: Who is Dr. {data.name}?</div>
        <div>
          A: Dr. {data.name} is Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Dicta nisi molestias similique veritatis iure atque
          corrupti, soluta totam assumenda in impedit fugit eaque nostrum
          nihil?.
        </div>
      </div>
    </div>
  );
};

export default CommonQuestions;
