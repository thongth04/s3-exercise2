import React from "react";
import styles from "./ProfileSection.module.css";
import ProfileWrapper from "./ProfileWrapper/ProfileWrapper";

const ProfileSection = () => {
  return (
    <div className={[styles.thx_drawer, styles.flex].join(" ")}>
      <div className={styles.main_title}>Profile List</div>
      <ProfileWrapper />
    </div>
  );
};

export default ProfileSection;
