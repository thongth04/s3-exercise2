import React from "react";
import styles from "./ToolBar.module.css";

const ToolBar = (props) => {
  const add = () => {
    props.add();
  };
  const edit = () => {
    props.edit();
  };
  const del = () => {
    props.del();
  };
  const down = () => {
    props.down();
  };
  const up = () => {
    props.up();
  };
  return (
    <div className={styles.toolbar + " " + styles.flex}>
      <div className={styles.icon + " " + styles.add} onClick={add} />
      <div
        className={
          styles.icon +
          " " +
          styles.edit +
          " " +
          (props.editable ? styles.show : "")
        }
        onClick={edit}
      />
      <div
        className={
          styles.icon +
          " " +
          styles.delete +
          " " +
          (props.editable ? styles.show : "")
        }
        onClick={del}
      />
      <div
        className={[
          styles.icon,
          styles.down,
          props.isAtBottom ? styles.disabled : "",
        ].join(" ")}
        onClick={down}
      />
      <div
        className={[
          styles.icon,
          styles.up,
          props.isOnTop ? styles.disabled : "",
        ].join(" ")}
        onClick={up}
      />
    </div>
  );
};

export default ToolBar;
