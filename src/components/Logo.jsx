import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoFullImage from "../../assets/main-full-Logo.png";
import LogoImage from "../../assets/main-Logo.png";

export default function Logo({ address }) {
  return (
    <Link href={address}>
      <div className="hidden md:block ">
        <Image src={LogoFullImage} width={300} height={300} alt="Main Legacy Church Logo" />
      </div>
      <div className="md:hidden">
        <Image src={LogoImage} width={60} height={60} alt="Main Legacy Church Logo" />
      </div>
    </Link>
  );
}
