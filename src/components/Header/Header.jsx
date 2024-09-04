"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Logo";
import Nav from "./menu/Nav";
import { Squash as Hamburger } from "hamburger-react";
import Dropdown from "./Dropdown";

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

const aboutLinks = [
  {
    title: "Mission & Vision",
    href: "/mission-and-vision"
  },

  {
    title: "What We Believe",
    href: "/what-we-believe"
  },

  {
    title: "Our Story",
    href: "/our-story"
  },

  {
    title: "Leadership",
    href: "/leadership"
  }
];

const connectLinks = [
  {
    title: "Legacy youth",
    href: "/legacy-youth"
  },

  {
    title: "Lil’ legacy",
    href: "/lil-legacy"
  },

  {
    title: "Join a life group",
    href: "/join-a-life-group"
  },

  {
    title: "Volunteer",
    href: "/Volunteer"
  },
  {
    title: "Prayer Request",
    href: "/prayer-request"
  },
  {
    title: "Legacy Cafe",
    href: "/legacy-cafe"
  }
];
const ImNewLinks = [
  {
    title: "Connect Card",
    href: "/connect-card"
  },

  {
    title: "Baptism Sign-Up",
    href: "/baptism-signup"
  }
];

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      className="  fixed w-full content-center box-border bg-zinc-400
    "
    >
      <div className=" container relative flex mx-auto justify-between items-center p-5">
        <Logo address="/" />
        <nav className="flex gap-4 text-white">
          <motion.ul
            variants={opacity}
            animate={!isActive ? "open" : "closed"}
            className="hidden md:flex items-center gap-4 uppercase"
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
          <Hamburger color="#3498db" toggled={isActive} toggle={setIsActive} />
        </nav>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </header>
  );
}
