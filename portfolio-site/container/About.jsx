import styles from "../styles/About.module.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import { AppWrap } from "../components/AppWrap";
import SkillsRow from "../components/SkillsRow";

const skillsAnimations = {
  initial: {
    opacity: 0,
  },
  animate: (index) => ({
    opacity: 1,
    transition: { delay: 0.16 * index, ease: "easeIn" },
  }),
  hover: {
    scale: 1.1,
    transition: { duration: 0.5, type: "spring" },
  },
};

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]| order(order desc)';

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
        {/* A committed tech enthusiast developing business intelligence solutions,
        data architecture, and analytics to enable and enhance business
        outcomes. */}
        I'm a coffee nerd with a love for rec basketball and the outdoors. I'm
        also a committed tech enthusiast, motivated by crafting excellent
        end-to-end solutions for products and data. I specialize in full-stack
        software development, data engineering, cloud platform development,
        analytics and reporting.
        <br />
        <br />
        {/* Thrilled by the Intersection of user needs and technology solutions. My
        passion for software development, data analytics & engineering, and my
        Degree in Psychology give me a unique vision when engineering and
        enhancing business intelligence for end users and their goals. */}
        Inspired by harmonizing user needs and technology solutions, I bring a
        distinctive perspective to my passion for software development and data
        engineering by leveraging insights from my background in psychology.
        This blend enables me to engineer tools and insights that resonate
        deeply with end users, aligning seamlessly with their objectives and
        aspirations.
      </p>
      <div className={styles.app__profiles}>
        {abouts.map((about, index) => (
          <motion.div
            variants={skillsAnimations}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover="hover"
            className={styles["app__profile-item"]}
            custom={index}
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
