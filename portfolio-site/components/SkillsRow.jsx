import styles from "../styles/SkillsRow.module.scss";

const SkillsRow = () => {
  return (
    <>
      <h2 className={styles["sub-head"]}>Skills and Technology</h2>
      <p className={`${styles["p-text"]} ${styles["studying"]}`}>
        Currently Studying: Google Data Analytics Professional Certificate
      </p>

      <div className={styles["skills-block"]}>
        <div>
          <h3>Languages</h3>
          <ul className={styles["p-text"]}>
            <li>Javascript</li>
            <li>SQL</li>
            <li>R</li>
            <li>Ruby</li>
          </ul>
        </div>
        <div>
          <h3>Front End</h3>
          <ul className={styles["p-text"]}>
            <li>React</li>
            <li>jQuery</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <h3>Back End</h3>
          <ul className={styles["p-text"]}>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Ruby On Rails</li>
          </ul>
        </div>
        <div>
          <h3>Databases</h3>
          <ul className={styles["p-text"]}>
            <li>PostgreSQL</li>
            <li>ERD Design</li>
          </ul>
        </div>
        <div>
          <h3>Data Analysis</h3>
          <ul className={styles["p-text"]}>
            <li>Data scraping & cleaning</li>
            <li>Tableau</li>
            <li>Google Data Studio</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SkillsRow;
