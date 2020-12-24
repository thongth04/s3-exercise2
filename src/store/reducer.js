import { combineReducers, createStore } from "redux";
import * as actionTypes from "./actions";
import { v1 as uuidv1 } from "uuid";

const updateLocalStorage = (data) => {
  const nameKey = "profiles";
  localStorage.setItem(nameKey, JSON.stringify(data));
};

const profileInitialState = {
  profiles: [],
  activeProfile: { id: 1, name: "Default", type: "default", editable: false },
};

const profileReducer = (state = profileInitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA: {
      updateLocalStorage(action.data);
      return { ...state, profiles: action.data };
    }

    case actionTypes.TOGGLE_ACTIVE: {
      let index = state.profiles.findIndex(
        (profile) => profile.id === action.profileId
      );
      return {
        ...state,
        activeProfile: {
          ...state.activeProfile,
          id: action.profileId,
          name: state.profiles[index].name,
          type: state.profiles[index].type,
          editable: state.profiles[index].editable || false,
        },
      };
    }

    case actionTypes.ADD_PROFILE: {
      const id = uuidv1();
      const name = "New Profile";
      const type = "custom";
      const editable = true;
      const data = [...state.profiles, { id, name, type, editable }];

      updateLocalStorage(data);

      return {
        ...state,
        profiles: data,
        activeProfile: { id, name, type, editable },
      };
    }

    case actionTypes.DEL_PROFILE: {
      let deletedId;
      const profiles = [...state.profiles].filter((profile, index) => {
        if (profile.id === state.activeProfile.id) deletedId = index;
        return profile.id !== state.activeProfile.id;
      });

      updateLocalStorage(profiles);

      return {
        ...state,
        profiles: profiles,
        activeProfile: { ...state.profiles[deletedId - 1] },
      };
    }

    case actionTypes.EDIT_PROFILE: {
      const profiles = state.profiles.map((profile) => {
        if (profile.id === state.activeProfile.id) {
          return { ...profile, name: action.editedName };
        }
        return profile;
      });

      updateLocalStorage(profiles);

      return {
        ...state,
        profiles: profiles,
        activeProfile: { ...state.activeProfile, name: action.editedName },
      };
    }

    // direction:  1(moveDown)  -1(moveUp)
    case actionTypes.MOVE_PROFILE: {
      let currentIndex = state.profiles.findIndex(
        (profile) => profile.id === state.activeProfile.id
      );
      const profileList = [...state.profiles];

      let temp = profileList[currentIndex];
      profileList[currentIndex] = profileList[currentIndex + action.direction];
      profileList[currentIndex + action.direction] = temp;

      updateLocalStorage(profileList);

      return {
        ...state,
        profiles: profileList,
        activeProfile: { ...profileList[currentIndex + action.direction] },
      };
    }

    default:
      return state;
  }
};

const toolbarInitialState = {
  msgBoxState: false,
  renameBarState: false,
};

const toolbarReducer = (state = toolbarInitialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DELETE:
      return { ...state, msgBoxState: !state.msgBoxState };

    case actionTypes.TOGGLE_EDIT:
      return { ...state, renameBarState: !state.renameBarState };

    case actionTypes.CLICK_OUTSIDE_DEL:
      return { ...state, msgBoxState: false };

    case actionTypes.CLICK_OUTSIDE_EDIT:
      return { ...state, renameBarState: false };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  data: profileReducer,
  toolbar: toolbarReducer,
});

const store = createStore(rootReducer);

export { store, profileReducer, toolbarReducer };
