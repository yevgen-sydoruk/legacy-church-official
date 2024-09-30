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

export default function Nav({ onLinkClick }) {
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden h-full text-white"
    >
      <div className="container mx-auto py-5 h-full">
        <nav className="grid grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-4 uppercase text-base">
          <div className="row-span-2 md:order-1 order-1">
            <h3 className="mb-4 text-2xl">About</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="hover:text-[#3498db]" href="/mission" onClick={onLinkClick}>
                  Mission & Vision
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#3498db]"
                  href="/what-we-believe"
                  onClick={onLinkClick}
                >
                  What We Believe
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/our-story" onClick={onLinkClick}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/leadership" onClick={onLinkClick}>
                  Leadership
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-span-2 md:order-2 order-4">
            <h3 className="mb-5 text-2xl">Connect</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="hover:text-[#3498db]" href="/legacy-youth" onClick={onLinkClick}>
                  Legacy youth
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/lil-legacy" onClick={onLinkClick}>
                  Lil' Legacy
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#3498db]"
                  href="/join-a-life-group"
                  onClick={onLinkClick}
                >
                  Join a life group
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/volunteer" onClick={onLinkClick}>
                  Volunteer
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/prayer-request" onClick={onLinkClick}>
                  Prayer Request
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/legacy-cafe" onClick={onLinkClick}>
                  Legacy Cafe
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-span-1 md:order-3 order-2">
            <Link
              className="hover:bg-[#3498db] hover:text-gray-50 transition-all p-2 border-2 rounded-lg hover:border-[#3498db] text-balance text-2xl"
              href="/give"
              onClick={onLinkClick}
            >
              Give online
            </Link>
          </div>
          <div className="row-span-1 md:order-5 order-3">
            <h3 className="mb-5 text-2xl">Watch</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="hover:text-[#3498db]" href="/watch" onClick={onLinkClick}>
                  Watch us online
                </Link>
              </li>
            </ul>
          </div>
          <div className="row-span-1 md:order-4 order-5">
            <h3 className="mb-5 text-2xl">I'm New</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link className="hover:text-[#3498db]" href="/connect-card" onClick={onLinkClick}>
                  Connect Card
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/baptism-signup" onClick={onLinkClick}>
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
                  passHref
                  legacyBehavior
                >
                  <a target="_blank">
                    <Image
                      src={androidLogo}
                      width={200}
                      height={60}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      alt="Legacy Church App download link for Android"
                    />
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#3498db]"
                  href="https://apps.apple.com/us/app/legacy-church-official/id1622867116"
                  passHref
                  legacyBehavior
                >
                  <a target="_blank">
                    <Image
                      src={appleLogo}
                      width={200}
                      height={60}
                      alt="Legacy Church App download link for Apple"
                    />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}
