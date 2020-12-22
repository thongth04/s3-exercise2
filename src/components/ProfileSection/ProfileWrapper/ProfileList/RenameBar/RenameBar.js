import React from "react";
import styles from "./RenameBar.module.css";
const RenameBar = () => {
  return (
    <input
      className={styles.profile_item}
      placeholder="Enter Profile Name"
      maxLength={25}
    />
  );
};

export default RenameBar;
