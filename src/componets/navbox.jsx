import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faBrain,
  faBolt,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const navbox = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class=" flex drop-shadow-lg  rounded-3xl content-between ">
        <div class="bg-blue-500 w-1/2 p-2 rounded-3xl">
          <div className="rounded-full">
            <div className="flex justify-center grow mb-8 text-neutral-50 text-xl font-normal">
              Your Result <br />
            </div>
            <div className="rounded-full  mb-14 ml-24 bg-indigo-700 text-white w-20 h-20 p-20">
              <div className="">
                <span className="text-6xl  font-bold ">76</span> of 100
              </div>
            </div>
            <h1 className="text-neutral-50 ml-36 text-2xl font-bold ">Great</h1>
            <div className="flex justify-items-center text-neutral-50 text-sm ml-22 p-10 ">
              You scored higher than 65% of the people who have taken these
              tests.
            </div>
          </div>
        </div>
        <div class=" bg-white w-1/2 rounded-3xl space-y-4  p-2 rounded">
          <h1>Summary</h1>
          <div className="flex w-full px-8 h-12 rounded-lg   justify-between  bg-red-100">
            <div>
              <FontAwesomeIcon icon={faBolt} className="text-gray-500 mr-2 " />
              Reaction
            </div>
            <div> 80 / 100</div>
          </div>
          <div className="flex w-full px-8  h-12  rounded-lg   justify-between  bg-blue-100">
            <div>
              <FontAwesomeIcon icon={faBrain} className="text-gray-500 mr-2" />
              Memory
            </div>
            <div>92 / 100</div>
          </div>
          <div className="flex justify-between  h-12 rounded-lg   w-full px-8  bg-green-100">
            <div>
              <FontAwesomeIcon
                icon={faComment}
                className="text-gray-500 mr-2"
              />
              Verbal
            </div>
            <div>61 / 100</div>
          </div>
          <div className="flex w-full px-8   h-12  rounded-lg  justify-between  bg-yellow-100">
            <div>
              <FontAwesomeIcon icon={faEye} className="text-gray-500 mr-2" />
              Visual
            </div>
            <div className="">72 / 100 </div>
          </div>
          <div className="">
            <button
              type="button"
              class="text-white bg-3730a3 ml-24 w-1/2 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbox;
