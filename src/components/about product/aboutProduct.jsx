import React, { useState } from "react";

const AboutProduct = ({ cardData }) => {
  const [isDetailsLeft, setIsDetailsLeft] = useState(true); 

  return (
    <div
      className={`flex p-6 m-4 border border-gray-200 rounded-lg shadow-lg cursor-pointer transition-transform transform ${
        isDetailsLeft ? "flex-row" : "flex-row-reverse"
      }`}
      onClick={() => setIsDetailsLeft(!isDetailsLeft)}
    >
      <div className="flex-1 p-4">
        {isDetailsLeft ? (
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">{cardData.title}</h3>
            <p className="text-lg text-gray-600">{cardData.description}</p>
            <p className="text-md text-gray-500">{cardData.details}</p>
          </div>
        ) : (
          <img className="w-full h-auto rounded-lg" src={cardData.imageUrl} alt="card" />
        )}
      </div>
      <div className="flex-1 p-4">
        {isDetailsLeft ? (
          <img className="w-full h-auto rounded-lg" src={cardData.imageUrl} alt="card" />
        ) : (
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">{cardData.title}</h3>
            <p className="text-lg text-gray-600">{cardData.description}</p>
            <p className="text-md text-gray-500">{cardData.details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutProduct;
