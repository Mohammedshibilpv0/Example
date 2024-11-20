import React from "react";
import ComputerPic from "../../assets/computer.svg";

const Body = () => {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-7xl mx-auto">
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Transform Your Vision <br />
            <span className="text-blue-500"> <p className="mt-1">Into Reality</p> </span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            AURUMM revolutionizes the way jewellery stores operate, offering
            seamless solutions for gold saving schemes, online sales platforms,
            and inventory management. Streamline operations, increase
            productivity and double your revenue with our longstanding
            cutting-edge solutions! Welcome to a future of innovation,
            efficiency, and brilliance. Welcome to AURUMM.
          </p>
        </div>

        <div className="relative">
          <img
            src={ComputerPic}
            alt="Showcase"
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute top-2 left-2 w-20 h-20 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full blur-xl opacity-50"></div>
          <div className="absolute bottom-2 right-2 w-24 h-24 bg-gradient-to-br from-yellow-300 to-red-400 rounded-full blur-xl opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Body;
