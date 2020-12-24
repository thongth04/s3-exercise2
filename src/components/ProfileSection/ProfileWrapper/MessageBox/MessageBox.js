import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandleClickOutside } from "../../../../helpers/utils";
import {
  CLICK_OUTSIDE_DEL,
  delProfile,
  toggleDelete,
} from "../../../../store/actions";
import styles from "./MessageBox.module.css";

const MessageBox = () => {
  const activeProfile = useSelector((state) => state.data.activeProfile);
  const msgBoxState = useSelector((state) => state.toolbar.msgBoxState);

  const dispatch = useDispatch();
  const handleClickOutside = () => {
    dispatch({ type: CLICK_OUTSIDE_DEL });
  };
  const ref = useRef();
  HandleClickOutside(ref, () => handleClickOutside());

  const deleteProfile = () => {
    dispatch(delProfile());
    dispatch(toggleDelete());
  };

  return (
    <div
      className={[
        styles.profile_del,
        styles.alert,
        styles.flex,
        msgBoxState ? styles.show : "",
      ].join(" ")}
      ref={ref}
    >
      <div className={styles.title}>delete eq</div>
      <div className={[styles.body_text, styles.t_center].join(" ")}>
        {activeProfile.name}
      </div>
      <div className={styles.thx_btn} onClick={deleteProfile}>
        delete
      </div>
    </div>
  );
};

export default MessageBox;
