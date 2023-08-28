import React, { useState } from "react";
import Accordian from "./Accordian";
import FAQimg from "../assets/FAQimg/illustration-woman-online-mobile.svg";

const FAQcard = () => {
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (accordianName) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [accordianName]: !prevDropdowns[accordianName],
    }));
  };

  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="mx-auto bg-white sm:max-w-md md:max-w-lg flex justify-between flex flex-row lg:max-w-xl xl:max-w-3xl rounded-2xl shadow-md text-center">
        <div>
          <img src={FAQimg} alt="FAQimg" className="w-96 h-96" />
        </div>
        <div className="drop-down p-6">
          <div className="font-bold text-4xl pb-10">FAQ</div>
          <Accordian
            title="How many team members can I invite?"
            description="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
            isOpen={dropdowns.invite}
            onToggle={() => toggleDropdown("invite")}
          />
          <Accordian
            title="   Do you provide additional support?            "
            description="  Chat and email support is available 24/7. Phone lines are open during normal business hours.            "
            isOpen={dropdowns.support}
            onToggle={() => toggleDropdown("support")}
          />
          <Accordian
            title=" What is the maximum file upload size?"
            description="No more than 2GB. All files in your account must fit your allotted storage space"
            isOpen={dropdowns.Upload}
            onToggle={() => toggleDropdown("Upload")}
          />
          <Accordian
            title="  How do I reset my password?"
            description=" Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you."
            isOpen={dropdowns.password}
            onToggle={() => toggleDropdown("password")}
          />
          <Accordian
            title="Can I cancel my subscription?"
            description=" Yes! Send us a message and we’ll process your request no questions asked."
            isOpen={dropdowns.subscribe}
            onToggle={() => toggleDropdown("subscribe")}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQcard;
