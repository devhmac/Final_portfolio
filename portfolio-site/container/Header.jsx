import styles from "../styles/Header.module.scss";
import { motion } from "framer-motion";
import { AppWrap } from "../components/AppWrap";
import SocialMedia from "../components/SocialMedia";

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
        initial={{ opacity: 0 }}
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
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
              A Software Developer building awesome web applications and data
              solutions.
            </p>
            <SocialMedia layout="inline" />
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
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
