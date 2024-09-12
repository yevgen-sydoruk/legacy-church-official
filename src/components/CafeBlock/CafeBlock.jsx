import React from "react";
import Link from "next/link";

export default function CafeBlock() {
  return (
    <section className="bg-cafe-block-image bg-cover bg-center bg-no-repeat bg-fixed text-white">
      <div className="bg-black-overlay">
        <div className="flex flex-col items-start pb-28 pt-28 px-10 gap-10 font-bold leading-7">
          <h2 className="max-w-[500px] sm:text-7xl text-5xl font-extrabold uppercase">
            Fellowship At Legacy Cafe.
          </h2>
          <hr className="w-full" />
          <p className="max-w-lg">
            Doing life together and sharing a cup of coffee together. We welcome you to join us
            after service at our very own Legacy Cafe!
          </p>
          <p className="max-w-lg">
            Download the{" "}
            <snap>
              <Link
                className="text-[#3498db]"
                href="https://apps.apple.com/us/app/legacy-church-official/id1622867116"
              >
                Legacy Church Official App for Apple,{" "}
              </Link>
            </snap>
            <br></br>
            or
            <br></br>
            <Link
              className="text-[#3498db]"
              href="https://play.google.com/store/apps/details?id=com.subsplashconsulting.s_X2WRGF&hl=en_US"
            >
              Legacy Church Official App for Android,<br></br>{" "}
            </Link>
            MOBILE ORDER AVAILABLE.
          </p>
          <Link
            className="text-start rounded-md border border-[#3498db] py-2 px-4  text-2xl transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-[#3498db] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase"
            href="#"
          >
            Learn more about cafe
          </Link>
        </div>
      </div>
    </section>
  );
}
