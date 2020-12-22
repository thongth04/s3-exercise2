import React from "react";
import styles from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div
      className={[
        styles.profile_item,
        props.isActive ? styles.active : "",
        props.type ? styles.props.type : "",
        props.isEditable ? "" : styles.no_edit,
      ].join(" ")}
    >
      {props.name}
    </div>
  );
};

export default Profile;
