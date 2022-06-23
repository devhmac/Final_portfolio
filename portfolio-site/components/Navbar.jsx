import styles from "../styles/Navbar.module.scss";
import homeStyles from "../styles/home.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.app__navbar}>
      <div className={styles["app__navbar-logo"]}>Devin MacGillivray</div>
      <ul>
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
    </nav>
  );
};

export default Navbar;
