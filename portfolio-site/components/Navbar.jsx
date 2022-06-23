import styles from "../styles/Navbar.module.scss";
import Link from "next/link";

import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleOnClick = (e) => {
    e.stopPropagation();
    setToggle((prevState) => !prevState);
  };

  return (
    <nav className={styles.app__navbar}>
      <div className={styles["app__navbar-logo"]}>
        <Link href="/">Devin MacGillivray</Link>
      </div>
      <ul className={styles["app__navbar-links"]}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className={`${styles["app__flex"]} ${styles["p-text"]}`}
            key={`link-${item}`}
          >
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className={styles["app__navbar-menu"]}>
        {!toggle && <HiMenuAlt4 onClick={handleOnClick} />}

        {toggle && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 70 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <motion.span onClick={handleOnClick} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
