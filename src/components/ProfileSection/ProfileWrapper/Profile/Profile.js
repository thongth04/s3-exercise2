import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Profile.module.css";
import { toggleActive } from "../../../../store/actions";

const Profile = (props) => {
  const dipatch = useDispatch();
  const handleClick = () => {
    console.log(props.id);
    dipatch(toggleActive(props.id));
  };
  return (
    <div
      className={[
        styles.profile_item,
        props.isActive ? styles.active : "",
        props.type === "default"
          ? styles.default
          : props.type === "game"
          ? styles.game
          : props.type === "movie"
          ? styles.movie
          : props.type === "music"
          ? styles.music
          : styles.custom,
      ].join(" ")}
      onClick={handleClick}
    >
      {props.name}
    </div>
  );
};

export default Profile;
