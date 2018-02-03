import React, { Component } from 'react';
import Counter from './components/Counter/';
import UserCount from './components/UserCount/';

import { connect } from "redux-zero/react";

import './App.css';
import './lib/socketEvents';

class App extends Component {
  render() {
    const { count, countByUser } = this.props;
    return (
      <div className="App">
        <div className="App-main-block">
          <Counter count={count} />
        </div>
        <div className="App-secondary-block">
          <UserCount countByUser={countByUser} />
        </div>
      </div>
    );
  }
}

const mapToProps = ({ count, countByUser }) => ({ count, countByUser });

export default connect(mapToProps)(App);
