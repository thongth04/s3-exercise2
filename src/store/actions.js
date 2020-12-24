export const SET_DATA = "SET_DATA";
export const TOGGLE_ACTIVE = "TOGGLE_ACTIVE";
export const TOGGLE_EDIT = "TOGGLE_EDIT";
export const TOGGLE_DELETE = "TOGGLE_DELETE";
export const ADD_PROFILE = "ADD_PROFILE";
export const DEL_PROFILE = "DEL_PROFILE";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const MOVE_PROFILE = "MOVE_PROFILE";
export const CLICK_OUTSIDE_DEL = "CLICK_OUTSIDE_DEL";
export const CLICK_OUTSIDE_EDIT = "CLICK_OUTSIDE_EDIT";

export const setData = (data) => {
  return { type: SET_DATA, data: data };
};

export const toggleActive = (id) => {
  return { type: TOGGLE_ACTIVE, profileId: id };
};

export const toggleDelete = () => {
  return { type: TOGGLE_DELETE };
};

export const toggleEdit = () => {
  return { type: TOGGLE_EDIT };
};

export const addProfile = () => {
  return { type: ADD_PROFILE };
};

export const delProfile = () => {
  return { type: DEL_PROFILE };
};

export const editProfile = (name) => {
  return { type: EDIT_PROFILE, editedName: name };
};

export const moveProfile = (direction) => {
  return { type: MOVE_PROFILE, direction: direction };
};
