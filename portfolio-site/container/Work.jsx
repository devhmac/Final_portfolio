import styles from "../styles/Work.module.scss";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../components/AppWrap";
import { urlFor, client } from "../client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {};

  return (
    <>
      <h2 className={styles["head-text"]}>
        My <span>Work</span>
      </h2>
      <div className={styles["app__work-filter"]}>
        {["Full Stack", "Front End", "React", "All"].map((item, index) => (
          <div
            key={index}
            onClick={handleWorkFilter(item)}
            className={`${styles["app__work-filter-item"]} ${
              styles["app__flex"]
            } ${styles["p-text"]} ${
              activeFilter === item ? styles["item-active"] : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles["app__work-portfolio"]}
      >
        {filterWork.map((work, index) => (
          <div
            className={`${styles["app__work-item"]} ${styles["app__flex"]}`}
            key={index}
          >
            <div
              className={`${styles["app__work-img"]} ${styles["app__flex"]}`}
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work;
