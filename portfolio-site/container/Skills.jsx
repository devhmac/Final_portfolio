import styles from "../styles/Skills.module.scss";
import { useState, useEffect } from "react";

import { AppWrap } from "../components/AppWrap";
import { urlFor, client } from "../client";
import { motion } from "framer-motion";

import ReactTooltip from "react-tooltip";

const Skills = () => {
  return (
    <>
      <h2 className={styles["head-text"]}>Skills</h2>

      <div className={styles["a__skills-container"]}>
        <motion.div className={styles["app__skills-list"]}></motion.div>
      </div>
    </>
  );
};

export default Skills;
