import React from "react";
import QrcodeImage from "../assets/qrcode/image-qr-code.png";

const Qrcode = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-300	">
      <div className="bordered drop-shadow-xl rounded-xl md:w-80 sm:w-full sm:p-4  p-8 bg-white">
        <div className="">
          <img src={QrcodeImage} alt="" className="rounded-lg" />
        </div>
        <div className="py-4 md:py-4">
          <div className="font-bold text-xl md:text-xl">
            Improve your front-end skills by building projects
          </div>
          <div className="py-4 md:py-4 text-slate-400">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qrcode;
