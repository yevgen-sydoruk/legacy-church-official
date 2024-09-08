import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="container mx-auto flex justify-center pb-28 pt-28 xl:gap-56 lg:gap-36 lg:gap-24 md:gap-22 sm:gap-7">
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-2xl">About</h3>
        <div className="flex flex-col items-center gap-2">
          <Link href="#">What We Believe</Link>
          <Link href="#">Our Story</Link>
          <Link href="#">Meet Our Staff</Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-2xl">Service Times</h3>
        <div className="flex flex-col items-center gap-2">
          <h4>Sunday Service</h4>
          <p className="">9:00 AM</p>
          <h4>Wednesday Youth Service</h4>
          <p>7:00 PM</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-2xl">Support</h3>
        <div className="flex flex-col items-center gap-2">
          <Link href="#">I'm New</Link>
          <Link href="#">Baptism Sign-Up</Link>
          <Link href="#">Prayer Request</Link>
          <Link href="#">Join A Life Group</Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h3 className="text-2xl">Follow Us</h3>
        <div className="flex flex-col items-center gap-2">
          <Link href="#">inst</Link>
          <Link href="#">Face</Link>
          <Link href="#">Youtube</Link>
        </div>
      </div>
    </section>
  );
}
