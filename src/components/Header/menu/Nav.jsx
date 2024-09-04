"use client";
import styles from "./style.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Body from "./Body";
import Footer from "./Footer";
// import Image from "./Image";

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

// const links = [
//   {
//     title: "About",
//     href: "/",
//     src: "home.png"
//   },
//   {
//     title: "Get Involved",
//     href: "/",
//     src: "shop.png"
//   },
//   {
//     title: "Watch",
//     href: "/",
//     src: "home.png"
//   },
//   {
//     title: "Give",
//     href: "/",
//     src: "lookbook.png"
//   },
//   {
//     title: "I`m New",
//     href: "/",
//     src: "contact.png"
//   }
// ];

export default function Index() {
  // const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} /> */}
          <Body />
          {/* <Footer /> */}
        </div>
        {/* <Image src={links[selectedLink.index].src} selectedLink={selectedLink} /> */}
      </div>
    </motion.div>
  );
}
