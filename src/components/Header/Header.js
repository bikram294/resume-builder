import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          <span>Resume Generator</span><br/>
          Make a Resume that stands out!
        </p>
        <p className={styles.heading}>
          Just feed your data and get your <span>Resume</span> in no time.
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      
    </div>
  );
}

export default Header;
