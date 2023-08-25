import React from "react";
import NFTCARDIMA from "../assets/NFTima/image-equilibrium.jpg";
import NFTPROF from "../assets/NFTima/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const nftcards = () => {
  return (
    <div className="justify-center items-center h-screen text-slate-50 bg-slate-900 flex flex-col">
      {/*Image*/}
      <div className="drop-shadow-xl rounded-xl md:w-72 sm:w-full h-82 box-content bg-gradient-to-r from-slate-800 to-slate-800 w-80 p-5 ">
        <img src={NFTCARDIMA} alt="NFT" className="rounded-lg" />
        {/*description*/}
        <div className="">
          <div className="font-medium text-white text-xl py-5">
            Equilibrium #3429
          </div>
          <div className="text-slate-400">
            Our Equilibrium collection promotes balance and calm.
          </div>

          <div className="flex flex-row items-center mt-4 pb-4">
            <div className="flex-grow text-teal-400">0.041 ETH</div>

            <div className="flex-grow flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-1 text-slate-400" />
              <span className="text-slate-400"> 3 days left</span>
            </div>
          </div>
          {/*profile*/}
          <div className="profile">
            <hr
              style={{
                height: "1px",
                backgroundColor: "#ccc",
                border: "none",
                margin: "8px 0",
              }}
            />
            <div className="flex flex-row p-2">
              <img
                src={NFTPROF}
                alt="NFTPROFILE"
                className="w-8 h-8 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 "
              />
              <div className="pt-1 text-base">
                <span className="text-slate-400 ml-4 ">Creation of </span>
                Jules Wyvern
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default nftcards;
