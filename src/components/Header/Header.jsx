"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Logo";
import Nav from "./secondaryNav/Nav";
import { Squash as Hamburger } from "hamburger-react";
import Dropdown from "./Dropdown";
import { aboutLinks, connectLinks, ImNewLinks } from "./lists";
import InstagramIcon from "../../../assets/icons/InstagramIcon.jsx";
import YoutubeIcon from "../../../assets/icons/YoutubeIcon.jsx";
import FacebookIcon from "../../../assets/icons/FacebookIcon.jsx";

export const opacity = {
  initial: {
    opacity: 0
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 }
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 }
  }
};

export const background = {
  initial: {
    height: 0
  },

  open: {
    height: "100vh",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
  },
  closed: {
    height: 0,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
  }
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      setTimeout(() => {
        if (header && header.firstElementChild) {
          header.lastElementChild.classList.toggle("py-2", window.scrollY > 910);
          header.firstElementChild.classList.toggle("hidden", window.scrollY > 910);
          header.classList.toggle("bg-[#3498db]", window.scrollY > 910);
          header.classList.toggle("shadow-[0_6px_8px_-1px_rgba(0,0,0,0.3)]", window.scrollY > 910);
          header.classList.toggle("bg-hero-gradient", window.scrollY <= 910);
        }
      }, 100);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll); // Clean up event listener on unmount
    };
  }, []);

  return (
    <header
      className={`fixed w-full content-center box-border z-50 transition-all duration-500 ${
        isActive ? "bg-black" : "bg-hero-gradient"
      } `}
    >
      <ul className="flex items-center gap-2 p-3 justify-center md:justify-end">
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

      <div className="px-10">
        <div className="container relative flex mx-auto justify-between items-center">
          <Logo address="/" />
          <nav className={"flex gap-4 text-white"}>
            <motion.ul
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
              className={isActive ? "hidden" : "hidden lg:flex items-center gap-4 uppercase"}
            >
              <li>
                <Link className="hover:text-[#3498db]" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Dropdown linksList={aboutLinks} title="About" />
              </li>
              <li>
                <Dropdown linksList={connectLinks} title="Connect" />
              </li>
              <li>
                <Link className="hover:text-[#3498db]" href="/watch">
                  Watch
                </Link>
              </li>

              <li>
                <Link className="hover:text-[#3498db]" href="/give">
                  Give
                </Link>
              </li>
              <li>
                <Dropdown linksList={ImNewLinks} title="I`m New" />
              </li>
            </motion.ul>
            <Hamburger color="white" toggled={isActive} toggle={setIsActive} />
          </nav>
        </div>
        <motion.div
          variants={background}
          initial="initial"
          animate={isActive ? "open" : "closed"}
          className="bg-black opacity-50 h-full w-full absolute left-0 top-full"
        ></motion.div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
    </header>
  );
}
