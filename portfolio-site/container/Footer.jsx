import styles from "../styles/Footer.module.scss";
import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`${styles["app__footer"]} ${styles["footer-text"]}`}>
      <h3>Find Me On:</h3>
      <a
        title="To Linkedin"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/devhmac/"
      >
        <FaLinkedin />
        Linkedin
      </a>
      <a
        title="To Github"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/devhmac"
      >
        <FaGithub /> Github
      </a>
      <a
        title="To Medium"
        target="_blank"
        rel="noreferrer"
        href="https://medium.com/@devhmac"
      >
        <FaMedium /> Medium
      </a>
    </div>
  );
};

export default Footer;
