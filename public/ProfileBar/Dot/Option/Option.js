import React from "react";
import styles from "./Option.module.css";

const Option = (props) => {
  return (
    <div
      className={[styles.action, props.isDisabled ? styles.disabled : ""].join(
        " "
      )}
      onClick={() => props.clicked()}
    >
      {props.name}
    </div>
  );
};

export default Option;
