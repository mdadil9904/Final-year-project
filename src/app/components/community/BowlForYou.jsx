import React from "react";
import BowlCard from "./BowlCard";

// Sample images (replace with actual image paths)
const sampleImage = "https://via.placeholder.com/150";

const bowlsData = [
  {
    image: sampleImage,
    title: "2L",
    subtitle: "Big 4 Discussions!",
    description:
      "Originally this was made for confessions. Now it’s all about Big 4️⃣ (EY, PWC, KPMG & Deloitte) discussions!",
    viewLink: "#",
    followLink: "#",
  },
  {
    image: sampleImage,
    title: "87T",
    subtitle: "HiringInfo",
    description: "Open platform to explore jobs, hiring trends, and more.",
    viewLink: "#",
    followLink: "#",
  },
  {
    image: sampleImage,
    title: "25T",
    subtitle: "Pune Network",
    description:
      "Join virtual and physical meetups with professionals in Pune, India.",
    viewLink: "#",
    followLink: "#",
  },
  {
    image: sampleImage,
    title: "41T",
    subtitle: "Bangalore City",
    description: "Stay connected with local resources, jobs & events.",
    viewLink: "#",
    followLink: "#",
  },
  {
    image: sampleImage,
    title: "32T",
    subtitle: "Management Consulting",
    description:
      "Talks on data strategy, storytelling, GTM, and business frameworks.",
    viewLink: "#",
    followLink: "#",
  },
];

const BowlForYou = () => {
  return (
    <div className="p-4 w-[25rem]">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Bowls™ for you</h2>
      <div className="flex flex-col gap-4">
        {bowlsData.map((bowl, index) => (
          <BowlCard key={index} {...bowl} />
        ))}
      </div>
    </div>
  );
};

export default BowlForYou;
