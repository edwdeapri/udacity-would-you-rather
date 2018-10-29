import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PollResult extends Component {
  render() {
    const { answered, users, authedUser, id, questions } = this.props;
    const question = questions[id];

    let option = answered ? users[authedUser].answers[id] : null;

    const answerPercentage =
      question.optionOne.votes.length + question.optionTwo.votes.length;
    let optionOnePercentage =
      (question.optionOne.votes.length / answerPercentage) * 100;
    let optionTwoPercentage =
      (question.optionTwo.votes.length / answerPercentage) * 100;

    if (optionOnePercentage - optionTwoPercentage === -100) {
      optionOnePercentage = 20;
      optionTwoPercentage = 80;
    } else if (optionTwoPercentage - optionOnePercentage === -100) {
      optionOnePercentage = 80;
      optionTwoPercentage = 20;
    }

    return (
      <div>
        <div>
          <div>
            <p>
              {question["optionOne"]["text"]} -{" "}
              {(
                (question.optionOne.votes.length / answerPercentage) *
                100
              ).toFixed()}%
            </p>
            <p>({question.optionOne.votes.length} Votes)</p>
          </div>
          <div>
            <p>
              {question["optionTwo"]["text"]} -{" "}
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
