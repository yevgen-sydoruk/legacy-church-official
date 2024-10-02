import React from "react";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="bg-[#3498db] py-20 px-10">
      <div className="container mx-auto text-white flex flex-col justify-center items-center gap-10">
        <h2 className="sm:text-6xl text-4xl">Welcome</h2>
        <p className="max-w-3xl text-center">
          Legacy Church is a place where people can meet Jesus and engage in life-giving community
          that is made up of people from all walks of life. We believe in creating a space where
          people can have authentic encounters with Christ, discover their gifts, and use them for
          God's glory while also impacting their community.
        </p>
        <Link
          // className="rounded-md border border-[#3498db] py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-[#3498db] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase"
          className="rounded-md border text-[#3498db] bg-white hover:border-white py-2 px-4 text-center text-2xl transition-all shadow-lg hover:shadow-xl hover:text-white hover:bg-[#3498db] border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase"
          href="mission-and-vision"
        >
          Learn More About Our Story
        </Link>
      </div>
    </section>
  );
}
