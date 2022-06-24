import styles from "../styles/Header.module.scss";
import { motion } from "framer-motion";

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
            <p className={styles["p-text"]}>Leadership</p>
            <p className={styles["p-text"]}>Customer Experience</p>
            <p className={styles["p-text"]}>Service Design</p>
            <p className={styles["p-text"]}>Digital Transformation</p>
            <p className={styles["p-text"]}>Full Stack Development</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles["app_header-img"]}
      >
        <img src="img/assets/me-nobg.png" alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className={styles["overlay_circle"]}
          src="/img/assets/circle.svg"
          alt="profile_circle"
        />
      </motion.div>
      {/* dont Think I actually want these */}
      {/* <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className={styles["app__header-circles"]}
      ></motion.div> */}
    </div>
  );
};

export default Header;
