import React from "react";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Submit = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-center bg-zinc-900 items-center h-screen p-8">
      <div className="box-border h-100 w-96 p-8 border-1 bg-gradient-to-r from-slate-600 to-slate-800 text-white rounded-2xl">
        <div className="flex justify-center items-center bg-gray-700 rounded-full w-12 h-12 mb-4">
          <FontAwesomeIcon icon={faStar} className="text-orange-400	" />
        </div>
        <div className="font-bold mb-4 text-2xl flex flex-row">
          How did we do?
        </div>
        <p className="text-slate-400">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="py-8">
          <Button />
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-500 rounded-full text-white w-40 px-4 py-2">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submit;
