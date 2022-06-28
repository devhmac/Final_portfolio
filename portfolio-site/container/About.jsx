import styles from "../styles/About.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// change these to change about section, will directly update
const abouts = [
  {
    title: "Customer Relationships",
    description: "I am a dev dev dev",
    imgURL: "img/assets/about01.png",
  },
  {
    title: "Service Innovation",
    description: "I am a dev dev dev",
    imgURL: "img/assets/about02.png",
  },
  {
    title: "Business Operations",
    description: "I am a dev dev dev",
    imgURL: "img/assets/about03.png",
  },
  {
    title: "Full Stack Development",
    description: "I am a dev dev dev",
    imgURL: "img/assets/about04.png",
  },
];

const About = () => {
  const [abouts, setAbouts] = useState([]);
  return (
    <>
      <h2 className={styles["head-text"]}>
        A Public Service Leader with{" "}
        <span>skills in Full Stack Development</span>
      </h2>

      {/* Maps through skills in abouts variable above */}

      <div className={styles.app__profiles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={styles["app__profile-item"]}
            key={about.title + index}
          >
            <img src={about.imgURL} alt={about.title + " IMG"} />
            <h2 className={styles["bold-text"]} style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className={styles["p-text"]} style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
