import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaTwitterSquare,
} from "react-icons/fa";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

const SocialMedia = ({ layout }) => {
  const layoutMap = {
    inline: "app__social-inline",
    global: "app__social-global",
  };

  return (
    <div className={`${styles.app__social} ${styles[layoutMap[layout]]}`}>
      <div>
        <a
          title="To Linkedin"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/devhmac/"
        >
          <FaLinkedin />
        </a>
      </div>

      <div>
        <a
          title="To Github"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/devhmac"
        >
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          title="To Medium"
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@devhmac"
        >
          <FaMedium />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
