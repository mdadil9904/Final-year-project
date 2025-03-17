import React from "react";
import Link from "next/link";

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white p-6 mt-4 rounded-[20px] shadow-md border border-blue-100 ring-2 ring-blue-100 hover:ring-blue-300 hover:shadow-xl transition duration-300 min-h-[230px] flex flex-col md:flex-row items-start md:items-center">
      
      {/* Company Logo */}
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <img
          src={company.logo}
          alt={company.name}
          className="h-16 w-36 object-contain bg-white p-2 rounded-xl shadow-sm border border-gray-200"
        />
      </div>

      {/* Company Info */}
      <div className="flex-1 pr-4">
        <h3 className="text-xl font-bold text-blue-800">{company.name}</h3>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <span className="mr-2 font-medium">{company.rating}</span>
          <span className="text-green-500">★</span>
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          <span className="font-semibold">Location:</span> {company.location}
        </p>
        <p className="text-gray-600 mt-1 text-sm">
          <span className="font-semibold">Global company size:</span> {company.size}
        </p>
        <p className="text-gray-600 mt-1 text-sm">
          <span className="font-semibold">Industry:</span> {company.industry}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 md:mt-0 md:ml-auto flex flex-col gap-2">
        <Link href={`/Pages/Companies/${company.id}/reviews`}>
          <button className="w-[120px] text-sm text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full font-medium transition text-center">
            {company.reviews} Reviews
          </button>
        </Link>
        <Link href={`/Pages/Companies/${company.id}/salaries`}>
          <button className="w-[120px] text-sm text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full font-medium transition text-center">
            {company.salaries} Salaries
          </button>
        </Link>
        <Link href={`/Pages/Companies/${company.id}/jobs`}>
          <button className="w-[120px] text-sm text-blue-700 bg-blue-100 hover:bg-blue-200 px-4 py-1 rounded-full font-medium transition text-center">
            {company.jobs} Jobs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CompanyCard;
