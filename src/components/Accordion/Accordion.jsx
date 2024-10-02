"use client";
import { useState } from "react";

export default function Accordion({ accordionData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ul className="max-w-2xl mx-auto">
      {accordionData.map((item, index) => (
        <li key={index}>
          <div
            onClick={() => handleToggle(index)}
            className="flex items-center gap-3 px-4 py-3 font-medium cursor-pointer transition-all duration-300"
          >
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                openIndex === index ? "rotate-90" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
            <p className="text-xl font-bold mb-3">{item.question}</p>
          </div>
          <div
            className={`px-4 overflow-hidden transition-[max-height] duration-700 ease-in-out ${
              openIndex === index ? "max-h-80" : "max-h-0"
            }`}
          >
            <p className="pb-4">{item.answer}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
