"use client";

import styles from "./style.module.css";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import Nav from "./menu/Nav";

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

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className=" bg-blue-400 fixed w-full box-border p-1">
      <div className=" container mx-auto flex justify-between items-center uppercase relative">
        <Logo address="/" />
        <div className="flex gap-3 text-white">
          <motion.div
            variants={opacity}
            animate={!isActive ? "open" : "closed"}
            className="flex  items-center gap-3"
          >
            <MenuItem title="About" address="/about">
              About
            </MenuItem>
            <MenuItem title="Get Involved" address="/get-involved">
              Get Involved
            </MenuItem>
            <MenuItem title="Watch" address="/watch">
              Watch
            </MenuItem>
            <MenuItem title="Give" address="/give">
              Give
            </MenuItem>
            <MenuItem title="I`m New" address="/im-new">
              I`m New
            </MenuItem>
          </motion.div>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.el}
          >
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            <div className={styles.label}>
              <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>
                Menu
              </motion.p>
              <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
                Close
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
