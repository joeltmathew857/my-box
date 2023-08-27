import React, { useState } from "react";
import FAQimg from "../assets/FAQimg/illustration-woman-online-mobile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FAQcard = () => {
  const [dropdowns, setDropdowns] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdownName]: !prevDropdowns[dropdownName],
    }));
  };

  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-sm mx-auto bg-white sm:max-w-md md:max-w-lg flex justify-between flex flex-row lg:max-w-xl xl:max-w-3xl rounded-2xl shadow-md text-center">
        <div>
          <img src={FAQimg} alt="FAQimg" className="w-96 h-96" />
        </div>
        <div className="drop-down p-6 ">
          <div className="font-bold text-4xl pb-10">FAQ</div>
          <div
            className="cursor-pointer underline py-4"
            onClick={() => toggleDropdown("teamMembers")}
          >
            How many team members can I invite?
            <FontAwesomeIcon
              icon={faChevronDown}
              className={dropdowns.teamMembers ? "rotate-180" : ""}
            />
          </div>
          {dropdowns.teamMembers && (
            <div className="drop">
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </div>
          )}
          {/* Repeat the above pattern for other questions */}
          {/* ...
          ...
          ... */}
        </div>
      </div>
    </div>
  );
};

export default FAQcard;
