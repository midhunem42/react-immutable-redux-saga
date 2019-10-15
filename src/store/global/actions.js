import { SET_USER_ID } from "./constants";

export const setUserId = id => {
  return {
    type: SET_USER_ID,
    payload: id
  };
};
