import React from "react";

const BowlCard = ({
  image,
  title,
  subtitle,
  description,
  viewLink,
  followLink,
}) => {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-md border border-blue-100 ring-2 ring-blue-100 hover:ring-blue-300 hover:shadow-xl transition duration-300 min-h-[230px] mb-5 flex flex-col justify-between">
      
      {/* Header with image and text */}
      <div className="flex items-start mb-4">
        <img
          src={image}
          alt={title}
          className="h-14 w-14 object-cover rounded-full mr-4 border border-gray-200 p-1"
        />
        <div>
          <h3 className="text-lg font-bold text-blue-800 mb-1">{subtitle}</h3>
          <p className="text-[14px] text-gray-600 leading-relaxed max-w-xs">
            {description}
          </p>
        </div>
      </div>

      {/* Footer buttons */}
      <div className="flex justify-end gap-4 mt-auto text-sm font-medium text-blue-700">
        <a
          href={viewLink}
          className="bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full transition"
        >
          View
        </a>
        <a
          href={followLink}
          className="bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full transition"
        >
          Follow
        </a>
      </div>
    </div>
  );
};

export default BowlCard;
