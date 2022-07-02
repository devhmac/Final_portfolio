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
        <Link title="To Linkedin" href="https://www.linkedin.com/in/devhmac/">
          <FaLinkedin />
        </Link>
      </div>

      <div>
        <Link title="To Github" href="https://github.com/devhmac">
          <FaGithub />
        </Link>
      </div>
      <div>
        <Link title="To Medium" href="https://medium.com/@devhmac">
          <FaMedium />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
