import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ProfileWrapper.module.css";
import Profile from "./Profile/Profile";
import RenameBar from "./RenameBar/RenameBar";
import ToolBar from "./ToolBar/ToolBar";
import MessageBox from "./MessageBox/MessageBox";
import profileData from "../../../data/data.json";
import { setData } from "../../../store/actions";

const ProfileWrapper = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let data = localStorage.getItem("profiles");
    data === null
      ? dispatch(setData(profileData))
      : dispatch(setData(JSON.parse(data)));
  }, []);

  const profileList = useSelector((state) => state.data.profiles);
  const activeProfile = useSelector((state) => state.data.activeProfile);

  return (
    <div className={[styles.drawer_select, styles.flex].join(" ")}>
      <div className={[styles.profile_list, styles.scrollable].join(" ")}>
        {profileList.map((profile) => (
          <Profile
            id={profile.id}
            key={profile.id}
            name={profile.name}
            type={profile.type}
            editable={profile.editable}
            isActive={profile.id === activeProfile.id}
          />
        ))}
        <RenameBar />
      </div>
      <ToolBar />
      <MessageBox />
    </div>
  );
};

export default ProfileWrapper;
