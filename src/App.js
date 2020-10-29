import React from 'react';
import NavBar from './components/navbar'
import Home from './components/home'
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <Home/>
      </div>
    )
  }
}

export default connect()(App);
