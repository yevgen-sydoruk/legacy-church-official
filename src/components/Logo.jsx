import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoImage from "../../assets/main-Logo.png";

export default function Logo({ address }) {
  return (
    <Link href={address}>
      <Image
        className="object-fill"
        src={LogoImage}
        width={83}
        height={83}
        alt="Main Legacy Church Logo"
      />
    </Link>
  );
}

// object-contain	object-fit: contain;
// object-cover	object-fit: cover;
// object-fill	object-fit: fill;
// object-none	object-fit: none;
// object-scale-down
