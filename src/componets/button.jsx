import React from "react";

const Button = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-center flex-row">
      {numbers.map((number) => (
        <button
          key={number}
          className="flex justify-center items-center bg-gray-700 text-slate-400 rounded-full w-12 h-12 mr-4"
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Button;
