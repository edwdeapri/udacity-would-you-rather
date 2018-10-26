import React, { Component } from 'react';
import { connect } from 'react-redux';

import { handleReturnAnswer, handleReturnQuestion } from '../actions/questions';
import NewPoll from './NewPoll';
import PollResult from './PollResult';
import PollWaiting from './PollWaiting';

class PollPreview extends Component {
  state = {
    selectedAnswer: '',
    answerOne: '',
    answerTwo: ''
  };

  _questionsIndex() {
    const { id, questions } = this.props;
    const question = questions[id];
    return (
      <div>
        <p>{question['optionOne']['text']}</p>
        <span> or </span>
        <p>{question['optionTwo']['text']}</p>
      </div>
    );
  }

  handleAnswerChange = event => {
    event.preventDefault();
    const selectedAnswer = event.target.value;
    const { dispatch, id } = this.props;
    dispatch(handleReturnAnswer(id, selectedAnswer));
    this.setState({
      selectedAnswer
    });
  };

  handleNewPoll = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmitPoll = event => {
    event.preventDefault();
    const { answerOne, answerTwo } = this.state;
    this.props.dispatch(handleReturnQuestion(answerOne, answerTwo));
    this.setState({
      answerOne: '',
      answerTwo: ''
    });
    this.props.history.push('/questions');
  };

  render() {
    const { id, users, questions, answered, authedUser } = this.props;
    const { answerOne, answerTwo } = this.state;
    const question = questions[id];
    const location = window.location.pathname;
    const type = location.split('/').slice(-1)[0];
    return (
      <div className={`question ${type === 'add' ? 'new-question' : null}`}>
        <div>
          <img
            src="{question
            ? users[question.author].avatarURL
            : users[authedUser].avatarURL}"
          />
        </div>
        <div>
          <h2>
            {question ? users[question.author].name : users[authedUser].name}{' '}
            Wants to Know...
          </h2>
          <h3>Would you rather...</h3>
          {type === 'questions' ? (
            this._questionsIndex()
          ) : type === id ? (
            answered === false ? (
              <PollWaiting
                handleAnswerChange={this.handleAnswerChange}
                question={question}
              />
            ) : (
              <PollResult answered={answered} id={id} />
            )
          ) : type === 'add' ? (
            <NewPoll
              handleNewPoll={this.handleNewPoll}
              answerOne={answerOne}
              answerTwo={answerTwo}
            />
          ) : null}
        </div>
        {question ? (
          <div>
            <p className="votes">
              {question.optionOne.votes.length +
                question.optionTwo.votes.length}{' '}
              Votes
            </p>
          </div>
        ) : (
          <div>
            <button
              type="submit"
              disabled={!answerOne || !answerTwo}
              onClick={this.handleSubmitPoll}>
              Ask Now!
            </button>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  };
}

export default connect(mapStateToProps)(PollPreview);
