import React from "react";
import ToolTip from "./ToolTip/ToolTip";
import styles from "./Widget.module.css";

const Widget = (props) => {
  return (
    <div className={styles.widget}>
      <ToolTip />
      {props.children}
    </div>
  );
};

export default Widget;
