import React, { useState } from "react";
import Accordian from "./Accordian"; // Make sure the import is consistent
import FAQimg from "../assets/FAQimg/illustration-woman-online-mobile.svg";

const FAQcard = () => {
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (accordionName) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [accordionName]: !prevDropdowns[accordionName],
    }));
  };

  const faqData = [
    {
      title: "How many team members can I invite?",
      description:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      key: "invite",
    },
    {
      title: "Do you provide additional support?",
      description:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      key: "support",
    },
    {
      title: "What is the maximum file upload size?",
      description:
        "No more than 2GB. All files must fit your allotted storage space.",
      key: "Upload",
    },
    {
      title: "How do I reset my password?",
      description:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      key: "password",
    },
    {
      title: "Can I cancel my subscription?",
      description:
        "Yes! Send us a message and we’ll process your request no questions asked.",
      key: "subscribe",
    },
  ];

  return (
    <div className="flex justify-center h-screen items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="mx-auto bg-white sm:max-w-md md:max-w-lg flex justify-between flex flex-row lg:max-w-xl xl:max-w-3xl rounded-2xl shadow-md text-center">
        <div>
          <img src={FAQimg} alt="FAQimg" className="w-96 h-96" />
        </div>
        <div className="drop-down p-12 ">
          {faqData.map((item) => (
            <Accordian
              key={item.key}
              title={item.title.trim()}
              description={item.description.trim()}
              isOpen={dropdowns[item.key]}
              onToggle={() => toggleDropdown(item.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQcard;
