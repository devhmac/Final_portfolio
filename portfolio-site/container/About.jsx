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
        About <span>Me</span>
      </h2>

      {/* Maps through skills in abouts variable above */}

      <p className={`${styles["p-text"]} ${styles["head-body"]} `}>
        A committed tech enthusiast developing business intelligence solutions,
        data architecture, and analytics to enable and enhance business
        outcomes.
        <br />
        <br />
        Thrilled by the Intersection of user needs and technology solutions. My
        passion for software development, data analytics & engineering, and my
        Degree in Psychology give me a unique vision when engineering and
        enhancing business intelligence for end users and their goals.
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
