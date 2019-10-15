import { SET_USER_ID } from "./constants";
import { fromJS } from "immutable";
/*
 * Details reducer
-----------------------------------------------------------------------------------------
Programmer  Date               in Ver.    Changes    
-----------------------------------------------------------------------------------------   
Midhun     21/03/2019          v.0.0      Details for sidebar status
Midhun     24/03/2019          v.0.0      Saving Store id
-----------------------------------------------------------------------------------------
*/

/*
 * Initial state
 * Author : Midhun E M
 * Date : 21th Mar 2019
 */
const initialDetails = fromJS({
  userId: ""
});

/*
 * if action type is SET_USER_ID ,
 * Then set the userId of the user
 * Author : Midhun E M
 * Date : 21th Mar 2019
 */
const detailsReducer = (state = initialDetails, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return state.set("userId", action.payload);
    default:
      break;
  }
  return state;
};

export default detailsReducer;
