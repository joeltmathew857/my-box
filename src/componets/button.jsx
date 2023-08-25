import React from "react";

const Button = ({ number }) => {
  return (
    <button className="flex justify-center items-center bg-gray-700 text-slate-400 rounded-full w-12 h-12 mr-4">
      {number}
    </button>
  );
};

export default Button;
