import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PollPreview from './PollPreview';

class PollPreviewList extends Component {
  state = {
    tab: 'unanswered'
  };

  handleTabs = event => {
    this.setState({
      tab: event.target.value
    });
  };

  render() {
    const { tab } = this.state;
    const { unansweredIds, answeredIds } = this.props;
    return (
      <div>
        <div>
          <button value="unanswered" onClick={this.handleTabs}>
            Unanswered
          </button>
          <button value="answered" onClick={this.handleTabs}>
            Answered
          </button>
        </div>
        <ul>
          {tab === 'unanswered'
            ? unansweredIds.map(id => (
                <li key={id}>
                  <Link to={`/questions/${id}`}>
                    <PollPreview id={id} />
                  </Link>
                </li>
              ))
            : answeredIds.map(id => (
                <li key={id}>
                  <Link to={`/questions/${id}`}>
                    <PollPreview id={id} />
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    );
  }
}

export default PollPreviewList;
