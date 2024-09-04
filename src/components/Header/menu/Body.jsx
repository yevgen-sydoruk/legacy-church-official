import { motion } from "framer-motion";
import Link from "next/link";
// import styles from "./style2.module.css";

// export const blur = {
//   initial: {
//     filter: "blur(0px)",
//     opacity: 1
//   },
//   open: {
//     filter: "blur(4px)",
//     opacity: 0.6,
//     transition: { duration: 0.3 }
//   },
//   closed: {
//     filter: "blur(0px)",
//     opacity: 1,
//     transition: { duration: 0.3 }
//   }
// };

// export const translate = {
//   initial: {
//     y: "100%",
//     opacity: 0
//   },
//   enter: i => ({
//     y: 0,
//     opacity: 1,
//     transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] }
//   }),
//   exit: i => ({
//     y: "100%",
//     opacity: 0,
//     transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] }
//   })
// };

// export default function Body({ links, selectedLink, setSelectedLink }) {
export default function Body() {
  // const getChars = word => {
  //   let chars = [];
  //   word.split("").forEach((char, i) => {
  //     chars.push(
  //       <motion.span
  //         custom={[i * 0.02, (word.length - i) * 0.01]}
  //         variants={translate}
  //         initial="initial"
  //         animate="enter"
  //         exit="exit"
  //         key={char + i}
  //       >
  //         {char}
  //       </motion.span>
  //     );
  //   });
  //   return chars;
  // };

  return (
    // <div className={styles.body}>
    <div className="">
      <Link href="/about">
        <motion.p>About</motion.p>
      </Link>
      <Link href="/get-involved">
        <motion.p>Get involved</motion.p>
      </Link>
      <Link href="/watch">
        <motion.p>Watch</motion.p>
      </Link>
      <Link href="/give">
        <motion.p>Give</motion.p>
      </Link>
      <Link href="/im-new">
        <motion.p>I`m new</motion.p>
      </Link>
    </div>
  );
}
