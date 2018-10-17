import { showLoading, hideLoading } from "react-redux-loading";

import { setAuthedUser } from "../actions/authedUser";
import { receiveQuestions } from "../actions/questions";
import { receiveUsers } from "../actions/users";
import { getInitialData } from "../utils/api";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
