import React, { useRef } from "react";
import { HandleClickOutside } from "../../../helpers/utils";
import styles from "./DeleteAlert.module.css";

const DeleteAlert = (props) => {
  const confirmDelete = () => {
    props.confirmDelete();
  };

  const deleteMsgRef = useRef();
  HandleClickOutside(deleteMsgRef, () => {
    props.clickOutside();
  });

  return (
    <div
      className={[
        styles.flex,
        styles.alert,
        styles.profile_del,
        props.show ? styles.show : "",
      ].join(" ")}
      ref={deleteMsgRef}
    >
      <div className={styles.title}>delete profile</div>
      <div className={[styles.body_text, styles.t_center].join(" ")}>
        You're about to delete this profile. All bindings in this profile will
        be deleted.
      </div>
      <div className={styles.thx_btn} onClick={confirmDelete}>
        delete
      </div>
    </div>
  );
};

export default DeleteAlert;
