import React from "react";
import Link from "next/link";
// volunteer_block_bg.jpeg
import VolunteerBlockBg from "../../../public/volunteer_block_bg.jpeg";

export default function VolunteerBlock() {
  return (
    // <section className="bg-Ukraine-block-image bg-gray-300  bg-blend-darken  bg-cover bg-center bg-no-repeat py-20 px-10 my-20">
    <section
      className="relative w-full h-[700px] my-10 bg-no-repeat bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${VolunteerBlockBg.src})` }}
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-10">
        <div className="container mx-auto text-white flex flex-col justify-center items-center text-center gap-10">
          <h2 className="sm:text-6xl text-5xl font-bold uppercase">WE NEED YOU!</h2>
          <p className="max-w-3xl font-bold">Join a ministry, plug into community.</p>
          <Link
            // className="rounded-md border border-[#3498db] py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-[#3498db] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase"
            className="rounded-md border border-[#3498db] bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase"
            href="volunteer"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

{
  /* <div
          className={`relative lg:w-1/2 h-[500px] bg-cover bg-center bg-no-repeat`}
          style={{ backgroundImage: `url(${volunteerImage1.src})` }}
        ></div> */
}
