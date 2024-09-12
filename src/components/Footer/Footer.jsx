import React from "react";
import Link from "next/link";
import Image from "next/image";
import androidLogo from "../../../assets/legacy-app-google-play-download.svg";
import appleLogo from "../../../assets/legacy-app-appleStore-download.svg";
import InstagramIcon from "../../../assets/icons/InstagramIcon.jsx";
import YoutubeIcon from "../../../assets/icons/YoutubeIcon.jsx";
import FacebookIcon from "../../../assets/icons/FacebookIcon.jsx";

export default function Footer() {
  return (
    // <section className="container mx-auto flex justify-center text-center py-28 px-5 xl:gap-56 lg:gap-36 md:gap-22 sm:gap-7">
    <section className="bg-[#3498db] py-10 px-5">
      <div className="container mx-auto grid md:grid-cols-4 grid-cols-2 gap-5 text-white text-center">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-2xl">About</h3>
          <ul className="flex flex-col items-center gap-2">
            <li>
              <Link className="link-decoration-underline" href="#">
                What We Believe
              </Link>
            </li>
            <li>
              <Link className="link-decoration-underline" href="#">
                Our Story
              </Link>
            </li>
            <li>
              <Link className="link-decoration-underline" href="#">
                Meet Our Staff
              </Link>
            </li>
          </ul>
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
          <ul className="flex flex-col items-center gap-2">
            <li>
              <Link className="link-decoration-underline" href="#">
                I'm New
              </Link>
            </li>
            <li>
              <Link className="link-decoration-underline" href="#">
                Baptism Sign-Up
              </Link>
            </li>
            <li>
              <Link className="link-decoration-underline" href="#">
                Prayer Request
              </Link>
            </li>
            <li>
              <Link className="link-decoration-underline" href="#">
                Join A Life Group
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-2xl">Follow Us</h3>
          <ul className="flex items-center gap-2">
            <li>
              <Link className="" href="https://www.instagram.com/legacychurchofficial/">
                <InstagramIcon styles="fill-white hover:fill-cyan-700" />
              </Link>
            </li>
            <li>
              <Link className="" href="https://www.facebook.com/legacychurchofficial">
                <FacebookIcon styles="fill-white hover:fill-cyan-700" />
              </Link>
            </li>
            <li>
              <Link className="" href="https://www.youtube.com/channel/UC93pSS2r4KNRLDelYoXbtbA">
                <YoutubeIcon styles="fill-white hover:fill-cyan-700" />
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row gap-3">
            <li>
              <Link
                className="hover:text-[#3498db]"
                href="https://play.google.com/store/apps/details?id=com.subsplashconsulting.s_X2WRGF&hl=en_US"
              >
                <Image
                  src={androidLogo}
                  width={145}
                  height={45}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  alt="Legacy Church App download link for Android"
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-[#3498db]"
                href="https://apps.apple.com/us/app/legacy-church-official/id1622867116"
              >
                <Image
                  src={appleLogo}
                  width={145}
                  height={45}
                  alt="Legacy Church App download link for Apple"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
