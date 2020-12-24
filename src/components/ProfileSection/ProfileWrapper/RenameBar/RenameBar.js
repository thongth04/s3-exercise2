import React, { useRef } from "react";
import styles from "./RenameBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { CLICK_OUTSIDE_EDIT, editProfile } from "../../../../store/actions";
import { HandleClickOutside } from "../../../../helpers/utils";

const RenameBar = () => {
  const activeProfile = useSelector((state) => state.data.activeProfile);
  const renameBarState = useSelector((state) => state.toolbar.renameBarState);
  const profileList = useSelector((state) => state.data.profiles);
  const currentIndex = profileList.findIndex(
    (profile) => profile.id === activeProfile.id
  );

  const dispatch = useDispatch();
  const handleClickOutside = () => {
    dispatch({ type: CLICK_OUTSIDE_EDIT });
  };

  const ref = useRef();
  HandleClickOutside(ref, (event) => handleClickOutside(event));

  const handleOnChange = (e) => {
    let name = e.target.value;
    dispatch(editProfile(name));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0)
      dispatch({ type: CLICK_OUTSIDE_EDIT });
  };

  return (
    <input
      className={
        styles.profile_item + " " + (renameBarState ? styles.show : "")
      }
      placeholder="Enter Profile Name"
      maxLength={25}
      style={{ top: currentIndex * 30 }}
      value={activeProfile.name}
      onChange={(e) => handleOnChange(e)}
      onKeyPress={(e) => handleEnter(e)}
      ref={ref}
    />
  );
};

export default RenameBar;
