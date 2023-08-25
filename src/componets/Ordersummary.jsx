import React from "react";
import MusicPlayGirl from "../assets/NFTima/illustration-hero.svg";
import Musicicon from "../assets/NFTima/icon-music.svg";
import SumImage from "../assets/NFTima/pattern-background-desktop.svg";

const Ordersummary = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${SumImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    /* Image */
    <div style={backgroundImageStyle}>
      <div className="justify-center items-center h-screen flex flex-col ">
        <div className=" sm:w-48 md:w-96 rounded-2xl  bg-white">
          <div className="">
            <img
              src={MusicPlayGirl}
              alt="MusicPlayGirl"
              className="rounded-xl"
            />
          </div>
          <div className="p-8">
            <div className="font-medium text-3xl py-3 ml-10 ">
              Order Summary
            </div>
            <div className="text-slate-500">
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device <div className="pl-20">anywhere you like!</div>
            </div>
            {/* icon */}
            <div className="flex flex-row py-4">
              <div className="flex items-center h-62 w-64 p-4 bg-purple-50 rounded-xl">
                <img src={Musicicon} alt="Musicicon" className="mr-2" />
                <div className="flex flex-col">
                  <div className="font-bold">Annual Plan</div>
                  <div className="text-slate-500">$59.99/year</div>
                </div>
                <button className="ml-auto underline hover:underline-offset-4 text-blue-700 font-bold text-sm">
                  Change
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-4 py-4">
              <button
                type="button"
                className="text-white bg-indigo-700 hover:bg-[#3b5998]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Proceed to Payment
              </button>
              <button className="text-slate-500 font-semibold">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ordersummary;
