import React from "react";
import BannerImage from "../assets/image-product-desktop.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const BoxMiddle = () => {
  return (
    <div className="flex justify-center items-center bg-neutral-100 min-h-screen">
      <div className="mt-60 flex flex-row drop-shadow-md drop-shadow-lg lg:flex-row md:flex-col">
        <div className="image w-60 h-100 ">
          <img
            src={BannerImage}
            alt="Product"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="bg-white p-8 rounded-lg">
          <div className="font-sans-serif text-xs text-slate-500 tracking-[.35em]">
            PERFUME
          </div>
          <div className="font-bold text-3xl pt-4 font-serif ">
            Gabrielle <br />
            Essence Eau
            <br /> De Parfum
          </div>
          <br />
          <div className="text-slate-400 font-sans-serif text-sm">
            A floral, solar and voluptuous
            <br /> interpretation composed by <br />
            Olivier Polge, Perfumer-Creator <br /> for the House of CHANEL.
          </div>
          <br />
          <div className="">
            <span className="text-emerald-800  font-bold text-3xl font-sans-serif">
              $149.99
            </span>
            <span className="line-through text-xs ml-2 text-slate-400 ">
              $169.99
            </span>
            <br />
          </div>
          <div className="pt-6">
            <button className=" bg-emerald-700 w-48 h-10 rounded-lg   text-white">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-4" /> Add to
              Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxMiddle;
