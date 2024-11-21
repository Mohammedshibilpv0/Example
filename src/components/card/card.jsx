import React from "react";

const Card = ({
  imageUrl = "/api/placeholder/100/100",
  title = "Card Title",
  description = "This is a sample description for the card. Replace it with your actual content.",
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300 border border-gray-200 flex flex-col h-full">
      {/* Image container */}
      <div className="mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800 text-left flex-grow">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 text-left mt-2 flex-grow">
        {description}
      </p>
    </div>
  );
};

export default Card;
