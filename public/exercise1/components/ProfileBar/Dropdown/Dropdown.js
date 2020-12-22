import React, { useRef, useState } from "react";
import styles from "./Dropdown.module.css";
import DeleteAlert from "../DeleteAlert/DeleteAlert";
import Profile from "./Profile/Profile";
import Dot from "../Dot/Dot";
import RenameBar from "../RenameBar/RenameBar";
import { HandleClickOutside } from "../../../helpers/utils";

const Dropdown = () => {
  const [status, setStatus] = useState(false);
  const [profileList, setProfileList] = useState([
    { id: 1, name: "Default Profile" },
    { id: 2, name: "Profile 2" },
    { id: 3, name: "Profile 3" },
    { id: 4, name: "Profile 4" },
    { id: 5, name: "Profile 5" },
    { id: 6, name: "Profile 6" },
    { id: 7, name: "Profile 7" },
    { id: 8, name: "Profile 8" },
  ]);
  const [selectedProfileId, setSelectedProfileId] = useState(5);
  const [latestId, setLatestId] = useState(8);
  const [newProfileIndex, setNewProfileIndex] = useState(0);
  const [duplicateProIndex, setDuplicateProIndex] = useState(1);

  const [dotState, setDotState] = useState(false);
  const [renameBarState, setRenameBarState] = useState(false);
  const [deleteMsgState, setDeleteMsgState] = useState(false);

  const toggleDropdown = () => {
    if (checkProfileListLengthMin()) {
      console.log("there's only one profile");
      return;
    }
    setStatus(!status);
    if (dotState) setDotState(!dotState);
  };

  const handleClickProfile = (id) => {
    console.log("id:" + id);
    setSelectedProfileId(id);
    setDuplicateProIndex(1);
  };

  const renderProfile = () =>
    profileList.map((profile) => (
      <Profile
        id={profile.id}
        name={profile.name}
        key={profile.id}
        selected={profile.id === selectedProfileId}
        clicked={handleClickProfile}
      />
    ));

  const getNameSelectedProfile = () => {
    const selectedProfile = profileList.find(
      (profile) => profile.id === selectedProfileId
    );
    return selectedProfile.name;
  };

  const toggleDot = () => {
    setDotState(!dotState);
    if (status) setStatus(!status);
  };

  const addProfile = () => {
    const newProfileName = "New Profile";
    const newProfile = {
      id: latestId + 1,
      name:
        newProfileIndex === 0
          ? newProfileName
          : newProfileName + " (" + newProfileIndex + ")",
    };
    setNewProfileIndex(newProfileIndex + 1);
    setProfileList([...profileList, newProfile]);
    setSelectedProfileId(newProfile.id);
    setLatestId(latestId + 1);
  };

  const showDeleteMsg = () => {
    if (checkProfileListLengthMin()) {
      console.log("cannot delete the profile!!!");
      return;
    }
    setDeleteMsgState(!deleteMsgState);
  };

  const deleteProfile = () => {
    let deletedProfileIndex;
    const profiles = [...profileList].filter((profile, index) => {
      if (profile.id === selectedProfileId) deletedProfileIndex = index;
      return profile.id !== selectedProfileId;
    });

    const newSelectedProfileId = profiles[deletedProfileIndex]
      ? profiles[deletedProfileIndex].id
      : profiles[profiles.length - 1].id;

    setSelectedProfileId(newSelectedProfileId);
    setProfileList(profiles);
    setDeleteMsgState(!deleteMsgState);
  };

  const renameProfile = (e) => {
    const profileIndex = profileList.findIndex((p) => {
      return p.id === selectedProfileId;
    });
    const profile = {
      ...profileList[profileIndex],
    };
    profile.name = e.target.value;
    console.log(profile.name);

    const newProfileList = [...profileList];
    newProfileList[profileIndex] = profile;
    console.log(newProfileList);
    setProfileList(newProfileList);
  };

  const duplicateProfile = () => {
    let name = getNameSelectedProfile();
    let open = name.lastIndexOf("(");
    let close = name.lastIndexOf(")");
    let dupCounter = 0;

    if (open > 0 && close > 0 && close > open) {
      dupCounter = parseInt(name.substring(open + 1, close)) + 1;
      name = name.substring(0, open);
    } else {
      dupCounter = 1;
    }

    name = name + " (" + dupCounter + ")";

    const duplicateProfile = {
      id: latestId + 1,
      name: name,
      //  duplicateProIndex === 1
      //     ? getNameSelectedProfile() + " (" + duplicateProIndex + ")"
      //     : getNameSelectedProfile().slice(0, -4) +
      //       " (" +
      //       duplicateProIndex +
      //       ")",
    };
    console.log(getNameSelectedProfile());
    setDuplicateProIndex(duplicateProIndex + 1);
    setProfileList([...profileList, duplicateProfile]);
    setSelectedProfileId(duplicateProfile.id);
    setLatestId(latestId + 1);
  };

  const checkProfileListLengthMin = () => {
    if (profileList.length === 1) return true;
    return false;
  };

  const ref = useRef();

  HandleClickOutside(ref, () => {
    setStatus(false);
  });

  return (
    <>
      <RenameBar
        value={getNameSelectedProfile()}
        isShow={renameBarState}
        onChange={renameProfile}
        clickOutside={() => setRenameBarState(false)}
      />
      <div className={styles.dropdown_area} onClick={toggleDropdown} ref={ref}>
        <div
          className={[
            styles.s3_dropdown,
            status ? styles.expand : "",
            checkProfileListLengthMin() ? styles.disabled : "",
          ].join(" ")}
        >
          <div className={styles.selected}>{getNameSelectedProfile()}</div>
          <div
            className={status ? styles.expand_icon_down : styles.expand_icon_up}
          />
        </div>
        <div
          className={[
            styles.s3_options,
            styles.flex,
            status ? styles.expand_opt : "",
          ].join(" ")}
        >
          {renderProfile()}
        </div>
      </div>

      <Dot
        isActive={dotState}
        toggleDot={toggleDot}
        addProfile={addProfile}
        renameProfile={() => setRenameBarState(true)}
        duplicateProfile={duplicateProfile}
        showDeleteMsg={showDeleteMsg}
        clickOutside={() => setDotState(false)}
        disabledDelAction={checkProfileListLengthMin()}
      />
      <DeleteAlert
        show={deleteMsgState}
        confirmDelete={deleteProfile}
        clickOutside={() => setDeleteMsgState(false)}
      />
    </>
  );
};

export default Dropdown;
