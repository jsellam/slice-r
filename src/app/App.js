import React, { Component } from 'react';
import Hello from './components/Hello/Hello'
import AppRouter from './AppRouter'

class App extends Component {
  render() {
    return (
        <AppRouter />
    );
  }
}

export default App;