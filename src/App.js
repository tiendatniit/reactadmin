import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import   "./layout/layout.css";

import Layout from "./layout/layout.js"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout> </Layout>
      </div>
    );
  }
}

export default App;
