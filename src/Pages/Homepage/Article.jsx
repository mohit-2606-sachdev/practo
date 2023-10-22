import React from "react";

const Article = () => {
  return (
    <div className="w-4/6 mx-auto">
      <div className="grid grid-cols-3 mx-auto">
        <div className="w-80 p-5">
          <h3 className="text-3xl font-bold">
            Read top articles from health experts
          </h3>
          <p className="text-sm mt-1">
            Health articles that keep you informed about good health practices
            and achieve your goals.
          </p>
          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
              See all articles
            </button>
          </div>
        </div>
        <div className="w-80 p-5">
          <div>
            <img
              src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910"
              alt=""
              className="rounded-lg hover:shadow"
            />
          </div>
          <div className="text-sm py-2">CORONAVIRUS</div>
          <div className="text-lg font-semibold">
            12 coronavirus myths and facts that you should be aware of
          </div>
          <div className="text-md py-2">Dr. Diana Borgio</div>
        </div>
        <div className="w-80 p-5">
          <div>
            <img
              src="https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c"
              alt=""
              className="rounded-lg hover:shadow"
            />
          </div>
          <div className="text-sm py-2">VITAMINS AND SUPPLIMENTS</div>
          <div className="text-lg font-semibold">
            Eating right to build immunity against cold and viral infections
          </div>
          <div className="text-md py-2">Dr. Diana Borgio</div>
        </div>
      </div>
    </div>
  );
};

export default Article;
