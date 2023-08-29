import React from "react";
import backgroundimg from "../assets/Profilecard/bg-pattern-card.svg";
import profile from "../assets/Profilecard/image-victor.jpg";

const Profile = () => {
  return (
    <div className="flex justify-center items-center bg-teal-300 h-screen">
      <div className="flex items-center justify-between">
        <div className="max-w-sm mx-auto bg-white sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl drop-shadow-2xl rounded-2xl shadow-md text-center">
          <div className="">
            <img
              src={backgroundimg}
              alt="Profile Background"
              className="rounded-lg"
            />
            <img
              src={profile}
              alt="profile"
              className="rounded-full mx-auto -mt-8 "
            />
          </div>
          <h2 className="description text-xl font-semibold py-4">
            Victor Crest <span className="text-slate-400 ml-2">26</span>
          </h2>
          <p className="text-gray-500 py-0 text-slate-400 border-b-2 border-black-200 ">
            London
          </p>
          <div className="flex justify-around py-6 font-semibold">
            <div className="flex flex-col">
              80K <span className="text-slate-400 text-sm">Followers</span>{" "}
            </div>
            <div className="flex flex-col">
              803K <span className="text-slate-400 text-sm">Likes</span>{" "}
            </div>
            <div className="flex flex-col">
              1.4K <span className="text-slate-400 text-sm">Photos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
