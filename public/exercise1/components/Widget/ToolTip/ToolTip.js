import React from "react";
import styles from "./ToolTip.module.css";

const ToolTip = () => {
  return (
    <div>
      <div className={styles.help}></div>
      <div className={styles.tip}>
        I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a
        tooltip. I'm just a tooltip.
      </div>
    </div>
  );
};

export default ToolTip;
