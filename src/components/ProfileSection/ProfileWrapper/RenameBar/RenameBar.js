import React, { useRef } from "react";
import { HandleClickOutside } from "../../../../helpers/utils";
import styles from "./RenameBar.module.css";

const RenameBar = (props) => {
  const ref = useRef();
  HandleClickOutside(ref, () => props.clickOutside());
  return (
    <input
      className={styles.profile_item + " " + (props.isShow ? styles.show : "")}
      placeholder="Enter Profile Name"
      maxLength={25}
      // style={{ top: (props.selectedProfile.id - 1) * 30 + "px" }}
      value={props.value}
      onChange={(e) => props.onChange(e)}
      ref={ref}
    />
  );
};

export default RenameBar;
