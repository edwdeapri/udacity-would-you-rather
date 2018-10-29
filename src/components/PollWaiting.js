import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PollWaiting = props => {
  const { question } = props;
  return (
    <div>
      <form>
        <button onClick={props.handleAnswerChange} value="optionOne">
          {question['optionOne']['text']}
        </button>
        <button onClick={props.handleAnswerChange} value="optionTwo">
          {question['optionTwo']['text']}
        </button>
      </form>
    </div>
  );
};

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  };
}

export default connect(mapStateToProps)(PollWaiting);
