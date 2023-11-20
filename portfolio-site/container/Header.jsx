import styles from "../styles/Header.module.scss";
import { motion } from "framer-motion";
import { AppWrap } from "../components/AppWrap";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div
      id={styles.home}
      className={`${styles["app__header"]} ${styles["app__flex"]}`}
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles["app_header-info"]}
      >
        <div className={styles["app__header-badge"]}>
          <div className={`${styles["badge-cmp"]} ${styles.app__flex}`}>
            <div style={{ marginLeft: 20 }}>
              <p className={styles["p-text"]}>Hi, I'm</p>
              <h1 className={styles["head-text"]}>Devin MacGillivray</h1>
            </div>
          </div>
          <div className={`${styles["tag-cmp"]} ${styles.app__flex}`}>
            <p className={styles["p-text"]}>
              Data Engineer and
              <br /> Full-Stack Developer.
            </p>
          </div>
        </div>
        <div className={` ${styles["scroll-indicator-top"]}`}>
          <p>
            More about me
            <span> below</span>
          </p>
          {/* <BsChevronDoubleDown /> */}
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles["app__header-img"]}
      >
        <img src="img/assets/new_me.JPG" alt="profile_bg" />
      </motion.div>
      <div className={` ${styles["scroll-indicator-bottom"]}`}>
        <p>
          More <span> Below</span>
        </p>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
