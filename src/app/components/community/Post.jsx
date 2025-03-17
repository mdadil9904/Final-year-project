import React from "react";

const Post = ({ profileImage, university, time, content }) => {
  return (
    <div className="bg-white p-6 rounded-[20px] shadow-md border border-blue-100 ring-2 ring-blue-100 hover:ring-blue-300 hover:shadow-xl transition duration-300 min-h-[230px]">
      <div className="flex items-center mb-4">
        <img
          src={profileImage}
          alt={university}
          className="h-12 w-12 object-cover rounded-full mr-4"
        />
        <div>
          <span className="text-blue-800 font-semibold">{university}</span>
          <span className="block text-gray-500 text-sm">{time}</span>
        </div>
      </div>

      <p className="text-gray-700 text-[15px] leading-relaxed mb-4">{content}</p>

      <div className="flex justify-around pt-4 border-t border-gray-200 text-sm text-blue-600">
        <button className="flex items-center gap-2 hover:text-blue-800 transition">
          <span className="material-icons">thumb_up</span> Like
        </button>
        <button className="flex items-center gap-2 hover:text-blue-800 transition">
          <span className="material-icons">comment</span> Comment
        </button>
        <button className="flex items-center gap-2 hover:text-blue-800 transition">
          <span className="material-icons">share</span> Share
        </button>
      </div>
    </div>
  );
};

export default Post;
