import React from "react";

const Filter = () => {
  return (
    <div className="w-full lg:w-1/3 h-full mr-6">
      <div className="bg-white p-5 rounded-[20px] border border-blue-100 ring-2 ring-blue-100 shadow-md hover:ring-blue-300 transition-all duration-300 h-full">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Filter Companies</h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Location</label>
          <input
            type="text"
            className="w-full p-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Select a Location"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Industries</label>
          <input
            type="text"
            className="w-full p-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="E.g. Health Care, Internet, Education"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">Job Title</label>
          <input
            type="text"
            className="w-full p-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Select a Job Title"
          />
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">Job Functions</h3>
          {/* Add Job Function Filters Here */}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">Company Ratings by Category</h3>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2 accent-blue-500" />
            <label className="text-sm text-gray-600">3.5 stars and up</label>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">Global Company Size</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            <label className="inline-flex items-center">
              <input type="radio" name="size" value="1-50" className="accent-blue-500" />
              <span className="ml-2">1 - 50</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="size" value="51-200" className="accent-blue-500" />
              <span className="ml-2">51 - 200</span>
            </label>
          </div>
        </div>

        <button className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 font-semibold text-sm py-2 rounded-full border border-blue-200 transition duration-300 mt-2">
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
