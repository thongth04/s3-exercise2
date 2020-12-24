import React from "react";
import { useSelector } from "react-redux";
import styles from "./ContentSection.module.css";

const ContentSection = () => {
  const activeProfile = useSelector((state) => state.data.activeProfile);
  return (
    <div className={styles.thx_window}>
      <div className={[styles.sub_title, styles.flex].join(" ")}>
        <h1>{activeProfile.name}</h1>
      </div>
    </div>
  );
};

export default ContentSection;
