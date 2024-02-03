import SocialMedia from "../components/SocialMedia";
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
      <SocialMedia layout="inline" />
    </div>
  );
};

export default Footer;
