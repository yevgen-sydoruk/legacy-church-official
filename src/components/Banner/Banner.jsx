import React from "react";
import Link from "next/link";

export default function Banner({ heading, text }) {
  return (
    <div className="relative w-full min-h-[320px] bg-mission-banner bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-blue-500 bg-opacity-30 text-white flex flex-col items-center justify-center gap-8 px-10 text-center">
        <h1 className="sm:text-6xl text-4xl font-extrabold">{heading}</h1>
        <p className="sm:text-5xl text-3xl font-light">{text}</p>
      </div>
    </div>
  );
}
