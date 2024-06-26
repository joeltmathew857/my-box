import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faBrain,
  faBolt,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const NavBox = () => {
  return (
    <div className=" flex justify-center  items-center ">
      {/* Main Container */}
      <div class="flex-col   md:drop-shadow-lg mt-40 flex items-center lg:flex-row md:flex-col bg-white content-between">
        {/* Left Section */}
        <div class="bg-gradient-to-r from-blue-600 to-violet-600  w-1/2 md:w-full p-2 rounded-3xl">
          {/* Content */}
          <div className="rounded-full justify-center p-8 items-center flex flex-col  ">
            {/* Title */}
            <div className="text-gray-300 font-normal text-lg font-semibold mb-8 ">
              Your Result <br />
            </div>
            {/* Result Box */}
            <div className="rounded-full flex flex-col  justify-center bg-gradient-to-r from-blue-600 to-violet-900 flex-wrap content-center  bg-indigo-700 text-white w-40 h-40">
              <div className="flex text-6xl font-bold  items-baseline ">76</div>
              <div className="text-sm flex text-gray-400  justify-center">
                of 100
              </div>
            </div>
            {/* Result Description */}
            <h1 className=" text-neutral-50 text-2xl font-bold flex items-center mt-8">
              Great
            </h1>
            <div className="text-neutral-50 text-sm mt-4 text-center text-gray-300  ">
              You scored higher than 65% of the people who have taken these
              tests.
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div class="bg-white w-1/2 md:w-full h-100 p-10 ">
          {/* Summary Title */}
          <h1 className="font-medium text-lg">Summary</h1>
          <div className="space-y-2 my-4">
            {/* Reaction Section */}
            <div className="flex w-full px-2 h-12  rounded-lg justify-between  bg-red-50">
              <div className="text-red-600">
                <FontAwesomeIcon
                  icon={faBolt}
                  className="text-gray-500 mr-2 mt-4  text-red-600 "
                />
                Reaction
              </div>
              <div className=" mt-4 text-black-600 ">
                {" "}
                80 <span className="text-slate-400	">/100</span>
              </div>
            </div>
            {/* Memory Section */}
            <div className="flex w-full px-2  h-12  rounded-lg   justify-between  bg-blue-50">
              <div>
                <FontAwesomeIcon
                  icon={faBrain}
                  className="text-gray-500 mr-2 text-blue-600 mt-4 "
                />
                Memory
              </div>
              <div className="mt-4 text-black-600 font-medium">
                92 <span className="text-slate-400	">/100</span>
              </div>
            </div>
            {/* Verbal Section */}
            <div className="flex justify-between mt-20 h-12 Right-to-left rounded-lg   w-full px-2  bg-green-50">
              <div className="text-green-600">
                <FontAwesomeIcon
                  icon={faComment}
                  className="text-gray-500 mr-2 text-green-600 mt-4 "
                />
                Verbal
              </div>
              <div className=" mt-4 text-black-600 font-medium">
                61 <span className="text-slate-400	">/100</span>
              </div>
            </div>
            {/* Visual Section */}
            <div className="flex w-full px-2   h-12  rounded-lg  justify-between  bg-yellow-50">
              <div className="text-yellow-600">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-gray-500 mr-2 text-yellow-600 mt-4 "
                />
                Visual
              </div>
              <div className=" mt-4 text-black-600 font-medium">
                72 <span className="text-slate-400	">/100</span>{" "}
              </div>
            </div>
          </div>
          {/* Continue Button */}
          <div className="flex justify-center">
            <button
              type="button"
              class="text-white hover:bg-blue-800  font-medium rounded-full text-base px-6 py-3 text-center mr-2 mb-2 dark:bg-blue-700 w-full transition duration-100 ease-in-out "
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBox;
