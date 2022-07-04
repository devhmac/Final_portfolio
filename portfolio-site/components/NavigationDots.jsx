import styles from "../styles/Home.module.scss";
import Link from "next/link";

const NavigationDots = ({ active }) => {
  return (
    <div className={styles["app__navigation"]}>
      {["home", "about", "work", "articles & Case studies"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className={styles["app__navigation-dot"]}
            style={active === item ? { backgroundColor: "#313bac" } : {}}
          ></a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
