import React from "react";

const ProfileBar = ({ user }) => {
  return (
    <div className="hidden xl:block p-6 bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-[20px] border border-gray-200 ring-2 ring-blue-100 hover:ring-blue-300">
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-200 shadow-md hover:shadow-xl transition duration-300"
          />
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
        </div>

        <h3 className="text-lg font-bold text-blue-800 mb-1 tracking-wide">
          {user.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 italic">{user.title}</p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileBar;
