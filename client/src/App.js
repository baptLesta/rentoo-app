import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Dashboard from './containers/dashboard/DashboardContainer';
import store from './store/store';

class App extends Component {
  componentDidMount() {
    fetch('/api/player/')
      .then(res => res.json())
      .then(res => console.log('Don\'t look at my code 😈' ));
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </div>
    );
  }
}

export default App;
