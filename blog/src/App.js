import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const style = {
      backgroundColor : 'black',
      padding : '16px',
      color: 'white',
      fontSize: '25px' 
   
    };


    return (
      <div style = {style}>
          리엑트 테스트
       </div>
    );
  }
}

export default App;
