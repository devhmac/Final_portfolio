import styles from "../styles/About.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { urlFor, client } from "../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className={styles["head-text"]}>
        A Public Service Leader with skills in{" "}
        <span>Full Stack Development</span>
      </h2>

      {/* Maps through skills in abouts variable above */}

      <p className={`${styles["p-text"]} ${styles["head-body"]} `}>
        Excited by the Intersection of customer need and technology solutions.
        My passion for software development, customer relationship expertise,
        and Degree in Psychology, give me a unique vision when building service
        delivery processes and systems with modern strategies and technologies.
      </p>
      <div className={styles.app__profiles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={styles["app__profile-item"]}
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title + " IMG"} />
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
