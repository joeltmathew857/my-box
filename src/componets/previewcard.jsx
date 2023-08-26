import React from "react";
import OfficeImage from "../assets/Office/image-header-mobile.jpg";

const previewcard = () => {
  return (
    <div className="justify-center items-center h-screen flex bg-slate-950 flex-row">
      <div className="description rounded-lg xs:w-72 md:w-96 bg-slate-800 p-8 text text-white">
        <div className="text-4xl font-bold flex justify-center py-4">
          Get <span className="text-violet-500">insights</span> that help your
          business grow.
        </div>
        <div className="text-lg text-slate-400">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </div>
        <div className="flex flex-row justify-around py-8">
          <div className="text-2xl font-bold flex-col">
            10k+ <div className="text-xl font-normal">companies</div>
          </div>
          <div className="text-2xl font-bold flex-col">
            314 <div className="text-xl font-normal">templates</div>
          </div>
          <div className="text-2xl font-bold flex-col">
            12m+ <div className="text-xl font-normal">queries</div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={OfficeImage} alt="OfficeImage" className="" />
      </div>
    </div>
  );
};

export default previewcard;
