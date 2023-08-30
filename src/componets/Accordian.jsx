import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordian = ({
  title = "",
  description = "",
  isOpen = false,
  onToggle = () => {},
}) => {
  return (
    <div className="border-b-2 border-zinc-200 ">
      <div
        className={`cursor-pointer sm:w-26 py-3 flex flex-row px-12 text-md justify-between ${
          isOpen ? "font-bold" : "font-light"
        }`}
      >
        <div className="flex whitespace-nowrap text-slate-600 ">{title}</div>
        <div className="">
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={() => onToggle()}
            className={`${isOpen ? "rotate-180" : ""} w-4 h-4 text-yellow-500 `}
          />
        </div>
      </div>
      {isOpen && <div className="drop text-left">{description}</div>}
    </div>
  );
};

export default Accordian;
