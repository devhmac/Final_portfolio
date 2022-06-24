import styles from "../styles/Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className={`${styles["app__header"]} ${styles["app__flex"]}`}>
      Header
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className={styles["app_header-info"]}
      ></motion.div>
      <div className={styles["app__header-badge"]}>
        <div className={`${styles["badge-cmp"]} ${styles.app__flex}`}></div>
      </div>
    </div>
  );
};

export default Header;
