import { saveQuestionAnswer, saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RETURN_ANSWER = "RETURN_ANSWER";
export const RETURN_QUESTION = "RETURN_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function returnAnswer(authedUser, qid, answer) {
  return {
    type: RETURN_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function returnQuestion(question) {
  return {
    type: RETURN_QUESTION,
    question
  };
}

export function handleReturnAnswer(authedUser, qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(returnAnswer(authedUser, qid, answer));
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer
    });
  };
}

export function handleReturnQuestion(optionOne, optionTwo, authedUser) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    }).then(question => dispatch(returnQuestion(question)));
  };
}
