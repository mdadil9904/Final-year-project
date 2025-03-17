import React from "react";

const JobSearch = () => {
  return (
    <div className="flex justify-center items-center px-4 py-6">
      <div className="w-full max-w-6xl bg-gradient-to-br from-white to-blue-50 shadow-md ring-2 ring-blue-200 rounded-[20px] p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Job title, Company"
            className="w-full px-4 py-3 rounded-[14px] border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-500 text-gray-800 transition"
          />
          <input
            type="text"
            placeholder="Location (e.g. Delhi, Pune)"
            className="w-full px-4 py-3 rounded-[14px] border border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-500 text-gray-800 transition"
          />
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-[14px] transition duration-300 shadow-md">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
