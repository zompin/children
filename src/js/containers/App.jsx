import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route, withRouter } from 'react-router';
import Test from '../components/Test';
import Child from '../components/Child';

class App extends Component {
  render() {
    return (
      <div>
        <Test>
          <Child a="aaaa" />
        </Test>
      </div>
    );
  }
}

export default withRouter(hot(App));
