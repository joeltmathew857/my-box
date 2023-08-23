import React from "react";
import BannerImage from "../assets/image-product-desktop.jpg";
import BannerImages from "../assets/image-product-mobile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const BoxMiddle = () => {
  return (
    <div className="flex justify-center items-center p-8 bg-neutral-100 min-h-screen">
      <div className="flex flex-col lg:flex-row rounded-lg bg-white shadow-lg">
        <div className="image-container relative">
          {/* Desktop Image */}
          <img
            src={BannerImage}
            alt="Product"
            className="hidden lg:block w-full h-full rounded-lg"
          />
          {/* Mobile Image */}
          <img
            src={BannerImages}
            alt="Product"
            className="block lg:hidden w-full h-auto rounded-lg"
          />
        </div>
        <div className="container bg-white p-8 flex flex-col justify-center">
          <div className="font-sans text-xs text-slate-500 tracking-[.35em]">
            PERFUME
          </div>
          <div className="font-bold text-3xl pt-4 font-serif">
            Gabrielle Essence Eau De Parfum
          </div>
          <div className="text-slate-400 font-sans text-sm">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="mt-auto">
            <div className="flex items-center">
              <span className="text-emerald-800 font-bold text-3xl font-sans">
                $149.99
              </span>
              <span className="line-through text-xs ml-2 text-slate-400">
                $169.99
              </span>
            </div>
            <div className="pt-6">
              <button className="bg-emerald-700 w-full  sm:w-48 h-10 rounded-lg text-white">
                <FontAwesomeIcon icon={faShoppingCart} className="mr-4" /> Add
                to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxMiddle;
