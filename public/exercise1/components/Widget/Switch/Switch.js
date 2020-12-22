import React from "react";
import styles from "./Switch.module.css";

const Switch = (props) => {
  const click = () => {
    props.onClick();
  };
  return (
    <div
      className={[
        styles.switch,
        styles.switch_slider,
        props.isOn ? styles.on : "",
      ].join(" ")}
      onClick={click}
    >
      <div className={styles.handle} />
    </div>
  );
};

export default Switch;
