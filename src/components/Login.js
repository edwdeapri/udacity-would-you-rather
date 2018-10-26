import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  handleAuthedUser = id => {
    const { from } = this.props.location.state || {
      from: { pathname: '/questions' }
    };
    this.props.dispatch(setAuthedUser(id));
    this.props.history.push(from);
  };

  render() {
    const { userIds, users } = this.props;

    return (
      <div>
        <h2>Welcome to...</h2>
        <h3>Would You Rather...</h3>
        <h4>Select User</h4>
        {userIds.map(user => (
          <button key={user} onClick={() => this.handleAuthedUser(user)}>
            {users[user].name}
          </button>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
    users
  };
}

export default connect(mapStateToProps)(Login);
