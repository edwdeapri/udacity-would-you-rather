import React, { Component } from 'react';
import { connect } from 'react-redux';

class Poll extends Component {
  handleLike = e => {
    e.preventDefault();
  };
  toParent = (e, id) => {
    e.preventDefault();
  };
  render() {
    const { poll } = this.props;

    if (poll === null) {
      return <p>This Poll doesn't exist</p>;
    }
    const { name, avatar, answerA, answerB } = poll;
    return (
      <div>
        <div>
          <img src={avatar} alt={`Avatar of ${name}`} />
          <span>{name}</span>
        </div>
        <h2>Would You Rather...</h2>
        <div>
          <h3>Wants to Know</h3>
          <div>
            <p>{answerA}</p>
            <p>{answerB}</p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const poll = questions[id];
  return {
    authedUser,
    poll: poll
      ? formatPoll(poll, users[poll.author], authedUser, parentPoll)
      : null
  };
}

export default connect(mapStateToProps)(Poll);
