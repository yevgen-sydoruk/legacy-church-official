import React from "react";
// import LogoImage from "../../../assets/main-full-Logo.svg";
import LogoImage from "../../../assets/main-full-Logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-lvh flex flex-col bg-hero-image bg-cover bg-center bg-no-repeat bg-fixed justify-center items-center opacity-90">
      <Image src={LogoImage} alt="Main Legacy Church Logo" className="w-9/12 mb-16" />
      <div className="flex md:flex-row flex-col gap-4 text-white">
        <button className="rounded-md border border-[#3498db] bg-[#10364f] py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-[#3498db] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase">
          Watch us online
        </button>
        <button className="rounded-md border border-[#3498db] bg-[#10364f] py-2 px-4 text-center text-2xl transition-all shadow-sm hover:shadow-lg text-white hover:text-white hover:bg-[#3498db] hover:border-[#3498db] focus:text-white focus:bg-[#3278a7] focus:border-[#3278a7] active:border-[#1d4560] active:text-white active:bg-[#1d4560] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none uppercase">
          Watch us online
        </button>
      </div>
    </section>
  );
}
