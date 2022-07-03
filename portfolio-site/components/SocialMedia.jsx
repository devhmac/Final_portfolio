import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaTwitterSquare,
} from "react-icons/fa";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className={styles.app__social}>
      <div>
        <a title="To Linkedin" href="https://www.linkedin.com/in/devhmac/">
          <FaLinkedin />
        </a>
      </div>

      <div>
        <a title="To Github" href="https://github.com/devhmac">
          <FaGithub />
        </a>
      </div>
      <div>
        <a title="To Medium" href="https://medium.com/@devhmac">
          <FaMedium />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
