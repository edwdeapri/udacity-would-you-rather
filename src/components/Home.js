import React, { Component } from 'react';
import { connect } from 'react-redux';

import Poll from './Poll';

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Your Timeline</h3>
        <ul>
          {this.props.questionIds.map(id => (
            <li key={id}>
              <Poll id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}
export default connect(mapStateToProps)(Home);
