import styles from "../styles/Home.module.scss";

const NavigationDots = ({ active }) => {
  return (
    <div className={styles.app__navigaion}>
      {["home", "about", "work", "skills", "contact"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className={styles["app__navigation-dot"]}
          onClick={() => setToggle(false)}
          style={active === item ? { backgroundColor: "#313bac" } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
