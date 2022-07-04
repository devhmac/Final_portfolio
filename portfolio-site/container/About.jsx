import styles from "../styles/About.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import { AppWrap } from "../components/AppWrap";
import SkillsRow from "../components/SkillsRow";

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
        More about <span>Me</span>
      </h2>

      {/* Maps through skills in abouts variable above */}

      <p className={`${styles["p-text"]} ${styles["head-body"]} `}>
        A committed public service leader, and tech enthusiast. Passionate about
        pursuing customer experience and service delivery innovation through
        digital transformation, data-driven process development, and a
        relentless customer focus.
        <br />
        <br />
        Intersecting leadership, a degree in psychology, and technical skills,
        to provide unique insights and solutions.
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
      <SkillsRow />
    </>
  );
};

export default AppWrap(About, "about");
