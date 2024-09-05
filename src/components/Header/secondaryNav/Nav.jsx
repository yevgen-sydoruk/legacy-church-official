"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import androidLogo from "../../../../assets/legacy-app-google-play-download.svg";
import appleLogo from "../../../../assets/legacy-app-appleStore-download.svg";

const transition = { duration: 0.5, ease: [0.76, 0, 0.24, 1] };

export const height = {
  initial: {
    height: 0
  },

  enter: {
    height: "auto",
    transition
  },

  exit: {
    height: 0,
    transition
  }
};

export default function Index() {
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden "
    >
      <div className="container mx-auto p-5">
        {/* <nav className="grid grid-rows-2 w-full gap-4 uppercase text-base lg:justify-normal justify-between"> */}
        <nav className="grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-4 uppercase text-base ">
          {/* <nav className="grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-4 uppercase text-base lg:justify-normal justify-between"> */}
          <div className="row-span-2 md:order-1 order-1">
            <h3 className="mb-4 text-2xl">About</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="hover:text-[#3498db]" href="/mission-and-vision">
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/what-we-believe">
                  What We Believe
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/our-story">
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/leadership">
                  Leadership
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-span-2 md:order-2 order-4">
            <h3 className="mb-5 text-2xl">Connect</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="hover:text-[#3498db]" href="/legacy-youth">
                  Legacy youth
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/lil-legacy">
                  Lil' Legacy
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/join-a-life-group">
                  Join a life group
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/Volunteer">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/prayer-request">
                  Prayer Request
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/legacy-cafe">
                  Legacy Cafe
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-span-1 md:order-3 order-2">
            <Link
              className="hover:bg-[#3498db] hover:text-gray-50 transition-all p-2 border-2 rounded-lg hover:border-[#3498db] text-balance text-2xl"
              href="/watch"
            >
              Give online
            </Link>
          </div>
          <div className="row-span-1 md:order-5 order-3">
            <h3 className="mb-5 text-2xl">Watch</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="hover:text-[#3498db]" href="/watch">
                  Watch us online
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-span-1 md:order-4 order-5">
            <h3 className="mb-5 text-2xl">I'm New</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="hover:text-[#3498db]" href="/connect-card">
                  Connect Card
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/baptism-signup">
                  Baptism Sign-Up
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-span-1 md:order-6 order-6">
            <h3 className="mb-5 text-2xl">Download Legacy App</h3>
            <ul className="flex flex-col lg:flex-row gap-3">
              <li>
                <Link
                  className="hover:text-[#3498db]"
                  href="https://play.google.com/store/apps/details?id=com.subsplashconsulting.s_X2WRGF&hl=en_US"
                >
                  <Image
                    src={androidLogo}
                    width={200}
                    height={200}
                    quality={10}
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
                    width={200}
                    height={200}
                    alt="Legacy Church App download link for Apple"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <Footer /> */}
      </div>
    </motion.div>
  );
}
