import React from "react";
import Link from "next/link";

export default function UkraineRelief() {
  return (
    // <section className="bg-Ukraine-block-image bg-gray-300  bg-blend-darken  bg-cover bg-center bg-no-repeat py-20 px-10 my-20">
    <section className="bg-Ukraine-block-image relative w-full h-[700px] bg-cover bg-no-repeat bg-center bg-fixed my-20 ">
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-10">
        <div className="container mx-auto text-white flex flex-col justify-center items-center text-center gap-10">
          <h2 className="sm:text-6xl text-5xl font-bold uppercase">Partner With US</h2>
          <p className="max-w-3xl font-bold">
            Thank you for supporting us and donate below for Ukraine relief
          </p>
          <Link
            // className="rounded-md border border-[#3498db] py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-[#3498db] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase"
            className="rounded-md border border-[#3498db] bg-[#3498db] py-2 px-4 text-center text-xl transition-all shadow-lg hover:shadow-xl text-white hover:text-white hover:bg-[#10364f] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] uppercase"
            href="#"
          >
            donate now
          </Link>
        </div>
      </div>
    </section>
  );
}
