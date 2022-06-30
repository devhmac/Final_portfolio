import styles from "../styles/Work.module.scss";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../components/AppWrap";
import { urlFor, client } from "../client";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const handleWorkFilter = (item) => {};

  return (
    <>
      <h2 className={styles["head-text"]}>
        My <span>Work</span>
      </h2>
      <div className={styles["app__work-filter"]}>
        {["Full Stack", "Front End", "React", "All"].map((item, index) => {
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`${styles["app__work-filter-item"]} ${
              styles["app__flex"]
            } ${styles["ap-text"]} ${
              activeFilter === item ? styles["item-active"] : ""
            }`}
          ></div>;
        })}
      </div>
    </>
  );
};

export default Work;
