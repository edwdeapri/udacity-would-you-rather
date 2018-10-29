import { saveQuestionAnswer, saveQuestion } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const RETURN_ANSWER = 'RETURN_ANSWER';
export const RETURN_QUESTION = 'RETURN_QUESTION';

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function returnAnswer(authedUser, qid, answer) {
  return {
    type: RETURN_ANSWER,
    authedUser,
    qid,
    answer
  };
}

function returnQuestion(question) {
  return {
    type: RETURN_QUESTION,
    question
  };
}

export function handleReturnAnswer(qid, answer) {
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

export function handleReturnQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => dispatch(returnQuestion(question)));
  };
}
