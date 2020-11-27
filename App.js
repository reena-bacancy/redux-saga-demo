import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Counter from './src/screens/Counter';
import { store } from './src/redux/store';

export default class App extends Component {
  render() {
      return (
          <Provider store={store}>
              <Counter />
          </Provider>
      );
  }
}
