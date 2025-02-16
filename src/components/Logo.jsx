import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoFullImage from "../../assets/main-full-Logo.png";
import LogoImage from "../../assets/main-Logo.png";

export default function Logo({ address }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const smallScreenThreshold = window.innerHeight; // 50% of screen height
      const scrollThreshold = window.innerWidth < 768 ? smallScreenThreshold : 910;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link href={address}>
        <div className="hidden md:block max-w-[300px]">
          <Image
            src={LogoFullImage}
            width={300}
            height={60}
            alt="Main Legacy Church Logo"
            priority
            className="h-[60px] w-auto object-contain"
          />
        </div>
        <div className="md:hidden max-w-[60px]">
          <Image
            src={LogoImage}
            width={60}
            height={60}
            alt="Main Legacy Church Logo"
            priority
            className="h-[60px] w-auto object-contain"
          />
        </div>
      </Link>
    </motion.div>
  );
}
