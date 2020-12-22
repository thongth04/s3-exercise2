import React, { useRef } from "react";
import { HandleClickOutside } from "../../../helpers/utils";
import styles from "./Dot.module.css";
import Option from "./Option/Option";

const Dot = (props) => {
  const dotRef = useRef();
  HandleClickOutside(dotRef, () => {
    props.clickOutside();
  });

  const toggleDot = () => {
    props.toggleDot();
  };
  const addProfile = () => {
    props.addProfile();
  };
  const renameProfile = () => {
    props.renameProfile();
  };
  const duplicateProfile = () => {
    props.duplicateProfile();
  };
  const showDeleteMsg = () => {
    props.showDeleteMsg();
  };

  return (
    <div
      className={[
        styles.flex,
        styles.dots3,
        styles.hover_border,
        props.isActive ? styles.active : "",
      ].join(" ")}
      onClick={toggleDot}
      ref={dotRef}
    >
      <div
        className={[styles.profile_act, props.isActive ? styles.show : ""].join(
          " "
        )}
        id="profileMenu"
      >
        <Option name="add" clicked={addProfile} />
        <Option name="import" clicked={() => console.log("import")} />
        <div className={styles.divider} />
        <Option name="rename" clicked={renameProfile} />
        <Option name="duplicate" clicked={duplicateProfile} />
        <Option name="export" clicked={() => console.log("export")} />
        <div className={styles.divider} />
        <Option
          isDisabled={props.disabledDelAction}
          name="delete"
          clicked={showDeleteMsg}
        />
      </div>
    </div>
  );
};

export default Dot;
