import React from "react";
import LogoImage from "../../../assets/main-full-Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-lvh flex flex-col bg-hero-image bg-cover bg-center bg-no-repeat bg-fixed justify-center items-center opacity-90">
      <Image src={LogoImage} alt="Main Legacy Church Logo" className="w-9/12 mb-16" />
      <div className="flex md:flex-row flex-col gap-4 text-white">
        <Link href="#watchService" className="link-dark-on-image-bg">
          Watch us online
        </Link>
        <Link href="what-we-believe" className="link-dark-on-image-bg">
          What we believe
        </Link>
      </div>
    </section>
  );
}
