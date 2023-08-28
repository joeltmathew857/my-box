// Support.jsx
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
    <div>
      <div className="cursor-pointer text-md border-b-4 border-zinc-950 py-4">
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          onClick={() => onToggle()}
          className={`${isOpen ? "rotate-180" : ""} w-12 h-6 text-yellow-500`}
        />
        {isOpen && <div className="drop">{description}</div>}
      </div>
    </div>
  );
};

export default Accordian;
