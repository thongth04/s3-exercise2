import React, { useState } from "react";
import styles from "./ProfileWrapper.module.css";
import Profile from "./Profile/Profile";
import RenameBar from "./RenameBar/RenameBar";
import ToolBar from "./ToolBar/ToolBar";
import MessageBox from "./MessageBox/MessageBox";

const ProfileWrapper = () => {
  const [profileList, setProfileList] = useState([
    { id: 0, name: "Default", type: "default", editable: false },
    { id: 1, name: "Game", type: "game", editable: false },
    { id: 2, name: "Movie", type: "movie", editable: false },
    { id: 3, name: "Music", type: "music", editable: false },
    { id: 4, name: "Custom 1", type: "custom", editable: true },
    {
      id: 5,
      name: "Demo Long Text Demo Long Text Demo",
      type: "custom",
      editable: true,
    },
  ]);
  const [selectedId, setSelectedId] = useState(0);
  const [msgBoxState, setMsgBoxState] = useState(false);
  const [renameBarState, setRenameBarState] = useState(false);
  const [latestId, setLatestId] = useState(5);
  // const [isOnTop, setIsOnTop] = useState(true);
  // const [isAtBottom, setIsAtBottom] = useState(false);

  const handleClickProfile = (id) => {
    console.log("id:" + id);
    setSelectedId(id);
  };

  const getSelectedProfileName = () => {
    const selectedProfile = profileList.find(
      (profile) => profile.id === selectedId
    );
    return selectedProfile.name;
  };

  const renderProfile = () =>
    profileList.map((profile) => (
      <Profile
        id={profile.id}
        key={profile.id}
        name={profile.name}
        type={profile.type}
        isActive={profile.id === selectedId}
        clicked={handleClickProfile}
      />
    ));

  const checkEditable = () => {
    return profileList[selectedId].editable;
  };
  const add = () => {
    console.log("add");
    const newProfile = {
      id: latestId + 1,
      name: "New Profile",
      type: "custom",
      editable: true,
    };
    setProfileList([...profileList, newProfile]);
    setLatestId(latestId + 1);
    setSelectedId(latestId + 1);
  };

  const edit = () => {
    console.log("edit");
    setRenameBarState(true);
  };
  const renameProfile = (e) => {
    const profileIndex = profileList.findIndex((p) => {
      return p.id === selectedId;
    });
    const profile = {
      ...profileList[profileIndex],
    };
    profile.name = e.target.value;

    const newProfileList = [...profileList];
    newProfileList[profileIndex] = profile;
    setProfileList(newProfileList);
  };

  const del = () => {
    console.log("del");
    setMsgBoxState(true);
  };
  const deleteProfile = () => {
    let deletedId;
    const profiles = [...profileList].filter((profile, index) => {
      if (profile.id === selectedId) deletedId = index;
      return profile.id !== selectedId;
    });

    const newSelectedId = selectedId - 1;

    setSelectedId(newSelectedId);
    setProfileList(profiles);
    setMsgBoxState(!msgBoxState);
  };

  const checkOnTop = () => {
    return selectedId === 0 ? true : false;
  };
  const checkAtBottom = () => {
    return selectedId === latestId ? true : false;
  };
  const down = () => {
    if (checkAtBottom()) {
      console.log("is at BOTTOM");
      return;
    }
    console.log("down");
    setSelectedId(selectedId + 1);
  };
  const up = () => {
    if (checkOnTop()) {
      console.log("is on TOP");
      return;
    }
    console.log("up");
    setSelectedId(selectedId - 1);
  };

  return (
    <div className={[styles.drawer_select, styles.flex].join(" ")}>
      <div className={[styles.profile_list, styles.scrollable].join(" ")}>
        {renderProfile()}
        <RenameBar
          isShow={renameBarState}
          clickOutside={() => setRenameBarState(false)}
          value={getSelectedProfileName()}
          onChange={renameProfile}
          selectedProfile={profileList[selectedId - 1]}
        />
      </div>
      <ToolBar
        add={add}
        edit={edit}
        del={del}
        down={down}
        up={up}
        editable={checkEditable()}
        isOnTop={checkOnTop()}
        isAtBottom={checkAtBottom()}
      />
      <MessageBox
        isShow={msgBoxState}
        profileName={getSelectedProfileName()}
        clickOutside={() => setMsgBoxState(false)}
        deleteProfile={deleteProfile}
      />
    </div>
  );
};

export default ProfileWrapper;
