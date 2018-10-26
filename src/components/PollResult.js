import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PollResult extends Component {
  render() {
    const { answered, users, authedUser, id, questions } = this.props;
    const question = questions[id];

    let option = answered ? users[authedUser].answers[id] : null;

    const answerPercentage =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    let answerOnePercentage =
      (question.optionOne.votes.length / answerPercentage) * 100;
    let answerTwoPercentage =
      (question.optionTwo.votes.length / answerPercentage) * 100;

    if (answerOnePercentage - answerTwoPercentage === -100) {
      answerOnePercentage = 20;
      answerTwoPercentage = 80;
    } else if (answerTwoPercentage - answerOnePercentage === -100) {
      answerOnePercentage = 80;
      answerTwoPercentage = 20;
    }

    return (
      <div>
        <div>
          <div>
            <p>
              {question['optionOne']['text']} -{' '}
              {(
                (question.optionOne.votes.length / answerPercentage) *
                100
              ).toFixed()}%
            </p>
            <p>({question.optionOne.votes.length} Votes)</p>
          </div>
          <div>
            <p>
              {question['answerTwo']['text']} -{' '}
              {(
                (question.optionTwo.votes.length / answerPercentage) *
                100
              ).toFixed()}%
            </p>
            <p>({question.optionTwo.votes.length} Votes)</p>
          </div>
        </div>
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

export default connect(mapStateToProps)(PollResult);
