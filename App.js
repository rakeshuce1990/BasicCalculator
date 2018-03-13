import React, { Component } from 'react';
import store from './store';
import Main from './screens/main';
import { Provider } from 'react-redux';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
          <Provider store={store}>
            <Main />
          </Provider>
    );
  }
}
