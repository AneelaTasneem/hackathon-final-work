import React from "react";
import { GrTrophy } from "react-icons/gr";
import { GoVerified } from "react-icons/go";
import { FaPeopleCarry} from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";

const Iconsection = () => {
  // Icon items data
  const items = [
    {
      icon: <GrTrophy size={40} className="mb-4 text-gray-700" />,
      title: "High Quality",
      description: "Crafted from top material.",
    },
    {
      icon: <GoVerified size={40} className="mb-4 text-gray-700" />,
      title: "Warranty Protection",
      description: "Over 2 years.",
    },
    {
      icon: <FaPeopleCarry size={40} className="mb-4 text-gray-700" />,
      title: "Free Shipping",
      description: "Order over $150.",
    },
    {
      icon: <MdOutlineSupportAgent size={40} className="mb-4 text-gray-700" />,
      title: "24/7 Support",
      description: "Dedicated support team.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          {item.icon}
          <h3 className="text-lg font-medium text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Iconsection;
