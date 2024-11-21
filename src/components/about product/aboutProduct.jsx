import React from "react";

const AboutProduct = ({ cardData, isDetailsLeft }) => {
  return (
    <div
      className={`flex flex-col md:flex-row p-6 m-4 border border-gray-200 rounded-lg shadow-lg cursor-pointer transition-transform transform ${
        isDetailsLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Text Content Section */}
      <div className="flex-1 p-4">
        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold">{cardData.title}</h3>
          <p className="text-lg text-gray-600">{cardData.description}</p>
          <p className="text-md text-gray-500">{cardData.details}</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 p-4">
        <img
          className="w-full md:w-64 h-96 rounded-lg mx-auto"
          src={cardData.imageUrl}
          alt="card"
        />
      </div>
    </div>
  );
};

export default AboutProduct;
