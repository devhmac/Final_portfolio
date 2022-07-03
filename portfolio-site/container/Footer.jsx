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
      <a title="To Linkedin" href="https://www.linkedin.com/in/devhmac/">
        <FaLinkedin />
        Linkedin
      </a>
      <a title="To Github" href="https://github.com/devhmac">
        <FaGithub /> Github
      </a>
      <a title="To Medium" href="https://medium.com/@devhmac">
        <FaMedium /> Medium
      </a>
    </div>
  );
};

export default Footer;
