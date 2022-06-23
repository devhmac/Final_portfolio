import styles from "../styles/Navbar.module.scss";
import homeStyles from "../styles/home.module.scss";
import Link from "next/link";

import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className={styles.app__navbar}>
      <div className={styles["app__navbar-logo"]}>
        <Link href="/">Devin MacGillivray</Link>
      </div>
      <ul className={styles["app__navbar-links"]}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className={`${homeStyles["app__flex"]} ${homeStyles["p-text"]}`}
            key={`link-${item}`}
          >
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className={styles["app__navbar-menu"]}></div>
    </nav>
  );
};

export default Navbar;
