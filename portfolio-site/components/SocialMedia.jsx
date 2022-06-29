import {
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaTwitterSquare,
} from "react-icons/fa";
import styles from "../styles/Home.module.scss";

const SocialMedia = () => {
  return (
    <div className={styles.app__social}>
      <div>
        <FaLinkedin />
      </div>
      <div>
        <FaGithub />
      </div>
      <div>
        <FaMedium />
      </div>
      <div>
        <FaTwitterSquare />
      </div>
      SocialMedia
    </div>
  );
};

export default SocialMedia;
