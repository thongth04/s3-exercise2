import React from "react";
import styles from "./ContentSection.module.css";

const ContentSection = (props) => {
  return (
    <div className={styles.thx_window}>
      <div className={[styles.sub_title, styles.flex].join(" ")}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default ContentSection;
