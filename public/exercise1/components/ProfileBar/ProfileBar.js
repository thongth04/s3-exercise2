import React from "react";
import Dropdown from "./Dropdown/Dropdown";
import styles from "./ProfileBar.module.css";

const ProfileBar = () => {
  return (
    <div className={[styles.profile_bar, styles.flex].join(" ")}>
      <div className={styles.loader} tooltip="Syncing Profiles" />
      <div>profile</div>
      <Dropdown />
      <div
        className={[styles.float, styles.obm, styles.hover_border].join(" ")}
        tooltip="On-board Profiles"
      />
      <div className={styles.divider} />
      <div
        className={[styles.float, styles.batt, styles.batt_30].join(" ")}
        tooltip="30% Battery"
      />
    </div>
  );
};

export default ProfileBar;
