import React from "react";
import LogoImage from "../../../assets/main-full-Logo.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-lvh flex flex-col bg-hero-image bg-cover bg-center bg-no-repeat bg-fixed justify-center items-center opacity-90">
      <Image src={LogoImage} alt="Main Legacy Church Logo" className="w-9/12 mb-16" />
      <div className="flex md:flex-row flex-col gap-4 text-white">
        <button className="link-dark-on-image-bg">Watch us online</button>
        <button className="link-dark-on-image-bg">What we believe</button>
      </div>
    </section>
  );
}
