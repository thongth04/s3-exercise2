import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProfile,
  moveProfile,
  toggleDelete,
  toggleEdit,
} from "../../../../store/actions";
import styles from "./ToolBar.module.css";

const ToolBar = () => {
  const activeProfile = useSelector((state) => state.data.activeProfile);
  const profileList = useSelector((state) => state.data.profiles);

  const listLength = profileList.length;

  const checkOnTop = () => {
    const currentIndex = profileList.findIndex(
      (profile) => profile.id === activeProfile.id
    );
    return currentIndex === 0 ? true : false;
  };

  const checkAtBottom = () => {
    const currentIndex = profileList.findIndex(
      (profile) => profile.id === activeProfile.id
    );
    return currentIndex === listLength - 1 ? true : false;
  };

  const dispatch = useDispatch();
  const add = () => {
    dispatch(addProfile());
  };

  const edit = () => {
    dispatch(toggleEdit());
  };

  const del = () => {
    dispatch(toggleDelete());
  };
  const down = () => {
    if (checkAtBottom()) {
      console.log("is At Bottom");
    } else dispatch(moveProfile(1));
  };
  const up = () => {
    if (checkOnTop()) {
      console.log("is On Top");
    } else dispatch(moveProfile(-1));
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
          (activeProfile.editable ? styles.show : "")
        }
        onClick={edit}
      />
      <div
        className={
          styles.icon +
          " " +
          styles.delete +
          " " +
          (activeProfile.editable ? styles.show : "")
        }
        onClick={del}
      />
      <div
        className={[
          styles.icon,
          styles.down,
          checkAtBottom() ? styles.disabled : "",
        ].join(" ")}
        onClick={down}
      />
      <div
        className={[
          styles.icon,
          styles.up,
          checkOnTop() ? styles.disabled : "",
        ].join(" ")}
        onClick={up}
      />
    </div>
  );
};

export default ToolBar;
