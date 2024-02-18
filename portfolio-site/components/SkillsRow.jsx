import styles from "../styles/SkillsRow.module.scss";

const SkillsRow = () => {
  return (
    <div className={styles["container"]}>
      <h2 className={styles["sub-head"]}>Skills and Technology</h2>
      {/* Add studying here */}
      {/* <p className={`${styles["p-text"]} ${styles["studying"]}`}>
        Currently Studying: Google Data Analytics Professional Certificate
      </p> */}

      <div className={styles["skills-block"]}>
        <div>
          <h3>Languages</h3>
          <ul className={styles["p-text"]}>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
        </div>
        <div>
          <h3>Front End</h3>
          <ul className={styles["p-text"]}>
            <li>React</li>
            <li>NextJS</li>
            <li>HTML</li>
            <li>CSS/SCSS</li>
          </ul>
        </div>
        <div>
          <h3>Back End</h3>
          <ul className={styles["p-text"]}>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>REST API Development</li>
            <li>PostGres, SQLServer & ERD Design</li>
          </ul>
        </div>
        <div>
          <h3>Data & Cloud</h3>
          <ul className={styles["p-text"]}>
            <li>Databricks, Delta Lake & Unity Catalog</li>
            <li>PySpark</li>
            <li>Azure Data Factory & Orchestration</li>
            <li>Azure Cloud Object Storage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsRow;
