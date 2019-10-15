import { put, takeEvery, select, call } from "redux-saga/effects";
import { SET_USER_ID } from "./constants";
import Api from "../../api";
import { ApiConstants } from "../../api/Apiconstants";

function* setUserId(action) {
  const state = yield select(state => state);
  /*
   * Getting token from auth Reducer
   */
  // const token = state.auth.token;

  try {
    /*
     * loader started
     */
    const response = yield call(
      Api,
      ApiConstants.SET_USER_ID,
      { uid: 0 },
      "POST",
      null
    );
    console.log(response);
    /*
     * loader stops
     */
  } catch (error) {
    /*
     * Signup Failed ,saving error Message and user logined status
     */
    // yield put(apiCallFailed(error.message));
    console.log(error);
  }
}
/*
 * middleware for global function
 * Author : Midhun E M
 * Date : 22th Mar 2019
 */
function* globalSaga() {
  /*
   * if action type RESET_ALL, resetAll will be executed
   * if action type RESET_DATA, resetData will be executed
   */
  yield takeEvery(SET_USER_ID, setUserId);
}
export default globalSaga;
