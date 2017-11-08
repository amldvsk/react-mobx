import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes} from './routes/app';
import { Provider } from 'mobx-react';
import LabelsStore from './store/labels';

class App extends Component {
  render() {
    return (
      <Provider LabelsStore={LabelsStore}>
        <div className="App container">
        <Routes/>
        </div>
      </Provider>
    );
  }
}

export default App;
