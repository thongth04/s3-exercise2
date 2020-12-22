import React, { useRef } from "react";
import { HandleClickOutside } from "../../../helpers/utils";
import styles from "./RenameBar.module.css";

const RenameBar = (props) => {
  const ref = useRef();
  HandleClickOutside(ref, () => props.clickOutside());
  return (
    <input
      type="text"
      name="profile"
      maxLength={25}
      value={props.value}
      className={[styles.profile_edit, props.isShow ? styles.show : ""].join(
        " "
      )}
      onChange={(e) => props.onChange(e)}
      ref={ref}
    />
  );
};

export default RenameBar;
