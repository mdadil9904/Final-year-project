import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="p-5 bg-gradient-to-br from-white shadow-lg hover:shadow-2xl transition duration-300 rounded-[20px] mb-5 border border-blue-100 ring-2 ring-blue-100 hover:ring-blue-300 cursor-pointer">
      <div className="flex items-center mb-4">
        <img
          src={job.image}
          alt="company logo"
          className="w-20 h-10 mr-4 object-contain rounded-xl bg-white shadow-sm p-2 border border-gray-200"
        />
        <h3 className="text-xl font-bold text-blue-800">{job.title}</h3>
      </div>

      <p className="text-sm text-blue-500 font-medium mb-1">{job.company}</p>

      {/* Location */}
      <div className="text-sm text-gray-600 flex items-center mb-1">
        <i className="fa-solid fa-location-dot text-blue-400 mr-2"></i>
        <span className="font-medium text-gray-700">Location:</span>&nbsp;{job.location}
      </div>

      {/* Salary */}
      <div className="text-sm text-gray-600 flex items-center mb-3">
        <i className="fa-solid fa-dollar-sign text-green-500 mr-2"></i>
        <span className="font-medium text-gray-700">Salary:</span>&nbsp;{job.salary}
      </div>

      <div className="flex flex-wrap gap-3">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium shadow-sm">
          <i className="fa-solid fa-building mr-1"></i>
          {job.workMode}
        </span>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium shadow-sm">
          <i className="fa-regular fa-clock mr-1"></i>
          {job.type}
        </span>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium shadow-sm">
          <i className="fa-solid fa-briefcase mr-1"></i>
          {job.experience}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
