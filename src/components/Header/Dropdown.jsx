import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import upChevron from "../../../assets/8541627_chevron_down_icon.svg";

export default function Dropdown({ title, linksList }) {
  const [open, setOpen] = useState(false);
  const toggleOpen = state => {
    setOpen(state);
  };
  return (
    <div>
      <FlyoutLink links={linksList} open={open} toggleOpen={toggleOpen}>
        {title}
        <Image
          src={upChevron}
          alt="chevron"
          className={`w-3 h-3 ease-in duration-100 ${open ? "rotate-180" : ""}`}
        />
      </FlyoutLink>
    </div>
  );
}

const FlyoutLink = ({ children, links, open, toggleOpen }) => {
  const showFlyout = links && open;

  return (
    <div
      onMouseEnter={() => toggleOpen(true)}
      onMouseLeave={() => toggleOpen(false)}
      className="relative w-fit h-fit"
    >
      <p className="relative flex items-center gap-1 hover:text-[#3498db]">{children}</p>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 flex flex-col bg-black rounded-2xl text-white uppercase w-64 p-2 shadow-xl"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
            {links.map((link, index) => {
              const { title, href } = link;
              return (
                <Link
                  className="p-2 m-[3px] rounded-md hover:bg-[#3498db]"
                  key={`l_${index}`}
                  href={href}
                >
                  {title}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
