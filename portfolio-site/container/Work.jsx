import styles from "../styles/Work.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";

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
    const query = '*[_type == "works"] | order(order desc)';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className={styles["head-text"]}>
        My <span>Projects</span>
      </h2>
      <div className={styles["app__work-filter"]}>
        {["Full Stack", "Front End", "React", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
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

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className={`${styles["app__work-hover"]} ${styles["app__flex"]}`}
              >
                {/* If not hosted, wont display proj link */}
                {work.projectLink && (
                  <Link
                    href={work.projectLink}
                    title="To Project Site"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className={styles["app__flex"]}
                    >
                      <AiFillEye />
                    </motion.div>
                  </Link>
                )}

                <Link
                  href={work.codeLink}
                  title="To Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className={styles["app__flex"]}
                  >
                    <AiFillGithub />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            <div
              className={`${styles["app__work-content"]} ${styles["app__flex"]}`}
            >
              <h4 className={styles["bold-text"]}>{work.title}</h4>
              <p className={styles["p-text"]} style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <Link href={work.codeLink}>
                <a className={`${styles["p-text"]} ${styles["see-more-link"]}`}>
                  See More
                </a>
              </Link>
              <div
                className={`${styles["app__work-tag"]} ${styles["app__flex"]}`}
              >
                <p className={styles["p-text"]}>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, "work");
