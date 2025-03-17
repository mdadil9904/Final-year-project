import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white p-6 rounded-[20px] shadow-md border border-blue-100 ring-2 ring-blue-100 hover:ring-blue-300 hover:shadow-xl transition duration-300 w-full lg:w-64 mb-5">
      <div className="mb-6">
        <button className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-lg font-semibold transition">
          Post
        </button>
      </div>

      <nav>
        <h2 className="text-blue-800 font-bold mb-4">My Bowls</h2>
        <ul>
          <li className="mb-3">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              Career Advice for Students in India
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
