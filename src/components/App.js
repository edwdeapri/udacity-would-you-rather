import React, { Component } from "react";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return <div>This is the App wrapper</div>;
  }
}

export default connect()(App);
