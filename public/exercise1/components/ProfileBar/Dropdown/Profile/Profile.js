import React from "react";
import styles from "./Profile.module.css";

const Profile = (props) => {
  const click = () => {
    props.clicked(props.id);
  };

  return (
    <div
      className={[styles.option, props.selected ? styles.selected : ""].join(
        " "
      )}
      onClick={click}
    >
      {props.name}
    </div>
  );
};

export default Profile;
