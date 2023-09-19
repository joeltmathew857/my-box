import React from "react";
import Sedans from "../assets/Office/icon-sedans.svg";
import Luxury from "../assets/Office/icon-luxury.svg";
import SUVs from "../assets/Office/icon-suvs.svg";

const ColumnCard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center rounded-xl md:w-1/2 lg:w-3/5 h-96 text-white p-4">
        <div className="flex flex-col box-content h-96 w-64 p-4 bg-orange-700">
          <img
            src={Sedans}
            alt="Sedans"
            className="w-14 flex justify-start py-8"
          />
          <p>
            <span className="font-bold text-2xl ">Sedans</span>
            <div className="py-8">
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </div>
          </p>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Learn More
          </button>
        </div>
        <div className="flex flex-col box-content h-96 w-64 p-4 bg-blue-800">
          <img src={SUVs} alt="SUVs" className="w-16 flex justify-start py-8" />
          <p>
            <span className="font-bold text-2xl">SUVs</span>{" "}
            <div className="py-8">
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </div>
          </p>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Learn More
          </button>
        </div>
        <div className="flex flex-col box-content h-96 w-64 p-4  bg-green-600">
          <img
            src={Luxury}
            alt="Luxury"
            className="w-16 flex justify-start py-8"
          />
          <p>
            <span className="font-bold text-2xl"> Luxury Cruise</span>
            <div className="py-8">
              {" "}
              in the best car brands without the bloated prices. Enjoy the
              enhanced comfort of a luxury rental and arrive in style.
            </div>
          </p>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColumnCard;
