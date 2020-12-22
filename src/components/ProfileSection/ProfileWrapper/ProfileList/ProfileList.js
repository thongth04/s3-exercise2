import React, { useState } from "react";
import styles from "./ProfileList.module.css";
import RenameBar from "./RenameBar/RenameBar";

const ProfileList = () => {
  const [profileList, setProfileList] = useState([
    { id: 1, name: "default", type: "defaul", editable: false },
    { id: 2, name: "game", type: "game", editable: false },
    { id: 3, name: "movie", type: "movie", editable: false },
    { id: 4, name: "music", type: "music", editable: false },
    { id: 5, name: "custom 1", type: "custom", editable: true },
    {
      id: 6,
      name: "demo long text demo long text demo",
      type: "custom",
      editable: true,
    },
  ]);

  const renderProfile = () => {};
  return (
    <div className={[styles.profile_list, styles.scrollable].join(" ")}>
      {renderProfile()}
      <RenameBar />
    </div>
  );
};

export default ProfileList;
