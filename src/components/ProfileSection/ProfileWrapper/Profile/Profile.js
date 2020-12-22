import React from "react";
import styles from "./Profile.module.css";

const Profile = (props) => {
  const handleClick = () => {
    props.clicked(props.id);
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
