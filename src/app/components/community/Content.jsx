import React from "react";
import Post from "./Post";

const posts = [
  {
    id: 1,
    content:
      "Hey guys, I interviewed at Oracle and my first 2 round of interview went well...",
    time: "1h",
    university: "Kalinga institute of industrial technology",
  },
  {
    id: 2,
    content:
      "HI Everyone. I hold a Master Degree in Biotech and actively looking for jobs in pharma...",
    time: "4h",
    university: "Krista jayanti college",
  },
];

const Content = () => {
  return (
    <main className="flex-1 px-6 pt-6 space-y-5">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-6 rounded-[20px] shadow-md border border-blue-100 ring-2 ring-blue-100 hover:ring-blue-300 hover:shadow-xl transition duration-300 min-h-[230px]"
        >
          <Post
            content={post.content}
            time={post.time}
            university={post.university}
          />
        </div>
      ))}
    </main>
  );
};

export default Content;
