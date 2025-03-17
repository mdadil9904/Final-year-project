import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white shadow-lg ring-2 ring-blue-200 hover:ring-blue-300 transition rounded-[20px] flex w-full max-w-2xl overflow-hidden">
        
        <input
          type="text"
          className="w-full px-4 py-3 text-gray-800 focus:outline-none bg-transparent"
          placeholder="Job title, keywords, or company"
        />
        
        <input
          type="text"
          className="w-full px-4 py-3 text-gray-800 focus:outline-none border-l border-gray-200 bg-transparent"
          placeholder="Bhubaneshwar, Orissa"
        />
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium transition">
          Find Jobs
        </button>

      </div>
    </div>
  );
};

export default Search;
