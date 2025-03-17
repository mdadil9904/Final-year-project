"use client";
import React, { useState } from "react";

const Filter = () => {
  const [experience, setExperience] = useState(0);
  const [salary, setSalary] = useState(0);

  return (
    <div className="p-6 bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-[20px] border border-blue-100 ring-2 ring-blue-100">
      <h2 className="text-xl font-bold text-blue-800 mb-4 tracking-wide border-b pb-2">
        Filters
      </h2>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Sort By</label>
        <select className="w-full p-2 border-[2px] border-gray-300 rounded-[10px] cursor-pointer hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 transition">
          <option>Relevant</option>
          <option>Salary - High to low</option>
          <option>Date posted - New to Old</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700">
          Experience: <span className="text-blue-600">{experience} yrs</span>
        </label>
        <input
          type="range"
          min="0"
          max="20"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className="w-full accent-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700">
          Salary:{" "}
          <span className="text-blue-600">
            ₹{parseInt(salary).toLocaleString()}
          </span>
        </label>
        <input
          type="range"
          min="0"
          max="150000"
          step="1000"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full accent-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium text-gray-700">
          Date Posted
        </label>
        <div className="flex flex-col space-y-2 text-sm text-gray-600">
          <label className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
            <input
              type="radio"
              name="date_posted"
              className="form-radio text-blue-500"
            />
            <span>Last 24 hours</span>
          </label>
          <label className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
            <input
              type="radio"
              name="date_posted"
              className="form-radio text-blue-500"
            />
            <span>Last 3 days</span>
          </label>
          <label className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer">
            <input
              type="radio"
              name="date_posted"
              className="form-radio text-blue-500"
            />
            <span>Last 7 days</span>
          </label>
        </div>
      </div>

      <button
  onClick={() => {
    setExperience(0);
    setSalary(0);
  }}
  className="mt-4 w-full bg-blue-50 text-blue-700 hover:bg-blue-100 hover:text-blue-900 font-semibold text-sm py-2 rounded-full border border-blue-200 transition duration-300"
>
  Reset Filters
</button>

    </div>
  );
};

export default Filter;
