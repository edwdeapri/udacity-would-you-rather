import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setAuthedUser } from '../actions/authedUser';

class Header extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
    this.props.history.push('/');
  };

  render() {
    const { authedUser, users } = this.props;
    return (
      <div>
        <h1>Hey {users[authedUser].name}!</h1>
        <button>
          <a onClick={this.handleLogout}>Logout</a>
        </button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}
export default withRouter(connect(mapStateToProps)(Header));
