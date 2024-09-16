import React from "react";
import Link from "next/link";

export default function WatchService() {
  return (
    <section className="py-20 px-10 inset-0 bg-black/20">
      <div className="container mx-auto flex flex-col justify-center items-center gap-10">
        <h2 className="sm:text-6xl text-4xl">Watch Sunday Service Live</h2>
        <p className="max-w-3xl text-center">Can't make our service? Want to watch from home?</p>
        <p className="max-w-3xl text-center">Catch our latest live streams here!</p>
        <Link
          // className="rounded-md border border-[#3498db] py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg hover:text-white hover:bg-[#3498db] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase"
          className="rounded-md border text-[#3498db] bg-white hover:border-white py-2 px-4 text-center text-2xl transition-all shadow-lg hover:shadow-xl hover:text-white hover:bg-[#3498db] border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase"
          href="#"
        >
          Browse Sermons
        </Link>
      </div>
    </section>
  );
}
