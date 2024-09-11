"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Logo";
import Nav from "./secondaryNav/Nav";
import { Squash as Hamburger } from "hamburger-react";
import Dropdown from "./Dropdown";
import { aboutLinks, connectLinks, ImNewLinks } from "./lists";

// const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  setTimeout(() => {
    header.firstElementChild.classList.toggle("p-5", window.scrollY <= 910);
    header.firstElementChild.classList.toggle("p-1", window.scrollY > 910);
    header.classList.toggle("bg-[#3498db]", window.scrollY > 910);
    header.classList.toggle("bg-hero-gradient", window.scrollY <= 910);
    // header.classList.toggle("bg-transparent", window.scrollY <= 910);
  }, 100);
});

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

  return (
    <header
      className={`fixed w-full content-center box-border z-50 transition-all duration-500 ${
        isActive ? "bg-black " : "bg-hero-gradient"
      } `}
    >
      <div className="container relative flex mx-auto justify-between items-center p-5">
        <Logo address="/" />
        <nav className={"flex gap-4 text-white"}>
          <motion.ul
            variants={opacity}
            animate={!isActive ? "open" : "closed"}
            className={isActive ? "hidden" : "hidden md:flex items-center gap-4 uppercase"}
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
    </header>
  );
}
