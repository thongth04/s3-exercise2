import React, { useRef } from "react";
import { HandleClickOutside } from "../../../../helpers/utils";
import styles from "./MessageBox.module.css";

const MessageBox = (props) => {
  const ref = useRef();

  HandleClickOutside(ref, () => props.clickOutside());

  const deleteProfile = () => {
    props.deleteProfile();
  };

  return (
    <div
      className={[
        styles.profile_del,
        styles.alert,
        styles.flex,
        props.isShow ? styles.show : "",
      ].join(" ")}
      ref={ref}
    >
      <div className={styles.title}>delete eq</div>
      <div className={[styles.body_text, styles.t_center].join(" ")}>
        {props.profileName}
      </div>
      <div className={styles.thx_btn} onClick={deleteProfile}>
        delete
      </div>
    </div>
  );
};

export default MessageBox;
