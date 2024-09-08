import React from "react";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center pb-28 pt-28 gap-10">
      <h2 className="text-[5.6rem]">Welcome</h2>
      <p className="max-w-3xl text-center">
        Legacy Church is a place where people can meet Jesus and engage in life-giving community
        that is made up of people from all walks of life. We believe in creating a space where
        people can have authentic encounters with Christ, discover their gifts, and use them for
        God's glory while also impacting their community.
      </p>
      <Link
        className="rounded-md border border-[#3498db] py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg text-black hover:text-white hover:bg-[#3498db] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase"
        href="#"
      >
        Learn more
      </Link>
    </div>
  );
}
