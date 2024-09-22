import React from "react";

export default function Banner({ heading, text, bannerImage }) {
  return (
    <div
      className={`relative w-full min-h-[320px] bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    >
      <div className="absolute inset-0 bg-blue-500 bg-opacity-30 text-white flex flex-col items-center justify-center gap-8 px-10 text-center">
        <h1 className="md:text-6xl text-4xl font-extrabold uppercase">{heading}</h1>
        <p className="md:text-4xl text-2xl font-light max-w-5xl">{text}</p>
      </div>
    </div>
  );
}
