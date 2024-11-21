import React from "react";

const AboutProduct = ({ cardData, isDetailsLeft }) => {
  return (
    <div
      className={`flex p-6 m-4 border border-gray-200 rounded-lg shadow-lg cursor-pointer transition-transform transform ${
        isDetailsLeft ? "flex-row justify-end" : "flex-row-reverse"
      } 
      md:flex-row md:space-x-6 flex-col-reverse`} // Use 'flex-col-reverse' on mobile and 'flex-row' on larger screens
    >
      {/* First section (details/image) */}
      <div className="flex-1 p-4">
        {isDetailsLeft ? ( 
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-semibold">{cardData.title}</h3>
            <p className="text-lg text-gray-600">{cardData.description}</p>
            <p className="text-md text-gray-500">{cardData.details}</p>
          </div>
        ) : (
          <img
            className="w-64 h-96 rounded-lg ms-52" // Reduced width (w-48) and auto height
            src={cardData.imageUrl}
            alt="card"
          />
        )}
      </div>

      {/* Second section (image/details) */}
      <div className="flex-1 p-4">
        {isDetailsLeft ? (
          <img
            className="w-64 h-96 rounded-lg ms-40" 
            src={cardData.imageUrl}
            alt="card"
          />
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
